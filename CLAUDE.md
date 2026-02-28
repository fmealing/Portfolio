# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000 (Turbopack)
npm run build    # Production build + TypeScript check
npm run lint     # ESLint (Next.js core-web-vitals + TypeScript rules)
```

There are no tests in this project.

## Architecture

Single-page portfolio built with Next.js 16 App Router, TypeScript, Tailwind CSS, and Framer Motion.

**Page composition** — `app/page.tsx` is a server component that imports and renders all sections in order: `Navigation → Hero → About → Projects → Skills → Experience → Contact`. Each section is a self-contained client component (`"use client"`) in `app/components/`.

**Animations** — All scroll-triggered animations use Framer Motion's `whileInView` + `viewport={{ once: true }}` pattern. The Hero section runs a canvas-based particle network via `useEffect`/`useRef`. No animation utilities or wrappers are shared across components.

**Styling** — Tailwind with two CSS font variables: `--font-display` → Instrument Serif (italic only, for hero name and pullquotes), `--font-mono` → IBM Plex Mono (the global body font — the entire site is monospaced). Both loaded via `next/font/google` in `layout.tsx`. Tailwind's `font-sans` and `font-mono` both resolve to `--font-mono`; `font-display` is the only serif class. Reusable CSS classes live in `globals.css`: `dot-grid`, `rule`, `label`, `proj-row`, `skill-item`, `contact-link`. Prefer CSS variables (`var(--gold)`, `var(--cream-dim)`, etc.) over Tailwind color utilities for consistency.

**Color palette** — All tokens are CSS variables defined in `globals.css :root`. Warm near-black `#0b0900` (`--bg`) and `#111009` (`--surface`) alternate between sections for visual rhythm. Aged brass `#c4a84a` (`--gold`) is the sole accent. Text uses warm cream `#ede4cb` (`--cream`) / `#9a8d77` (`--cream-dim`) / `#4f4739` (`--cream-muted`). Borders use `rgba(196,168,74,0.1)` at rest and `rgba(196,168,74,0.28)` on hover.

**Content** — All CV data (projects, skills, experience, modules) is hardcoded as typed arrays/objects at the top of each component file. To update content, edit the data arrays directly in the relevant component — there is no CMS or data layer.

**Images** — Remote images from `storage.googleapis.com/syncmove/**` are whitelisted in `next.config.ts`. No other remote image hosts are configured.

**Unused legacy files** — `app/components/` still contains old freelance-era components (`Portfolio.tsx`, `Pricing.tsx`, `WhatIDo.tsx`, `WhyWorkWithMe.tsx`, `DotNav.tsx`, `SectionWrapper.tsx`, `SectionTitle.tsx`) and `app/projects/` contains old project sub-pages. None of these are imported by `page.tsx` and can be deleted if desired.

<frontend_aesthetics>
You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:

Typography: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.

Color & Theme: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.

Motion: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.

Backgrounds: Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.

Avoid generic AI-generated aesthetics:

- Overused font families (Inter, Roboto, Arial, system fonts)
- Clichéd color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. Vary between light and dark themes, different fonts, different aesthetics. You still tend to converge on common choices (Space Grotesk, for example) across generations. Avoid this: it is critical that you think outside the box!
</frontend_aesthetics>
