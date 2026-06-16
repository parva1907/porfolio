"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import GlowNode from "./GlowNode";
import DataFlowParticle from "./DataFlowParticle";

// Node definitions for the RAG pipeline
const NODES = [
  {
    id: "query",
    label: "User Query",
    position: [-4, 0.5, 0],
    color: "#00d4ff",
    geometry: "icosahedron",
    size: 0.45,
    description:
      "The user's natural language question is tokenized and prepared for embedding. Input text is preprocessed, normalized, and converted into a format suitable for the embedding model.",
    math: "Input: x = [t₁, t₂, ..., tₙ] where tᵢ are tokens",
  },
  {
    id: "embedding",
    label: "Embedding Model",
    position: [-1.3, -0.3, 0.5],
    color: "#22d3ee",
    geometry: "octahedron",
    size: 0.5,
    description:
      "The query is transformed into a high-dimensional vector using a transformer-based embedding model. This dense vector captures semantic meaning in a continuous vector space.",
    math: "f(x) → ℝᵈ, d = 768 or 1536 dimensions",
  },
  {
    id: "vectordb",
    label: "Vector Database",
    position: [1.5, 0.4, -0.3],
    color: "#a855f7",
    geometry: "sphere",
    size: 0.55,
    description:
      "The embedding is used for approximate nearest neighbor (ANN) search against a pre-indexed corpus. Uses algorithms like HNSW or IVF for efficient similarity retrieval.",
    math: "sim(q, dᵢ) = cos(θ) = (q · dᵢ) / (‖q‖ · ‖dᵢ‖)",
  },
  {
    id: "llm",
    label: "LLM Core",
    position: [4.2, -0.2, 0.2],
    color: "#ec4899",
    geometry: "dodecahedron",
    size: 0.6,
    description:
      "Retrieved context chunks are injected into the LLM prompt. The language model generates a grounded response using attention mechanisms over both the query and retrieved documents.",
    math: "P(yₜ | y<t, context, query) via multi-head attention",
  },
];

// Connection paths between nodes
const CONNECTIONS = [
  { from: 0, to: 1, color: "#00d4ff" },
  { from: 1, to: 2, color: "#22d3ee" },
  { from: 2, to: 3, color: "#a855f7" },
];

// Background floating particles
function BackgroundParticles() {
  const pointsRef = useRef();
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#4a5568"
        size={0.025}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// Connection lines between nodes
function ConnectionLine({ start, end, color }) {
  const points = useMemo(() => {
    const s = new THREE.Vector3(...start);
    const e = new THREE.Vector3(...end);
    const mid = new THREE.Vector3().lerpVectors(s, e, 0.5);
    mid.y += 0.4;
    const curve = new THREE.QuadraticBezierCurve3(s, mid, e);
    return curve.getPoints(30);
  }, [start, end]);

  return (
    <Line
      points={points}
      color={color}
      lineWidth={1.5}
      transparent
      opacity={0.25}
      dashed
      dashSize={0.15}
      gapSize={0.1}
    />
  );
}

// VectorDB cluster - small spheres orbiting the main node
function VectorCluster({ center, color }) {
  const groupRef = useRef();
  const count = 8;

  const positions = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 0.8 + Math.random() * 0.4;
      return [
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 0.6,
        Math.sin(angle) * radius,
      ];
    });
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <group ref={groupRef} position={center}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06 + Math.random() * 0.04, 8, 8]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function RAGGraph({ activeNode, setActiveNode }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    // Very slow auto-rotation
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Background particles */}
      <BackgroundParticles />

      {/* Vector DB orbiting cluster */}
      <VectorCluster center={NODES[2].position} color={NODES[2].color} />

      {/* Connection lines */}
      {CONNECTIONS.map((conn, i) => (
        <ConnectionLine
          key={i}
          start={NODES[conn.from].position}
          end={NODES[conn.to].position}
          color={conn.color}
        />
      ))}

      {/* Data flow particles along each connection */}
      {CONNECTIONS.map((conn, i) =>
        [0, 0.33, 0.66].map((delay, j) => (
          <DataFlowParticle
            key={`${i}-${j}`}
            startPos={NODES[conn.from].position}
            endPos={NODES[conn.to].position}
            color={conn.color}
            speed={0.25 + i * 0.05}
            delay={delay}
          />
        ))
      )}

      {/* Glowing nodes */}
      {NODES.map((node) => (
        <GlowNode
          key={node.id}
          position={node.position}
          color={node.color}
          geometry={node.geometry}
          size={node.size}
          label={node.label}
          description={node.description}
          isActive={activeNode === node.id}
          onClick={() =>
            setActiveNode(activeNode === node.id ? null : node.id)
          }
        />
      ))}

      {/* Ambient lighting */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#ffffff" />
    </group>
  );
}

export { NODES };
