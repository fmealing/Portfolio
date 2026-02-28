"use client";

import { motion } from "framer-motion";

interface SkillGroup {
  id:     string;
  title:  string;
  skills: string[];
}

const groups: SkillGroup[] = [
  {
    id:    "embedded",
    title: "Embedded Systems",
    skills: [
      "ESP32",
      "Arduino",
      "C / C++",
      "MQTT",
      "IMU sensors",
      "Flex sensors",
      "Load cells",
      "PCB design",
      "Soldering",
      "Microcontrollers",
      "VHDL",
    ],
  },
  {
    id:    "software",
    title: "Software Development",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "React",
      "React Native",
      "Node.js",
      "REST APIs",
      "Next.js",
    ],
  },
  {
    id:    "tools",
    title: "Engineering Tools",
    skills: [
      "MATLAB",
      "Simulink",
      "Fusion 360",
      "Git / GitHub",
      "Supabase",
      "Linux",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 py-28 px-8"
      style={{ background: "var(--surface)" }}
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
          03 / skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-display mb-14"
          style={{ fontSize: "clamp(32px, 5vw, 60px)", color: "var(--cream)" }}
        >
          What I work with.
        </motion.h2>

        {/* Rule before table */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rule mb-0"
          style={{ transformOrigin: "left" }}
        />

        {/* Three-column spec sheet — separated by 1px lines */}
        <div className="grid md:grid-cols-3" style={{ borderBottom: "1px solid var(--border)" }}>
          {groups.map((g, gi) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: gi * 0.1, ease: "easeOut" }}
              className="py-10 px-6 first:pl-0 last:pr-0"
              style={{
                borderRight: gi < groups.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              {/* Category label */}
              <p className="label mb-8">{g.title}</p>

              {/* Skill list — plain text, hover turns gold */}
              <ul className="space-y-0">
                {g.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.04 }}
                    className="skill-item text-sm font-light"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-xs font-light"
          style={{ color: "var(--cream-muted)" }}
        >
          + always learning something new
        </motion.p>
      </div>
    </section>
  );
}
