"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import NodeInfoPanel from "@/components/NodeInfoPanel";
import LoadingScreen from "@/components/LoadingScreen";

// Dynamic import for Three.js canvas to avoid SSR issues
const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas"), {
  ssr: false,
  loading: () => null,
});

export default function Home() {
  const [activeNode, setActiveNode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep loading screen visible during initial mount and bundles setup
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSetActiveNode = useCallback((nodeId) => {
    setActiveNode(nodeId);
  }, []);

  const handleClosePanel = useCallback(() => {
    setActiveNode(null);
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Dynamic page-level loader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100]"
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky navigation bar */}
      <Navbar />

      {/* Fixed 3D background canvas */}
      <ThreeCanvas
        activeNode={activeNode}
        setActiveNode={handleSetActiveNode}
      />

      {/* 2D HTML overlay content */}
      <div className="relative" style={{ zIndex: 10 }}>
        <HeroSection />

        {/* Gradient divider (Hero to About) */}
        <div
          className="h-px w-full max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--neon-blue), var(--neon-purple), transparent)",
            opacity: 0.3,
          }}
        />

        <AboutSection />

        {/* Gradient divider (About to Skills) */}
        <div
          className="h-px w-full max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--neon-purple), var(--neon-cyan), transparent)",
            opacity: 0.3,
          }}
        />

        <SkillsSection />

        {/* Gradient divider (Skills to Experience) */}
        <div
          className="h-px w-full max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--neon-cyan), var(--neon-blue), transparent)",
            opacity: 0.3,
          }}
        />

        <ExperienceSection />

        {/* Gradient divider (Experience to Projects) */}
        <div
          className="h-px w-full max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--neon-blue), var(--neon-purple), transparent)",
            opacity: 0.3,
          }}
        />

        <ProjectsSection setActiveNode={handleSetActiveNode} />

        {/* Gradient divider (Projects to Achievements) */}
        <div
          className="h-px w-full max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--neon-purple), var(--neon-pink), transparent)",
            opacity: 0.3,
          }}
        />

        <AchievementsSection />

        {/* Gradient divider (Achievements to Contact) */}
        <div
          className="h-px w-full max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--neon-pink), var(--neon-cyan), transparent)",
            opacity: 0.3,
          }}
        />

        <ContactSection />
      </div>

      {/* Node info panel overlay */}
      <NodeInfoPanel activeNode={activeNode} onClose={handleClosePanel} />
    </main>
  );
}
