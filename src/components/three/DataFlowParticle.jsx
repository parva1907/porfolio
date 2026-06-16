"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DataFlowParticle({ startPos, endPos, color, speed = 0.4, delay = 0 }) {
  const meshRef = useRef();
  const trailRefs = useRef([]);

  // Create a curved path between the two points
  const curve = useMemo(() => {
    const start = new THREE.Vector3(...startPos);
    const end = new THREE.Vector3(...endPos);
    const mid = new THREE.Vector3().lerpVectors(start, end, 0.5);

    // Add some curve height
    mid.y += 0.6;
    mid.x += (Math.random() - 0.5) * 0.5;

    return new THREE.QuadraticBezierCurve3(start, mid, end);
  }, [startPos, endPos]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    const progress = ((t * speed + delay) % 1);
    const point = curve.getPointAt(progress);

    meshRef.current.position.copy(point);

    // Fade in/out at endpoints
    const fade = Math.sin(progress * Math.PI);
    meshRef.current.material.opacity = fade * 0.9;
    meshRef.current.scale.setScalar(0.03 + fade * 0.04);

    // Trail particles
    trailRefs.current.forEach((trail, i) => {
      if (!trail) return;
      const trailProgress = ((t * speed + delay - (i + 1) * 0.03) % 1 + 1) % 1;
      const trailPoint = curve.getPointAt(trailProgress);
      trail.position.copy(trailPoint);
      const trailFade = Math.sin(trailProgress * Math.PI);
      trail.material.opacity = trailFade * 0.3 * (1 - (i + 1) * 0.2);
      trail.scale.setScalar(0.02 + trailFade * 0.02 * (1 - (i + 1) * 0.15));
    });
  });

  return (
    <group>
      {/* Main particle */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.8}
          depthWrite={false}
        />
      </mesh>

      {/* Trail particles */}
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
        >
          <sphereGeometry args={[1, 6, 6]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.2}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
