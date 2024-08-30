import { create } from "zustand";

interface State {
  intro: boolean;
  ringColor: string;
  gemColor: string;
  accentColor: string;
  tabOpen: string;
  setIntro: (intro: boolean) => void;
  setRingColor: (color: string) => void;
  setGemColor: (color: string) => void;
  setAccentColor: (color: string) => void;
  setTabOpen: (tab: string) => void;
}

const useStore = create<State>((set) => ({
  intro: true,
  ringColor: "gold",
  gemColor: "#b9f2ff",
  accentColor: "lightblue",
  tabOpen: "",
  setIntro: (intro) => set({ intro }),
  setRingColor: (color) => set({ ringColor: color }),
  setGemColor: (color) => set({ gemColor: color }),
  setAccentColor: (color) => set({ accentColor: color }),
  setTabOpen: (tab) => set({ tabOpen: tab }),
}));

export default useStore;
