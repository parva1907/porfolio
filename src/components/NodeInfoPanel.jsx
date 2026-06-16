"use client";

import { motion, AnimatePresence } from "framer-motion";
import { NODES } from "./three/RAGGraph";

const nodeDetails = {
  query: {
    title: "User Query",
    subtitle: "Input Processing",
    explanation:
      "The user's natural language question enters the RAG pipeline. It is first tokenized — split into subword units using a tokenizer (e.g., BPE or WordPiece). The resulting token sequence is then prepared for the embedding model.",
    math: "Input: x = [t₁, t₂, ..., tₙ]\nTokenization: BPE(text) → [subword₁, subword₂, ...]\nPreprocessing: normalize, lowercase, remove stop words",
    color: "var(--neon-blue)",
  },
  embedding: {
    title: "Embedding Model",
    subtitle: "Semantic Vectorization",
    explanation:
      "A transformer-based encoder (e.g., sentence-transformers) maps the token sequence to a dense vector in a high-dimensional space. This embedding captures semantic meaning — similar queries produce nearby vectors.",
    math: "f: ℝⁿ → ℝᵈ  (d = 768 or 1536)\nE(x) = TransformerEncoder(x)\nOutput: q ∈ ℝᵈ where ‖q‖ = 1 (L2 normalized)",
    color: "var(--neon-cyan)",
  },
  vectordb: {
    title: "Vector Database",
    subtitle: "Similarity Search",
    explanation:
      "The query embedding is compared against pre-indexed document chunk embeddings using Approximate Nearest Neighbor (ANN) algorithms like HNSW or IVF. The top-k most similar chunks are retrieved as context.",
    math: "Cosine Similarity:\n  sim(q, dᵢ) = (q · dᵢ) / (‖q‖ · ‖dᵢ‖)\n\nRetrieve: top-k = argmax_k sim(q, D)\nComplexity: O(log n) with HNSW indexing",
    color: "var(--neon-purple)",
  },
  llm: {
    title: "LLM Core",
    subtitle: "Grounded Generation",
    explanation:
      "Retrieved context chunks are injected into the LLM's prompt alongside the original query. The transformer-based language model uses multi-head self-attention to generate a contextually grounded response token by token.",
    math: "P(yₜ | y<t, context, query)\n  = softmax(QKᵀ / √dₖ) · V\n\nAttention(Q,K,V) = softmax(QKᵀ/√dₖ)V\nMulti-head: Concat(head₁,...,headₕ)Wᴼ",
    color: "var(--neon-pink)",
  },
};

export default function NodeInfoPanel({ activeNode, onClose }) {
  const details = activeNode ? nodeDetails[activeNode] : null;

  return (
    <AnimatePresence>
      {details && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            style={{ zIndex: 50 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.95 }}
            transition={{
              duration: 0.35,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="fixed top-4 right-4 bottom-4 w-full max-w-md glass-panel p-6 overflow-y-auto"
            style={{
              zIndex: 51,
              boxShadow: `0 0 40px ${details.color}15, 0 0 80px ${details.color}05`,
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Node indicator */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  background: details.color,
                  boxShadow: `0 0 12px ${details.color}60`,
                }}
              />
              <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                RAG Pipeline Node
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-2xl font-bold mb-1"
              style={{ color: details.color }}
            >
              {details.title}
            </h3>
            <p className="text-sm text-gray-400 mb-6 font-mono">
              {details.subtitle}
            </p>

            {/* Divider */}
            <div
              className="w-full h-px mb-6"
              style={{
                background: `linear-gradient(to right, ${details.color}40, transparent)`,
              }}
            />

            {/* Explanation */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">
                How It Works
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {details.explanation}
              </p>
            </div>

            {/* Math/Formula */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">
                Mathematics
              </h4>
              <div
                className="rounded-xl p-4 font-mono text-xs leading-relaxed overflow-x-auto"
                style={{
                  background: "rgba(0,0,0,0.4)",
                  border: `1px solid ${details.color}20`,
                  color: details.color,
                }}
              >
                <pre className="whitespace-pre-wrap">{details.math}</pre>
              </div>
            </div>

            {/* Pipeline position */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">
                Pipeline Flow
              </h4>
              <div className="flex items-center gap-2 flex-wrap">
                {Object.entries(nodeDetails).map(([key, node]) => (
                  <div key={key} className="flex items-center gap-2">
                    <div
                      className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold transition-all duration-200"
                      style={{
                        background:
                          key === activeNode
                            ? `${node.color}25`
                            : "rgba(255,255,255,0.03)",
                        border:
                          key === activeNode
                            ? `1px solid ${node.color}50`
                            : "1px solid var(--dark-border)",
                        color:
                          key === activeNode ? node.color : "#6b7280",
                      }}
                    >
                      {node.title}
                    </div>
                    {key !== "llm" && (
                      <span className="text-gray-600 text-xs">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
