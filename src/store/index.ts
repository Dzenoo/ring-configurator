"use client";
import { proxy } from "valtio";

const state = proxy({
  intro: true,
  ringColor: "gold",
  gemColor: "#b9f2ff",
  accentColor: "lightblue",
});

export default state;
