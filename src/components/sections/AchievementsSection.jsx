"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "NASA Space Apps Challenge",
    subtitle: "Finalist",
    icon: "🚀",
    color: "var(--neon-blue)",
  },
  {
    title: "E-Cell IIT Bombay",
    subtitle: "Semi-finalist",
    icon: "💡",
    color: "var(--neon-purple)",
  },
  {
    title: "IIT BHU Ideathon",
    subtitle: "Participant",
    icon: "🎯",
    color: "var(--neon-cyan)",
  },
  {
    title: "Computer Society of India",
    subtitle: "Member (CSI)",
    icon: "🏅",
    color: "var(--neon-pink)",
  },
  {
    title: "GATE 2026 CSE",
    subtitle: "Score: 633",
    icon: "🏆",
    color: "#f59e0b",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
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
          <p className="font-mono text-sm text-yellow-400 mb-3">
            {"// achievements.log"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Trophy Room</span>
          </h2>
        </motion.div>

        {/* Trophy banner */}
        <motion.div
          className="glass-panel p-1 max-w-4xl mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient border effect */}
          <div
            className="rounded-[14px] p-8 sm:p-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,15,26,0.95) 0%, rgba(5,5,15,0.98) 100%)",
            }}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {achievements.map((achievement) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: `${achievement.color}06`,
                    border: `1px solid ${achievement.color}15`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `${achievement.color}12`,
                      boxShadow: `0 0 20px ${achievement.color}10`,
                    }}
                  >
                    {achievement.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      className="font-semibold text-sm"
                      style={{ color: achievement.color }}
                    >
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 font-mono">
                      {achievement.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
