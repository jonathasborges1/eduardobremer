import Image from "next/image";
import { IMG, WA, nav } from "../data";
import { MenuIcon, WaIcon } from "../icons";

export function Header({
  scrolled,
  open,
  onToggleMenu,
}: {
  scrolled: boolean;
  open: boolean;
  onToggleMenu: () => void;
}) {
  return (
    <header className={`nav${scrolled ? " on" : ""}`}>
      <div className="navin">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brandLogo" aria-hidden="true">
            <Image src={IMG.logoHorizontal} alt="" fill sizes="214px" priority />
          </span>
          <span className="brandMeta">
            <span>OAB/ES 37.747</span>
            <span>OAB/BA 83.916</span>
          </span>
        </a>
        <nav className="links" aria-label="Navegação principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="cta" href={WA} target="_blank" rel="noreferrer">
            <WaIcon size={15} /> WhatsApp
          </a>
        </nav>
        <button
          className="menu"
          type="button"
          onClick={onToggleMenu}
          aria-label="Abrir menu"
          aria-expanded={open}
          aria-controls="eb-mobile-menu"
        >
          <MenuIcon open={open} />
        </button>
      </div>
    </header>
  );
}
