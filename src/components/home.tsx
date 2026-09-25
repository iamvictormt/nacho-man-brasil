import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { IconCoracao, IconSombrero } from "@/components/brand-icons";
import {
  ActionLink,
  BodyCopy,
  DisplayTitle,
  Eyebrow,
  PageSection,
  SectionHeading,
} from "@/components/editorial";
import { FlavorFinder } from "@/components/flavor-finder";
import { HeroVideo } from "@/components/hero-video";
import { ReviewShowcase } from "@/components/review-showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StreetTicker } from "@/components/street-ticker";
import { photos } from "@/lib/photos";

const favorites = [
  {
    name: "Burritos",
    caption: "400g de puro sabor.",
    image: photos.home.burrito,
    id: "burritos",
  },
  {
    name: "Tacos",
    caption: "Tortilla macia, igual se come no México.",
    image: photos.home.tacos,
    id: "tacos",
  },
  {
    name: "Quesadilhas",
    caption: "Gostosas e queijadas.",
    image: photos.home.quesadilla,
    id: "quesadilhas",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      <section
        className="relative isolate flex min-h-[max(720px,95svh)] items-center overflow-hidden bg-foreground text-background"
        aria-label="Bem-vindo à Nacho Man"
      >
        <HeroVideo />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.12_0_0/0.9),oklch(0.12_0_0/0.48)_55%,oklch(0.12_0_0/0.08)),linear-gradient(0deg,oklch(0.12_0_0/0.62),transparent_42%)] max-md:bg-[linear-gradient(90deg,oklch(0.12_0_0/0.84),oklch(0.12_0_0/0.38))]"
          aria-hidden="true"
        />
        <div className="site-container pointer-events-none relative pb-28 pt-36 sm:pt-44">
          <div className="max-w-5xl motion-safe:animate-[rise-in_700ms_cubic-bezier(0.16,1,0.3,1)_both]">
            <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(3.8rem,10vw,9.5rem)] leading-[0.86] tracking-[-0.035em] uppercase">
              Comida mexicana
              <span className="block text-primary">Sem frescura</span>
            </h1>
            <BodyCopy className="my-7 max-w-[28rem] text-background/80">
              Franquia de comida mexicana autêntica no Brasil.
            </BodyCopy>
            <div className="pointer-events-auto flex flex-wrap items-center gap-5">
              <ActionLink href="/cardapio" light>
                Ver cardápio
              </ActionLink>
              <Link
                href="/encontrar-loja"
                className="group inline-flex min-h-12 items-center gap-2 text-xs font-bold uppercase transition hover:text-primary focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Encontrar uma loja
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
            <span className="mt-10 block text-[0.6rem] font-bold uppercase tracking-[0.16em] text-background/65">
              Desde 2018 · Comida de verdade
            </span>
          </div>
        </div>
      </section>

      <StreetTicker label="Paixão pela comida mexicana" />

      <PageSection>
        <SectionHeading aside={<ActionLink href="/cardapio">Ver cardápio completo</ActionLink>}>
          <DisplayTitle>
            Conheça <span className="text-accent">nossos pratos.</span>
          </DisplayTitle>
        </SectionHeading>

        <div className="grid gap-8 md:grid-cols-3 md:gap-5">
          {favorites.map((item, index) => (
            <Link
              href={`/cardapio#${item.id}`}
              key={item.name}
              className="group block md:even:translate-y-10"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-muted md:aspect-[4/5]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 768px) 34vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-full bg-background text-xs font-extrabold">
                  0{index + 1}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 pt-5">
                <h3 className="font-display text-4xl uppercase transition-colors group-hover:text-accent">
                  {item.name}
                </h3>
                <ArrowUpRight
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.caption}</p>
            </Link>
          ))}
        </div>
      </PageSection>

      <FlavorFinder />

      <PageSection containerClassName="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] sm:min-h-[560px]">
          <Image
            src={photos.home.balnearioFacade}
            alt="Fachada da unidade Nacho Man em Balneário Camboriú"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
          <figcaption className="absolute bottom-5 left-5 rotate-[-2deg] bg-foreground px-4 py-2 font-heading text-lg font-extrabold uppercase shadow-[4px_4px_0_var(--accent)] text-background sm:text-xl flex items-center gap-2">
            <IconCoracao className="size-5" /> Balneário Camboriú
          </figcaption>
        </div>

        <div>
          <DisplayTitle className="max-w-[13ch]">
            De uma garagem <span className="text-accent">para o mundo.</span>
          </DisplayTitle>
          <BodyCopy className="my-7">
            A paixão pela comida mexicana fez ele sair de uma garagem para uma rede de franquias com
            + de 30 lojas.
          </BodyCopy>
          <ActionLink href="/quem-somos">Conheça nossa história</ActionLink>
        </div>
      </PageSection>

      <PageSection tone="ink">
        <ReviewShowcase />
      </PageSection>

      <PageSection>
        <SectionHeading>
          <DisplayTitle className="max-w-[14ch]">
            Lojas temáticas com <span className="text-accent">cor e sabor.</span>
          </DisplayTitle>
        </SectionHeading>

        <div className="grid auto-rows-[190px] gap-3 sm:auto-rows-[260px] sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative overflow-hidden rounded-[1.5rem] sm:row-span-2 lg:col-span-2">
            <Image
              src={photos.home.galleryCustomer}
              alt="Cliente se divertindo na Nacho Man"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden rounded-[1.5rem] lg:col-span-2">
            <Image
              src={photos.home.galleryFood}
              alt="Mesa com pratos da Nacho Man"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden rounded-[1.5rem] bg-accent p-7 lg:col-span-1">
            <p className="font-display text-4xl uppercase leading-[0.92] text-background sm:text-5xl">
              Experiência mexicana completa
            </p>
            <IconSombrero className="absolute -bottom-1 -right-2 size-28 rotate-[-12deg] opacity-20 text-background" />
          </div>
          <div className="relative overflow-hidden rounded-[1.5rem] lg:col-span-1">
            <Image
              src={photos.home.galleryDecor}
              alt="Detalhes da decoração Nacho Man"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </PageSection>

      {/* <PageSection
        id="unidades"
        tone="ink"
        containerClassName="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10"
      >
        <div className="lg:col-span-4">
          <Eyebrow className="text-primary">A Nacho Man mais perto</Eyebrow>
          <DisplayTitle className="max-w-[9ch]">
            Escolha o destino. <span className="text-primary">Chegue com fome.</span>
          </DisplayTitle>
          <BodyCopy className="my-7 text-background/65">
            Cada casa tem seu próprio cenário. O sabor, a energia e a vontade de ficar mais um pouco
            você encontra em todas.
          </BodyCopy>
          <ActionLink href="/encontrar-loja" light>
            Ver todas as unidades
          </ActionLink>
        </div>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:col-span-8 lg:pl-8">
          {featuredLocations.map((location, index) => (
            <Link
              key={location.city}
              href="/encontrar-loja"
              className={`group relative block aspect-[4/5] overflow-hidden rounded-[1.75rem] border-2 border-background/25 bg-foreground shadow-[8px_8px_0_var(--primary)] ${
                index === 0 ? "sm:-rotate-2" : "sm:translate-y-10 sm:rotate-2"
              }`}
            >
              <Image
                src={location.image}
                alt={`Unidade Nacho Man em ${location.city}`}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
                className={`object-cover transition-transform duration-700 group-hover:scale-105 ${location.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-background">
                <div>
                  <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.16em] text-primary">
                    Sua próxima parada
                  </span>
                  <h3 className="mt-1 font-display text-4xl uppercase sm:text-5xl">
                    {location.city}
                  </h3>
                </div>
                <ArrowUpRight className="mb-2 size-6 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          ))}

        </div>
      </PageSection> */}

      <PageSection id="franquia" tone="red" className="py-16 sm:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <div>
            <DisplayTitle className="max-w-none text-[clamp(3rem,6vw,6rem)] text-background">
              Sua cidade <br /> merece um mexicano.
            </DisplayTitle>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-background/75">
              Leve a experiência Nacho Man para sua cidade. Converse com a nossa equipe e abra sua
              franquia.
            </p>
          </div>
          <ActionLink href="/contato#canais">Quero ser franqueado</ActionLink>
        </div>
      </PageSection>

      <SiteFooter />
    </main>
  );
}
