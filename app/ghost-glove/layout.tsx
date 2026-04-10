import { Space_Grotesk, Space_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "Ghost Glove — Progress you can see.",
  description:
    "A smart gym glove that automatically counts reps, tracks intensity, and monitors form. Race your past self.",
};

const GhostGloveLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      {children}
    </div>
  );
};

export default GhostGloveLayout;
