import Image from "next/image";
import { Instagram } from "lucide-react";
import { IG, IMG, WA, footerTags, nav } from "../data";
import { WaIcon } from "../icons";

export function FinalFooter() {
  return (
    <section className="final" aria-label="Próximo passo e rodapé">
      <div className="wrap">
        <div className="finalBox" data-reveal="">
          <span className="label">Próximo passo</span>
          <h2 className="title">Seu caso merece uma orientação clara.</h2>
          <p className="lead">
            Entre em contato pelo WhatsApp, informe sua situação e receba
            orientação sobre o melhor caminho para o seu caso.
          </p>
          <div className="finalActions">
            <a className="btnGold" href={WA} target="_blank" rel="noreferrer">
              <WaIcon size={20} /> Iniciar conversa
            </a>
          </div>
        </div>

        <footer className="footer">
          <div className="footerBody">
            <div className="footerBrand" data-reveal="" data-delay="0">
              <div className="footerLogo">
                <Image
                  src={IMG.logoTransparent}
                  alt="Dr. Eduardo Bremer Advocacia"
                  fill
                  sizes="230px"
                />
              </div>
              <span className="footerRole">Advocacia estratégica</span>
              <span className="footerOab">OAB/ES 37.747 · OAB/BA 83.916</span>
              <p>
                Atendimento jurídico presencial em Mucuri/BA, Teixeira de
                Freitas/BA e Vitória/ES, com orientação online nas áreas
                Criminal, Cível, Trabalhista e Previdenciária.
              </p>
              <p className="footerAddr">
                Rua Severino Vieira, 83 · Mucuri/BA
                <br />
                Rua do Haiti, 260 · Bela Vista · Teixeira de Freitas/BA
                <br />
                Av. Scherrer Souza, 2230 · Sala 401 · Vitória/ES
              </p>
              <div className="footerTags">
                {footerTags.map((tag) => (
                  <span className="footerTag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <nav
              className="footerCol"
              aria-label="Navegação no rodapé"
              data-reveal=""
              data-delay="120"
            >
              <h4>Navegação</h4>
              {nav.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <a href={WA} target="_blank" rel="noreferrer">
                Falar com Eduardo
                <span className="sr"> (abre em nova aba)</span>
              </a>
            </nav>

            <div className="footerCol" data-reveal="" data-delay="240">
              <h4>Contato</h4>
              <a href={WA} target="_blank" rel="noreferrer">
                <WaIcon size={14} /> WhatsApp
                <span className="sr"> (abre em nova aba)</span>
              </a>
              <a href={IG} target="_blank" rel="noreferrer">
                <Instagram size={14} /> @ehbremer.adv
                <span className="sr"> (abre em nova aba)</span>
              </a>
            </div>
          </div>

          <hr className="footerLine" />
          <div className="footerBottom">
            <span>
              © 2026 Dr. Eduardo Bremer · Advocacia · OAB/ES 37.747 · OAB/BA
              83.916
            </span>
            <span>
              Desenvolvido por{" "}
              <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
                LumaSites<span className="sr"> (abre em nova aba)</span>
              </a>
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
