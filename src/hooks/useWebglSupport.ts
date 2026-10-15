"use client";

import { useSyncExternalStore } from "react";

let cached: boolean | null = null;

function detect() {
  if (cached !== null) return cached;
  try {
    const canvas = document.createElement("canvas");
    cached = Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    cached = false;
  }
  return cached;
}

const subscribe = () => () => {};

export function useWebglSupport() {
  return useSyncExternalStore(subscribe, detect, () => false);
}