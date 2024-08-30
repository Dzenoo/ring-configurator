"use client";
import React from "react";
import useStore from "@/store";
import Tabs from "./Tabs";

const Customizer: React.FC = () => {
  const { setIntro } = useStore();

  return (
    <div className="absolute z-10">
      <button className="fixed right-0 p-5" onClick={() => setIntro(true)}>
        Exit
      </button>
      <Tabs />
    </div>
  );
};

export default Customizer;
