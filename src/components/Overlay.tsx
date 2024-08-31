"use client";
import React, { useEffect, useRef } from "react";
import { Scroll } from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import useStore from "@/store";
import { ArrowDown } from "lucide-react";

const Overlay: React.FC = () => {
  const { setIntro } = useStore();

  return (
    <Scroll html>
      <div className="px-10 w-screen">
        <Section hero>
          <div className="pt-28">
            <div>
              <h1 className="text-7xl font-bold mb-6">
                Design Your <br /> Perfect Ring
              </h1>
            </div>
            <div>
              <p className="text-sm max-w-xl mb-12 font-sans font-extralight">
                Unleash your creativity with our custom ring builder. Choose
                from a variety of colors for the ring, gem, and accents to craft
                a piece that s as unique as you are. Start your journey to
                creating a one-of-a-kind ring today.
              </p>
            </div>
            <div className="animate-bounce">
              <ArrowDown />
            </div>
          </div>
        </Section>
        <Section align="right">
          <div className="flex flex-col gap-5 justify-start">
            <div>
              <h1 className="font-bold text-5xl">Customize Your Ring</h1>
            </div>
            <div className="max-w-xl">
              <p className="text-lg">
                Make your ring stand out by customizing its colors. Choose the
                perfect combination of ring, gem, and accent colors to match
                your style and create a unique piece that s truly yours.
              </p>
            </div>
            <div>
              <button className="font-bold" onClick={() => setIntro(false)}>
                Start Customizing
              </button>
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
