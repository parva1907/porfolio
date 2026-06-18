"use client";

import { motion } from "framer-motion";

export default function ResumeTab() {
  const education = [
    {
      degree: "B.E. Computer Science Engineering",
      institution: "Chandigarh University",
      period: "2022 — 2026",
      description: "Specialized in Computer Science and Machine Learning. Maintained high academic standing, published computer vision research, and competed in national hackathons.",
      highlights: [
        "GATE 2026 CSE — Score: 633",
        "Research paper on CNN-VIT Meta-Ensemble Framework published",
        "NASA Space Apps Challenge National Finalist",
      ],
    },
  ];

  const experiences = [
    {
      role: "AI/ML Projects & Research",
      type: "Research & Development",
      period: "2023 — Present",
      description: "Designed and built an advanced RAG chatbot pipeline with custom document chunking, vector embedding optimization, and similarity search. Published research on CNN-VIT models for agricultural diagnostics.",
      tech: ["Python", "LangChain", "PyTorch", "Vector DB", "LLM"],
    },
    {
      role: "Backend & Automation Developer",
      type: "Ad Tech Monitoring Systems",
      period: "2024",
      description: "Built automation pipelines using Python and n8n to poll REST APIs, detecting delivery failures and anomalies. Designed normalized MySQL schemas and stored procedures, reducing manual monitoring effort by ~80%.",
      tech: ["Python", "n8n", "MySQL", "REST APIs", "Linux", "Shell"],
    },
    {
      role: "Full-Stack Mobile Developer",
      type: "Cross-Platform App Projects",
      period: "2023 — 2024",
      description: "Developed and launched a cross-platform mobile application on the Google Play Store using Flutter and Firebase. Led end-to-end development from UI design to cloud functions and publishing.",
      tech: ["Flutter", "Dart", "Firebase", "Google Play Store"],
    },
    {
      role: "Infrastructure Engineer (Ongoing)",
      type: "AstraAPI Project",
      period: "2024 — Present",
      description: "Architecting AstraAPI, an infrastructure project built on Firebase for scalable backend services with real-time data synchronization and secure cloud functions.",
      tech: ["Firebase", "Cloud Functions", "REST", "Database Design"],
    },
  ];

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Bash / Shell", level: 75 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "ElasticSearch", level: 70 },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Linux", level: 85 },
        { name: "Git & Version Control", level: 90 },
        { name: "REST APIs / Integration", level: 90 },
        { name: "n8n Automation", level: 85 },
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 65 },
      ],
    },
    {
      title: "Core Concepts",
      skills: [
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "System Design", level: 80 },
        { name: "Object-Oriented Programming (OOP)", level: 85 },
        { name: "Machine Learning", level: 85 },
      ],
    },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-10"
    >
      {/* Title */}
      <header>
        <h2 className="article-title">Resume</h2>
      </header>

      {/* Experience Timeline */}
      <section className="space-y-6">
        <div className="flex items-center gap-3.5">
          <div className="icon-box text-accent-gold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v3.85a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V14.15m16.5 0c0-1.285-.807-2.408-2.016-2.735l-3.32-.9c-1.2-.325-2.48.248-2.928 1.348L12 14.3l-1.016-2.436c-.447-1.1-1.728-1.673-2.927-1.348l-3.32.9A3.001 3.001 0 0 0 2.25 14.15M20.25 14.15a1.5 1.5 0 0 0-3 0M2.25 14.15a1.5 1.5 0 0 0 3 0m15 0h-15M9 6.75h6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text-white">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experiences.map((exp, index) => (
            <li key={index} className="timeline-item">
              <div className="timeline-item-circle" />
              <div className="space-y-1.5 min-w-0">
                <h4 className="text-sm sm:text-base font-semibold text-text-white truncate">
                  {exp.role}
                </h4>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-accent-gold font-medium font-mono">
                  <span>{exp.type}</span>
                  <span className="text-text-muted">•</span>
                  <span>{exp.period}</span>
                </div>
                <p className="text-xs sm:text-sm text-text-gray font-light leading-relaxed">
                  {exp.description}
                </p>
                {/* Tech List */}
                <div className="flex flex-wrap gap-1.5 pt-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-card-jet text-[10px] sm:text-xs font-mono border border-border-jet text-text-gray"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Education Timeline */}
      <section className="space-y-6">
        <div className="flex items-center gap-3.5">
          <div className="icon-box text-accent-gold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7 0v7.25" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text-white">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((edu, index) => (
            <li key={index} className="timeline-item">
              <div className="timeline-item-circle" />
              <div className="space-y-1.5 min-w-0">
                <h4 className="text-sm sm:text-base font-semibold text-text-white truncate">
                  {edu.degree}
                </h4>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-accent-gold font-medium font-mono">
                  <span>{edu.institution}</span>
                  <span className="text-text-muted">•</span>
                  <span>{edu.period}</span>
                </div>
                <p className="text-xs sm:text-sm text-text-gray font-light leading-relaxed">
                  {edu.description}
                </p>
                <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-text-gray font-light leading-relaxed">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="marker:text-accent-gold">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills Progress bars */}
      <section className="space-y-8">
        <div className="flex items-center gap-3.5">
          <div className="icon-box text-accent-gold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text-white">My Skills</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="gradient-border-card p-6 rounded-[20px] space-y-4"
            >
              <h4 className="text-base font-semibold text-text-white border-b border-border-jet pb-2 text-accent-gold">
                {category.title}
              </h4>
              
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-medium text-text-white">{skill.name}</span>
                      <span className="font-mono text-text-muted font-light">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-card-jet rounded-full overflow-hidden border border-border-jet/20">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent-gold to-accent-gold-hover rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </motion.article>
  );
}
