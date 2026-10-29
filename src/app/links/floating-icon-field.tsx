"use client";

import { useEffect, useRef, type ComponentType, type SVGProps } from "react";

import {
  IconAbacate,
  IconBurrito,
  IconCacto,
  IconCoracao,
  IconFogo,
  IconMaracas,
  IconNachos,
  IconPimenta,
  IconSombrero,
  IconTaco,
} from "@/components/brand-icons";
import styles from "./links.module.css";

const icons: ComponentType<SVGProps<SVGSVGElement>>[] = [
  IconAbacate,
  IconBurrito,
  IconCacto,
  IconCoracao,
  IconFogo,
  IconMaracas,
  IconNachos,
  IconPimenta,
  IconSombrero,
  IconTaco,
];

export function FloatingIconField() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    if (!field || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const floatingElements = field.querySelectorAll<HTMLElement>("[data-floating-icon]");
    const isTouchLayout =
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(hover: none)").matches;

    let pointerX = 0;
    let pointerY = 0;
    let scrollPosition = window.scrollY;
    let frame = 0;

    const moveIcons = () => {
      frame = 0;

      floatingElements.forEach((element, index) => {
        const depth = 7 + (index % 4) * 4;
        const horizontalDirection = index % 2 === 0 ? 1 : -1;
        const verticalDirection = index % 3 === 0 ? 1 : -1;
        let x = 0;
        let y = 0;
        let rotation = 0;

        if (isTouchLayout) {
          const phase = scrollPosition * 0.012 + index * 1.7;
          x = Math.sin(phase) * depth * 0.45;
          y = Math.cos(phase) * depth * 0.45;
          rotation = Math.sin(phase * 0.5) * 5;
        } else {
          x = pointerX * depth * horizontalDirection;
          y = pointerY * depth * 0.65 * verticalDirection;
          rotation = pointerX * horizontalDirection * (2 + (index % 3) * 1.3);
        }

        element.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`;
      });
    };

    const scheduleMove = () => {
      if (!frame) frame = window.requestAnimationFrame(moveIcons);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = (event.clientX / window.innerWidth) * 2 - 1;
      pointerY = (event.clientY / window.innerHeight) * 2 - 1;
      scheduleMove();
    };

    const handleScroll = () => {
      scrollPosition = window.scrollY;
      scheduleMove();
    };

    const resetPointer = () => {
      pointerX = 0;
      pointerY = 0;
      scheduleMove();
    };

    if (isTouchLayout) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    } else {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      window.addEventListener("blur", resetPointer);
    }

    return () => {
      if (isTouchLayout) {
        window.removeEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("blur", resetPointer);
      }
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.iconField} ref={fieldRef} aria-hidden="true">
      {icons.map((Icon, index) => (
        <span className={styles.floatingIcon} data-floating-icon key={index}>
          <Icon className={`${styles.floatingSvg} ${styles.floatingSvgNeon}`} />
          <Icon className={styles.floatingSvg} />
        </span>
      ))}
    </div>
  );
}
