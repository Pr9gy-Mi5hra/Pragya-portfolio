# Pragya Mishra — MERN Stack Developer Portfolio

A premium, recruiter-focused developer portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed for Vercel deployment with SEO optimization and accessibility best practices.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Features

- Premium dark theme with animated gradients and glow effects
- Hero section with typing animation
- Animated timeline for experience
- Interactive categorized skills
- Premium project cards with tilt effect
- Scroll progress indicator & back-to-top button
- Loading animation & page transitions
- SEO metadata, Open Graph, Twitter cards
- Dynamic `robots.txt` and `sitemap.xml`
- Mobile-first responsive design
- Accessibility compliant (ARIA labels, focus states, semantic HTML)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts & global UI
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Global styles & Tailwind
│   ├── loading.tsx         # Route loading state
│   ├── robots.ts           # Dynamic robots.txt
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── animations/         # Framer Motion wrappers
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Reusable UI components
├── sections/               # Page sections (Hero, About, etc.)
├── data/
│   └── portfolio.ts        # All portfolio content
├── lib/
│   ├── metadata.ts         # SEO metadata config
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript interfaces
```

## Updating Content

All portfolio data lives in `data/portfolio.ts`. Update experience, projects, skills, and personal info there.

To add a resume download button, place your PDF at `public/resume.pdf` and add a CTA in `sections/Hero.tsx`.

To add education, populate the `education` array in `data/portfolio.ts`.

## Deploy to Vercel

1. Push the repository to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no extra configuration needed
4. Update `siteConfig.url` in `data/portfolio.ts` with your production domain

### Environment Variables

No environment variables are required for the base portfolio.

## Performance

Optimized for Lighthouse scores:

- Font display swap via `next/font`
- Passive scroll listeners
- Viewport-once animations
- Minimal client-side JavaScript
- Semantic HTML for SEO

## License

Private portfolio — all rights reserved.
