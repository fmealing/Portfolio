import "./globals.css";
import { Instrument_Serif, IBM_Plex_Mono } from "next/font/google";

// Instrument Serif — used ONLY for the hero name and pullquotes.
// The italic contrast against mono body is the entire typographic concept.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

// IBM Plex Mono — global body font. Every word on the site is monospaced.
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Florian Mealing",
  description:
    "MEng Engineering student at the University of Birmingham — embedded systems, robotics, and full-stack development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-mono antialiased" style={{ background: "var(--bg)", color: "var(--cream)" }}>
        {children}
      </body>
    </html>
  );
}
