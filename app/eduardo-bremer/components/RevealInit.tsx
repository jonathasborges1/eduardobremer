"use client";

import { useScrollReveal } from "../hooks";

/** Mounts the scroll-reveal observer over the server-rendered sections. */
export function RevealInit() {
  useScrollReveal();
  return null;
}
