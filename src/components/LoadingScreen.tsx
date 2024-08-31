import React, { useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

const LoadingScreen: React.FC = () => {
  const { progress, active } = useProgress();
  const loadingScreenRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(progressBarRef.current, {
      width: `${progress}%`,
      duration: 0.3,
      ease: "power1.out",
    });

    if (progress === 100 && !active) {
      gsap.to(loadingScreenRef.current, {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          if (loadingScreenRef.current) {
            loadingScreenRef.current.style.display = "none";
          }
        },
      });
    }
  }, [progress, active]);

  return (
    <div
      ref={loadingScreenRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#ffda75] z-50"
    >
      <div className="text-xl mb-4">Loading... {Math.round(progress)}%</div>
      <div className="w-full h-0.5">
        <div
          ref={progressBarRef}
          className="h-0.5 bg-white"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
