"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "rag",
    title: "RAG Chatbot Pipeline",
    year: "2024",
    description:
      "An advanced chatbot pipeline featuring custom document chunking, vector embedding optimization, and similarity search utilizing a Vector Database to ground LLM responses in factual context.",
    tech: ["Python", "LangChain", "Vector DB", "LLM", "Embeddings"],
    color: "var(--neon-blue)",
    isRAG: true,
    icon: "🔗",
  },
  {
    id: "cnn-vit",
    title: "CNN-VIT Meta-Ensemble Framework",
    year: "2024",
    description:
      'Research Paper: "A Hybrid CNN-VIT Meta-Ensemble Framework for Plant Disease Detection" — Published at Springboard Conference (2024). Leverages computer vision and AI for agricultural diagnostics.',
    tech: ["PyTorch", "CNN", "Vision Transformer", "Computer Vision"],
    color: "var(--neon-purple)",
    isRAG: false,
    icon: "📄",
    badge: "Published Research",
  },
  {
    id: "ad-monitor",
    title: "Ad Campaign Monitoring System",
    year: "2024",
    description:
      "Built an automation pipeline using Python and n8n to poll REST APIs, detecting delivery failures and anomalies. Deployed on Linux with shell scripts, cutting manual monitoring by ~80%.",
    tech: ["Python", "n8n", "REST APIs", "Linux", "Shell"],
    color: "var(--neon-cyan)",
    isRAG: false,
    icon: "📊",
  },
  {
    id: "ad-sql",
    title: "Ad Performance SQL Analytics",
    year: "2024",
    description:
      "Designed a normalized MySQL schema and wrote complex SQL queries/stored procedures to surface KPI insights. Implemented data validation logic for record accuracy.",
    tech: ["MySQL", "SQL", "Stored Procedures", "Data Validation"],
    color: "var(--neon-pink)",
    isRAG: false,
    icon: "🗃️",
  },
  {
    id: "mental-health",
    title: "Mental Health Chatbot",
    year: "2023",
    description:
      "Python-based AI chatbot integrating NLP and multilingual translation APIs. Provides empathetic conversational support with natural language understanding.",
    tech: ["Python", "NLP", "Translation APIs", "AI"],
    color: "#10b981",
    isRAG: false,
    icon: "💬",
  },
  {
    id: "astra-api",
    title: "AstraAPI",
    year: "Ongoing",
    description:
      "An ongoing infrastructure project built utilizing Firebase. Designed for scalable backend services with real-time data sync and cloud functions.",
    tech: ["Firebase", "Cloud Functions", "REST", "Infrastructure"],
    color: "#f59e0b",
    isRAG: false,
    icon: "🚀",
  },
  {
    id: "mobile-app",
    title: "Cross-Platform Mobile App",
    year: "Launched",
    description:
      "A launched cross-platform application on the Google Play Store built with Flutter and Firebase. Full-stack mobile development from design to deployment.",
    tech: ["Flutter", "Dart", "Firebase", "Google Play Store"],
    color: "#6366f1",
    isRAG: false,
    icon: "📱",
    badge: "On Play Store",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ProjectsSection({ setActiveNode }) {
  return (
    <section id="projects" className="relative py-24 px-6" style={{ zIndex: 10 }}>
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
            {"// projects && research"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Projects & Research</span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass-panel p-6 card-hover flex flex-col relative group"
              style={{ borderColor: `${project.color}12` }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at center, ${project.color}08 0%, transparent 70%)`,
                }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-4 relative z-10">
                <span className="text-2xl">{project.icon}</span>
                <div className="flex items-center gap-2">
                  {project.badge && (
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-mono font-semibold"
                      style={{
                        background: `${project.color}20`,
                        color: project.color,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      {project.badge}
                    </span>
                  )}
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-mono"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      color: "var(--foreground)",
                      border: "1px solid var(--dark-border)",
                    }}
                  >
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-3 relative z-10"
                style={{ color: project.color }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1 relative z-10">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
                {project.tech.map((t) => (
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

              {/* RAG explore button */}
              {project.isRAG && (
                <button
                  onClick={() => {
                    setActiveNode("query");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="relative z-10 mt-auto px-4 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-300 cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                    border: `1px solid ${project.color}40`,
                    color: project.color,
                  }}
                >
                  ↗ Explore 3D Pipeline
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
