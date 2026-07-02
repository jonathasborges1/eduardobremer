import { useEffect, useState } from "react";

/**
 * Tracks page scroll to drive the sticky-header shadow state and the
 * hero image's parallax offset.
 */
export function useHeaderScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setParallaxY(window.scrollY * 0.12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, parallaxY };
}

/** Adds the `revealed` class to every `[data-reveal]` element once it enters the viewport. */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/**
 * Calls `close(null)` whenever the Escape key is pressed. Pass a stable
 * setState setter (e.g. `setMapModal`) so the listener is attached once.
 */
export function useEscapeKey(close: (value: null) => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
