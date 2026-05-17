"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const FORMSPREE = "https://formspree.io/f/mvzdepaa";

export default function GhostPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "err">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post(
        FORMSPREE,
        { email, variant: "ghost-app", _subject: "Ghost App: Early Access" },
        { headers: { Accept: "application/json" } },
      );
      setStatus("done");
    } catch {
      setStatus("err");
    }
  }

  return (
    <main
      className="min-h-screen bg-[#0D1117] text-white overflow-x-hidden flex flex-col"
      style={{ fontFamily: "var(--font-grotesk), 'Space Grotesk', sans-serif" }}
    >
      {/* Header */}
      <header className="flex flex-col items-center pt-10 pb-4 gap-1 shrink-0">
        <div className="flex items-center gap-3">
          <img
            src="/images/ghost/Ghost.svg"
            alt="Ghost"
            className="w-7 h-[30px]"
          />
          <span className="text-[#E1E2EA] text-xl font-bold tracking-tight">
            Ghost
          </span>
        </div>
        <span className="text-[10px] tracking-[0.22em] text-[#3D526A] uppercase">
          By Mealing Labs
        </span>
      </header>

      {/* Hero — stacked on mobile, side-by-side on md+ */}
      <section className="flex-1 flex flex-col md:flex-row md:items-center md:justify-center md:gap-14 md:px-12 lg:px-20 max-w-5xl mx-auto w-full px-6 py-4 md:py-0">

        {/* Phone mockup — right on desktop, top on mobile */}
        <div className="order-1 md:order-2 flex justify-center md:block md:shrink-0 pb-5 md:pb-0">
          <div
            className="relative w-[min(300px,82vw)] md:w-[290px] lg:w-[330px] aspect-[1419/2796]"
            style={{ filter: "drop-shadow(0 0 60px rgba(58, 123, 213, 0.4))" }}
          >
            <Image
              src="/images/ghost/dashboard-portrait.png"
              alt="Ghost app dashboard"
              fill
              className="object-cover object-top"
              priority
              style={{  }}
            />
          </div>
        </div>

        {/* Copy + CTA — left on desktop, below phone on mobile */}
        <div className="order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left gap-3 max-w-[360px] md:max-w-[480px] mx-auto md:mx-0">
          <h1 className="text-[1.3rem] md:text-[2.5rem] font-extrabold leading-[1.15] tracking-tight text-white">
            Your biggest competition is who you were last month.
          </h1>
          <p className="text-[#5E7A94] text-sm leading-relaxed font-light">
            Ghost tracks your progress so you always know if you&rsquo;re
            beating yourself.
          </p>

          {status === "done" ? (
            <p className="text-[#3A7BD5] font-semibold text-sm mt-2">
              You&rsquo;re on the list. We&rsquo;ll be in touch.
            </p>
          ) : (
            <form
              className="w-full flex flex-col md:flex-row gap-3 mt-1"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                className="w-full md:flex-1 bg-[#0F1829] border border-[#1E3A5F] rounded-xl px-4 py-3.5 text-white placeholder-[#3D526A] text-sm outline-none focus:border-[#3A7BD5] transition-colors disabled:opacity-50"
                style={{ fontFamily: "inherit" }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full md:w-auto md:px-6 bg-[#3A7BD5] text-white rounded-xl py-3.5 font-semibold text-sm whitespace-nowrap hover:opacity-90 active:opacity-100 transition-opacity disabled:opacity-50 cursor-pointer"
              >
                {status === "loading" ? "Sending…" : "Get Early Access →"}
              </button>
              {status === "err" && (
                <p className="text-red-400 text-xs text-center">
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="shrink-0 text-center py-6 px-6 text-[#3D526A] text-xs tracking-wide border-t border-white/[0.04]">
        Built in public by Florian Mealing
      </footer>
    </main>
  );
}
