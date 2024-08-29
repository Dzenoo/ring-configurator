import React, { useRef } from "react";
import * as THREE from "three";
import { Center, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useScrollGsapAnimation } from "@/hooks/useScrollGsapAnimation";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "@/store";

const Ring: React.FC = () => {
  const snap = useSnapshot(state);

  const { nodes } = useGLTF("/models/ring.glb") as any;

  const ringRef = useRef<THREE.Group>(null);

  if (snap.intro) {
    useScrollGsapAnimation(ringRef, {
      positions: [new THREE.Vector3(-2.5, -0.5, 0), new THREE.Vector3(0, 0, 0)],
      rotations: [new THREE.Euler(0, 1.5, 0), new THREE.Euler(0, 0.5, 0)],
    });
  }

  // useFrame((state, delta) => {
  //   ringRef.current?.children.forEach((child: any) => {
  //     easing.dampC(child.material, accentColor, 0.25, delta);
  //   });
  // });

  return (
    <Center>
      <group
        position-y={1}
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
            color={state.accentColor}
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
            color={state.gemColor}
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
            color={snap.accentColor}
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
            color={snap.ringColor}
            clearcoat={1}
            clearcoatRoughness={0.5}
          />
        </mesh>
      </group>
    </Center>
  );
};

export default Ring;
