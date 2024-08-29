import state from "@/store";
import React from "react";
import { useSnapshot } from "valtio";

const Customizer: React.FC = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute">
      <button onClick={() => (state.intro = true)}>Exit</button>
    </div>
  );
};

export default Customizer;
