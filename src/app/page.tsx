"use client";

import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Suspense } from "react";
import Overlay from "@/components/Overlay";
import Ring from "@/components/canvas/Ring";
import CameraRig from "@/components/canvas/CameraRig";
import { useSnapshot } from "valtio";
import state from "@/store";
import Customizer from "@/components/Customizer";

export default function Home() {
  const snap = useSnapshot(state);

  return (
    <>
      {!snap.intro && <Customizer />}
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [5, 5, 10], fov: 29 }}
      >
        <color args={["#ffda75"]} attach="background" />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 7.5]} intensity={5} />

        {snap.intro && (
          <ScrollControls pages={2} damping={0.5}>
            <Overlay />
            <Suspense fallback={null}>
              <CameraRig>
                <Ring />
              </CameraRig>
            </Suspense>
          </ScrollControls>
        )}

        {!snap.intro && (
          <>
            <OrbitControls />
            <Suspense fallback={null}>
              <CameraRig>
                <Ring />
              </CameraRig>
            </Suspense>
          </>
        )}

        <Environment
          environmentIntensity={1}
          preset="city"
          background={false}
        />

        <EffectComposer>
          <Bloom
            intensity={0.2}
            luminanceThreshold={0.5}
            luminanceSmoothing={0.1}
          />
        </EffectComposer>
      </Canvas>
    </>
  );
}
