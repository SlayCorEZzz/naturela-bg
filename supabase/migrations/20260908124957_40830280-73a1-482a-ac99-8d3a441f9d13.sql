CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  email_sent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_messages TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON public.contact_messages FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(trim(name)) BETWEEN 1 AND 100
    AND length(trim(email)) BETWEEN 3 AND 255
    AND length(trim(message)) BETWEEN 1 AND 2000
    AND (phone IS NULL OR length(phone) <= 40)
    AND (subject IS NULL OR length(subject) <= 150)
    AND status = 'new'
    AND email_sent = false
  );

CREATE POLICY "Authenticated users can read contact messages"
  ON public.contact_messages FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact messages"
  ON public.contact_messages FOR UPDATE TO authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "Authenticated users can delete contact messages"
  ON public.contact_messages FOR DELETE TO authenticated
  USING (true);

CREATE INDEX contact_messages_created_at_idx ON public.contact_messages (created_at DESC);