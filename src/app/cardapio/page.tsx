"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ORDER_URL } from "@/lib/links";
import { menuSections, type MenuItem } from "@/lib/menu";

function MenuImage({
  item,
  featured = false,
  onOpen,
}: {
  item: MenuItem;
  featured?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ampliar foto de ${item.name}`}
      className={`group relative min-h-[290px] overflow-hidden rounded-[2rem] bg-foreground ${featured ? "md:row-span-2 md:min-h-[600px]" : "md:min-h-[290px]"}`}
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes={featured ? "(min-width: 1024px) 46vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-transparent" />
      <div className="absolute right-5 top-5 grid size-11 place-content-center rounded-full bg-foreground/80 text-background opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <Maximize2 className="size-4" />
      </div>
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-left text-background sm:p-6">
        <span className="font-heading text-2xl font-extrabold uppercase sm:text-3xl">
          {item.name}
        </span>
        <span className="size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
      </span>
    </button>
  );
}

type ActiveGallery = { sectionIndex: number; itemIndex: number };

function MenuCarousel({
  active,
  onChange,
  onClose,
}: {
  active: ActiveGallery;
  onChange: (next: ActiveGallery) => void;
  onClose: () => void;
}) {
  const section = menuSections[active.sectionIndex];
  const item = section.items[active.itemIndex];

  const go = (direction: -1 | 1) => {
    const nextIndex = (active.itemIndex + direction + section.items.length) % section.items.length;
    onChange({ ...active, itemIndex: nextIndex });
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Galeria de ${section.name}`}
      className="fixed inset-0 z-[100] flex flex-col bg-foreground/95 text-background backdrop-blur-md"
      onClick={onClose}
    >
      <div className="flex shrink-0 items-center justify-between gap-5 border-b border-background/15 px-5 py-4 sm:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <span className="hidden text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary sm:block">
            Cardápio / Galeria
          </span>
          <span className="hidden h-5 w-px bg-background/20 sm:block" />
          <h2 className="truncate font-heading text-2xl font-extrabold uppercase">
            {section.name}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-background/55">
            {String(active.itemIndex + 1).padStart(2, "0")} /{" "}
            {String(section.items.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar galeria"
            className="grid size-11 place-content-center rounded-full bg-accent text-accent-foreground transition-transform hover:rotate-6"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-5 sm:px-20"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Foto anterior"
          className="absolute left-3 z-10 grid size-12 place-content-center rounded-full border border-background/20 bg-foreground/75 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground sm:left-7"
        >
          <ChevronLeft className="size-6" />
        </button>

        <figure className="flex h-full w-full max-w-6xl flex-col">
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.5rem] bg-black">
            <Image
              key={item.image.src}
              src={item.image}
              alt={item.name}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <figcaption className="flex items-center justify-between gap-5 pt-4">
            <h3 className="font-heading text-2xl font-extrabold uppercase sm:text-3xl">
              {item.name}
            </h3>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">
              Foto oficial Nacho Man
            </span>
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próxima foto"
          className="absolute right-3 z-10 grid size-12 place-content-center rounded-full border border-background/20 bg-foreground/75 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground sm:right-7"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>

      <div
        className="flex shrink-0 justify-center gap-2 overflow-x-auto border-t border-background/15 px-5 py-3"
        onClick={(event) => event.stopPropagation()}
      >
        {section.items.map((thumb, index) => (
          <button
            key={thumb.image.src}
            type="button"
            onClick={() => onChange({ ...active, itemIndex: index })}
            aria-label={`Ver ${thumb.name}`}
            aria-current={index === active.itemIndex ? "true" : undefined}
            className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-opacity ${index === active.itemIndex ? "border-primary opacity-100" : "border-transparent opacity-45 hover:opacity-80"}`}
          >
            <Image src={thumb.image} alt="" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function CardapioPage() {
  const heroImage = menuSections[1].items[1].image;
  const [activeGallery, setActiveGallery] = useState<ActiveGallery | null>(null);

  return (
    <main className="home-grain overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      <section className="relative min-h-[760px] overflow-hidden bg-foreground pt-24 text-background">
        <Image
          src={heroImage}
          alt="Mesa Nacho Man com porções para compartilhar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/20" />
        <div className="site-container relative flex min-h-[calc(100svh-6rem)] flex-col justify-end py-12 lg:py-16">
          <div className="max-w-6xl">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-primary">
              <span className="h-1 w-10 bg-primary" /> Cardápio Nacho Man
            </p>
            <h1 className="hero-enter font-display text-[4.7rem] uppercase leading-[0.82] sm:text-[7.5rem] lg:text-[10rem]">
              Escolha sua
              <span className="block text-primary">obsessão.</span>
            </h1>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <Link
                href="#burritos"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase"
              >
                Explorar categorias <ArrowDownRight className="size-4 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-[69px] z-40 overflow-x-auto border-b border-foreground/15 bg-background/95 backdrop-blur lg:top-[75px]"
        aria-label="Categorias do cardápio"
      >
        <div className="site-container flex min-w-max items-center gap-1 py-3 text-xs font-extrabold uppercase">
          {menuSections.map((category, index) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group flex items-center gap-2 rounded-full px-4 py-3 transition-colors hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background"
            >
              <span className="text-[9px] text-foreground/35 group-hover:text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="bg-background">
        {menuSections.map((section, sectionIndex) => {
          const reversed = sectionIndex % 2 === 1;
          return (
            <section
              key={section.id}
              id={section.id}
              className="site-container scroll-mt-36 border-b border-foreground/15 py-20 lg:py-28"
            >
              <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                <div
                  className={`lg:col-span-4 ${reversed ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"}`}
                >
                  <div className="lg:sticky lg:top-36">
                    <div className="flex items-start justify-between gap-5">
                      <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                        <span className="h-1 w-8 bg-accent" /> {section.eyebrow}
                      </p>
                      <span className="font-display text-5xl text-foreground/10">
                        {String(sectionIndex + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-7 font-display text-6xl uppercase leading-[0.86] sm:text-8xl">
                      {section.name}
                      <span className="text-primary">.</span>
                    </h2>
                    <p className="mt-6 max-w-sm font-heading text-2xl font-extrabold uppercase leading-tight">
                      {section.statement}
                    </p>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Fotos oficiais · Nacho Man
                    </p>
                  </div>
                </div>

                <div
                  className={`grid auto-rows-[290px] gap-4 md:grid-cols-2 lg:col-span-8 ${reversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  {section.items.map((item, itemIndex) => (
                    <MenuImage
                      key={`${section.id}-${item.name}`}
                      item={item}
                      featured={section.items.length > 2 && itemIndex === 0}
                      onOpen={() => setActiveGallery({ sectionIndex, itemIndex })}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="relative overflow-hidden bg-accent py-20 text-accent-foreground lg:py-28">
        <div className="site-container grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em]">
              Escolheu o favorito?
            </p>
            <h2 className="mt-4 max-w-4xl font-display text-6xl uppercase leading-[0.84] sm:text-9xl">
              Agora deixa com a gente.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 opacity-70">
              O pedido é feito no site oficial de delivery da Nacho Man.
            </p>
          </div>
          <Button variant="ink" size="pill" asChild>
            <a href={ORDER_URL}>
              Fazer pedido <ArrowRight />
            </a>
          </Button>
        </div>
      </section>

      <SiteFooter />

      {activeGallery && (
        <MenuCarousel
          active={activeGallery}
          onChange={setActiveGallery}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </main>
  );
}
