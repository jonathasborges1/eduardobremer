import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { IMG, WA } from "../data";
import { WaIcon } from "../icons";

export function Hero({ parallaxY }: { parallaxY: number }) {
  return (
    <section id="inicio" className="hero" aria-label="Apresentação">
      <div className="heroCopy">
        <span className="eyebrow">Advocacia estratégica</span>
        <h1>
          Direito claro para quem precisa de <em>direção</em>.
        </h1>
        <p className="heroLead">
          Atendimento jurídico presencial em Mucuri/BA, Teixeira de
          Freitas/BA e Vitória/ES, com orientação online para quem precisa
          agir com segurança nas áreas Criminal, Cível, Trabalhista e
          Previdenciária.
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
            <strong>Criminal · Cível</strong>
            <span>Trabalhista · Prev.</span>
          </div>
          <div className="heroCred">
            <strong>Presencial · Online</strong>
            <span>Mucuri/BA · Teixeira de Freitas/BA · Vitória/ES</span>
          </div>
        </div>
      </div>
      <div className="heroMedia" aria-hidden="true">
        <Image
          className="heroImg"
          src={IMG.hero}
          alt=""
          fill
          sizes="(max-width: 980px) 100vw, 50vw"
          priority
          style={{ transform: `translateY(${parallaxY}px)` }}
        />
      </div>
    </section>
  );
}
