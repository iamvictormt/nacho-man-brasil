"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  BadgePercent,
  Bike,
  ChevronLeft,
  ChevronRight,
  Clock3,
  CreditCard,
  Maximize2,
  PawPrint,
  Search,
  Store as StoreIcon,
  WalletCards,
  X,
} from "lucide-react";

import { IconMascara } from "@/components/brand-icons";
import {
  ActionLink,
  BodyCopy,
  DisplayTitle,
  EditorialHero,
  PageSection,
  SectionHeading,
} from "@/components/editorial";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { photos } from "@/lib/photos";
import type { PaymentBrand, Store } from "@/lib/stores";

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

const paymentBrandAssets: Record<PaymentBrand, { src: string; label: string }> = {
  mastercard: { src: "/images/cards/mastercard.png", label: "Mastercard" },
  visa: { src: "/images/cards/visa.png", label: "Visa" },
  elo: { src: "/images/cards/elo.png", label: "Elo" },
  alelo: { src: "/images/cards/alelo.png", label: "Alelo" },
  "ifood-beneficios": {
    src: "/images/cards/ifood-beneficios.png",
    label: "iFood Benefícios",
  },
  sodexo: { src: "/images/cards/sodexo.png", label: "Sodexo" },
};

function PaymentBrandList({ brands }: { brands?: PaymentBrand[] }) {
  if (!brands?.length) {
    return <p className="mt-3 text-xs leading-5 text-muted-foreground">Consulte a unidade</p>;
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {brands.map((brand) => {
        const asset = paymentBrandAssets[brand];

        return (
          <span
            key={brand}
            title={asset.label}
            className="relative h-8 w-14 overflow-hidden rounded-lg border border-foreground/10 bg-background shadow-sm"
          >
            <Image
              src={asset.src}
              alt={asset.label}
              fill
              sizes="56px"
              className="object-contain p-1.5"
            />
          </span>
        );
      })}
    </div>
  );
}

const placeholderGallery = ["Fachada", "Ambiente", "Experiência"] as const;

type ActiveGallery = { store: Store; itemIndex: number };

function StoreGallery({
  active,
  onChange,
  onClose,
}: {
  active: ActiveGallery;
  onChange: (next: ActiveGallery) => void;
  onClose: () => void;
}) {
  const slides = active.store.gallery?.length
    ? active.store.gallery
    : placeholderGallery.map((label) => ({ label, image: null, alt: "" }));
  const slide = slides[active.itemIndex];

  const go = (direction: -1 | 1) => {
    const nextIndex = (active.itemIndex + direction + slides.length) % slides.length;
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
      aria-label={`Galeria da unidade ${active.store.name}`}
      className="fixed inset-0 z-[100] flex flex-col bg-foreground/95 text-background backdrop-blur-md"
      onClick={onClose}
    >
      <div className="flex shrink-0 items-center justify-between gap-5 border-b border-background/15 px-5 py-4 sm:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <span className="hidden text-[10px] font-extrabold uppercase tracking-[0.2em] text-accent sm:block">
            Unidades / Galeria
          </span>
          <span className="hidden h-5 w-px bg-background/20 sm:block" />
          <h2 className="truncate font-heading text-2xl font-extrabold uppercase">
            {active.store.name}
          </h2>
          <span className="rounded-full bg-accent px-2.5 py-1 text-[0.62rem] font-extrabold text-accent-foreground">
            {active.store.uf}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-background/55 lg:flex hidden">
            {String(active.itemIndex + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
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
          className="absolute left-3 z-10 grid size-12 place-content-center rounded-full border border-background/20 bg-foreground/75 transition-colors hover:border-accent hover:bg-accent sm:left-7"
        >
          <ChevronLeft className="size-6" />
        </button>

        <figure className="flex h-full w-full max-w-6xl flex-col">
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.5rem] bg-black">
            {slide.image ? (
              <Image
                key={slide.image}
                src={slide.image}
                alt={slide.alt}
                fill
                loading="eager"
                sizes="100vw"
                className="object-contain"
              />
            ) : (
              <div className="absolute inset-0 grid place-content-center overflow-hidden px-16 text-center">
                <div
                  className="absolute left-1/2 top-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-[80px] border-accent/10"
                  aria-hidden="true"
                />
                <IconMascara
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rotate-12 text-background/[0.06]"
                />
                <div className="relative">
                  <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-accent">
                    Galeria da unidade
                  </p>
                  <h3 className="mt-4 font-display text-[clamp(4rem,10vw,8rem)] uppercase leading-none">
                    {slide.label}
                  </h3>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-background/45">
                    Foto em breve
                  </p>
                </div>
              </div>
            )}
          </div>
        </figure>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próxima foto"
          className="absolute right-3 z-10 grid size-12 place-content-center rounded-full border border-background/20 bg-foreground/75 transition-colors hover:border-accent hover:bg-accent sm:right-7"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>

      <div
        className="flex shrink-0 justify-center gap-2 overflow-x-auto border-t border-background/15 px-5 py-3"
        onClick={(event) => event.stopPropagation()}
      >
        {slides.map((thumb, index) => (
          <button
            key={thumb.label}
            type="button"
            onClick={() => onChange({ ...active, itemIndex: index })}
            aria-label={`Ver ${thumb.label}`}
            aria-current={index === active.itemIndex ? "true" : undefined}
            className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-black transition-opacity ${index === active.itemIndex ? "border-accent opacity-100" : "border-transparent opacity-45 hover:opacity-80"}`}
          >
            {thumb.image ? (
              <Image src={thumb.image} alt="" fill sizes="80px" className="object-cover" />
            ) : (
              <span className="grid size-full place-content-center font-display text-xl text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function StoreCard({
  store,
  index,
  storeNumber,
  onOpen,
}: {
  store: Store;
  index: number;
  storeNumber: number;
  onOpen: () => void;
}) {
  const coverImage = store.gallery?.[0]?.image ?? store.image;
  const photoCount = store.gallery?.filter((photo) => !photo.placeholder).length ?? 0;
  const reversed = index % 2 === 1;

  return (
    <article className="group grid min-w-0 overflow-hidden rounded-[2rem] border border-border bg-card transition duration-300 hover:border-foreground/25 hover:shadow-[0_22px_55px_oklch(0.12_0_0/0.12)] lg:grid-cols-12">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Abrir galeria da unidade ${store.name}`}
        className={`relative min-h-[330px] overflow-hidden bg-foreground text-left text-background focus-visible:outline-3 focus-visible:outline-offset-[-6px] focus-visible:outline-accent sm:min-h-[420px] lg:col-span-7 lg:min-h-[520px] ${reversed ? "lg:order-2" : ""}`}
      >
        {coverImage ? (
          <>
            <Image
              src={coverImage}
              alt={`Unidade Nacho Man em ${store.name}`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-foreground/15"
              aria-hidden="true"
            />
          </>
        ) : (
          <>
            <div
              className="absolute -right-16 -top-20 size-64 rounded-full border-[34px] border-accent/20 transition-transform duration-700 group-hover:scale-110"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-12 size-64 rounded-full bg-accent/25 blur-3xl"
              aria-hidden="true"
            />
            <IconMascara
              aria-hidden="true"
              className="absolute right-6 top-8 size-40 rotate-12 text-background/[0.07] transition duration-700 group-hover:rotate-6 group-hover:scale-110"
            />
            <div className="absolute inset-x-7 bottom-7">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-background/45">
                Galeria da unidade
              </p>
              <p className="mt-2 font-heading text-2xl font-extrabold uppercase">Fotos em breve</p>
            </div>
          </>
        )}
        <span className="absolute right-6 top-6 rounded-full bg-background px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-wide text-foreground">
          {store.uf}
        </span>
        <span className="absolute bottom-6 right-6 grid size-12 place-content-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
          <Maximize2 className="size-5" aria-hidden="true" />
        </span>
      </button>

      <div
        className={`flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10 ${reversed ? "lg:order-1" : ""}`}
      >
        <div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
                {store.state}
              </p>
              <h3 className="mt-2 max-w-lg font-heading text-4xl font-extrabold uppercase leading-[0.92] sm:text-5xl">
                {store.name}
              </h3>
            </div>
            {store.features && (
              <div className="flex flex-wrap gap-2 sm:justify-end">
                {store.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-2 text-[0.62rem] font-extrabold uppercase tracking-wide"
                  >
                    {feature === "Aceita pets" ? (
                      <PawPrint className="size-3" aria-hidden="true" />
                    ) : (
                      <BadgePercent className="size-3" aria-hidden="true" />
                    )}
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-7 grid gap-x-6 gap-y-7 border-y border-border py-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="flex gap-3">
              <Clock3 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <h4 className="text-xs font-extrabold uppercase tracking-widest">Horários</h4>
                <ul className="mt-2 space-y-1 text-xs leading-5 text-muted-foreground">
                  {store.hours.map((hour) => (
                    <li key={hour}>{hour}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <Bike className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <h4 className="text-xs font-extrabold uppercase tracking-widest">Atendimento</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {store.serviceModes ? (
                    store.serviceModes.map((mode) => (
                      <span
                        key={mode}
                        className="rounded-full bg-muted px-3 py-1.5 text-[0.65rem] font-bold uppercase"
                      >
                        {mode}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-muted-foreground">Consulte a unidade</span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <CreditCard className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <h4 className="text-xs font-extrabold uppercase tracking-widest">Cartões</h4>
                <PaymentBrandList brands={store.paymentCards} />
              </div>
            </div>

            <div className="flex gap-3">
              <WalletCards className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0">
                <h4 className="text-xs font-extrabold uppercase tracking-widest">Vale-refeição</h4>
                <PaymentBrandList brands={store.mealVouchers} />
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpen}
          className="mt-7 flex items-center justify-between gap-5 border-t border-foreground/15 pt-5 text-left text-xs font-extrabold uppercase tracking-[0.12em] transition-colors hover:text-accent"
        >
          Explorar galeria
          <span className="flex items-center gap-2 text-muted-foreground">
            {photoCount
              ? `${photoCount} ${photoCount === 1 ? "foto" : "fotos"}`
              : "Fotos em breve"}
            <Maximize2 className="size-4" aria-hidden="true" />
          </span>
        </button>
      </div>
    </article>
  );
}

export function StoreLocator({ stores }: { stores: Store[] }) {
  const [state, setState] = useState("");
  const [query, setQuery] = useState("");
  const [activeGallery, setActiveGallery] = useState<ActiveGallery | null>(null);
  const states = [...new Set(stores.map((store) => store.state))];
  const normalizedQuery = normalize(query.trim());
  const hasFilters = Boolean(state || query);
  const results = stores.filter(
    (store) =>
      (!state || store.state === state) &&
      normalize(
        `${store.name} ${store.state} ${store.uf} ${store.features?.join(" ") ?? ""}`,
      ).includes(normalizedQuery),
  );

  const resetFilters = () => {
    setQuery("");
    setState("");
  };

  return (
    <>
      <EditorialHero
        variant="store"
        eyebrow=""
        title="Seu próximo rolê"
        accent="começa aqui."
        copy="Escolha a cidade, confira os horários e descubra tudo o que a unidade oferece antes de chegar com fome."
        image={photos.storeLocator.background}
        alt="Mesa Nacho Man com tacos e máscaras de lucha libre"
        href="#busca"
        action="Ver unidades"
      />

      <PageSection id="busca">
        <SectionHeading>
          <DisplayTitle>
            Nacho Man mais <br /> <span className="text-accent">perto de você.</span>
          </DisplayTitle>
        </SectionHeading>

        <div className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-card p-6 shadow-[0_24px_70px_oklch(0.16_0_0/0.08)] sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 flex h-1.5" aria-hidden="true">
            <span className="w-[42%] bg-accent" />
            <span className="w-[18%] bg-accent" />
            <span className="flex-1 bg-foreground" />
          </div>
          <div
            className="pointer-events-none absolute -right-16 -top-20 size-48 rounded-full border-[30px] border-accent/15"
            aria-hidden="true"
          />

          <div className="relative">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-foreground/10 pb-6">
              <div>
                <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-accent">
                  Filtro rápido
                </p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                  Busque pela cidade ou escolha um estado para encontrar sua próxima unidade.
                </p>
              </div>
              <span
                className="rounded-full border border-foreground/10 bg-background px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-wide text-foreground shadow-sm"
                aria-live="polite"
              >
                {results.length} {results.length === 1 ? "unidade" : "unidades"}
              </span>
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(250px,.6fr)]">
              <Label className="grid gap-2 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-foreground/70">
                Cidade
                <span className="relative">
                  <Search
                    aria-hidden="true"
                    className="absolute left-5 top-1/2 size-4 -translate-y-1/2 text-accent"
                  />
                  <Input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Ex.: Blumenau"
                    className="h-14 rounded-full border-foreground/15 bg-background pl-12 font-sans text-sm font-medium normal-case tracking-normal text-foreground shadow-sm transition focus-visible:border-accent focus-visible:ring-accent/20"
                  />
                </span>
              </Label>

              <Label className="grid gap-2 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-foreground/70">
                Estado
                <Select
                  value={state || "all"}
                  onValueChange={(value) => setState(value === "all" ? "" : value)}
                >
                  <SelectTrigger
                    aria-label="Filtrar unidades por estado"
                    className="h-14 rounded-full border-foreground/15 bg-background px-5 font-sans text-sm font-medium normal-case tracking-normal text-foreground shadow-sm transition focus:border-accent focus:ring-accent/20"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os estados</SelectItem>
                    {states.map((name) => (
                      <SelectItem key={name} value={name}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Label>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-foreground/10 pt-6">
              <button
                type="button"
                onClick={() => setState("")}
                aria-pressed={!state}
                className={`rounded-full border px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-wide transition ${
                  !state
                    ? "border-accent bg-accent text-accent-foreground shadow-[0_6px_18px_oklch(0.9_0.226_125/0.25)]"
                    : "border-foreground/15 bg-background text-foreground hover:border-accent hover:bg-accent/15"
                }`}
              >
                Todas
              </button>
              {states.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setState(name)}
                  aria-pressed={state === name}
                  className={`rounded-full border px-4 py-2 text-[0.65rem] font-extrabold uppercase tracking-wide transition ${
                    state === name
                      ? "border-accent bg-accent text-accent-foreground shadow-[0_6px_18px_oklch(0.9_0.226_125/0.25)]"
                      : "border-foreground/15 bg-background text-foreground hover:border-accent hover:bg-accent/15"
                  }`}
                >
                  {stores.find((store) => store.state === name)?.uf}
                </button>
              ))}
              {hasFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="ml-auto rounded-full bg-accent/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Limpar filtros
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4">
          {results.length > 0 ? (
            <div className="grid gap-8" aria-label="Unidades encontradas">
              {results.map((store, index) => (
                <StoreCard
                  key={store.slug}
                  store={store}
                  index={index}
                  storeNumber={stores.findIndex((candidate) => candidate.slug === store.slug) + 1}
                  onOpen={() => setActiveGallery({ store, itemIndex: 0 })}
                />
              ))}
            </div>
          ) : (
            <div className="grid min-h-[420px] place-content-center rounded-[2rem] border border-dashed border-foreground/25 bg-muted px-6 text-center">
              <StoreIcon className="mx-auto mb-5 size-11 text-accent" aria-hidden="true" />
              <h3 className="font-heading text-4xl font-extrabold uppercase">
                Ainda não chegamos nesse resultado.
              </h3>
              <BodyCopy className="mx-auto mt-3">
                Tente buscar por outra cidade, bairro ou estado para encontrar uma unidade Nacho
                Man.
              </BodyCopy>
              <Button
                type="button"
                variant="ink"
                onClick={resetFilters}
                size="pill"
                className="mx-auto mt-7"
              >
                Ver todas as unidades
              </Button>
            </div>
          )}
        </div>
      </PageSection>

      <PageSection tone="red">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <DisplayTitle className="max-w-[12ch] text-background">
              Ainda não tem <span className="text-foreground">Nacho Man aí?</span>
            </DisplayTitle>
          </div>
          <div className="lg:col-span-4 lg:pb-1">
            <ActionLink href="/#franquia" className="mt-7">
              Quero ser franqueado
            </ActionLink>
          </div>
        </div>
      </PageSection>

      {activeGallery && (
        <StoreGallery
          active={activeGallery}
          onChange={setActiveGallery}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </>
  );
}
