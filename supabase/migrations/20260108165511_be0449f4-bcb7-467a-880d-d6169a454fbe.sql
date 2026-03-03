-- Add UPDATE policy for authenticated users to mark messages as read
CREATE POLICY "Authenticated users can update messages"
ON public.contact_messages
FOR UPDATE
USING (auth.uid() IS NOT NULL)
WITH CHECK (auth.uid() IS NOT NULL);

-- Add DELETE policy for authenticated users
CREATE POLICY "Authenticated users can delete messages"
ON public.contact_messages
FOR DELETE
USING (auth.uid() IS NOT NULL);