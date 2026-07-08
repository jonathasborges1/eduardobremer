"use client";

import { useState } from "react";
import { useScrolled } from "../hooks";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";

/** Client-side shell: sticky header state + mobile menu toggle. */
export function SiteChrome() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <>
      <Header scrolled={scrolled} open={open} onToggleMenu={() => setOpen(!open)} />
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
