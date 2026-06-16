"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function GlowNode({
  position,
  color,
  geometry = "icosahedron",
  size = 0.5,
  label,
  description,
  onClick,
  isActive,
}) {
  const meshRef = useRef();
  const glowRef = useRef();
  const lightRef = useRef();

  const colorObj = useMemo(() => new THREE.Color(color), [color]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    // Gentle floating animation
    meshRef.current.position.y =
      position[1] + Math.sin(t * 0.8 + position[0]) * 0.1;

    // Slow self-rotation
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.2;

    // Pulse scale on active
    const baseScale = isActive ? 1.25 : 1;
    const pulse = 1 + Math.sin(t * 2) * 0.03;
    meshRef.current.scale.setScalar(baseScale * pulse);

    // Glow outer sphere pulse
    if (glowRef.current) {
      const glowPulse = 0.6 + Math.sin(t * 1.5) * 0.1;
      glowRef.current.material.opacity = isActive ? 0.2 : glowPulse * 0.12;
    }

    // Light intensity pulse
    if (lightRef.current) {
      lightRef.current.intensity = isActive
        ? 2.5 + Math.sin(t * 2) * 0.5
        : 1.5 + Math.sin(t * 1.5) * 0.3;
    }
  });

  const GeometryComponent = useMemo(() => {
    switch (geometry) {
      case "icosahedron":
        return <icosahedronGeometry args={[size, 1]} />;
      case "octahedron":
        return <octahedronGeometry args={[size, 0]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[size, 0]} />;
      case "sphere":
        return <sphereGeometry args={[size, 12, 12]} />;
      case "torus":
        return <torusGeometry args={[size, size * 0.3, 8, 16]} />;
      default:
        return <icosahedronGeometry args={[size, 1]} />;
    }
  }, [geometry, size]);

  return (
    <group position={position}>
      {/* Main node mesh */}
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick && onClick();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "default";
        }}
      >
        {GeometryComponent}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isActive ? 1.2 : 0.6}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* Glow outer sphere */}
      <Sphere ref={glowRef} args={[size * 2.2, 16, 16]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </Sphere>

      {/* Point light for local illumination */}
      <pointLight
        ref={lightRef}
        color={color}
        intensity={1.5}
        distance={6}
        decay={2}
      />
    </group>
  );
}
