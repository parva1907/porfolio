"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import RAGGraph from "./three/RAGGraph";

export default function ThreeCanvas({ activeNode, setActiveNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <div
      id="three-canvas-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 55 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
        eventSource={typeof document !== "undefined" ? document.getElementById("three-canvas-container") : undefined}
        eventPrefix="client"
      >
        <Suspense fallback={null}>
          <RAGGraph activeNode={activeNode} setActiveNode={setActiveNode} />
        </Suspense>
      </Canvas>
    </div>
  );
}
