# Hydra Webapp

Pre-insulated piping solutions for Europe. Built with Next.js 14, Supabase, and Resend.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (for server-side) |
| `RESEND_API_KEY` | Resend API key for transactional email |
| `RESEND_FROM_EMAIL` | Sender email (e.g. `Hydra <hello@hydra-pipes.com>`) |
| `HYDRA_NOTIFICATION_EMAIL` | Email to receive lead/contact notifications |

### 3. Supabase database

Run the migration in your Supabase project:

```bash
# Using Supabase CLI (if installed)
supabase db push

# Or run the SQL manually in Supabase Dashboard > SQL Editor
# Copy contents of supabase/migrations/001_initial_schema.sql
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploy to Vercel:

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

## Pages

- **/** — Homepage with hero image, trust signals, markets
- **/about** — About Us: Hydra story, team photos, company details
- **/products** — Product catalog with images (PEX, geothermal, brass, accessories)
- **/quote** — Quote request form (saves to Supabase, sends emails)
- **/contact** — Company details, contact form, WhatsApp, LinkedIn

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (database)
- Resend (email)
