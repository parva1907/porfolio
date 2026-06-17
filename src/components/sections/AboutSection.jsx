"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "B.E. Computer Science Engineering",
    institution: "Chandigarh University",
    year: "2022 — 2026",
    icon: "🎓",
    color: "var(--neon-blue)",
    highlights: [
      "GATE 2026 CSE — Score: 633",
      "Published research on CNN-VIT Meta-Ensemble Framework",
      "NASA Space Apps Challenge Finalist",
    ],
  },
];

const aboutStats = [
  { label: "GATE Score", value: "633", color: "var(--neon-blue)" },
  { label: "Projects", value: "7+", color: "var(--neon-purple)" },
  { label: "Research Papers", value: "1", color: "var(--neon-pink)" },
  { label: "Apps Launched", value: "1", color: "var(--neon-cyan)" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6" style={{ zIndex: 10 }}>
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-neon-cyan mb-3">
            {"// about_me"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Who I Am</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Bio — left column */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{
                    background: "rgba(0, 212, 255, 0.1)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                  }}
                >
                  👨‍💻
                </div>
                <div>
                  <h3 className="font-semibold text-gray-200">Parva Rastogi</h3>
                  <p className="text-xs font-mono text-gray-500">
                    Ayodhya, India
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                <p>
                  I&apos;m a recent Computer Science graduate with a deep passion for{" "}
                  <span className="text-neon-blue font-medium">
                    AI/ML engineering
                  </span>{" "}
                  and{" "}
                  <span className="text-neon-purple font-medium">
                    scalable backend systems
                  </span>
                  . My work sits at the intersection of research and production — turning
                  cutting-edge ML concepts into real-world applications.
                </p>
                <p>
                  With a{" "}
                  <span className="text-yellow-400 font-semibold">
                    GATE 2026 CSE score of 633
                  </span>
                  , published research in computer vision, and hands-on experience building
                  RAG pipelines, ad-tech monitoring systems, and cross-platform mobile
                  apps, I bring both theoretical depth and engineering pragmatism.
                </p>
                <p>
                  I thrive on solving complex problems — whether it&apos;s optimizing
                  vector search for sub-second retrieval, designing normalized database
                  schemas, or architecting cloud-native services with Firebase.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                {aboutStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-3 rounded-xl"
                    style={{
                      background: `${stat.color}06`,
                      border: `1px solid ${stat.color}15`,
                    }}
                  >
                    <p
                      className="text-xl font-bold font-mono"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education — right column */}
          <motion.div
            className="lg:col-span-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4 px-1">
                Education
              </h3>

              {education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  variants={itemVariants}
                  className="glass-panel-sm p-5 card-hover"
                  style={{ borderColor: `${edu.color}15` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xl">{edu.icon}</span>
                    <div>
                      <h4
                        className="font-semibold text-sm"
                        style={{ color: edu.color }}
                      >
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs font-mono text-gray-600 mt-0.5">
                        {edu.year}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-1.5 ml-8">
                    {edu.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-xs text-gray-400 flex items-start gap-2"
                      >
                        <span
                          className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: edu.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Certifications / Memberships */}
              <motion.div
                variants={itemVariants}
                className="glass-panel-sm p-5 card-hover"
                style={{ borderColor: "var(--neon-purple)15" }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">🏅</span>
                  <div>
                    <h4 className="font-semibold text-sm text-neon-purple">
                      Memberships
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      Computer Society of India (CSI)
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
