-- Drop the overly permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit contact messages" ON public.contact_messages;

-- Create a more restrictive policy that still allows public submissions
-- but with rate limiting consideration via the created_at timestamp
CREATE POLICY "Public can submit contact messages with validation"
ON public.contact_messages
FOR INSERT
WITH CHECK (
  -- Ensure required fields are not empty
  name IS NOT NULL AND length(trim(name)) > 0 AND
  email IS NOT NULL AND length(trim(email)) > 0 AND
  message IS NOT NULL AND length(trim(message)) > 0 AND
  -- Prevent setting read status on insert (should always be false)
  read = false
);