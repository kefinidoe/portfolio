import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kelvinmwangi1744@gmail.com",
    href: "mailto:kelvinmwangi1744@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 759 809 502",
    href: "tel:+254759809502",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nakuru, Kenya",
    href: null,
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/kefinidoe", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kelvin-kimani-9b10822b4/", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/254759809502", label: "WhatsApp" },
  { icon: Facebook, href: "https://www.facebook.com/kelvinowens.mwangi", label: "Facebook" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formLoadedAt] = useState(() => Date.now());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot field for bot detection
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Anti-bot: reject if form submitted in under 3 seconds
    const elapsed = Date.now() - formLoadedAt;
    if (elapsed < 3000) {
      toast({
        title: "Please slow down",
        description: "Please take a moment before submitting.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Save message to database
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });

      if (error) throw error;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('smooth-task', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          website: formData.website,
          _ts: formLoadedAt,
        },
      });

      if (emailError) {
        console.error('Email notification failed:', emailError);
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      setFormData({ name: "", email: "", message: "", website: "" });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 hero-gradient" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-display font-medium mb-3 tracking-wider uppercase text-sm">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Contact Kelvin Kimani:{" "}
            <span className="text-gradient">Let's Build Together</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Whether you're starting from scratch or redesigning your brand, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary" aria-hidden="true">
                    <item.icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/50 text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-primary-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-primary-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-primary-foreground/50 text-sm mb-4">Follow me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary hover:border-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="mt-10 p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                💡 <strong className="text-primary-foreground">Expect a personal response within 24 hours.</strong> I'm excited to discuss how we can bring your vision to life.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users, bots fill it */}
              <div className="absolute opacity-0 -z-10" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-foreground/70 mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary h-12"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-foreground/70 mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-foreground/70 mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
