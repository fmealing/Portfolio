import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

// IBM Plex Mono — the only font on the site.
// Weight contrast (300 body vs 600 display) does all the typographic work.
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Florian Mealing",
  description:
    "MEng Mechatronics & Robotics Engineering — University of Birmingham. Embedded systems, robotics, and full-stack development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body
        className="font-mono antialiased"
        style={{ background: "var(--bg)", color: "var(--cream)" }}
      >
        {children}
        <GoogleAnalytics gaId="G-GL67M4KBHW" />
      </body>
    </html>
  );
}
