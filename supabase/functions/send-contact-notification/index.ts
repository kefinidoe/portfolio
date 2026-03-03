import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const ALLOWED_ORIGINS = [
  "https://kelvin-kimani.lovable.app",
  "https://kelvinkimani.com",
  "http://localhost:5173",
  "http://localhost:8080",
];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin");
  return {
    // This allows any origin to talk to your function while developing
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}
interface ContactNotificationRequest {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot field
  _ts?: number; // form load timestamp for timing check
}

interface ValidationResult {
  valid: boolean;
  error?: string;
}

function validateInput(data: ContactNotificationRequest): ValidationResult {
  // Honeypot check - bots fill hidden fields
  if (data.website && data.website.trim().length > 0) {
    return { valid: false, error: "Spam detected" };
  }

  // Timing check - bots submit too fast (under 3 seconds)
  if (data._ts && Date.now() - data._ts < 3000) {
    return { valid: false, error: "Submission too fast" };
  }

  // Name validation
  if (!data.name || data.name.trim().length === 0) {
    return { valid: false, error: "Name is required" };
  }
  if (data.name.length > 100) {
    return { valid: false, error: "Name too long (max 100 characters)" };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    return { valid: false, error: "Valid email is required" };
  }
  if (data.email.length > 254) {
    return { valid: false, error: "Email too long" };
  }

  // Message validation
  if (!data.message || data.message.trim().length === 0) {
    return { valid: false, error: "Message is required" };
  }
  if (data.message.length > 5000) {
    return { valid: false, error: "Message too long (max 5000 characters)" };
  }

  return { valid: true };
}

function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Simple in-memory IP rate limiter (resets on cold start, but provides basic protection)
const ipRequestLog = new Map<string, number[]>();
const IP_RATE_LIMIT = 5; // max requests per hour per IP
const IP_RATE_WINDOW = 3600000; // 1 hour in ms

function isIpRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequestLog.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < IP_RATE_WINDOW);
  ipRequestLog.set(ip, recent);
  if (recent.length >= IP_RATE_LIMIT) {
    return true;
  }
  recent.push(now);
  ipRequestLog.set(ip, recent);
  return false;
}

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = getCorsHeaders(req);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // IP-based rate limiting
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";

    if (isIpRateLimited(clientIp)) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email, message, website }: ContactNotificationRequest = await req.json();

    // Validate input (includes honeypot check)
    const validation = validateInput({ name, email, message, website });
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Rate limiting: Check recent submissions from this email
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const oneHourAgo = new Date(Date.now() - 3600000).toISOString();
    const { data: recentMessages, error: rateCheckError } = await supabase
      .from("contact_messages")
      .select("created_at")
      .eq("email", email.trim().toLowerCase())
      .gte("created_at", oneHourAgo);

    if (!rateCheckError && recentMessages && recentMessages.length >= 3) {
      return new Response(
        JSON.stringify({ error: "Too many submissions. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sanitize inputs for HTML email
    const safeName = sanitizeHtml(name.trim());
    const safeEmail = sanitizeHtml(email.trim());
    const safeMessage = sanitizeHtml(message.trim());

    // Send notification to Kelvin
    const notificationResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["kelvinmwangi1744@gmail.com"],
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">New Contact Form Submission</h1>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          </div>
          
          <div style="background-color: #fff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #374151;">Message:</h3>
            <p style="color: #4b5563; line-height: 1.6;">${safeMessage}</p>
          </div>
          
          <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    // Send confirmation to the person who contacted
    const confirmationResponse = await resend.emails.send({
      from: "Kelvin Kimani <onboarding@resend.dev>",
      to: [safeEmail],
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f97316;">Thank you for contacting me, ${safeName}!</h1>
          
          <p style="color: #4b5563; line-height: 1.6;">
            I've received your message and will get back to you within 24 hours.
          </p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Your message:</h3>
            <p style="color: #4b5563; line-height: 1.6;">${safeMessage}</p>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            In the meantime, feel free to check out my work at <a href="https://kelvin-kimani.lovable.app" style="color: #f97316;">my portfolio</a>.
          </p>
          
          <p style="color: #4b5563;">
            Best regards,<br>
            <strong>Kelvin Kimani</strong><br>
            Frontend Developer
          </p>
        </div>
      `,
    });

    console.log("Notification sent:", notificationResponse);
    console.log("Confirmation sent:", confirmationResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    const corsHeaders = getCorsHeaders(req);
    console.error("Error in smooth-task function:", {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });
    
    return new Response(
      JSON.stringify({ 
        error: "Failed to send notification. Please try again or contact me directly." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
