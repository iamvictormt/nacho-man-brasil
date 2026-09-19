"use client";

import Image from "next/image";
import { stores } from "@/lib/stores";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Instagram,
  Hand,
  Navigation,
  Quote,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBurrito from "@/assets/hero-burrito.png";
import comboFeast from "@/assets/combo-feast.jpg";
import friendsFood from "@/assets/friends-food.jpg";
import menuNachos from "@/assets/menu-nachos.png";
import menuBurritos from "@/assets/menu-burritos.png";
import menuChurros from "@/assets/menu-churros.png";
import historiaPreparo from "@/assets/historia-preparo.jpg";
import franquiaLoja from "@/assets/franquia-loja.png";
import {
  IconAbacate,
  IconBurrito,
  IconCoracao,
  IconEstrela,
  IconFogo,
  IconMaracas,
  IconMascara,
  IconNachos,
  IconPimenta,
  IconTaco,
} from "@/components/brand-icons";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const categories = [
  {
    name: "Nachos",
    copy: "Crocantes, generosos e irresistíveis.",
    price: "24,90",
    image: menuNachos,
    tone: "bg-card",
    accent: "bg-accent",
  },
  {
    name: "Burritos",
    copy: "Recheios na medida pra matar a sua fome.",
    price: "27,90",
    image: menuBurritos,
    tone: "bg-foreground text-background",
    accent: "bg-primary",
  },
  {
    name: "Sobremesas",
    copy: "O final perfeito pra uma grande refeição.",
    price: "16,90",
    image: menuChurros,
    tone: "bg-primary",
    accent: "bg-accent",
  },
];

const marqueeItems = [
  { label: "Nachos", Icon: IconNachos },
  { label: "Burritos", Icon: IconBurrito },
  { label: "Tacos", Icon: IconTaco },
  { label: "Muito sabor", Icon: IconPimenta },
  { label: "Guacamole", Icon: IconAbacate },
  { label: "Bem picante", Icon: IconFogo },
  { label: "Do nosso jeito", Icon: IconMascara },
  { label: "Muita festa", Icon: IconMaracas },
];



const testimonials = [
  {
    quote:
      "Melhor comida mexicana da cidade, da cidade não, do país! Hehehe. Já comi em Blumenau e sempre que vou em Balneário como lá também. Os tacos de camarão são a melhor pedida.",
    name: "Maria. M B",
  },
  {
    quote:
      "A comida é muito boa. O ambiente é muito divertido, cheio de referência e detalhes que remetem a cultura mexicana. Os pratos chegaram bem rápido. Foi uma ótima experiência.",
    name: "Karine S",
  },
  {
    quote:
      "Tudo extremamente saboroso, a guacamole é sensacional! Atendimento excelente, ambiente ótimo. Super recomendo.",
    name: "B. Lum",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedStore, setSelectedStore] = useState(stores[0]);
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * (track.clientWidth * 0.8), behavior: "smooth" });
  };

  const query = search.trim().toLowerCase();
  const foundStores = query
    ? stores.filter((s) =>
        `${s.name} ${s.address} ${s.city} ${s.phone}`.toLowerCase().includes(query),
      )
    : stores;
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${selectedStore.mapBounds}&layer=mapnik&marker=${selectedStore.coordinates.lat},${selectedStore.coordinates.lon}`;
  const searchStores = () => {
    const firstStore = foundStores[0];
    if (firstStore) setSelectedStore(firstStore);
    document.getElementById("unidades-resultados")?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <SiteHeader />

      <Button
        variant="ink"
        asChild
        className={`fixed bottom-5 right-5 z-50 h-auto rounded-full border border-background/15 py-2 pl-2 pr-2.5 shadow-xl transition-all duration-300 hover:scale-[1.02] sm:bottom-7 sm:right-7 ${scrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        <a href="/pedido" aria-label="Pedir Nacho Man agora">
          <span className="grid size-10 place-content-center rounded-full bg-primary text-primary-foreground">
            <IconTaco className="size-6" aria-hidden="true" />
          </span>
          <span className="px-1 text-left">
            <span className="block text-[10px] font-semibold normal-case text-background/60">
              Bateu a fome?
            </span>
            <strong className="block text-xs uppercase">Pedir agora</strong>
          </span>
          <ArrowRight className="mx-1 text-primary" />
        </a>
      </Button>

      <section
        id="inicio"
        className="relative min-h-[720px] overflow-hidden pt-28 lg:min-h-[760px]"
      >
        <div className="site-container grid items-center gap-8 pb-12 lg:grid-cols-12 lg:pt-8">
          <div className="hero-enter relative z-10 lg:col-span-6">
            <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase">
              <span className="h-1 w-8 bg-primary" /> Tacos · Burritos · Nachos
            </div>
            <h1 className="max-w-2xl font-display text-6xl uppercase sm:text-7xl lg:text-[7.1rem]">
              Mexicano do nosso <span className="text-primary">jeito.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
              Ingredientes frescos, receitas autorais e todo o sabor do México, com a alma
              brasileira.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="ink" size="pill" asChild>
                <a href="/pedido">
                  Pedir agora <ArrowRight />
                </a>
              </Button>
              <Button variant="link" asChild className="font-bold text-foreground">
                <a href="/cardapio">
                  Ver cardápio <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[390px] lg:col-span-6 lg:min-h-[570px]">
            <div className="absolute inset-[8%] rounded-full bg-primary" />
            <p className="absolute left-0 top-8 z-20 rotate-[-8deg] border border-foreground bg-background px-4 py-3 font-heading text-2xl font-extrabold uppercase leading-[1.05] text-foreground shadow-sm sm:text-3xl">
              Mais sabor
              <br />
              <span className="text-accent">sempre ↘</span>
            </p>
            <div className="absolute right-0 top-10 z-20 grid h-32 w-32 rotate-6 place-content-center rounded-full bg-accent text-center font-heading text-background">
              <span className="text-sm uppercase">a partir de</span>
              <strong className="text-3xl">R$ 24,90</strong>
            </div>
            <Image
              src={heroBurrito}
              width={1200}
              height={1200}
              alt="Dois burritos Nacho Man recheados"
              className="hero-enter drift relative z-10 h-full w-full object-contain drop-shadow-2xl"
            />
            <span className="absolute bottom-8 right-0 z-20 rotate-[-6deg] border border-foreground bg-background px-4 py-3 font-heading text-xl font-extrabold uppercase leading-[1.05] text-foreground shadow-sm sm:text-2xl">
              Burritos
              <br />
              que fazem sentido!
            </span>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-primary py-4" aria-label="Categorias">
        <div className="marquee-track flex w-max items-center font-heading text-xl font-extrabold uppercase text-primary-foreground">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex w-max min-w-[100vw] shrink-0 items-center justify-around"
              aria-hidden={group === 1}
            >
              {marqueeItems.map(({ label, Icon }, i) => (
                <span
                  key={`${label}-${i}`}
                  className="flex shrink-0 items-center gap-8 whitespace-nowrap px-5"
                >
                  {label}
                  <Icon className="size-7 shrink-0" aria-hidden="true" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section
        id="historia"
        className="overflow-hidden bg-foreground py-16 text-background lg:py-20"
      >
        <div className="site-container grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase text-primary">
              <span className="h-1 w-8 bg-primary" /> Desde o primeiro pedido
            </p>
            <h2 className="font-display text-5xl uppercase sm:text-6xl lg:text-7xl">
              A gente leva a sério essa coisa de{" "}
              <span className="text-primary">comida mexicana.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-background/70">
              Receitas cheias de personalidade, ingredientes preparados todos os dias e combinações
              feitas para dividir — ou não.
            </p>
            <div className="mt-8 grid gap-5 border-t border-background/15 pt-7 sm:grid-cols-2">
              <div className="flex gap-3">
                <IconCoracao className="mt-0.5 size-7 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-xl font-extrabold uppercase">
                    Feito de verdade
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-background/60">
                    Ingredientes frescos e preparo cuidadoso.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <IconMascara className="mt-0.5 size-7 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-xl font-extrabold uppercase">
                    Bom de compartilhar
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-background/60">
                    Comida que aproxima e vira história.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-7">
            <div className="absolute -left-5 -top-5 z-10 rotate-[-7deg] bg-accent px-4 py-2 font-heading text-lg font-extrabold uppercase text-accent-foreground">
              Sem cerimônia
            </div>
            <Image
              src={historiaPreparo}
              loading="lazy"
              width={1600}
              height={1200}
              alt="Preparo de um burrito com ingredientes frescos"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="absolute bottom-5 right-5 max-w-52 rounded-xl bg-primary p-4 text-primary-foreground">
              <p className="font-heading text-2xl font-extrabold uppercase leading-[1.05]">
                Muito sabor.
                <br />
                Do nosso jeito.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cardapio" className="bg-card py-20 lg:py-28">
        <div className="site-container">
          <div className="mb-9 grid items-end gap-6 md:grid-cols-[1fr_auto_auto]">
            <div>
              <p className="mb-3 flex items-center gap-3 text-xs font-extrabold uppercase text-primary">
                <span className="h-1 w-8 bg-primary" /> Do nosso jeito
              </p>
              <h2 className="max-w-3xl font-display text-5xl uppercase sm:text-6xl lg:text-7xl">
                Qual é a sua fome de hoje?
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-5 text-muted-foreground">
              Do clássico ao surpreendente, sempre tem um Nacho Man perfeito para o seu momento.
            </p>
            <div className="hidden gap-2 md:flex lg:hidden" aria-label="Navegar pelas categorias">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                aria-label="Categoria anterior"
                onClick={() => slide(-1)}
              >
                <ArrowLeft />
              </Button>
              <Button
                variant="ink"
                size="icon"
                aria-label="Próxima categoria"
                onClick={() => slide(1)}
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div
            ref={trackRef}
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
          >
            {categories.map((item, index) => (
              <article
                key={item.name}
                className={`${item.tone} group relative flex min-h-[510px] min-w-[86vw] snap-center flex-col overflow-hidden rounded-2xl border border-border p-6 transition-transform duration-300 hover:-translate-y-1 sm:min-w-[390px] lg:min-w-0 lg:p-7`}
              >
                <div className="relative z-20">
                  <span
                    className="mb-3 inline-grid size-12 place-content-center rounded-full border border-current/25 bg-current/10"
                    aria-hidden="true"
                  >
                    {index === 0 ? (
                      <IconNachos className="size-7" />
                    ) : index === 1 ? (
                      <IconBurrito className="size-7" />
                    ) : (
                      <IconEstrela className="size-7" />
                    )}
                  </span>
                  <h3 className="font-display text-5xl uppercase lg:text-6xl">{item.name}</h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-5 opacity-80">{item.copy}</p>
                  <p className="mt-6 text-xs leading-4">
                    a partir de
                    <br />
                    <strong className="font-heading text-3xl leading-none">R$ {item.price}</strong>
                  </p>
                </div>

                <Image
                  src={item.image}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  alt={`${item.name} Nacho Man`}
                  className={`absolute bottom-[-8%] z-10 h-[68%] w-[112%] max-w-none object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.03] ${index === 0 ? "left-[3%]" : index === 1 ? "left-[4%]" : "left-[8%]"}`}
                />
                <Button
                  variant={index === 1 ? "lime" : "ink"}
                  size="icon"
                  asChild
                  className="relative z-20 mt-auto size-11"
                  aria-label={`Ver ${item.name}`}
                >
                  <a href="/pedido">
                    <ArrowRight />
                  </a>
                </Button>
              </article>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-center gap-3 text-muted-foreground lg:hidden">
            <span className="relative flex h-8 w-12 items-center justify-center" aria-hidden="true">
              <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-current/35" />
              <Hand
                className="swipe-hint relative size-6 fill-card text-foreground"
                strokeWidth={1.5}
              />
            </span>
            <p className="text-xs font-semibold">Arraste para o lado</p>
          </div>
        </div>
      </section>

      <section id="combos" className="relative overflow-hidden bg-foreground text-background">
        <div className="site-container grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={comboFeast}
              loading="lazy"
              width={1600}
              height={912}
              sizes="(min-width: 1536px) 680px, (min-width: 1024px) 50vw, 100vw"
              alt="Combo com nachos, burritos e bebida"
              className="aspect-[4/3] w-full object-cover object-left"
            />
            <div className="pointer-events-none absolute left-5 top-6 rotate-[-8deg] border border-background/25 bg-foreground/95 px-4 py-3 font-heading text-2xl font-extrabold uppercase leading-[.95] text-primary shadow-lg sm:left-8 sm:top-8 sm:text-3xl">
              Juntos
              <br />é melhor
              <span className="mt-2 block h-1 w-20 rotate-[-5deg] bg-primary" />
            </div>
          </div>
          <div className="flex flex-col justify-center py-3 lg:self-stretch lg:py-5 lg:pl-2">
            <div className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase text-primary">
              <span className="h-1 w-8 shrink-0 bg-primary" /> Sabor e praticidade.
            </div>
            <h2 className="font-display text-5xl uppercase sm:text-6xl lg:text-[clamp(3.5rem,6.7vw,6.5rem)]">
              O combo que <span className="block text-primary">resolve tudo</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-background/75 xl:text-lg xl:leading-8">
              Burrito ou taco + nachos + bebida.
              <br />A combinação perfeita pra qualquer momento.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-background/20 pt-7 lg:mt-10 lg:pt-8">
              <p className="text-xs leading-4">
                a partir de
                <br />
                <strong className="mt-2 block font-heading text-5xl leading-none xl:text-6xl">
                  R$ 39,90
                </strong>
              </p>
              <Button
                variant="lime"
                size="pill"
                asChild
                className="h-14 min-w-48 flex-1 justify-between px-7 text-sm sm:max-w-72 xl:h-16"
              >
                <a href="/pedido">
                  Quero esse <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="unidades" className="bg-background py-24">
        <div className="site-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-3 flex items-center gap-3 text-xs font-extrabold uppercase text-primary">
              <span className="h-1 w-8 bg-primary" /> Perto de você
            </p>
            <h2 className="font-display text-5xl uppercase sm:text-6xl">
              Tem <span className="text-primary">Nacho Man</span> perto de você
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Encontre a unidade mais próxima e venha viver essa experiência.
            </p>
            <div className="relative mt-7">
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    searchStores();
                  }
                }}
                placeholder="Digite sua cidade ou CEP"
                className="h-13 rounded-full bg-background pl-12 pr-14"
              />
              <Search className="absolute left-4 top-4 size-5 text-muted-foreground" />
              <Button
                type="button"
                size="icon"
                variant="ink"
                className="absolute right-1.5 top-1.5"
                onClick={searchStores}
                aria-label="Buscar unidade"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="relative min-h-80 overflow-hidden rounded-2xl border border-border bg-muted shadow-sm lg:col-span-5">
            <iframe
              key={selectedStore.name}
              title={`Mapa da unidade Nacho Man ${selectedStore.name}`}
              src={mapUrl}
              className="absolute inset-0 size-full border-0"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-foreground/20 to-transparent" />
            <div className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-foreground shadow-sm backdrop-blur-sm">
              Mapa real · OpenStreetMap
            </div>
          </div>
          <div id="unidades-resultados" className="grid content-start gap-3 lg:col-span-3">
            {foundStores.map((store) => (
              <article
                key={store.name}
                className={`rounded-xl border p-5 transition-colors ${selectedStore.name === store.name ? "border-primary bg-primary/5" : "border-border"}`}
              >
                <div className="grid grid-cols-[1fr_auto] gap-2">
                  <div>
                    <button
                      type="button"
                      onClick={() => setSelectedStore(store)}
                      className="text-left font-bold hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Nacho Man {store.name}
                    </button>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {store.address}
                      <br />
                      {store.city}
                    </p>
                    <p className="mt-2 text-xs leading-4 text-muted-foreground">
                      <strong className="font-bold text-foreground">Horários:</strong> {store.hours}
                    </p>
                    <a
                      href={`tel:${store.phone.replace(/\D/g, "")}`}
                      className="mt-1 block text-xs font-bold text-foreground hover:text-primary"
                    >
                      {store.phone}
                    </a>
                    <span className="mt-3 block text-xs font-bold text-secondary">
                      ● Aberto agora
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedStore(store)}
                    aria-label={`Mostrar localização da unidade Nacho Man ${store.name} no mapa`}
                    aria-pressed={selectedStore.name === store.name}
                  >
                    <Navigation />
                  </Button>
                </div>
              </article>
            ))}
            {foundStores.length === 0 && (
              <p className="rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">
                Ainda não temos unidade por aí. Em breve!
              </p>
            )}
          </div>
        </div>
      </section>

      <section
        id="social"
        aria-labelledby="social-title"
        className="overflow-hidden bg-foreground py-16 text-background lg:py-24"
      >
        <div className="site-container">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="relative col-span-2 overflow-hidden rounded-2xl">
              <Image
                src={friendsFood}
                alt="Amigos compartilhando uma refeição Nacho Man"
                sizes="(min-width: 1536px) 704px, (min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-6 pb-6 pt-24 sm:px-8 sm:pb-8">
                <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">
                  Na mesa, todo mundo é de casa.
                </p>
                <p className="max-w-sm font-display text-4xl uppercase sm:text-5xl">
                  Bom mesmo é<br />
                  comer junto.
                </p>
              </div>
            </div>
            <div className="flex min-w-0 flex-col overflow-hidden rounded-2xl bg-primary text-primary-foreground">
              <div className="px-5 pt-5 sm:px-6 sm:pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em]">
                  01 / Pra dividir
                </span>
                <p className="mt-2 font-heading text-2xl font-extrabold uppercase leading-none sm:text-3xl">
                  Só mais
                  <br />
                  um nacho.
                </p>
              </div>
              <Image
                src={menuNachos}
                alt="Nachos com guacamole e acompanhamentos"
                sizes="(min-width: 1536px) 352px, (min-width: 1024px) 25vw, 50vw"
                className="my-auto aspect-square w-full scale-110 object-contain"
              />
              <p className="px-5 pb-5 text-xs font-semibold sm:px-6 sm:pb-6">
                Crocante. Generoso. Nosso.
              </p>
            </div>
            <div className="flex min-w-0 flex-col overflow-hidden rounded-2xl bg-background text-foreground">
              <div className="px-5 pt-5 sm:px-6 sm:pt-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em]">
                  02 / Pra fechar
                </span>
                <p className="mt-2 font-heading text-2xl font-extrabold uppercase leading-none sm:text-3xl">
                  Sempre cabe
                  <br />
                  um doce.
                </p>
              </div>
              <Image
                src={menuChurros}
                alt="Churros com calda de chocolate"
                sizes="(min-width: 1536px) 352px, (min-width: 1024px) 25vw, 50vw"
                className="my-auto aspect-square w-full object-contain"
              />
              <p className="px-5 pb-5 text-xs font-semibold sm:px-6 sm:pb-6">
                O último pedaço é seu.
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end lg:mt-20">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase text-primary">
                <span className="h-1 w-8 bg-primary" /> Quem prova, conta
              </p>
              <h2
                id="social-title"
                className="font-display text-4xl uppercase sm:text-5xl lg:text-6xl"
              >
                O sabor fica.
                <br />
                <span className="text-primary">A galera conta.</span>
              </h2>
            </div>
            <a
              href="https://www.instagram.com/nachomanbrasil/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 border-b border-background/30 pb-2 text-xs font-bold transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="size-4" /> @nachomanbrasil <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="mt-9 grid border-t border-background/20 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="flex flex-col border-b border-background/20 py-8 last:border-b-0 md:border-b-0 md:px-7 md:not-last:border-r md:first:pl-0 md:last:pr-0 lg:py-10"
              >
                <Quote className="mb-5 size-7 fill-primary text-primary" aria-hidden="true" />
                <blockquote className="text-sm leading-7 text-background/85">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-7 text-xs font-bold">
                  <span className="h-px w-5 bg-primary" aria-hidden="true" />
                  {item.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="franquia" className="bg-card py-20 lg:py-28">
        <div className="site-container grid items-center gap-10 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-2xl lg:col-span-6">
            <Image
              src={franquiaLoja}
              loading="lazy"
              width={920}
              height={1080}
              alt="Fachada de uma loja Nacho Man"
              className="aspect-[10/9] h-full w-full object-cover"
            />
            <span className="absolute bottom-4 left-4 rotate-[-3deg] border border-foreground bg-background px-4 py-2 font-heading text-lg font-extrabold uppercase shadow-sm">
              Loja real. Resultado real.
            </span>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase text-primary">
              <span className="h-1 w-8 bg-primary" /> Negócio com personalidade
            </div>
            <h2 className="max-w-xl font-display text-5xl uppercase sm:text-6xl">
              Tenha uma franquia <span className="text-primary">Nacho Man.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
              Operação enxuta, identidade forte e suporte do projeto à operação — para você faturar
              mais de 1 milhão ao ano.
            </p>
            <ul className="mt-7 grid gap-3">
              <li className="flex items-center gap-3 font-heading text-xl font-extrabold uppercase">
                <span className="grid size-7 shrink-0 place-content-center rounded-full bg-primary">
                  <ChevronRight className="size-4 text-primary-foreground" />
                </span>
                Investimento a partir de R$ 199 mil
              </li>
              <li className="flex items-center gap-3 font-heading text-xl font-extrabold uppercase">
                <span className="grid size-7 shrink-0 place-content-center rounded-full bg-primary">
                  <ChevronRight className="size-4 text-primary-foreground" />
                </span>
                Alta rentabilidade
              </li>
            </ul>
            <Button variant="lime" size="pill" className="mt-8 min-w-56">
              Tenha a sua franquia <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
