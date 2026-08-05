import { Space_Grotesk, Archivo_Black } from "next/font/google";

// Space Grotesk is the app's own typeface. Keeping it here means the page and
// the product read as the same object rather than a page about a product.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
});

// Archivo Black carries the display voice. Broad and flat-shouldered, like the
// ghost, and institutional enough to sound like evidence rather than
// advertising. One weight is all a display face needs here.
const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo",
});

export const metadata = {
  title: "Shadow: the only opponent is last week's you",
  description:
    "Shadow is a computer-vision workout tracker. It watches your set through your phone camera, counts the reps itself, and puts this week beside last week.",
};

export default function ShadowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${spaceGrotesk.variable} ${archivo.variable} sh-root`}>
      <style>{`
        /* The portfolio's own chrome does not belong on this sub-site. */
        body::after { display: none !important; }
        body {
          font-family: var(--font-grotesk), system-ui, sans-serif !important;
          background: #0D1117 !important;
          color: #E8EFF8 !important;
        }

        /* ── Tokens, lifted from the app's design system ─────────────── */
        .sh-root {
          --sh-void:      #080B10;
          --sh-bg:        #0D1117;
          --sh-card:      #111827;
          --sh-input:     #0F1923;

          --sh-blue:      #3A7BD5;
          --sh-blue-lit:  #5BA3F5;
          --sh-blue-low:  #1A3A6B;

          /* avatarUnformed. On this page it means "your shadow", everywhere. */
          --sh-slate:     #6B7688;

          --sh-text:      #E8EFF8;
          --sh-muted:     #4A6080;

          --sh-line:      rgba(58, 123, 213, 0.14);
          --sh-line-lit:  rgba(58, 123, 213, 0.34);
          --sh-slate-line: rgba(107, 118, 136, 0.22);

          --sh-mono: var(--font-mono), ui-monospace, monospace;
          --sh-display: var(--font-archivo), var(--font-grotesk), sans-serif;

          color: var(--sh-text);
          background:
            radial-gradient(120% 60% at 50% -10%, rgba(58,123,213,0.10), transparent 62%),
            linear-gradient(180deg, var(--sh-void) 0%, var(--sh-bg) 34%, var(--sh-bg) 100%);
        }

        .sh-root ::selection { background: rgba(58,123,213,0.32); color: #fff; }

        .sh-root :focus-visible {
          outline: 2px solid var(--sh-blue-lit);
          outline-offset: 3px;
          border-radius: 4px;
        }

        /* ── Type roles ──────────────────────────────────────────────── */
        .sh-root .sh-display {
          font-family: var(--sh-display);
          font-weight: 400; /* Archivo Black ships one weight. Never synthesise. */
          letter-spacing: -0.005em;
          line-height: 0.96;
          text-transform: uppercase;
          text-wrap: balance;
        }

        .sh-root .sh-eyebrow {
          font-family: var(--sh-mono);
          font-size: 0.6875rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--sh-blue);
        }

        .sh-root .sh-mono {
          font-family: var(--sh-mono);
          font-variant-numeric: tabular-nums;
        }

        .sh-root .sh-prose { max-width: 63ch; }
        .sh-root .sh-prose p { line-height: 1.68; color: #A9B6C9; }

        /* ── Structure ───────────────────────────────────────────────── */
        .sh-root .sh-rule {
          border: 0;
          border-top: 1px solid var(--sh-line);
          position: relative;
        }
        .sh-root .sh-rule::before {
          content: "";
          position: absolute;
          top: -1px; left: 0;
          width: 34px;
          border-top: 1px solid var(--sh-blue);
        }

        .sh-root .sh-card {
          background: var(--sh-card);
          border: 1px solid var(--sh-line);
          border-radius: 16px;
        }

        .sh-root .sh-link {
          color: var(--sh-blue-lit);
          text-decoration: none;
          border-bottom: 1px solid rgba(91,163,245,0.35);
          transition: border-color 160ms ease, color 160ms ease;
        }
        .sh-root .sh-link:hover { color: #8CC0FF; border-bottom-color: #8CC0FF; }

        /* The lit ghost's bloom, matching the app's ShadowGlow. */
        @keyframes sh-breathe {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%      { opacity: 0.85; transform: scale(1.06); }
        }
        .sh-root .sh-bloom { animation: sh-breathe 5.5s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .sh-root *, .sh-root *::before, .sh-root *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }

        /* Heavy display type needs a touch more air at small sizes. */
        @media (max-width: 620px) {
          .sh-root .sh-display { letter-spacing: 0; line-height: 1.0; }
        }
      `}</style>
      {children}
    </div>
  );
}
