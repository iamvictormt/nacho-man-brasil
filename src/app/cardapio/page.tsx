"use client";

import Image from "next/image";
import { EditorialHero, ClosingBanner } from "@/components/editorial";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import { menuSections, type MenuItem } from "@/lib/menu";
import { cn } from "@/lib/utils";
import { photos } from "@/lib/photos";

const menuGridLayouts = {
  1: "auto-rows-[360px] md:grid-cols-1 md:auto-rows-[460px] lg:auto-rows-[560px]",
  2: "auto-rows-[290px] md:grid-cols-2 md:auto-rows-[360px] lg:auto-rows-[420px]",
  3: "auto-rows-[290px] md:grid-cols-2",
  4: "auto-rows-[290px] md:grid-cols-2 md:grid-rows-[290px_290px_340px]",
  5: "auto-rows-[290px] md:grid-cols-2",
} as const;

type MenuGridCount = keyof typeof menuGridLayouts;

function MenuImage({
  item,
  className,
  sizes,
  onOpen,
}: {
  item: MenuItem;
  className?: string;
  sizes: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ampliar foto de ${item.name}`}
      className={cn(
        "group relative min-h-[290px] overflow-hidden rounded-[2rem] bg-foreground",
        className,
      )}
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes={sizes}
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
      </span>
    </button>
  );
}

function MenuImageGrid({
  items,
  sectionId,
  onOpen,
}: {
  items: MenuItem[];
  sectionId: string;
  onOpen: (itemIndex: number) => void;
}) {
  const layoutCount = Math.min(Math.max(items.length, 1), 5) as MenuGridCount;
  const hasFeaturedImage = items.length >= 3;
  const wideImageSizes = "(min-width: 1024px) 64vw, (min-width: 768px) 100vw, 100vw";
  const regularImageSizes =
    "(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw";

  return (
    <div className={cn("grid gap-4", menuGridLayouts[layoutCount])}>
      {items.map((item, itemIndex) => {
        const isWideFooter = items.length === 4 && itemIndex === 3;

        return (
          <MenuImage
            key={`${sectionId}-${item.name}`}
            item={item}
            className={cn(
              hasFeaturedImage && itemIndex === 0 && "md:row-span-2",
              isWideFooter && "md:col-span-2",
            )}
            sizes={items.length === 1 || isWideFooter ? wideImageSizes : regularImageSizes}
            onOpen={() => onOpen(itemIndex)}
          />
        );
      })}
    </div>
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
          <span className="hidden text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent sm:block">
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
          className="absolute left-3 z-10 grid size-12 place-content-center rounded-full border border-background/20 bg-foreground/75 transition-colors hover:border-accent hover:bg-accent hover:text-background sm:left-7"
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
          <figcaption className="flex items-center justify-center gap-5 pt-4">
            <h3 className="font-heading text-2xl font-extrabold uppercase sm:text-3xl">
              {item.name}
            </h3>
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próxima foto"
          className="absolute right-3 z-10 grid size-12 place-content-center rounded-full border border-background/20 bg-foreground/75 transition-colors hover:border-accent hover:bg-accent hover:text-background sm:right-7"
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
            className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-opacity ${index === active.itemIndex ? "border-accent opacity-100" : "border-transparent opacity-45 hover:opacity-80"}`}
          >
            <Image src={thumb.image} alt="" fill sizes="80px" className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function CardapioPage() {
  const heroImage = photos.menu.heroGroup;
  const [activeGallery, setActiveGallery] = useState<ActiveGallery | null>(null);

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      <EditorialHero
        variant="menu"
        eyebrow=""
        title="Comida mexicana"
        accent="raiz e tex-mex."
        copy="Tem pra todos os gostos, pra quem gosta de sabor raíz e pra quem ama o Tex-Mex."
        image={heroImage}
        alt="Porção Nacho Man para compartilhar"
        href="#burritos"
        action="Explorar os sabores"
      />

      <nav
        className="sticky top-[69px] z-40 overflow-x-auto border-b border-foreground/15 bg-background/95 backdrop-blur xl:top-[78px]"
        aria-label="Categorias do cardápio"
      >
        <div className="site-container flex min-w-max items-center gap-1 py-3 text-xs font-extrabold uppercase">
          {menuSections.map((category, index) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group flex items-center gap-2 rounded-full px-4 py-3 transition-colors hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background"
            >
              <span className="text-[9px] text-foreground/35 group-hover:text-accent">
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
                      <span className="font-display text-5xl text-foreground/10">
                        {String(sectionIndex + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-7 font-display text-[clamp(3.25rem,5.2vw,4.5rem)] uppercase leading-[0.88]">
                      {section.name}
                      <span className="text-accent">.</span>
                    </h2>
                    <p className="mt-6 max-w-sm font-heading text-2xl font-extrabold uppercase leading-tight">
                      {section.statement}
                    </p>
                  </div>
                </div>

                <div
                  className={`lg:col-span-8 ${reversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  <MenuImageGrid
                    items={section.items}
                    sectionId={section.id}
                    onOpen={(itemIndex) => setActiveGallery({ sectionIndex, itemIndex })}
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <ClosingBanner />

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
