"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type PendingNavigation = {
  pathname: string;
  hash: string;
};

export function RouteScrollManager() {
  const pathname = usePathname();
  const router = useRouter();
  const pendingNavigation = useRef<PendingNavigation | null>(null);

  useEffect(() => {
    const destination = pendingNavigation.current;
    if (!destination || destination.pathname !== pathname) return;

    pendingNavigation.current = null;
    let frame = 0;

    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth";

        if (destination.hash) {
          const targetId = decodeURIComponent(destination.hash.slice(1));
          const target = document.getElementById(targetId);

          if (target) {
            target.scrollIntoView({ behavior, block: "start" });
            return;
          }
        }

        window.scrollTo({ top: 0, behavior });
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const handleNavigation = (event: MouseEvent) => {
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
      const link = clickedElement?.closest<HTMLAnchorElement>("a[href]");

      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname === pathname) return;

      event.preventDefault();
      pendingNavigation.current = {
        pathname: destination.pathname,
        hash: destination.hash,
      };
      router.push(`${destination.pathname}${destination.search}${destination.hash}`, {
        scroll: false,
      });
    };

    document.addEventListener("click", handleNavigation, true);
    return () => document.removeEventListener("click", handleNavigation, true);
  }, [pathname, router]);

  return null;
}
