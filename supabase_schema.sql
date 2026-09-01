-- =================================================================
-- TOHFA Bespoke Gifting - Supabase Database Schema
-- =================================================================
-- Instructions:
-- 1. Go to your Supabase Project Dashboard (https://supabase.com/dashboard)
-- 2. Click "SQL Editor" on the left sidebar
-- 3. Paste all the SQL queries below and click "Run" (green button)
-- =================================================================

-- 1. Create the enquiries table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id TEXT PRIMARY KEY,
  reference_number TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  number_of_boxes INTEGER DEFAULT 1,
  delivery_location TEXT,
  preferred_delivery_date TEXT,
  additional_requirements TEXT,
  selected_products JSONB DEFAULT '[]'::jsonb,
  box_style TEXT,
  status TEXT DEFAULT 'New',
  admin_notes TEXT DEFAULT '',
  estimated_value TEXT DEFAULT 'Custom Quote',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- 3. Allow public inserts (so customers on the website can submit enquiries)
CREATE POLICY "Allow public insert to enquiries" 
  ON public.enquiries 
  FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);

-- 4. Allow public / authenticated selects (so admin portal can load enquiries)
CREATE POLICY "Allow public select from enquiries" 
  ON public.enquiries 
  FOR SELECT 
  TO anon, authenticated 
  USING (true);

-- 5. Allow updates (so admin portal can change status and add notes)
CREATE POLICY "Allow public update to enquiries" 
  ON public.enquiries 
  FOR UPDATE 
  TO anon, authenticated 
  USING (true)
  WITH CHECK (true);

-- 6. Enable Realtime Replication for the enquiries table
ALTER PUBLICATION supabase_realtime ADD TABLE public.enquiries;
