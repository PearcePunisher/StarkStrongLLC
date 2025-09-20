# Stark Strong LLC Website

Modern, mobile-first marketing site for Stark Strong LLC (Colorado Springs) offering junk removal, hauling, recycling and house cleaning services.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ESLint + Prettier

## Quick Start
```bash
# Use Node version from .nvmrc
nvm use
npm install
npm run dev
```
Visit http://localhost:3000

## Environment
Currently no environment variables required. Add integrations (email, CRM, analytics) as needed.

## Structure
```
app/                # App Router pages
components/         # UI components
lib/seo.tsx         # Metadata & JSON-LD helpers
data/               # (future) structured content
styles/globals.css  # Tailwind base styles
```

## SEO
- LocalBusiness schema injected globally
- Service pages with keyword rich descriptions
- Titles include core services & geography

## Lead Form
POST /api/lead (placeholder). Extend to send email, store in DB or push to CRM.

## Customization
- Replace placeholder phone numbers & domain in `lib/seo.tsx`, `SiteFooter`, `ContactPage`
- Add real OG image & favicon assets in `public/`
- Adjust hours, areas and services arrays

## Deployment
Recommended: Vercel (zero config). Ensure domain + OG assets updated.

## License
Proprietary - All rights reserved.
