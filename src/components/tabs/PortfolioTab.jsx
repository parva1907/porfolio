"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioTab() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI/ML", "Backend & Infra", "Mobile App"];

  const projects = [
    {
      id: "rag",
      title: "RAG Chatbot Pipeline",
      category: "AI/ML",
      year: "2024",
      description: "Advanced chatbot pipeline featuring custom document chunking, vector embedding optimization, and similarity search utilizing Vector Databases to ground LLM responses.",
      tech: ["Python", "LangChain", "Vector DB", "LLM", "Embeddings"],
      icon: "🔗",
    },
    {
      id: "cnn-vit",
      title: "CNN-VIT Meta-Ensemble Framework",
      category: "AI/ML",
      year: "2024",
      description: "Research Paper: 'A Hybrid CNN-VIT Meta-Ensemble Framework for Plant Disease Detection' published at Springboard Conference. Leverages computer vision for agricultural diagnostics.",
      tech: ["PyTorch", "CNN", "Vision Transformer", "Computer Vision"],
      icon: "📄",
      badge: "Published Research",
    },
    {
      id: "ad-monitor",
      title: "Ad Campaign Monitoring System",
      category: "Backend & Infra",
      year: "2024",
      description: "Automation pipeline built using Python and n8n to poll REST APIs, detecting delivery failures and anomalies. Deployed on Linux with shell scripts, cutting manual monitoring by ~80%.",
      tech: ["Python", "n8n", "REST APIs", "Linux", "Shell"],
      icon: "📊",
    },
    {
      id: "ad-sql",
      title: "Ad Performance SQL Analytics",
      category: "Backend & Infra",
      year: "2024",
      description: "Designed normalized MySQL schemas and wrote complex SQL queries/stored procedures to surface campaign KPI insights. Wrote data validation scripts.",
      tech: ["MySQL", "SQL", "Stored Procedures", "Data Validation"],
      icon: "🗃️",
    },
    {
      id: "mental-health",
      title: "Mental Health Chatbot",
      category: "AI/ML",
      year: "2023",
      description: "Python-based AI chatbot integrating NLP and multilingual translation APIs. Provides empathetic conversational support and natural language understanding.",
      tech: ["Python", "NLP", "Translation APIs", "AI"],
      icon: "💬",
    },
    {
      id: "astra-api",
      title: "AstraAPI",
      category: "Backend & Infra",
      year: "Ongoing",
      description: "An ongoing infrastructure project built utilizing Firebase. Designed for scalable backend services with real-time data synchronization and cloud functions.",
      tech: ["Firebase", "Cloud Functions", "REST", "Infrastructure"],
      icon: "🚀",
    },
    {
      id: "mobile-app",
      title: "Cross-Platform Mobile App",
      category: "Mobile App",
      year: "Launched",
      description: "A launched cross-platform application on the Google Play Store built with Flutter and Firebase. End-to-end development from design to deployment.",
      tech: ["Flutter", "Dart", "Firebase", "Google Play Store"],
      icon: "📱",
      badge: "On Play Store",
    },
  ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-8"
    >
      {/* Title */}
      <header>
        <h2 className="article-title">Portfolio</h2>
      </header>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm pt-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl transition-all duration-200 font-medium cursor-pointer relative ${
                isActive
                  ? "text-accent-gold"
                  : "text-text-muted hover:text-text-white"
              }`}
            >
              {cat}
              {isActive && (
                <motion.div
                  layoutId="active-filter-bg"
                  className="absolute inset-0 border border-accent-gold/30 bg-accent-gold/5 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="gradient-border-card p-6 rounded-[20px] flex flex-col justify-between group border border-border-jet/20 relative overflow-hidden"
            >
              {/* Inner card glow on hover */}
              <div
                className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, rgba(255, 219, 112, 0.04) 0%, transparent 80%)`,
                }}
              />

              <div className="relative z-10 space-y-4">
                {/* Header (Icon, Badge, Year) */}
                <div className="flex items-center justify-between">
                  <div className="icon-box text-xl shrink-0">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-accent-gold/10 text-accent-gold border border-accent-gold/20 font-mono">
                        {project.badge}
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-card-jet border border-border-jet text-text-muted">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Title and Category */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-semibold text-text-white group-hover:text-accent-gold transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-text-muted font-mono uppercase tracking-wider">
                    {project.category}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-gray font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="relative z-10 flex flex-wrap gap-1.5 pt-4 border-t border-border-jet/30 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-card-jet text-[10px] font-mono border border-border-jet/60 text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}
