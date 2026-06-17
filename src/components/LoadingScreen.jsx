"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center gap-6"
      style={{ background: "var(--background)", zIndex: 100 }}
    >
      {/* Animated logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl"
          style={{
            background:
              "linear-gradient(135deg, var(--neon-blue), var(--neon-purple))",
            boxShadow: "0 0 30px rgba(0,212,255,0.3)",
          }}
        >
          PR
        </div>

        {/* Orbiting ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-3"
          style={{
            border: "2px solid transparent",
            borderTopColor: "var(--neon-blue)",
            borderRadius: "50%",
            opacity: 0.4,
          }}
        />
      </motion.div>

      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2 font-mono text-sm text-gray-500"
      >
        <span>Initializing</span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ...
        </motion.span>
      </motion.div>
    </div>
  );
}
