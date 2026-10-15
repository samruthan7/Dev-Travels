"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import { TravelPass } from "@/components/three/TravelPass";

export default function HeroScene() {
  const reduced = useReducedMotion();

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 35 }}
      gl={{ alpha: true, antialias: true }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={1.6} />
      <pointLight position={[-4, 1, -2]} intensity={12} color="#7aa2ff" />
      {/* Built-in lighting shapes: no file download needed */}
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={4} position={[0, 4, 3]} scale={[8, 2, 1]} />
        <Lightformer form="rect" intensity={2} color="#7aa2ff" position={[-5, 0, -2]} scale={[2, 6, 1]} />
        <Lightformer form="rect" intensity={2} color="#e8b04a" position={[5, -1, -1]} scale={[2, 5, 1]} />
      </Environment>
      <TravelPass interactive={!reduced} />
    </Canvas>
  );
}