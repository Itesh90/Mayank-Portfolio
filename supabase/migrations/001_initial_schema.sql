-- supabase/migrations/001_initial_schema.sql
--
-- Initial schema for the portfolio site.
--
-- Tables:
--   projects, project_images, project_videos,
--   about_content, skills, stats, contact_messages
--
-- All tables have RLS enabled. Public-read policies are added below; write
-- policies for authenticated admins are added in a later migration (Task 6).

-- =============================================================================
-- Projects
-- =============================================================================
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('character', 'props', 'comics', 'figures', 'sketchbook')),
  featured BOOLEAN DEFAULT FALSE,
  year INTEGER,
  tools TEXT[] DEFAULT '{}',
  link TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================================================
-- Project images (CASCADE delete with parent project)
-- =============================================================================
CREATE TABLE project_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  public_id TEXT NOT NULL,
  url TEXT NOT NULL,
  width INTEGER,
  height INTEGER,
  alt TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================================================
-- Project videos (CASCADE delete with parent project)
-- =============================================================================
CREATE TABLE project_videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  public_id TEXT NOT NULL,
  url TEXT NOT NULL,
  duration INTEGER,
  thumbnail TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================================================
-- About content (singleton-style)
-- =============================================================================
CREATE TABLE about_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  bio TEXT NOT NULL,
  short_bio TEXT NOT NULL,
  location TEXT,
  years_experience INTEGER,
  email TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================================================
-- Skills (proficiency normalized 0..1)
-- =============================================================================
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  icon TEXT,
  proficiency NUMERIC(3,2) CHECK (proficiency >= 0 AND proficiency <= 1),
  category TEXT CHECK (category IN ('technical', 'creative', 'soft')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================================================
-- Stats
-- =============================================================================
CREATE TABLE stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================================================
-- Contact messages (public insert, authenticated read)
-- =============================================================================
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- =============================================================================
-- Indexes for common query patterns
-- =============================================================================
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_projects_year ON projects(year);
CREATE INDEX idx_project_images_project_id ON project_images(project_id);
CREATE INDEX idx_project_videos_project_id ON project_videos(project_id);
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- =============================================================================
-- Enable Row Level Security on all tables
-- =============================================================================
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- =============================================================================
-- RLS policies: public read access to portfolio content
-- =============================================================================
CREATE POLICY "Projects are publicly readable" ON projects FOR SELECT USING (TRUE);
CREATE POLICY "Project images are publicly readable" ON project_images FOR SELECT USING (TRUE);
CREATE POLICY "Project videos are publicly readable" ON project_videos FOR SELECT USING (TRUE);
CREATE POLICY "About content is publicly readable" ON about_content FOR SELECT USING (TRUE);
CREATE POLICY "Skills are publicly readable" ON skills FOR SELECT USING (TRUE);
CREATE POLICY "Stats are publicly readable" ON stats FOR SELECT USING (TRUE);

-- =============================================================================
-- RLS policies: contact messages
--   - anyone may INSERT (public contact form)
--   - only authenticated users (admins) may SELECT (inbox)
-- =============================================================================
CREATE POLICY "Anyone can create contact messages" ON contact_messages FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Only authenticated users can read contact messages" ON contact_messages FOR SELECT USING (auth.role() = 'authenticated');
