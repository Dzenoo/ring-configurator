"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Suspense } from "react";
import Overlay from "@/components/Overlay";
import Ring from "@/components/canvas/Ring";
import CameraRig from "@/components/canvas/CameraRig";
import useStore from "@/store";
import Customizer from "@/components/Customizer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const { intro } = useStore();

  return (
    <>
      {!intro && <Customizer />}
      <LoadingScreen />
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [5, 5, 10], fov: 29 }}
      >
        <color args={["#ffda75"]} attach="background" />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 7.5]} intensity={5} />

        {intro && (
          <ScrollControls pages={2} damping={0.5}>
            <Overlay />
            <Suspense fallback={null}>
              <CameraRig>
                <Ring />
              </CameraRig>
            </Suspense>
          </ScrollControls>
        )}

        {!intro && (
          <>
            <OrbitControls
              autoRotate
              enableZoom={false}
              enableDamping={true}
              enablePan={false}
            />
            <Suspense fallback={null}>
              <Ring />
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
