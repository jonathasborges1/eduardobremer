import { Building2, ExternalLink, MapPin, Smartphone } from "lucide-react";
import { offices, type OfficeLocation } from "../data";

export function Localizacao({
  onOpenMap,
}: {
  onOpenMap: (office: OfficeLocation) => void;
}) {
  return (
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
            <Smartphone size={14} /> +55 73 9811-7194
          </div>
          <div className="locationBarItem">
            <Building2 size={14} /> Presencial · Online
          </div>
          <div className="locationBarItem">
            <MapPin size={14} /> Mucuri/BA · Teixeira de Freitas/BA · Vitória/ES
          </div>
        </div>
        <div className="mapsCards">
          {offices.map((office) => (
            <button
              className="mapCard"
              key={office.city}
              onClick={() => onOpenMap(office)}
              data-reveal=""
              data-delay={office.revealDelay}
            >
              <iframe
                src={office.mapEmbedSrc}
                title={office.iframeTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
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
  );
}
