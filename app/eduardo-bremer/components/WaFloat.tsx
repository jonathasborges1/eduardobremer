import { WA } from "../data";
import { WaIcon } from "../icons";

export function WaFloat() {
  return (
    <a
      className="waFloat"
      href={WA}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com Dr. Eduardo Bremer pelo WhatsApp"
    >
      <WaIcon size={28} />
    </a>
  );
}
