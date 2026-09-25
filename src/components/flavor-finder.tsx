"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

import { BodyCopy, DisplayTitle, Eyebrow, PageSection } from "@/components/editorial";
import { photos } from "@/lib/photos";
import { cn } from "@/lib/utils";

const moods = [
  {
    id: "bagunca",
    tab: "Porções suculentas",
    note: "Modo: dividir (ou não)",
    title: "Nachos carregados",
    copy: "Crocante, molho por cima e aquela disputa educada pelo último pedaço.",
    image: photos.home.loadedNachos,
    href: "/cardapio#nacho",
    tags: ["Crocante", "Muito molho", "Pra mesa"],
    color: "bg-background text-foreground",
  },
  {
    id: "brabo",
    tab: "Burritos deliciosos",
    note: "Modo: duas mãos",
    title: "Burrito sem miséria",
    copy: "Recheio de ponta a ponta, tortilla macia e zero espaço para fome.",
    image: photos.home.burrito,
    href: "/cardapio#burritos",
    tags: ["Recheado", "Sem talher", "Favorito"],
    color: "bg-background text-foreground",
  },
  {
    id: "doce",
    tab: "Sobremesas",
    note: "Modo: só mais um",
    title: "Churros de respeito",
    copy: "Dourado, crocante e pronto para encerrar a mesa do jeito certo.",
    image: photos.home.churros,
    href: "/cardapio#doce",
    tags: ["Crocante", "Docinho", "Sem arrependimento"],
    color: "bg-background text-foreground",
  },
];

export function FlavorFinder() {
  const [active, setActive] = useState(0);
  const mood = moods[active];

  return (
    <PageSection
      tone="ink"
      containerClassName="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16"
    >
      <div>
        <DisplayTitle className="max-w-[11ch]">
          Mexicano combina com <span className="text-primary">sua fome!</span>
        </DisplayTitle>
        <BodyCopy className="mt-6 text-background/65">
          Quem disse que comida mexicana só tem pimenta?
        </BodyCopy>

        <div className="mt-8 grid gap-4 lg:gap-2" role="tablist" aria-label="Escolha seu tipo de fome">
          {moods.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-controls="flavor-panel"
              onClick={() => setActive(index)}
              className={cn(
                "group flex min-h-14 items-center justify-between rounded-full border border-background/25 px-5 text-left font-heading text-lg font-extrabold uppercase transition duration-200 hover:translate-x-1",
                index === active
                  ? "translate-x-1 bg-background text-foreground shadow-[5px_5px_0_var(--primary)] hover:bg-background"
                  : "hover:bg-background/10",
              )}
            >
              <span className="flex items-center gap-3">
                <span className="text-xs opacity-45">0{index + 1}</span>
                {item.tab}
              </span>
              {index === active ? (
                <Check className="size-6 text-foreground" />
              ) : (
                <ArrowUpRight className="size-6 opacity-45" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div
        id="flavor-panel"
        role="tabpanel"
        className="relative min-h-[520px] overflow-hidden rounded-[2rem] border-2 border-background/25 bg-foreground shadow-[10px_10px_0_var(--primary)] sm:min-h-[620px]"
      >
        <Image
          key={mood.id}
          src={mood.image}
          alt={mood.title}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover motion-safe:animate-[card-swap_500ms_cubic-bezier(0.16,1,0.3,1)_both]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/10 to-transparent" />
        <span
          className={cn(
            "absolute left-5 top-5 rotate-[-2deg] rounded-full px-4 py-2 text-[0.62rem] font-extrabold uppercase tracking-wider",
            mood.color,
          )}
        >
          {mood.note}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-6 text-background sm:p-8">
          <div className="mb-4 flex flex-wrap gap-2">
            {mood.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-background/25 bg-foreground/45 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-wider backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h3 className="mt-2 font-display text-4xl uppercase sm:text-5xl">{mood.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-background/70">{mood.copy}</p>
            </div>
            <Link
              href={mood.href}
              className="grid size-14 shrink-0 place-items-center rounded-full bg-primary text-foreground transition hover:rotate-6 hover:scale-105"
              aria-label={`Ver ${mood.title} no cardápio`}
            >
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
