import type { Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";

// Space Grotesk is the app's own typeface. Keeping it here means the page and
// the product read as the same object rather than a page about a product.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
});

// DM Sans is the quiet voice: the credit line, and nothing louder than that.
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm",
});

export const metadata = {
  title: "Shadow: get workout insights",
  description:
    "Shadow is a smart gym screen that counts your reps and shows your range of motion and fatigue after every set. Sign up for early access.",
};

// The sign-up action waits on Google Apps Script, which is slow when cold.
// Seconds; must stay above the fetch timeout in actions.ts.
export const maxDuration = 30;

export const viewport: Viewport = {
  themeColor: "#F5F7FB",
};

export default function ShadowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${spaceGrotesk.variable} ${dmSans.variable} sh-root`}>
      <style>{`
        /* The portfolio's own chrome does not belong on this sub-site. */
        body::after { display: none !important; }
        html { background: #F5F7FB !important; }
        body {
          background: #F5F7FB !important;
          color: #333333 !important;
        }
        ::-webkit-scrollbar-track { background: #F5F7FB; }
        ::-webkit-scrollbar-thumb { background: #CBD3DF; }

        /* ── Tokens, lifted from the station's light UI ──────────────── */
        .sh-root {
          --sh-bg:          #F5F7FB;
          --sh-surface:     #FFFFFF;

          /* The ghost and the wordmark. */
          --sh-blue:        #3A7BD5;
          --sh-blue-deep:   #2E62AA;
          /* The one thing on the page you are meant to press. */
          --sh-action:      #437EF5;
          --sh-action-deep: #2F6AE4;

          --sh-ink:         #333333;
          --sh-muted:       #64748B;
          --sh-placeholder: #8A94A6;
          --sh-line:        #D5DCE6;
          --sh-error:       #C2412D;

          /* Control sizes are tokens so the form's footprint can be worked out. */
          --sh-field-h: 3.375rem;
          --sh-cta-h:   3.5rem;
          --sh-gap:     0.625rem;

          --sh-mono: var(--font-mono), ui-monospace, monospace;
          --sh-quiet: var(--font-dm), var(--font-grotesk), sans-serif;

          /* Set here, not on body: the font variables only exist from this
             element down. */
          font-family: var(--font-grotesk), system-ui, sans-serif;
          font-weight: 400;
          color: var(--sh-ink);
          background: var(--sh-bg);
        }

        .sh-root ::selection { background: rgba(67,126,245,0.22); }

        .sh-root :focus-visible {
          outline: 2px solid var(--sh-action);
          outline-offset: 3px;
          border-radius: 4px;
        }

        /* ── Type roles ──────────────────────────────────────────────── */
        .sh-root .sh-display {
          font-weight: 700;
          line-height: 0.965;
          color: var(--sh-ink);
        }

        .sh-root .sh-eyebrow {
          font-family: var(--sh-mono);
          font-weight: 400;
          text-transform: uppercase;
        }

        .sh-root .sh-quiet { font-family: var(--sh-quiet); }

        /* ── Sign-up controls ────────────────────────────────────────── */
        .sh-root .sh-field {
          width: 100%;
          height: var(--sh-field-h);
          padding: 0 1.1875rem;
          font-size: 1.0625rem;
          color: var(--sh-ink);
          background: var(--sh-surface);
          border: 1px solid var(--sh-line);
          border-radius: 16px;
          outline: none;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }
        .sh-root .sh-field::placeholder { color: var(--sh-placeholder); opacity: 1; }
        .sh-root .sh-field:hover { border-color: #BCC6D4; }
        .sh-root .sh-field:focus-visible {
          border-color: var(--sh-action);
          border-radius: 16px;
          box-shadow: 0 0 0 4px rgba(67,126,245,0.16);
        }
        .sh-root .sh-field[aria-invalid="true"] { border-color: var(--sh-error); }
        .sh-root .sh-field[aria-invalid="true"]:focus-visible {
          box-shadow: 0 0 0 4px rgba(194,65,45,0.14);
        }

        .sh-root .sh-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          width: 100%;
          height: var(--sh-cta-h);
          font-size: 1.125rem;
          font-weight: 700;
          color: #fff;
          background: var(--sh-action);
          border-radius: 16px;
          transition: background-color 160ms ease, transform 160ms ease;
        }
        .sh-root .sh-cta:hover { background: var(--sh-action-deep); }
        .sh-root .sh-cta:active { transform: scale(0.985); }
        .sh-root .sh-cta:focus-visible { border-radius: 16px; }
        .sh-root .sh-cta:disabled { cursor: progress; background: var(--sh-action); opacity: 0.72; }
        .sh-root .sh-cta svg { transition: transform 200ms ease; }
        .sh-root .sh-cta:hover:not(:disabled) svg { transform: translateX(4px); }

        @media (min-width: 1024px) {
          .sh-root .sh-eyebrow { letter-spacing: 0.01em; }
          .sh-root { --sh-field-h: 3.5625rem; --sh-cta-h: 3.75rem; }
        }

        /* Where the hero is vertically centred, hold the form's footprint at
           its resting size. Feedback under a field then pushes the rest of
           the form down instead of re-centring the whole column. */
        @media (min-width: 1024px) and (min-height: 700px) {
          .sh-root .sh-form-box {
            height: calc(var(--sh-field-h) * 2 + var(--sh-cta-h) + var(--sh-gap) * 2);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sh-root *, .sh-root *::before, .sh-root *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
      {children}
    </div>
  );
}
