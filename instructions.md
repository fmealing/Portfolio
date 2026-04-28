# Ghost Glove — QR Code Landing Pages Spec
## For Claude Code

---

## Overview

Three landing pages sit at:
- `florianmealing.com/competing-against-yourself`
- `florianmealing.com/intensity`
- `florianmealing.com/form-and-injury`

Each page is reached by someone who scanned a QR code from a gym poster. They've already self-selected — the headline resonated with them. The job of the page is to:

1. Confirm they were right to scan it (validate the tension the poster created)
2. Explain what Ghost Glove actually is, in plain terms
3. Get them to leave their email

There is no hard sell. No pricing. No app store link. This is pure demand validation — we want to know which pain point gets the most conversions, and collect a list of people who genuinely care.

**Track which page each signup came from** — this is the whole point of having three separate URLs.

---

## Technical Constraints

- These are static pages added to an existing Next.js site at `florianmealing.com`
- Each page is a self-contained route file
- No backend required — use a simple form service 
- Add a `utm_source` or path identifier in the hidden form field so signups are tagged by poster variant
- Mobile-first — most visitors will be on phone (they just scanned a QR code)
- Dark theme to match poster aesthetic: near-black background `#111310`, electric green accent `#39FF6A`, white text
- Font: use a condensed/bold display font for headlines (e.g. `Barlow Condensed`, `Anton`, or `Bebas Neue` — load from Google Fonts). Body text in a clean sans-serif like `DM Sans` or `Sora`

---

## Shared Structure (all three pages)

Every page follows the same skeleton. The only things that change per-page are: headline, hook copy, body explanation angle, and the hidden form field value.

```
[HOOK SECTION]
  - Big bold headline (mirrors the poster's emotional angle)
  - 2–3 sentence hook that expands the tension

[PRODUCT EXPLANATION]
  - "Here's what Ghost Glove is" — in plain language
  - 3 bullet points or short paragraphs, max
  - One line: "Built by an engineer who lifts."

[SIGNUP FORM]
  - Email field
  - Submit button ("I want early access" or "Count me in")
  - Hidden field: variant = "competing-against-yourself" | "intensity" | "form-and-injury"
  - Microcopy under button: "No spam. Just updates when it's ready."

[FOOTER / MINIMAL BRAND]
  - Ghost Glove wordmark or logo (text is fine)
  - Link back to florianmealing.com (optional, subtle)
```

---

## Page 1 — `/competing-against-yourself`

**Poster angle**: The only competition that matters is last week's you.

**Hook headline** (large, bold, all-caps or near-caps):
> YOUR ONLY OPPONENT IS LAST WEEK'S YOU.

**Hook copy** (2–3 sentences, white, smaller):
> Most gym tracking compares you to averages, leaderboards, and other people's PRs. None of that tells you if *you're* actually getting better. Ghost Glove tracks your past self — and puts it right in front of you.

**Product explanation** (plain language, 3 short points):
- Ghost Glove is a sensor glove that records your reps — weight, speed, grip consistency — every session.
- After each session, it generates your "ghost": a data replay of how you performed last week.
- Next session, you compete against that ghost. Stronger. More consistent. More intense. That's the only race worth running.

**CTA copy**: "I want early access"

**Signup microcopy**: "No spam. Just a message when Ghost Glove is ready."

---

## Page 2 — `/intensity`

**Poster angle**: You think you're pushing yourself. Are you sure?

**Hook headline**:
> YOU THINK YOU'RE WORKING HARD. THE DATA MIGHT DISAGREE.

**Hook copy**:
> Perceived effort is unreliable. Most people think they gave 8/10 when the numbers say 6. Ghost Glove measures actual output — rep speed, load, and consistency — so you stop guessing and start knowing.

**Product explanation**:
- Ghost Glove captures rep velocity, grip force, and movement consistency in real time.
- It tells you when you're actually pushing your limits versus when you've settled into comfortable repetition.
- Session over session, you can see whether your intensity is genuinely building — or plateauing without you noticing.

**CTA copy**: "Show me my actual effort"

**Signup microcopy**: "No spam. Just updates when Ghost Glove launches."

---

## Page 3 — `/form-and-injury`

**Poster angle**: Most injuries don't happen suddenly. They build quietly, rep by rep.

**Hook headline**:
> BY THE TIME YOU FEEL IT, THE DAMAGE IS ALREADY DONE.

**Hook copy**:
> Most lifting injuries aren't accidents. They're the result of small, invisible errors — a slightly off hip angle, an inconsistent grip — repeated hundreds of times. Ghost Glove catches those patterns before your body does.

**Product explanation**:
- Ghost Glove tracks movement consistency across reps and sessions, flagging when your form starts to drift.
- It builds a pattern over time, so you can see exactly when fatigue starts compromising your mechanics.
- Not a replacement for a coach — but the closest thing to having one with you every single session.

**CTA copy**: "I want to lift safer"

**Signup microcopy**: "No spam. Just a message when Ghost Glove is ready."

---

## Visual Design Direction

All three pages share the same visual language. This should feel like a natural extension of the posters — not a corporate product page.

- **Background**: `#111310` (near-black with very slight green warmth)
- **Accent**: `#39FF6A` (electric green) — used sparingly: CTA button, a single underline or highlight, maybe a thin horizontal rule
- **Text**: White (`#FFFFFF`) for headlines and body; `#888` for microcopy
- **Headline font**: Barlow Condensed ExtraBold or Anton (Google Fonts, free) — heavy, condensed, all-caps feel matching the posters
- **Body font**: DM Sans or Sora — clean, modern, readable on mobile
- **CTA button**: Solid `#39FF6A` background, black text, no border-radius or very slight (4px max). Feels physical and direct, not soft
- **Layout**: Single column, mobile-first. Maximum content width ~600px centered. Generous vertical spacing between sections
- **No images needed** — the poster already did that job. Text and spacing carry the page
- **No navigation bar** — the page should feel like a focused destination, not a website with menus

---

## Form Handling

Use **Formspree** (free tier is fine for validation):
- Create one Formspree form
- Add a hidden field `variant` with the page-specific value
- Formspree dashboard will show which variant each email came from
- Alternatively, create three separate Formspree forms (one per page) for cleaner analytics

Hidden field example:
```html
<input type="hidden" name="variant" value="competing-against-yourself" />
<input type="hidden" name="_subject" value="Ghost Glove interest: competing-against-yourself" />
```

---

## Success State

After form submission:
- No redirect — replace the form inline with a short confirmation message
- Copy: "You're on the list. We'll reach out when Ghost Glove is ready."
- Keep it low-key and genuine. No confetti. No "Welcome to the family!" cringe.

---

## Analytics (optional but recommended)

Add a simple `<script>` to each page that logs which page was visited, using Plausible or Fathom (both privacy-friendly, free tiers available, easy to add). This gives you page view counts per variant even from people who don't sign up — useful for calculating conversion rate per poster.

Or just use Vercel Analytics if the site is hosted on Vercel (it's built in).

---

## What NOT to build

- No pricing page
- No feature comparison table
- No testimonials (there are none yet)
- No app screenshots (the product isn't there yet)
- No social proof widgets
- No cookie banner (keep it simple)
- No chat widget

The whole point is minimal friction. One message, one form, one button.

---

## File Structure (if Next.js)

```
pages/
  competing-against-yourself.tsx  (or .jsx)
  intensity.tsx
  form-and-injury.tsx

components/
  LandingPage.tsx  (shared layout component, takes props for headline/copy/variant)
```

Or if using a single shared component with per-page props, even cleaner:

```tsx
// competing-against-yourself.tsx
import LandingPage from '../components/LandingPage'

export default function CompetingAgainstYourself() {
  return (
    <LandingPage
      variant="competing-against-yourself"
      headline="YOUR ONLY OPPONENT IS LAST WEEK'S YOU."
      hook="Most gym tracking compares you to averages..."
      ctaText="I want early access"
    />
  )
}
```

---

## Summary

Three pages, one shared component, one Formspree endpoint with hidden variant fields. Dark, direct, no fluff. Mobile-first because QR codes. Electric green accent, heavy condensed headline font, minimal layout.

The only metric that matters right now: email signups per page. That tells you which poster — and which pain point — actually lands.