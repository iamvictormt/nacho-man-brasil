"use client";

import { useEffect } from "react";

export function HashScrollManager() {
  useEffect(() => {
    const handleHashClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const clickedElement = event.target instanceof Element ? event.target : null;
      const link = clickedElement?.closest<HTMLAnchorElement>('a[href*="#"]');

      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      const isCurrentPage =
        destination.origin === window.location.origin &&
        destination.pathname === window.location.pathname;

      if (!isCurrentPage || !destination.hash) return;

      const targetId = decodeURIComponent(destination.hash.slice(1));
      const target = document.getElementById(targetId);

      if (!target) return;

      event.preventDefault();

      if (window.location.hash !== destination.hash) {
        window.history.pushState(
          null,
          "",
          `${destination.pathname}${destination.search}${destination.hash}`,
        );
      }

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    };

    document.addEventListener("click", handleHashClick, true);
    return () => document.removeEventListener("click", handleHashClick, true);
  }, []);

  return null;
}
