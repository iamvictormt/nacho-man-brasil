"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Instagram,
  MapPin,
  Navigation,
  Quote,
  Search,
  ShoppingBag,
  Star,
} from "lucide-react";
import { photos } from "@/lib/photos";
import { ORDER_URL } from "@/lib/links";
import { stores } from "@/lib/stores";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconFogo, IconNachos, IconTaco } from "@/components/brand-icons";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const menuCards = [
  {
    name: "Nachos",
    eyebrow: "Para dividir",
    copy: "Crocantes, carregados e prontos para a mesa.",
    image: photos.chips,
    tone: "bg-primary text-foreground",
  },
  {
    name: "Burritos",
    eyebrow: "Para resolver",
    copy: "Recheio de verdade, enrolado sem economizar.",
    image: photos.burrito,
    tone: "bg-foreground text-background",
  },
  {
    name: "Tacos",
    eyebrow: "Para morder",
    copy: "Pequenos no tamanho. Grandes na atitude.",
    image: photos.tacos,
    tone: "bg-accent text-accent-foreground",
  },
  {
    name: "Churros",
    eyebrow: "Para fechar",
    copy: "O último pedaço é sempre o mais disputado.",
    image: photos.churros,
    tone: "bg-card text-foreground",
  },
];

const reviews = [
  {
    quote: "Os tacos de camarão são a melhor pedida. Já estou planejando a próxima visita.",
    name: "Maria M. B.",
    city: "Blumenau",
  },
  {
    quote: "A comida chegou rápido e o ambiente é cheio de referência e detalhes incríveis.",
    name: "Karine S.",
    city: "Balneário Camboriú",
  },
  {
    quote: "A guacamole é sensacional. Atendimento excelente e sabor de verdade.",
    name: "B. Lum",
    city: "Goiânia",
  },
];

function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] ${
        dark ? "text-primary" : "text-primary"
      }`}
    >
      <span className="h-1 w-8 bg-current" />
      {children}
    </p>
  );
}

function SectionTitle({
  eyebrow,
  children,
  dark = false,
}: {
  eyebrow: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className="font-display text-5xl uppercase leading-[0.86] tracking-[-0.02em] sm:text-7xl">
        {children}
      </h2>
    </div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const query = search.trim().toLowerCase();
  const foundStores = query
    ? stores.filter((store) =>
        `${store.name} ${store.address} ${store.city} ${store.phone}`.toLowerCase().includes(query),
      )
    : stores;
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${selectedStore.mapBounds}&layer=mapnik&marker=${selectedStore.coordinates.lat},${selectedStore.coordinates.lon}`;
  const searchStores = () => {
    if (foundStores[0]) setSelectedStore(foundStores[0]);
    document.getElementById("unidades-resultados")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="home-grain overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <Button
        variant="ink"
        asChild
        className={`fixed bottom-5 right-5 z-50 h-auto rounded-full border border-background/15 py-2 pl-2 pr-3 shadow-2xl transition-all duration-300 sm:bottom-7 sm:right-7 ${
          scrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <a href={ORDER_URL} aria-label="Pedir Nacho Man agora">
          <span className="grid size-10 place-content-center rounded-full bg-primary text-primary-foreground">
            <ShoppingBag className="size-5" />
          </span>
          <span className="px-2 text-left">
            <span className="block text-[10px] text-background/55">BATEU A FOME?</span>
            <strong className="block text-xs uppercase">Pedir agora</strong>
          </span>
          <ArrowRight className="text-primary" />
        </a>
      </Button>

      {/* 1. Hero */}
      <section id="inicio" className="bg-foreground text-background">
        <div className="site-container grid min-h-[calc(100svh-4rem)] items-center gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-12">
          <div className="max-w-2xl">
            <Eyebrow dark>Comida de rua, sem pedir licença</Eyebrow>
            <h1 className="font-display text-[clamp(4.5rem,12vw,10rem)] uppercase leading-[0.78] tracking-[-0.035em]">
              Fome <span className="text-primary">sem</span> freio.
            </h1>
            <p className="mt-9 max-w-md text-base leading-7 text-background/65">
              Tortilla, pimenta e recheio de verdade. O México encontrou a rua brasileira.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button variant="lime" size="pill" asChild>
                <a href={ORDER_URL}>
                  Quero pedir <ArrowRight />
                </a>
              </Button>
              <Link href="#menu" className="group inline-flex items-center gap-2 text-sm font-bold">
                Ver a fome de perto
                <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </Link>
            </div>
          </div>
          <div className="relative min-h-[430px] lg:min-h-[680px]">
            <Image
              src={photos.heroBurrito}
              alt="Burrito Nacho Man recheado"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover lg:rounded-bl-[7rem] lg:rounded-tl-[2rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-6 font-heading text-2xl font-extrabold uppercase sm:left-10">
              Brasil, pode chegar.
            </p>
            <span className="home-sticker home-sticker-round absolute -left-3 top-8 z-10 rotate-[-8deg] bg-primary sm:left-6">
              Desde
              <br />
              <b className="text-accent">2014</b>
            </span>
          </div>
        </div>
      </section>

      {/* 2. Tira de marca */}
      <section aria-label="Manifesto Nacho Man" className="border-y-4 border-foreground bg-primary py-5">
        <div className="home-collage-band overflow-hidden">
          <div className="home-collage-track flex w-max items-center font-heading text-2xl font-extrabold uppercase tracking-[0.06em]">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
                {Array.from({ length: 4 }).map((_, index) => (
                  <span key={index} className="flex items-center gap-5 whitespace-nowrap px-7">
                    <IconTaco className="size-7" />
                    Não é só comida <span className="text-accent">é atitude.</span>
                    <span className="text-foreground/30">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Escolha de fome */}
      <section id="menu" className="site-container py-20 lg:py-28">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle eyebrow="Escolha seu caminho">
            Qual é o tamanho
            <br />
            da sua <span className="text-primary">fome?</span>
          </SectionTitle>
          <Link href="/cardapio" className="group inline-flex items-center gap-2 text-sm font-bold">
            Ver cardápio inteiro <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {menuCards.map((item, index) => (
            <Link
              href="/cardapio"
              key={item.name}
              className={`group relative flex min-h-[390px] flex-col overflow-hidden rounded-[1.5rem] border-2 border-foreground/10 p-6 transition-transform hover:-translate-y-2 ${item.tone}`}
            >
              <div className="relative z-10">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] opacity-65">
                  0{index + 1} / {item.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-5xl uppercase leading-none">{item.name}</h3>
                <p className="mt-3 max-w-[12rem] text-sm leading-5 opacity-75">{item.copy}</p>
              </div>
              <Image
                src={item.image}
                alt={`${item.name} Nacho Man`}
                width={1000}
                height={800}
                sizes="(min-width: 1024px) 25vw, 90vw"
                className="absolute inset-x-0 bottom-0 h-[57%] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="relative z-10 mt-auto grid size-11 place-content-center self-end rounded-full bg-foreground text-background">
                <ArrowRight className="size-5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Manifesto */}
      <section id="manifesto" className="bg-card py-20 lg:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <SectionTitle eyebrow="Receita com identidade">
            O México
            <br />
            encontrou
            <br />
            o <span className="text-primary">Brasil.</span>
          </SectionTitle>
          <div className="lg:pt-12">
            <p className="max-w-md text-base leading-7 text-muted-foreground">
              A gente respeita a raiz, mas não fica parado nela. Cada receita nasce desse encontro:
              ingredientes mexicanos, apetite brasileiro e uma vontade enorme de fazer do nosso jeito.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 border-y border-foreground/15 py-8 sm:grid-cols-3">
              <div>
                <p className="font-display text-7xl leading-none text-primary sm:text-8xl">12</p>
                <p className="mt-3 font-heading text-lg font-extrabold uppercase">anos de rua</p>
              </div>
              <div>
                <p className="font-display text-7xl leading-none text-accent sm:text-8xl">∞</p>
                <p className="mt-3 font-heading text-lg font-extrabold uppercase">vontade de criar</p>
              </div>
              <span className="hidden self-center font-display text-7xl text-primary sm:block">→</span>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <IconNachos className="size-9 text-primary" />
                <h3 className="mt-4 font-heading text-2xl font-extrabold uppercase">Raiz, não fantasia</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Milho, tortilla, pimenta e frescor. A base é mexicana; a atitude é Nacho Man.
                </p>
              </div>
              <div>
                <IconFogo className="size-9 text-accent" />
                <h3 className="mt-4 font-heading text-2xl font-extrabold uppercase">Receita com RG</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Combinações autorais, molhos da casa e uma mordida que não passa batida.
                </p>
              </div>
            </div>
            <div className="mt-10 overflow-hidden rounded-[1.5rem] border-2 border-foreground">
              <Image
                src={photos.preparation}
                alt="Mesa com pratos mexicanos Nacho Man"
                width={1600}
                height={900}
                className="aspect-[2/1] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Oferta combo */}
      <section id="combo" className="bg-accent py-20 text-accent-foreground lg:py-28">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="order-2 lg:order-1">
            <SectionTitle eyebrow="O plano que salva a noite">
              Mordeu,
              <br />
              <span className="text-primary">resolveu.</span>
            </SectionTitle>
            <p className="mt-7 max-w-md text-base leading-7 opacity-80">
              Burrito ou taco, nachos e bebida. Para a mesa que diz “vou comer pouco” e termina
              pedindo sobremesa.
            </p>
            <Button variant="ink" size="pill" asChild className="mt-8">
              <a href={ORDER_URL}>
                Montar meu combo <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="relative order-1 lg:order-2">
            <Image
              src={photos.feast}
              alt="Mesa com combo Nacho Man"
              width={1600}
              height={912}
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />
            <span className="home-sticker home-sticker-tape absolute -left-3 top-6 -rotate-6">
              Juntos
              <br />
              é melhor.
            </span>
          </div>
        </div>
      </section>

      {/* 6. Prova social */}
      <section id="prova-social" className="bg-foreground py-20 text-background lg:py-28">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionTitle eyebrow="A rua já falou" dark>
              O sabor fica.
              <br />
              <span className="text-primary">A galera conta.</span>
            </SectionTitle>
            <a
              href="https://www.instagram.com/nachomanbrasil/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-background/70 hover:text-primary"
            >
              <Instagram className="size-4" /> @nachomanbrasil <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="flex min-h-64 flex-col rounded-[1.5rem] border border-background/15 p-6 transition-colors hover:border-primary/60"
              >
                <div className="flex gap-1 text-primary">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="size-4 fill-current" />
                  ))}
                </div>
                <Quote className="mt-8 size-7 fill-primary text-primary" />
                <blockquote className="mt-4 text-base leading-7 text-background/80">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-2 pt-7 text-xs font-bold uppercase tracking-wider">
                  <span className="h-px w-5 bg-primary" />
                  {review.name} · <span className="text-background/45">{review.city}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Encontrar unidade */}
      <section id="unidades" className="site-container py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr_0.75fr]">
          <div>
            <SectionTitle eyebrow="Chega mais">
              Tem Nacho
              <br />
              <span className="text-primary">perto.</span>
            </SectionTitle>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Encontre a unidade mais próxima e apareça. A mesa está esperando.
            </p>
            <div className="relative mt-7">
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    searchStores();
                  }
                }}
                aria-label="Buscar unidade por cidade ou endereço"
                placeholder="Cidade ou endereço"
                className="h-13 rounded-full bg-card pl-12 pr-14"
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
          <div className="relative min-h-80 overflow-hidden rounded-[1.5rem] border-2 border-foreground bg-muted">
            <iframe
              key={selectedStore.name}
              title={`Mapa da unidade Nacho Man ${selectedStore.name}`}
              src={mapUrl}
              className="absolute inset-0 size-full border-0"
              loading="lazy"
            />
            <div className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
              <MapPin className="mr-1 inline size-3" /> Mapa real
            </div>
          </div>
          <div id="unidades-resultados" className="grid content-start gap-3">
            {foundStores.map((store) => (
              <article
                key={store.name}
                className={`rounded-[1.5rem] border-2 p-5 transition-colors ${
                  selectedStore.name === store.name ? "border-primary bg-primary/5" : "border-border"
                }`}
              >
                <div className="flex justify-between gap-3">
                  <div>
                    <button
                      type="button"
                      onClick={() => setSelectedStore(store)}
                      className="text-left font-bold hover:text-primary"
                    >
                      Nacho Man {store.name}
                    </button>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {store.address}
                      <br />
                      {store.city}
                    </p>
                    <p className="mt-3 text-xs text-muted-foreground">
                      <strong className="text-foreground">Horários:</strong> {store.hours}
                    </p>
                    <span className="mt-3 block text-xs font-bold text-secondary">● Aberto agora</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedStore(store)}
                    aria-label={`Mostrar ${store.name} no mapa`}
                  >
                    <Navigation />
                  </Button>
                </div>
              </article>
            ))}
            {foundStores.length === 0 && (
              <p className="rounded-[1.5rem] border-2 border-dashed border-border p-5 text-sm text-muted-foreground">
                Ainda não temos unidade por aí. Em breve!
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 8. Franquia */}
      <section id="franquia" className="bg-foreground py-20 text-background lg:py-28">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionTitle eyebrow="Negócio com personalidade" dark>
              Leve essa fome
              <br />
              <span className="text-primary">para sua cidade.</span>
            </SectionTitle>
            <p className="mt-7 max-w-md text-base leading-7 text-background/70">
              Uma marca forte, operação enxuta e comida que faz a galera voltar. Conheça o modelo
              de franquia Nacho Man.
            </p>
            <Button variant="lime" size="pill" asChild className="mt-8">
              <a href="/contato">
                Quero ser franqueado <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="relative">
            <Image
              src={photos.masks}
              alt="Máscaras mexicanas na decoração da Nacho Man"
              width={920}
              height={1080}
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover lg:aspect-[5/6]"
            />
            <span className="home-sticker home-sticker-tape absolute bottom-5 left-5 rotate-[-4deg]">
              Uma marca
              <br />
              sem igual.
            </span>
          </div>
        </div>
      </section>

      {/* 9. CTA final */}
      <section className="bg-primary py-20 text-center lg:py-28">
        <div className="site-container">
          <IconTaco className="mx-auto size-20" />
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-5xl uppercase leading-[0.83] sm:text-8xl">
            Sua fome ainda está aí?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm opacity-75">
            Então a conversa não acabou. Bora tacar molho nessa fome.
          </p>
          <Button variant="ink" size="pill" asChild className="mt-8">
            <a href={ORDER_URL}>
              Pedir agora <ArrowRight />
            </a>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
