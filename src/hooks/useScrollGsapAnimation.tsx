import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

interface AnimateProps {
  positions?: THREE.Vector3[];
  rotations?: THREE.Euler[];
  scales?: THREE.Vector3[];
  durations?: number[];
}

const useScrollGsapAnimation = (
  ref: React.RefObject<THREE.Object3D>,
  animations: AnimateProps
) => {
  const tl = useRef<GSAPTimeline | null>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useEffect(() => {
    if (ref.current) {
      tl.current = gsap.timeline();

      const { positions, rotations, scales, durations } = animations;

      if (positions) {
        positions.forEach((pos, i) => {
          tl.current!.to(
            ref.current!.position,
            {
              duration: durations ? durations[i] : 0.5,
              x: pos.x,
              y: pos.y,
              z: pos.z,
            },
            i * 0.5
          );
        });
      }

      if (rotations) {
        rotations.forEach((rot, i) => {
          tl.current!.to(
            ref.current!.rotation,
            {
              duration: durations ? durations[i] : 0.5,
              x: rot.x,
              y: rot.y,
              z: rot.z,
            },
            i * 0.5
          );
        });
      }

      if (scales) {
        scales.forEach((scale, i) => {
          tl.current!.to(
            ref.current!.scale,
            {
              duration: durations ? durations[i] : 0.5,
              x: scale.x,
              y: scale.y,
              z: scale.z,
            },
            i * 0.5
          );
        });
      }
    }
  }, [ref, animations]);
};

export { useScrollGsapAnimation };
