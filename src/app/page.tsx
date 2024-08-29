"use client";

import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import Overlay from "@/components/Overlay";
import Ring from "@/components/canvas/Ring";
import CameraRig from "@/components/canvas/CameraRig";

export default function Home() {
  const [gemColor, setGemColor] = useState("#b9f2ff");
  const [ringColor, setRingColor] = useState("gold");
  const [accentColor, setAccentColor] = useState("lightblue");

  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [5, 5, 10], fov: 29 }}
    >
      <color args={["#ffda75"]} attach="background" />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7.5]} intensity={5} />

      <ScrollControls pages={2} damping={0.5}>
        <Overlay />
        <Suspense fallback={null}>
          <CameraRig>
            <Ring
              gemColor={gemColor}
              ringColor={ringColor}
              accentColor={accentColor}
            />
          </CameraRig>
        </Suspense>
      </ScrollControls>

      <Environment environmentIntensity={1} preset="city" background={false} />

      <EffectComposer>
        <Bloom
          intensity={0.2}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.1}
        />
      </EffectComposer>
    </Canvas>
  );
}
