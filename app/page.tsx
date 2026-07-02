"use client";

import { useState } from "react";
import "./globals.css";
import "./eduardo-bremer/eduardo-bremer.css";
import { ComoFunciona } from "./eduardo-bremer/components/ComoFunciona";
import { Especialidades } from "./eduardo-bremer/components/Especialidades";
import { FinalFooter } from "./eduardo-bremer/components/FinalFooter";
import { Header } from "./eduardo-bremer/components/Header";
import { Hero } from "./eduardo-bremer/components/Hero";
import { Localizacao } from "./eduardo-bremer/components/Localizacao";
import { MapModal } from "./eduardo-bremer/components/MapModal";
import { MobileMenu } from "./eduardo-bremer/components/MobileMenu";
import { Sobre } from "./eduardo-bremer/components/Sobre";
import { WaFloat } from "./eduardo-bremer/components/WaFloat";
import type { OfficeLocation } from "./eduardo-bremer/data";
import { useEscapeKey, useHeaderScroll, useScrollReveal } from "./eduardo-bremer/hooks";

export default function EduardoBremerPage() {
  const [open, setOpen] = useState(false);
  const [mapModal, setMapModal] = useState<OfficeLocation | null>(null);
  const { scrolled, parallaxY } = useHeaderScroll();

  useScrollReveal();
  useEscapeKey(setMapModal);

  return (
    <>
      <main className="eb">
        <Header scrolled={scrolled} open={open} onToggleMenu={() => setOpen(!open)} />
        <MobileMenu open={open} onClose={() => setOpen(false)} />

        <Hero parallaxY={parallaxY} />
        <Sobre />
        <Especialidades />
        <ComoFunciona />
        <Localizacao onOpenMap={setMapModal} />
        <FinalFooter />
      </main>

      <WaFloat />
      <MapModal office={mapModal} onClose={() => setMapModal(null)} />
    </>
  );
}
