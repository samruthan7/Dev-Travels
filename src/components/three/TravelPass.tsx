"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { MathUtils, type Group } from "three";

const BASE_YAW = -0.3;
const BARS = [0.05, 0.02, 0.08, 0.03, 0.05, 0.02, 0.07, 0.03, 0.04, 0.06, 0.02, 0.05];

export function TravelPass({ interactive }: { interactive: boolean }) {
  const group = useRef<Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const invalidate = useThree((s) => s.invalidate);
  const width = useThree((s) => s.viewport.width);
  const scale = Math.min(1, width / 4.2);

  useEffect(() => {
    if (!interactive) return;
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
      invalidate();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [interactive, invalidate]);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    const targetY = BASE_YAW + target.current.x * 0.45;
    const targetX = target.current.y * 0.25;
    g.rotation.y = MathUtils.damp(g.rotation.y, targetY, 4, delta);
    g.rotation.x = MathUtils.damp(g.rotation.x, targetX, 4, delta);
    // Keep rendering only while still moving.
    if (Math.abs(g.rotation.y - targetY) > 0.001 || Math.abs(g.rotation.x - targetX) > 0.001) {
      invalidate();
    }
  });

  return (
    <group ref={group} scale={scale} rotation={[0, BASE_YAW, 0]}>
      {/* Glass body */}
      <RoundedBox args={[3.2, 2, 0.12]} radius={0.12} smoothness={4}>
        <meshPhysicalMaterial
          color="#9fb6ff"
          transparent
          opacity={0.32}
          roughness={0.12}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.4}
        />
      </RoundedBox>

      {/* Saffron strip along the top */}
      <mesh position={[0, 0.82, 0.07]}>
        <boxGeometry args={[2.9, 0.06, 0.02]} />
        <meshStandardMaterial color="#E8B04A" emissive="#E8B04A" emissiveIntensity={0.35} />
      </mesh>

      {/* Compass diamond */}
      <mesh position={[-1.0, 0.2, 0.07]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.5, 0.5, 0.02]} />
        <meshStandardMaterial color="#E8B04A" emissive="#E8B04A" emissiveIntensity={0.35} />
      </mesh>

      {/* Text-like lines */}
      <mesh position={[0.3, 0.3, 0.07]}>
        <boxGeometry args={[1.5, 0.09, 0.015]} />
        <meshStandardMaterial color="#f5f7fb" opacity={0.8} transparent />
      </mesh>
      <mesh position={[0.05, 0.08, 0.07]}>
        <boxGeometry args={[1.0, 0.07, 0.015]} />
        <meshStandardMaterial color="#a9b4c9" opacity={0.7} transparent />
      </mesh>

      {/* Barcode */}
      <group position={[-1.2, -0.65, 0.07]}>
        {BARS.map((w, i) => (
          <mesh key={i} position={[i * 0.12, 0, 0]}>
            <boxGeometry args={[w, 0.35, 0.015]} />
            <meshStandardMaterial color="#f5f7fb" opacity={0.75} transparent />
          </mesh>
        ))}
      </group>
    </group>
  );
}