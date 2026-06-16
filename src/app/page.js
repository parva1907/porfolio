"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import NodeInfoPanel from "@/components/NodeInfoPanel";

// Dynamic import for Three.js canvas to avoid SSR issues
const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-background" style={{ zIndex: 0 }} />
  ),
});

export default function Home() {
  const [activeNode, setActiveNode] = useState(null);

  const handleSetActiveNode = useCallback((nodeId) => {
    setActiveNode(nodeId);
  }, []);

  const handleClosePanel = useCallback(() => {
    setActiveNode(null);
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Fixed 3D background canvas */}
      <ThreeCanvas
        activeNode={activeNode}
        setActiveNode={handleSetActiveNode}
      />

      {/* 2D HTML overlay content */}
      <div className="relative" style={{ zIndex: 10 }}>
        <HeroSection />

        {/* Gradient divider */}
        <div
          className="h-px w-full max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--neon-blue), var(--neon-purple), transparent)",
            opacity: 0.3,
          }}
        />

        <SkillsSection />

        <div
          className="h-px w-full max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--neon-purple), var(--neon-pink), transparent)",
            opacity: 0.3,
          }}
        />

        <ProjectsSection setActiveNode={handleSetActiveNode} />

        <div
          className="h-px w-full max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--neon-cyan), var(--neon-blue), transparent)",
            opacity: 0.3,
          }}
        />

        <AchievementsSection />

        <div
          className="h-px w-full max-w-4xl mx-auto"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--neon-pink), var(--neon-purple), transparent)",
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
