"use client";
import React, { useEffect, useRef } from "react";
import { Scroll } from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import useStore from "@/store";

const Overlay: React.FC = () => {
  const { setIntro } = useStore();

  return (
    <Scroll html>
      <div className="px-10 w-screen">
        <Section hero>Discover Your Perfect Ring</Section>
        <Section align="right">
          <div className="flex flex-col gap-5 justify-start">
            <div>
              <h1 className="font-bold text-5xl">Engraving Options</h1>
            </div>
            <div className="max-w-xl">
              <p className="text-lg">
                Add a personal touch with custom engraving. Whether it’s a
                special date, initials, or a heartfelt message, make your ring
                even more special with our engraving options.
              </p>
            </div>
            <div>
              <button onClick={() => setIntro(false)}>Customize It</button>
            </div>
          </div>
        </Section>
      </div>
    </Scroll>
  );
};

const Section: React.FC<{
  children: React.ReactNode;
  hero?: boolean;
  align?: "left" | "right" | "center";
}> = ({ children, hero, align }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const gsapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inView) {
      const element = gsapRef.current;
      if (element) {
        gsap.fromTo(
          element.querySelectorAll(".item-div"),
          {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            opacity: 0,
            y: 75,
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.1,
            ease: "power4.inOut",
          }
        );
      }
    } else {
      gsap.set(gsapRef.current?.querySelectorAll(".item-div") as any, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", // Hidden
        opacity: 0,
        y: 75,
      });
    }
  }, [inView]);

  const alignmentClass =
    align === "right"
      ? "flex flex-col items-end"
      : align === "left"
      ? "flex flex-col items-start"
      : "flex flex-col items-center";

  return (
    <section
      ref={gsapRef}
      className={`py-10 h-screen w-full ${hero ? "" : alignmentClass}`}
    >
      <div ref={ref}>
        <div className="item-div">{children}</div>
      </div>
    </section>
  );
};

export default Overlay;
