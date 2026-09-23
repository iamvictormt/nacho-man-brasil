import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { IconCoracao } from "@/components/brand-icons";
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
  { name: "Burritos", caption: "Recheio de ponta a ponta.", image: photos.burrito, id: "burritos" },
  { name: "Tacos", caption: "Uma mordida. Muitos motivos.", image: photos.tacos, id: "tacos" },
  {
    name: "Quesadilhas",
    caption: "O queijo faz as honras.",
    image: photos.quesadilla,
    id: "quesadilhas",
  },
];

// Mantido junto da seção de unidades temporariamente desativada no fim deste arquivo.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const featuredLocations = [
  { city: "Blumenau", image: photos.blumenau, position: "object-center" },
  { city: "Balneário", image: photos.balneario, position: "object-center" },
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
            <Eyebrow className="text-primary">México no prato. Brasil no jeito.</Eyebrow>
            <h1 className="mt-6 max-w-[11ch] font-display text-[clamp(3.8rem,10vw,9.5rem)] leading-[0.86] tracking-[-0.035em] uppercase">
              Mucho sabor.
              <span className="block text-primary">Sem cerimônia.</span>
            </h1>
            <BodyCopy className="my-7 max-w-[28rem] text-background/80">
              Puxa uma cadeira, chama a turma e deixa o resto com a gente. Seu próximo favorito está
              aqui.
            </BodyCopy>
            <div className="pointer-events-auto flex flex-wrap items-center gap-5">
              <ActionLink href="/cardapio" light>
                Explorar o cardápio
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
              Desde 2014 · Feito para comer junto
            </span>
          </div>
        </div>
      </section>

      <StreetTicker label="Paixão pela comida mexicana" />

      <PageSection>
        <SectionHeading aside={<ActionLink href="/cardapio">Ver cardápio completo</ActionLink>}>
          <Eyebrow>Pra começar bem</Eyebrow>
          <DisplayTitle>
            Qual é a sua <span className="text-accent">vontade de hoje?</span>
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
            src={photos.friends}
            alt="Amigos compartilhando uma mesa na Nacho Man"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
          <figcaption className="absolute bottom-5 left-5 rotate-[-2deg] bg-foreground px-4 py-2 font-heading text-lg font-extrabold uppercase shadow-[4px_4px_0_var(--accent)] text-background sm:text-xl">
            A mesa é de todo mundo
          </figcaption>
        </div>

        <div>
          <Eyebrow>Mais que comida mexicana</Eyebrow>
          <DisplayTitle className="max-w-[11ch]">
            O melhor da mesa é <span className="text-accent">quem senta nela.</span>
          </DisplayTitle>
          <BodyCopy className="my-7">
            A gente acredita em comida com personalidade, molho sem economia e encontros sem hora
            pra acabar. Desde 2014, esse é o nosso jeito de receber.
          </BodyCopy>
          <ActionLink href="/quem-somos">Conheça nossa história</ActionLink>
        </div>
      </PageSection>

      <PageSection tone="ink">
        <ReviewShowcase />
      </PageSection>

      <PageSection>
        <SectionHeading
          aside={
            <BodyCopy className="max-w-sm">
              Cor na parede, som na caixa e comida chegando. A experiência começa antes da primeira
              mordida.
            </BodyCopy>
          }
        >
          <Eyebrow>É pra ficar à vontade</Eyebrow>
          <DisplayTitle className="max-w-[10ch]">
            Nosso clima também <span className="text-accent">tem tempero.</span>
          </DisplayTitle>
        </SectionHeading>

        <div className="grid auto-rows-[190px] gap-3 sm:auto-rows-[260px] sm:grid-cols-2 lg:grid-cols-4">
          <div className="relative overflow-hidden rounded-[1.5rem] sm:row-span-2 lg:col-span-2">
            <Image
              src={photos.aboutPerson}
              alt="Cliente se divertindo na Nacho Man"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden rounded-[1.5rem] lg:col-span-2">
            <Image
              src={photos.foods}
              alt="Mesa com pratos da Nacho Man"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative overflow-hidden rounded-[1.5rem] bg-accent p-7 lg:col-span-1">
            <p className="font-display text-4xl uppercase leading-[0.92] text-background sm:text-5xl">
              Chegue com fome. Saia com história.
            </p>
            <IconCoracao className="absolute -bottom-5 -right-4 size-24 rotate-[-12deg] opacity-20 text-background" />
          </div>
          <div className="relative overflow-hidden rounded-[1.5rem] lg:col-span-1">
            <Image
              src={photos.masks}
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
              Sua cidade. <br /> Nosso tempero.
            </DisplayTitle>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-background/75">
              Leve a experiência Nacho Man para mais mesas. Converse com a nossa equipe sobre
              franquias.
            </p>
          </div>
          <ActionLink href="/contato#canais">Quero ser franqueado</ActionLink>
        </div>
      </PageSection>

      <SiteFooter />
    </main>
  );
}
