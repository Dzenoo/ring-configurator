import React from "react";
import { Scroll } from "@react-three/drei";

const Overlay: React.FC = () => {
  return (
    <Scroll html>
      <div className="px-10 w-screen">
        <Section hero>Discover Your Perfect Ring</Section>
        <Section align="right">
          <div className="flex flex-col gap-5 justify-start pt-60">
            <div>
              <h1 className="font-bold text-5xl text-white">
                Custom Gemstones
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="text-lg text-white">
                Choose from a range of exquisite gemstones to craft a ring
                that's uniquely yours. Whether you prefer a classic diamond or a
                vibrant sapphire, find the perfect stone with ease.
              </p>
            </div>
          </div>
        </Section>
        <Section align="left">
          <div className="flex flex-col gap-5 justify-start">
            <div>
              <h1 className="font-bold text-5xl text-white">Metal Choices</h1>
            </div>
            <div className="max-w-xl">
              <p className="text-lg text-white">
                Select from premium metals to complement your style. Choose from
                timeless gold, platinum, or contemporary titanium to ensure your
                ring looks stunning and lasts a lifetime.
              </p>
            </div>
          </div>
        </Section>
        <Section align="right">
          <div className="flex flex-col gap-5 justify-start">
            <div>
              <h1 className="font-bold text-5xl text-white">Band Styles</h1>
            </div>
            <div className="max-w-xl">
              <p className="text-lg text-white">
                Explore various band styles to find the perfect fit. Whether you
                prefer a sleek modern band or a vintage-inspired design,
                visualize and select the ideal band to match your gemstone.
              </p>
            </div>
          </div>
        </Section>
        <Section align="left">
          <div className="flex flex-col gap-5 justify-start">
            <div>
              <h1 className="font-bold text-5xl text-white">
                Engraving Options
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="text-lg text-white">
                Add a personal touch with custom engraving. Whether it’s a
                special date, initials, or a heartfelt message, make your ring
                even more special with our engraving options.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </Scroll>
  );
};

const Section = ({
  children,
  hero,
  align,
}: {
  hero?: boolean;
  children: React.ReactNode;
  align?: "left" | "right" | "center";
}) => {
  const alignmentClass =
    align === "right"
      ? "flex flex-col items-end"
      : align === "left"
      ? "flex flex-col items-start"
      : "flex flex-col items-center";

  return (
    <section className={`py-10 h-screen w-full ${hero ? "" : alignmentClass}`}>
      {children}
    </section>
  );
};

export default Overlay;
