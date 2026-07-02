import { ExternalLink, MapPin, X } from "lucide-react";
import type { OfficeLocation } from "../data";

export function MapModal({
  office,
  onClose,
}: {
  office: OfficeLocation | null;
  onClose: () => void;
}) {
  return (
    <div
      className={`mapModal${office ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={office?.city ?? "Mapa"}
    >
      <div className="mapModalBackdrop" onClick={onClose} />
      <div className="mapModalBox">
        <div className="mapModalHead">
          <div className="mapModalTitle">
            <MapPin size={14} style={{ color: "var(--gold)" }} />
            {office?.city}
            <span>Escritório</span>
          </div>
          <div className="mapModalActions">
            <a
              className="mapModalLink"
              href={office?.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={11} /> Abrir no Google Maps
            </a>
            <button className="mapModalClose" onClick={onClose} aria-label="Fechar">
              <X size={16} />
            </button>
          </div>
        </div>
        {office && (
          <iframe
            key={office.mapEmbedSrc}
            className="mapModalFrame"
            src={office.mapEmbedSrc}
            title={office.city}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
