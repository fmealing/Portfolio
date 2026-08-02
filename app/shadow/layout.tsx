import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
});

export const metadata = {
  title: "Shadow — Race your past self.",
  description:
    "Your biggest competition is who you were last month. Shadow tracks your progress so you always know if you're beating yourself.",
};

export default function ShadowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={spaceGrotesk.variable}>
      <style>{`
        body::after { display: none !important; }
        body {
          font-family: var(--font-grotesk), 'Space Grotesk', sans-serif !important;
          background: #0D1117 !important;
          color: #E1E2EA !important;
        }
      `}</style>
      {children}
    </div>
  );
}
