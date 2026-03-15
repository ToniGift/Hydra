-- Hydra leads table: quote submissions from the website
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  country TEXT NOT NULL,
  project_type TEXT NOT NULL,
  pipe_type TEXT NOT NULL,
  diameter_range TEXT,
  quantity_m TEXT,
  deadline TEXT,
  project_description TEXT,
  file_url TEXT,
  contact_preference TEXT DEFAULT 'email',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'won', 'lost')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: allow anonymous inserts (for quote form)
CREATE POLICY "Allow anonymous insert" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Policy: allow service role full access (for dashboard)
CREATE POLICY "Service role full access" ON leads
  FOR ALL
  USING (auth.role() = 'service_role');

-- clients table for Phase 2 CRM
CREATE TABLE IF NOT EXISTS clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  contact_name TEXT,
  country TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
