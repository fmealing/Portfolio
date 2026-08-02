export const metadata = {
  title: "Privacy Policy — Shadow",
  description: "How Shadow collects, uses, and protects your data.",
};

const sections: { heading: string; body: string }[] = [
  {
    heading: "1. Who we are",
    body: "Shadow is a computer-vision workout tracker. This policy explains what personal data we collect, why, and what rights you have over it. The data controller is the operator of Shadow, contactable at florianmealing@gmail.com. Shadow is operated from the United Kingdom and this policy is written to meet UK GDPR requirements.",
  },
  {
    heading: "2. What we collect",
    body: "Account data: your name, email address, and Google account identifier, received from Google when you sign in. Google Sign-In is the only sign-in method.\n\nProfile data: your training goal, preferred units, and weekly training schedule, provided by you during onboarding or on the profile screen.\n\nWorkout data: exercises performed, sets, rep counts, rep timing, range of motion, intensity and fatigue scores, and the weekly “shadow” comparison metrics derived from them.\n\nCamera data: while you track a set, the camera feed is analysed on your device to estimate your body pose (the positions of joints such as knees, hips, and shoulders). The set is also recorded as video. Pose estimation itself runs entirely on your phone; no live camera feed is streamed to us.",
  },
  {
    heading: "3. Body-pose data is sensitive",
    body: "Video of you exercising and frame-by-frame body-pose data relate to your physical characteristics and behaviour. We treat this data as sensitive and process it only with your explicit consent, given when you accept this policy during onboarding, and only for the purposes below. You can withdraw consent at any time by deleting your account, which stops further collection and removes your identifiable data. Anonymised pose data you already contributed (section 6) can no longer be linked to you, so it cannot be individually retrieved or withdrawn.",
  },
  {
    heading: "4. How we use your data",
    body: "To provide the service: counting reps, scoring intensity, generating skeleton-overlay videos, and comparing this week's performance against your own past performance (your “shadow”).\n\nTo improve tracking quality during the pilot: reviewing stored pose data to diagnose and fix tracking errors.\n\nTo develop the rep-counting algorithm: the core goal of the pilot is making rep detection accurate. We store the anonymised body-pose data from your sets (numeric joint coordinates only, no video and no name) together with the rep count you confirm on the set summary, and use it to build and evaluate the algorithm. This dataset is not linked to your identity.\n\nWe do not sell your data, use it for advertising, or share it with third parties except the service providers listed below.",
  },
  {
    heading: "5. Where your data is stored",
    body: "Workout metrics and profile data are stored in our database, hosted by Railway (application hosting) and Neon (Postgres database). The anonymised pose-landmark data is uploaded to object storage hosted by Cloudflare (R2), under a random research identifier that is not your name or account. Google processes your sign-in. These providers act as processors on our behalf and do not use your data for their own purposes.\n\nYour set video is not uploaded. It stays on your device and is deleted when you leave the set review screen, unless you choose to save it to your own gallery, which stays under your control. The local pose-data file is deleted from your device once its anonymised copy has been uploaded.",
  },
  {
    heading: "6. How long we keep it",
    body: "During the pilot we retain your identifiable data (account, profile, and workout history) for as long as your account exists, because the product's core purpose is comparing you against your own history. When you delete your account, your account record, profile, and workout data are permanently deleted, and any set videos on your device are removed with the app's data.\n\nThe one exception is the anonymised pose-landmark data described in section 4. Because it carries no name, no video, and only a random research identifier, it is no longer personal data once your account is gone, and we retain it to keep developing the rep-counting algorithm. We will revisit all retention before the app scales beyond the pilot.",
  },
  {
    heading: "7. Legal bases",
    body: "We process account, profile, and workout metric data because it is necessary to provide the service you signed up for (contract). We process body-pose data on the basis of your explicit consent, including its use to develop the rep-counting algorithm. Once that pose data has been anonymised it is no longer personal data and falls outside these bases. We rely on legitimate interest for basic service security and debugging.",
  },
  {
    heading: "8. Your rights",
    body: "Under UK GDPR you have the right to access your data, correct it, delete it, receive a copy of it in a portable format, restrict or object to processing, and withdraw consent at any time. Account deletion is available directly in the app from the profile screen. For anything else, email florianmealing@gmail.com and we will respond within one month. You also have the right to complain to the Information Commissioner's Office (ico.org.uk).",
  },
  {
    heading: "9. Children",
    body: "Shadow is not for children under 16. Onboarding requires you to confirm you are 16 or older before continuing, and we delete any account we discover belongs to someone under that age.",
  },
  {
    heading: "10. Changes to this policy",
    body: "If we change how we handle your data in any material way, we will tell you in the app and ask for fresh consent where the law requires it. The effective date at the top shows when this policy last changed.",
  },
];

export default function ShadowPrivacyPolicyPage() {
  return (
    <main
      className="min-h-screen bg-[#0D1117] text-white overflow-x-hidden"
      style={{ fontFamily: "var(--font-grotesk), 'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-2xl mx-auto px-6 py-14">
        <a
          href="/shadow"
          className="text-[#5E7A94] text-xs tracking-wide hover:text-[#3A7BD5] transition-colors"
        >
          &larr; Shadow
        </a>

        <h1 className="mt-6 text-2xl md:text-3xl font-extrabold tracking-tight text-white">
          Privacy Policy
        </h1>
        <p className="mt-2 text-[#5E7A94] text-sm">Effective 25 July 2026</p>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-[#E1E2EA] text-base font-semibold tracking-tight mb-2">
                {section.heading}
              </h2>
              {section.body.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[#8B9BB0] text-sm leading-relaxed font-light mb-3 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>

      <footer className="text-center py-6 px-6 text-[#3D526A] text-xs tracking-wide border-t border-white/[0.04]">
        Built in public by Florian Mealing
      </footer>
    </main>
  );
}
