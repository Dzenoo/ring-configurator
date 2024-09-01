"use client";
import React, { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { Center, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useScrollGsapAnimation } from "@/hooks/useScrollGsapAnimation";
import useStore from "@/store";

const Ring: React.FC = () => {
  const { intro, ringColor, gemColor, accentColor } = useStore();
  const { nodes } = useGLTF("/models/ring.glb") as any;
  const ringRef = useRef<THREE.Group>(null);

  if (intro) {
    useScrollGsapAnimation(ringRef, {
      positions: [new THREE.Vector3(-2.5, -0.5, 0), new THREE.Vector3(0, 0, 0)],
      rotations: [new THREE.Euler(0, 1.5, 0), new THREE.Euler(0, 0.5, 0)],
    });
  }

  useLayoutEffect(() => {
    const updateScale = () => {
      if (ringRef.current) {
        const screenWidth = window.innerWidth;
        const scale = screenWidth < 768 ? 0.7 : 1;
        ringRef.current.scale.set(scale, scale, scale);
      }
    };

    window.addEventListener("resize", updateScale);
    updateScale();

    return () => {
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <Center>
      <group
        position={[0, 1, 0]}
        rotation={[0.8, 1.5, 0]}
        ref={ringRef}
        dispose={null}
      >
        <mesh
          geometry={nodes.circle.geometry}
          position={[0, 2.942, 0]}
          scale={[0.512, 0.197, 0.512]}
        >
          <meshStandardMaterial
            roughness={0.1}
            metalness={0.9}
            color={accentColor}
          />
        </mesh>
        <mesh
          geometry={nodes.gem.geometry}
          position={[0, 3.951, 0]}
          scale={1.018}
        >
          <MeshTransmissionMaterial
            transmission={0.95}
            roughness={0.02}
            thickness={2.0}
            chromaticAberration={0.03}
            ior={2.417}
            color={gemColor}
            reflectivity={1.0}
            clearcoat={1.0}
            clearcoatRoughness={0.0}
            attenuationDistance={0.5}
            attenuationColor="white"
          />
        </mesh>
        <mesh
          geometry={nodes.sticks.geometry}
          position={[0, 3.951, 0]}
          scale={1.018}
        >
          <meshStandardMaterial
            metalness={1.0}
            roughness={0.1}
            color={accentColor}
          />
        </mesh>
        <mesh
          geometry={nodes.ring.geometry}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2.228}
        >
          <meshPhysicalMaterial
            roughness={0.1}
            metalness={1.0}
            color={ringColor}
            clearcoat={1}
            clearcoatRoughness={0.5}
          />
        </mesh>
      </group>
    </Center>
  );
};

export default Ring;
