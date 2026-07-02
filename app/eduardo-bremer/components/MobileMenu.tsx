import { WA, nav } from "../data";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <nav id="eb-mobile-menu" className="mobile open" aria-label="Navegação mobile">
      {nav.map((item) => (
        <a key={item.href} href={item.href} onClick={onClose}>
          {item.label}
        </a>
      ))}
      <a href={WA} target="_blank" rel="noreferrer" onClick={onClose}>
        Falar no WhatsApp
      </a>
    </nav>
  );
}
