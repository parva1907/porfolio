"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "AI/ML Engineering Projects",
    type: "Projects & Research",
    period: "2023 — Present",
    description:
      "Designed and built an advanced RAG chatbot pipeline with custom document chunking, vector embedding optimization, and similarity search. Published research paper on a CNN-VIT Meta-Ensemble Framework for plant disease detection at the Springboard Conference 2024.",
    tech: ["Python", "LangChain", "PyTorch", "Vector DB", "LLM"],
    icon: "🧠",
    color: "var(--neon-blue)",
  },
  {
    role: "Backend & Automation Development",
    type: "Ad Tech Systems",
    period: "2024",
    description:
      "Built automation pipelines using Python and n8n to poll REST APIs, detecting delivery failures and anomalies. Designed normalized MySQL schemas and complex SQL queries/stored procedures for KPI analytics. Reduced manual monitoring effort by ~80%.",
    tech: ["Python", "n8n", "MySQL", "REST APIs", "Linux", "Shell"],
    icon: "⚙️",
    color: "var(--neon-purple)",
  },
  {
    role: "Full-Stack Mobile Development",
    type: "Cross-Platform App",
    period: "2023 — 2024",
    description:
      "Developed and launched a cross-platform mobile application on the Google Play Store using Flutter and Firebase. Handled end-to-end development from UI design to backend integration and deployment.",
    tech: ["Flutter", "Dart", "Firebase", "Google Play Store"],
    icon: "📱",
    color: "var(--neon-cyan)",
  },
  {
    role: "Infrastructure & Cloud",
    type: "AstraAPI — Ongoing",
    period: "2024 — Present",
    description:
      "Architecting AstraAPI, an infrastructure project built on Firebase for scalable backend services with real-time data synchronization and cloud functions.",
    tech: ["Firebase", "Cloud Functions", "REST", "Infrastructure"],
    icon: "🚀",
    color: "var(--neon-pink)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6"
      style={{ zIndex: 10 }}
    >
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-neon-purple mb-3">
            {"// experience.timeline()"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Experience & Work</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Vertical line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px hidden sm:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--neon-purple), var(--neon-blue), transparent)",
              opacity: 0.2,
            }}
          />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                variants={cardVariants}
                className="relative flex gap-4 sm:gap-6"
              >
                {/* Timeline node */}
                <div className="flex-shrink-0 relative z-10 hidden sm:flex">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-xl sm:text-2xl"
                    style={{
                      background: `${exp.color}12`,
                      border: `1px solid ${exp.color}30`,
                      boxShadow: `0 0 20px ${exp.color}10`,
                    }}
                  >
                    {exp.icon}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 glass-panel p-5 sm:p-6 card-hover" style={{ borderColor: `${exp.color}12` }}>
                  {/* Mobile icon */}
                  <div className="sm:hidden flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{
                        background: `${exp.color}12`,
                        border: `1px solid ${exp.color}30`,
                      }}
                    >
                      {exp.icon}
                    </div>
                    <div>
                      <h3
                        className="font-bold text-base"
                        style={{ color: exp.color }}
                      >
                        {exp.role}
                      </h3>
                    </div>
                  </div>

                  {/* Header — desktop */}
                  <div className="hidden sm:flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="font-bold text-lg"
                        style={{ color: exp.color }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-xs text-gray-500 font-mono mt-0.5">
                        {exp.type}
                      </p>
                    </div>
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-mono flex-shrink-0"
                      style={{
                        background: `${exp.color}10`,
                        color: exp.color,
                        border: `1px solid ${exp.color}25`,
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Period badge — mobile */}
                  <div className="sm:hidden flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500 font-mono">
                      {exp.type}
                    </span>
                    <span className="text-gray-700">•</span>
                    <span
                      className="text-xs font-mono"
                      style={{ color: exp.color }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-md text-xs font-mono"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid var(--dark-border)",
                          color: "#9ca3af",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
