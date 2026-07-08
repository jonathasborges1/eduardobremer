"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, ExternalLink, MapPin, Smartphone } from "lucide-react";
import { PHONE, offices, type OfficeLocation } from "../data";
import { useEscapeKey } from "../hooks";
import { MapModal } from "./MapModal";

export function Localizacao() {
  const [mapModal, setMapModal] = useState<OfficeLocation | null>(null);
  const [showMaps, setShowMaps] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEscapeKey(setMapModal);

  // Adia a montagem dos iframes do Google Maps até a seção se aproximar do
  // viewport; no mobile (≤560px) os mapas inline ficam com display:none, então
  // nunca são montados — o modal carrega o próprio iframe sob demanda.
  useEffect(() => {
    if (window.matchMedia("(max-width: 560px)").matches) return;
    const el = cardsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShowMaps(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="contato" className="section" aria-label="Localização e Contato">
        <div className="wrap">
          <div className="sectionHead locationHead" data-reveal="">
            <div className="sectionHeadText">
              <span className="label">Localização</span>
              <h2 className="title">
                <span className="desktopOnly">
                  Atendimento em Mucuri/BA, Teixeira de Freitas/BA, Vitória/ES
                  e online.
                </span>
                <span className="mobileOnly">Atendimento presencial e online</span>
              </h2>
            </div>
            <p className="lead">
              Atendimento presencial nos três endereços e orientação online
              pelo WhatsApp para avaliar o melhor encaminhamento do seu caso.
            </p>
          </div>
          <div className="locationBar" data-reveal="" data-delay="120">
            <div className="locationBarItem">
              <Smartphone size={14} /> {PHONE}
            </div>
            <div className="locationBarItem">
              <Building2 size={14} /> Presencial · Online
            </div>
            <div className="locationBarItem">
              <MapPin size={14} /> Três escritórios · Bahia e Espírito Santo
            </div>
          </div>
          <div className="mapsCards" ref={cardsRef}>
            {offices.map((office) => (
              <button
                className="mapCard"
                key={office.city}
                onClick={() => setMapModal(office)}
                data-reveal=""
                data-delay={office.revealDelay}
              >
                {showMaps ? (
                  <iframe
                    src={office.mapEmbedSrc}
                    title={office.iframeTitle}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                ) : (
                  <span className="mapCardPlaceholder" aria-hidden="true" />
                )}
                <span className="mapCardOpen">
                  <ExternalLink size={10} /> Ver no mapa
                </span>
                <div className="mapCardInfo">
                  <span className="mapCardAccent" />
                  <span className="mapCardCity">{office.city}</span>
                  <span className="mapCardAddr">{office.address}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <MapModal office={mapModal} onClose={() => setMapModal(null)} />
    </>
  );
}
