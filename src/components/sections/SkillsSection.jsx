"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: "⚡",
    skills: ["Python", "Java", "SQL", "Bash / Shell Scripting"],
    color: "var(--neon-blue)",
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "ElasticSearch (NoSQL)"],
    color: "var(--neon-purple)",
  },
  {
    title: "Tools & DevOps",
    icon: "🔧",
    skills: ["Linux", "Git", "REST APIs", "n8n", "Kubernetes", "Docker"],
    color: "var(--neon-cyan)",
  },
  {
    title: "Core Concepts",
    icon: "🧠",
    skills: [
      "Data Structures & Algorithms",
      "System Design",
      "OOP",
      "Machine Learning",
    ],
    color: "var(--neon-pink)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-6" style={{ zIndex: 10 }}>
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-neon-blue mb-3">
            {"// tech_stack"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          className="terminal-window max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Terminal header */}
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500/80" />
            <div className="terminal-dot bg-yellow-500/80" />
            <div className="terminal-dot bg-green-500/80" />
            <span className="font-mono text-xs text-gray-500 ml-3">
              parva@dev ~ skills.sh
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6 sm:p-8">
            {/* Command line */}
            <div className="font-mono text-sm mb-6 text-gray-400">
              <span className="text-green-400">parva@dev</span>
              <span className="text-gray-600">:</span>
              <span className="text-neon-blue">~</span>
              <span className="text-gray-600">$ </span>
              <span className="text-gray-300">cat skills.json</span>
              <span className="cursor-blink text-neon-blue ml-1">▊</span>
            </div>

            {/* Skills grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {skillCategories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={cardVariants}
                  className="glass-panel-sm p-5 card-hover"
                  style={{
                    borderColor: `${category.color}15`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl">{category.icon}</span>
                    <h3
                      className="font-semibold text-sm uppercase tracking-wider"
                      style={{ color: category.color }}
                    >
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-3 py-1.5 rounded-md font-mono text-xs transition-all duration-300 hover:scale-105"
                        style={{
                          background: `${category.color}10`,
                          border: `1px solid ${category.color}25`,
                          color: category.color,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Output line */}
            <div className="font-mono text-xs text-gray-600 mt-6">
              <span className="text-green-400/60">✓</span> Loaded 4 categories,{" "}
              {skillCategories.reduce((a, c) => a + c.skills.length, 0)} skills
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
