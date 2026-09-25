"use client";

import { useState } from "react";
import { Star } from "lucide-react";

import { BodyCopy, DisplayTitle, Eyebrow } from "@/components/editorial";

const reviews = [
  {
    name: "Maria. M B",
    quote:
      "Melhor comida mexicana da cidade, da cidade não, do país! Hehehe. Já comi em Blumenau e sempre que vou em Balneário como lá também. Os tacos de camarão são a melhor pedida.",
  },
  {
    name: "Karine S",
    quote:
      "A comida é muito boa. O ambiente é muito divertido, cheio de referência e detalhes que remetem a cultura mexicana. Os pratos chegaram bem rápido. Foi uma ótima experiência.",
  },
  {
    name: "B. Lum",
    quote:
      "Tudo extremamente saboroso, a guacamole é sensacional! Atendimento excelente, ambiente ótimo. Super recomendo.",
  },
];

export function ReviewShowcase() {
  const [activeReview, setActiveReview] = useState(0);
  const review = reviews[activeReview];

  return (
    <div>
      <div className="grid gap-7 pb-9 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-16 lg:pb-12">
        <div>
          <DisplayTitle className="max-w-[12ch] text-background">
            O que estão <span className="text-primary">falando por aí.</span>
          </DisplayTitle>
        </div>
      </div>

      <div className="relative isolate grid min-h-[31rem] place-items-center overflow-hidden border-b border-primary/45 py-14 sm:min-h-[34rem] sm:py-20">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-3 top-8 -z-10 font-display text-[13rem] leading-none text-primary/[0.08] sm:text-[18rem]"
        >
          “
        </span>

        <figure
          key={review.name}
          className="mx-auto max-w-5xl text-center text-background motion-safe:animate-[rise-in_450ms_cubic-bezier(0.16,1,0.3,1)_both]"
          aria-live="polite"
        >
          <div className="mb-7 flex justify-center gap-1.5 text-primary" aria-label="5 de 5 estrelas">
            {Array.from({ length: 5 }).map((_, star) => (
              <Star key={star} className="size-5 fill-current" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="font-heading text-[clamp(1.75rem,3.4vw,3.65rem)] font-bold leading-[1.12]">
            “{review.quote}”
          </blockquote>
          <figcaption className="mt-9">
            <cite className="inline-block bg-primary px-5 py-2.5 not-italic text-xs font-extrabold uppercase tracking-[0.16em] text-foreground">
              {review.name}
            </cite>
          </figcaption>
        </figure>
      </div>

      <div className="grid grid-cols-3" aria-label="Escolha uma avaliação">
        {reviews.map((item, index) => {
          const isActive = index === activeReview;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveReview(index)}
              aria-pressed={isActive}
              className={`flex min-h-20 flex-col items-start justify-center gap-1 border-r border-background/15 px-3 text-left uppercase transition-colors last:border-r-0 sm:min-h-24 sm:px-6 ${
                isActive
                  ? "bg-primary text-foreground"
                  : "text-background/50 hover:bg-primary/[0.07] hover:text-background"
              }`}
            >
              <span className="text-[0.65rem] font-extrabold tracking-[0.08em] sm:text-xs">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
