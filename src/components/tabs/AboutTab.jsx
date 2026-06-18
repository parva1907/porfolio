"use client";

import { motion } from "framer-motion";

export default function AboutTab() {
  const services = [
    {
      title: "AI/ML Engineering",
      description: "Designing custom RAG pipelines, vector embedding search optimization, and CNN-Vision Transformer computer vision models.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .225c-.008.379.137.751.43.992l1.002.828a1.125 1.125 0 0 1 .26 1.43l-1.297 2.247a1.125 1.125 0 0 1-1.37.491l-1.216-.456c-.356-.133-.751-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.225c.007-.378-.138-.75-.43-.992l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
    {
      title: "Backend & Automation",
      description: "Developing automated pipelines (n8n, Python), normalized database architecture (MySQL, PostgreSQL), and robust REST APIs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      ),
    },
    {
      title: "Full-Stack Mobile Development",
      description: "Building premium cross-platform apps with Flutter & Dart, integrated with real-time sync databases and published on the Play Store.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      title: "Infrastructure & Cloud",
      description: "Architecting cloud infrastructure using Firebase, Cloud Functions, and deploying secure, scalable production environments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
        </svg>
      ),
    },
  ];

  const stats = [
    { label: "GATE Score", value: "633", color: "#ffdb70" },
    { label: "Projects Built", value: "7+", color: "#ffdb70" },
    { label: "Research Papers", value: "1", color: "#ffdb70" },
    { label: "Apps Launched", value: "1", color: "#ffdb70" },
  ];

  const achievements = [
    { title: "GATE 2026 CSE", subtitle: "Score: 633", icon: "🏆" },
    { title: "NASA Space Apps Challenge", subtitle: "Finalist", icon: "🚀" },
    { title: "E-Cell IIT Bombay", subtitle: "Semi-finalist", icon: "💡" },
    { title: "IIT BHU Ideathon", subtitle: "Participant", icon: "🎯" },
    { title: "Computer Society of India", subtitle: "Member (CSI)", icon: "🏅" },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-8"
    >
      {/* Title */}
      <header>
        <h2 className="article-title">About Me</h2>
      </header>

      {/* Narrative Bio */}
      <div className="space-y-4 text-sm sm:text-base text-text-gray leading-relaxed font-light">
        <p>
          I&apos;m a recent Computer Science graduate with a deep passion for{" "}
          <strong className="text-accent-gold font-medium">AI/ML engineering</strong> and{" "}
          <strong className="text-text-white font-medium">scalable backend systems</strong>. My work sits at the intersection of academic research and production engineering — turning cutting-edge ML concepts into highly optimized real-world applications.
        </p>
        <p>
          With a <strong className="text-accent-gold font-medium">GATE 2026 CSE score of 633</strong>, published research in computer vision, and hands-on experience building RAG pipelines, ad-tech monitoring systems, and cross-platform mobile apps, I bring both theoretical depth and engineering pragmatism.
        </p>
        <p>
          I thrive on solving complex architectural problems — whether it&apos;s optimizing vector search for sub-second retrieval, designing normalized database schemas, or architecting cloud-native services with Firebase.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="gradient-border-card p-4 text-center rounded-xl"
          >
            <p className="text-2xl sm:text-3xl font-semibold text-accent-gold font-mono mb-1">
              {stat.value}
            </p>
            <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* What I'm Doing Section */}
      <section className="space-y-6">
        <h3 className="sub-title">What I&apos;m Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="gradient-border-card p-6 rounded-[14px] flex items-start gap-4"
            >
              <div className="icon-box shrink-0 text-accent-gold">
                {service.icon}
              </div>
              <div className="space-y-1.5">
                <h4 className="text-base font-semibold text-text-white">
                  {service.title}
                </h4>
                <p className="text-xs sm:text-sm text-text-gray font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trophy Room Section */}
      <section className="space-y-6">
        <h3 className="sub-title">Trophy Room</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="gradient-border-card p-4 rounded-xl flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 border border-border-jet/20"
            >
              <div className="icon-box shrink-0 text-xl font-normal">
                {achievement.icon}
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-text-white">
                  {achievement.title}
                </h4>
                <p className="text-xs text-text-muted font-mono">
                  {achievement.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.article>
  );
}
