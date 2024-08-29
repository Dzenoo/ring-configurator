import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const CameraRig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const group = useRef<any>(null);

  useFrame((state, delta) => {
    easing.dampE(
      group.current!.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
