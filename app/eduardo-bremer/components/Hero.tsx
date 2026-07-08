"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { IMG, WA } from "../data";
import { useParallax } from "../hooks";
import { WaIcon } from "../icons";

export function Hero() {
  const parallaxY = useParallax();

  return (
    <section id="inicio" className="hero" aria-label="Apresentação">
      <div className="heroCopy">
        <span className="eyebrow">Advocacia estratégica</span>
        <h1>
          Advogado Trabalhista, Criminal, Cível e Previdenciário em{" "}
          <em>Mucuri, Teixeira de Freitas e Vitória</em>
        </h1>
        <p className="heroTagline">
          Direito claro para quem precisa de <em>direção</em>.
        </p>
        <p className="heroLead">
          Atendimento presencial e online em todo o Brasil, com análise
          técnica, estratégia e comunicação clara em cada etapa do seu caso.
        </p>
        <div className="actions">
          <a className="btnGold" href={WA} target="_blank" rel="noreferrer">
            <WaIcon /> Falar com Eduardo
          </a>
          <a className="btnGhost" href="#especialidades">
            Ver atuação <ArrowRight size={16} />
          </a>
        </div>
        <div className="heroCreds" aria-label="Credenciais">
          <div className="heroCred">
            <strong>OAB/ES 37.747</strong>
            <span>OAB/BA 83.916</span>
          </div>
          <div className="heroCred">
            <strong>Pós-graduado</strong>
            <span>Direito do Trabalho</span>
          </div>
          <div className="heroCred">
            <strong>Presencial · Online</strong>
            <span>Atendimento em todo o Brasil</span>
          </div>
        </div>
      </div>
      <div className="heroMedia">
        <Image
          className="heroImg"
          src={IMG.hero}
          alt="Dr. Eduardo Bremer, advogado em Mucuri, Teixeira de Freitas e Vitória"
          fill
          sizes="(max-width: 980px) 100vw, 50vw"
          priority
          style={{ transform: `translateY(${parallaxY}px)` }}
        />
      </div>
    </section>
  );
}
