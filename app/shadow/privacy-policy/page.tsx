export const metadata = {
  title: "Privacy Policy — Shadow",
  description:
    "Shadow's gym screen stores and transmits no data. The only data we hold is the early-access sign-up list.",
};

const summary: string[] = [
  "The Shadow screen in the gym stores no data and sends no data anywhere.",
  "It has no accounts, no logins, and no app to install.",
  "The only personal data we hold is the early-access sign-up list from this website: an email address or Instagram handle, and optionally a gym name.",
  "We do not sell, share, or advertise with any of it.",
];

const sections: { heading: string; body: string }[] = [
  {
    heading: "1. Who we are",
    body: "Shadow is a smart screen for the gym floor that counts reps and shows range of motion and fatigue after each set. Shadow is run by Florian Mealing and is operated from the United Kingdom. This policy is written to meet UK GDPR requirements. For any privacy question, email mealinglabs@gmail.com.\n\nThis policy covers two things: the Shadow screen installed in a gym (section 2), and the early-access sign-up form on this website (section 3).",
  },
  {
    heading: "2. The Shadow screen in your gym",
    body: "The screen stores no data and transmits no data. Concretely:\n\nNothing is recorded. No video, images, or audio are saved, and there is no workout history, profile, or member record of any kind.\n\nNothing is sent. The screen does not upload, stream, or share anything with us, the gym, or any third party, and it needs no account or sign-in from gym members.\n\nNothing identifies anyone. The screen does not identify who is exercising. Whatever it works out while you train, such as your rep count, is shown to you on the screen and is gone when the set ends or the screen is reset.\n\nBecause the screen holds no personal data, there is nothing for a gym member to access, correct, or delete, and nothing for the gym to manage, back up, or secure on our behalf.",
  },
  {
    heading: "3. The early-access sign-up form",
    body: "This website has one form, the early-access sign-up. It is the only place we collect personal data.\n\nWhat you give us: an email address or Instagram handle (required, so we can reply), and optionally the name of your gym and city.\n\nWhat is added automatically: the date and time of the sign-up, whether your contact was an email or Instagram handle, and a short tag showing which link you came from (for example, a particular Instagram post), so we know which outreach works.\n\nWe do not collect your name, your location, payment details, or any workout or camera data through this form.",
  },
  {
    heading: "4. How we use sign-up data",
    body: "Only to get in touch about Shadow: to tell you when early access opens, and to reply if you asked about bringing Shadow to a gym. The source tag is used only to see which links people came from.\n\nWe do not sell your data, use it for advertising, build profiles from it, or share it with anyone except the service providers in section 5.",
  },
  {
    heading: "5. Where sign-up data is stored",
    body: "Sign-ups are written to a private Google Sheet that only the Shadow operator can open. The website passes each sign-up to the Sheet through a Google Apps Script, so Google acts as our processor for this list and does not use it for its own purposes. The link that writes to the Sheet is kept secret on our server and is never exposed to your browser.\n\nThe website itself is hosted by a standard web hosting provider, which, like any host, may keep ordinary technical server logs (such as IP address and time of request) for security and reliability. We do not use advertising trackers or sell analytics on this site.\n\nWe do not transfer sign-up data anywhere else. Where Google processes data outside the UK, it relies on the safeguards required by UK GDPR.",
  },
  {
    heading: "6. How long we keep it",
    body: "We keep sign-up data only while it is useful for contacting you about Shadow, and delete it when early access has ended or when you ask, whichever comes first. If you ask us to remove you, we delete your row from the Sheet.",
  },
  {
    heading: "7. Legal basis",
    body: "We process sign-up data because you asked us to contact you, which is your consent, given when you submit the form. You can withdraw it at any time by emailing us. For basic site security we rely on legitimate interest.",
  },
  {
    heading: "8. Your rights",
    body: "Under UK GDPR you can ask to see the data we hold about you, correct it, delete it, receive a copy, object to or restrict its use, and withdraw consent at any time. Email mealinglabs@gmail.com and we will respond within one month. You also have the right to complain to the Information Commissioner's Office (ico.org.uk).",
  },
  {
    heading: "9. For gyms and studios",
    body: "If you are considering Shadow for your premises: the screen collects, stores, and transmits no personal data, so it does not make you a data controller for anything it does, and you have no member data to disclose, consent to gather, or secure because of it. If you sign up with your gym's name, that falls under section 3 like any other sign-up. If you have a data protection or insurance questionnaire you need answered, email mealinglabs@gmail.com.",
  },
  {
    heading: "10. Children",
    body: "The sign-up form is for adults and is not directed at children under 16. If you believe a child has submitted their details, email us and we will delete them.",
  },
  {
    heading: "11. Changes to this policy",
    body: "If we change how we handle data in any material way, for example by adding a feature to the screen that stores or sends anything, we will update this page before it takes effect. The effective date at the top shows when this policy last changed.",
  },
];

export default function ShadowPrivacyPolicyPage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden text-[var(--sh-ink)]"
      style={{ fontFamily: "var(--font-grotesk), 'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-2xl mx-auto px-6 py-14">
        <a
          href="/shadow"
          className="text-[var(--sh-muted)] text-xs tracking-wide hover:text-[var(--sh-blue)] transition-colors"
        >
          &larr; Shadow
        </a>

        <h1 className="mt-6 text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--sh-ink)]">
          Privacy Policy
        </h1>
        <p className="mt-2 text-[var(--sh-muted)] text-sm">Effective 16 October 2026</p>

        <div className="mt-8 rounded-xl border border-[var(--sh-line)] px-5 py-4">
          <p className="text-[var(--sh-ink)] text-sm font-semibold tracking-tight mb-2">
            The short version
          </p>
          <ul className="flex flex-col gap-1.5 list-disc pl-5">
            {summary.map((line) => (
              <li key={line} className="text-[#4B5768] text-sm leading-relaxed">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-[var(--sh-ink)] text-base font-semibold tracking-tight mb-2">
                {section.heading}
              </h2>
              {section.body.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[#4B5768] text-sm leading-relaxed mb-3 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>

      <footer className="text-center py-6 px-6 text-[var(--sh-muted)] text-xs tracking-wide border-t border-[var(--sh-line)]">
        Built in public by Florian Mealing
      </footer>
    </main>
  );
}
