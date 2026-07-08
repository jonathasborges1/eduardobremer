import { JsonLd } from "./eduardo-bremer/JsonLd";
import { ComoFunciona } from "./eduardo-bremer/components/ComoFunciona";
import { Especialidades } from "./eduardo-bremer/components/Especialidades";
import { Faq } from "./eduardo-bremer/components/Faq";
import { FinalFooter } from "./eduardo-bremer/components/FinalFooter";
import { Hero } from "./eduardo-bremer/components/Hero";
import { Localizacao } from "./eduardo-bremer/components/Localizacao";
import { RevealInit } from "./eduardo-bremer/components/RevealInit";
import { SiteChrome } from "./eduardo-bremer/components/SiteChrome";
import { Sobre } from "./eduardo-bremer/components/Sobre";
import { WaFloat } from "./eduardo-bremer/components/WaFloat";

export default function EduardoBremerPage() {
  return (
    <>
      <main className="eb">
        <SiteChrome />

        <Hero />
        <Sobre />
        <Especialidades />
        <ComoFunciona />
        <Localizacao />
        <Faq />
        <FinalFooter />
      </main>

      <WaFloat />
      <RevealInit />
      <JsonLd />
    </>
  );
}
