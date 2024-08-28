import React from "react";
import { Center, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";

const Ring: React.FC = () => {
  const { nodes } = useGLTF("/models/ring.glb") as any;

  return (
    <Center>
      <group dispose={null}>
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
            color="#b9f2ff"
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
          <meshStandardMaterial metalness={1.0} roughness={0.1} color="gold" />
        </mesh>
        <mesh
          geometry={nodes.circle.geometry}
          position={[0, 2.942, 0]}
          scale={[0.512, 0.197, 0.512]}
        >
          <meshStandardMaterial
            roughness={0.1}
            metalness={0.9}
            color="lightblue"
          />
        </mesh>
        <mesh
          geometry={nodes.ring.geometry}
          rotation={[Math.PI / 2, 0, 0]}
          scale={2.228}
        >
          <meshStandardMaterial metalness={1.0} roughness={0.1} color="gold" />
        </mesh>
      </group>
    </Center>
  );
};

export default Ring;
