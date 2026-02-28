"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  num:         string;
  tag:         string;
  title:       string;
  description: string;
  tech:        string[];
  github:      string;
}

const projects: Project[] = [
  {
    num:   "01",
    tag:   "Founder",
    title: "SyncMove",
    description:
      "Founded and shipped a production fitness tracking platform end-to-end. REST API in Node.js/TypeScript, React web frontend, React Native mobile app. Designed the full database schema and system architecture from zero.",
    tech:   ["TypeScript", "React", "Node.js", "React Native", "REST API"],
    github: "https://github.com/fmealing/SyncMove-App-2",
  },
  {
    num:   "02",
    tag:   "Final Year Project",
    title: "IoT Wearable Glove",
    description:
      "MEng FYP — a wearable glove using an ESP32, flex sensors, and an IMU for real-time gym rep counting and load tracking. Data streams via MQTT to a cloud database. Hardware prototype fully designed and hand-soldered.",
    tech:   ["ESP32", "C++", "MQTT", "IMU", "Flex Sensors"],
    github: "https://github.com/fmealing/Final-Year-Project",
  },
  {
    num:   "03",
    tag:   "Software Lead",
    title: "Autonomous Robot Waiter",
    description:
      "Led the software team on a multidisciplinary autonomous robot project. Navigation algorithms, sensor fusion, and motion control systems. Worked across mechanical, electrical, and software sub-teams.",
    tech:   ["Robotics", "Navigation", "Sensor Fusion", "Control Systems"],
    github: "https://github.com/fmealing/ADP-2025-Botler",
  },
  {
    num:   "04",
    tag:   "Client Build",
    title: "Wildlife Park Weighing System",
    description:
      "Automated animal weighing system deployed for a real wildlife park. Custom firmware on ESP32 reads load cell data, applies calibration, and streams weight readings to Supabase in real time.",
    tech:   ["ESP32", "C++", "Load Cells", "Supabase", "Embedded C"],
    github: "https://github.com/fmealing/bwp-idp3",
  },
  {
    num:   "05",
    tag:   "Computer Vision",
    title: "Gesture Recognition System",
    description:
      "Real-time hand gesture recognition via MediaPipe and Python. Classifies gestures from live video with low latency. Explores applications in accessibility and human-computer interaction.",
    tech:   ["Python", "MediaPipe", "OpenCV", "Computer Vision"],
    github: "https://github.com/fmealing/Smart-Vision",
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
    >
      {/* ── Row header ── */}
      <button
        onClick={() => setOpen(!open)}
        className="proj-row w-full text-left py-5 px-0"
      >
        <div className="flex items-center gap-5 md:gap-8">
          {/* Number */}
          <span
            className="text-xs font-medium tabular-nums w-7 shrink-0"
            style={{ color: "var(--gold)" }}
          >
            {project.num}
          </span>

          {/* Tag (hidden on mobile) */}
          <span
            className="hidden sm:block text-xs tracking-[0.12em] uppercase w-32 shrink-0"
            style={{ color: "var(--cream-muted)" }}
          >
            {project.tag}
          </span>

          {/* Title */}
          <span
            className="flex-1 text-base font-light transition-colors duration-200"
            style={{ color: open ? "var(--cream)" : "var(--cream-dim)" }}
          >
            {project.title}
          </span>

          {/* Tech (desktop) */}
          <span
            className="hidden lg:block text-xs font-light"
            style={{ color: "var(--cream-muted)" }}
          >
            {project.tech.join(" · ")}
          </span>

          {/* Arrow */}
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 text-xs"
            style={{ color: "var(--gold)" }}
          >
            →
          </motion.span>
        </div>
      </button>

      {/* ── Expanded detail ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="py-5 pl-12 sm:pl-24 pr-6 mb-1"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {/* Tech (mobile) */}
              <p
                className="lg:hidden text-xs mb-3"
                style={{ color: "var(--cream-muted)" }}
              >
                {project.tech.join(" · ")}
              </p>

              <p
                className="text-sm font-light leading-[1.85] max-w-2xl mb-5"
                style={{ color: "var(--cream-dim)" }}
              >
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.14em] uppercase transition-colors duration-200"
                style={{ color: "var(--gold)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
              >
                → view on github
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-28 px-8"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label mb-10"
        >
          02 / projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-display mb-2"
          style={{ fontSize: "clamp(32px, 5vw, 60px)", color: "var(--cream)" }}
        >
          Things I&apos;ve built.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm font-light mb-14"
          style={{ color: "var(--cream-muted)" }}
        >
          Click any row to expand.
        </motion.p>

        {/* Project list */}
        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
