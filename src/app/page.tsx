"use client";

import Ring from "@/components/Ring";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [5, 5, 10], fov: 45 }}>
      <color args={["#ffda75"]} attach="background" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7.5]} intensity={1} />
      <Suspense fallback={null}>
        <Ring />
      </Suspense>
      <Environment preset="city" background={false} />
      <OrbitControls />
    </Canvas>
  );
}
