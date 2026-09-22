import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconCoracao, IconPimenta, IconTaco } from "@/components/brand-icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { photos } from "@/lib/photos";

const chapters = [
  {
    number: "01",
    date: "2014",
    title: "A primeira mesa",
    copy: "A ideia nasceu em Blumenau depois de muita pesquisa, teste e vontade de fazer comida mexicana com personalidade própria.",
  },
  {
    number: "02",
    date: "Hoje",
    title: "Uma marca em movimento",
    copy: "O cardápio cresceu, novas mesas chegaram e a experiência ganhou forma sem perder o cuidado do começo.",
  },
  {
    number: "03",
    date: "Amanhã",
    title: "Mais encontros",
    copy: "Continuamos crescendo para levar uma experiência mexicana autêntica, divertida e brasileira a cada vez mais cidades.",
  },
];

const originValues = [
  {
    number: "01",
    title: "México na raiz",
    copy: "A inspiração vem do México. A forma de fazer é nossa.",
  },
  {
    number: "02",
    title: "Brasil na atitude",
    copy: "Pesquisa, teste e cuidado em tudo que chega à mesa.",
  },
  {
    number: "03",
    title: "Gente no centro",
    copy: "Uma marca feita para gente chegar, dividir e ficar.",
  },
];

const values = [
  {
    number: "01",
    title: "Autêntico",
    copy: "A inspiração vem do México. A forma de fazer é nossa.",
  },
  {
    number: "02",
    title: "Intenso",
    copy: "Pesquisa, teste e cuidado em tudo que chega à mesa.",
  },
  {
    number: "03",
    title: "Próximo",
    copy: "Uma marca feita para gente chegar, dividir e ficar.",
  },
];

export default function QuemSomosPage() {
  return (
    <main className="home-grain overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      <section className="relative min-h-svh overflow-hidden bg-foreground pt-24 text-background">
        <Image
          src={photos.aboutPerson}
          alt="Cliente na Nacho Man segurando um burrito"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_55%] opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/20" />

        <div className="site-container relative flex min-h-[calc(100svh-6rem)] flex-col justify-end py-12 lg:py-16">
          <div className="max-w-6xl">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-primary">
              <span className="h-1 w-10 bg-primary" /> Desde 2014 · Blumenau
            </p>
            <h1 className="hero-enter font-display text-[4.7rem] uppercase leading-[0.8] sm:text-[7.5rem] lg:text-[10rem]">
              Gente que faz.
              <span className="block text-primary">Sabor que fica.</span>
            </h1>
          </div>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <p className="max-w-md text-sm leading-7 text-background/65">
              De Blumenau para outras mesas. Uma marca construída por gente que acredita que comida
              boa vira encontro, experiência e história.
            </p>
            <Link
              href="#origem"
              className="inline-flex w-fit items-center gap-2 text-xs font-extrabold uppercase"
            >
              Conhecer a história <ArrowDownRight className="size-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>

      <section id="origem" className="bg-background py-20 lg:py-32">
        <div className="site-container">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent">
            01 / O começo
          </p>
          <div className="mt-5 grid gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="font-display text-6xl uppercase leading-[0.84] sm:text-8xl lg:col-span-9 lg:text-[8.5rem]">
              A ideia nunca foi copiar.
              <span className="block text-primary">Foi criar personalidade.</span>
            </h2>
            <p className="max-w-sm text-base leading-7 text-muted-foreground lg:col-span-3 lg:pb-2">
              A inspiração sempre foi mexicana. O tempero, a energia e o jeito de receber ganharam a
              nossa voz desde a primeira mesa.
            </p>
          </div>

          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {originValues.map((value, index) => (
              <div
                key={value.number}
                className={`relative min-h-64 overflow-hidden p-7 ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : index === 1
                      ? "bg-foreground text-background"
                      : "bg-accent text-accent-foreground"
                }`}
              >
                <span className="font-display text-5xl opacity-30">{value.number}</span>
                <h3 className="mt-16 max-w-xs font-display text-4xl uppercase leading-[0.9] sm:text-5xl">
                  {value.title}
                </h3>
                <p className="mt-4 max-w-xs text-sm leading-6 opacity-75">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trajetoria" className="bg-foreground py-20 text-background lg:py-32">
        <div className="site-container">
          <div className="grid gap-9 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">
                02 / Nossa trajetória
              </p>
              <h2 className="mt-5 font-display text-6xl uppercase leading-[0.84] sm:text-8xl lg:text-[8.5rem]">
                De uma mesa para <span className="text-primary">muitas.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-background/55 lg:col-span-4 lg:pb-2">
              Crescer nunca foi repetir uma fórmula. Foi aprender com cada pessoa, cada unidade e
              cada prato servido.
            </p>
          </div>

          <div className="relative mt-14 min-h-[420px] overflow-hidden sm:min-h-[560px]">
            <Image
              src={photos.aboutFood}
              alt="Mesa completa com pratos Nacho Man"
              fill
              sizes="(min-width: 1024px) 88vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-7 max-w-2xl font-heading text-3xl font-extrabold uppercase leading-tight sm:bottom-10 sm:left-10 sm:text-5xl">
              A mesa aumentou.
              <span className="block text-primary">O cuidado continua o mesmo.</span>
            </p>
          </div>

          <div className="border-t border-background/15">
            {chapters.map((chapter) => (
              <article
                key={chapter.number}
                className="grid gap-5 border-b border-background/15 py-8 sm:grid-cols-[4rem_10rem_1fr] sm:items-start lg:grid-cols-[5rem_15rem_1fr] lg:py-10"
              >
                <span className="font-display text-3xl text-primary">{chapter.number}</span>
                <strong className="font-display text-5xl uppercase leading-none text-background/20 sm:text-6xl lg:text-7xl">
                  {chapter.date}
                </strong>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
                    {chapter.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-background/55">
                    {chapter.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="valores" className="bg-background py-20 lg:py-32">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent">
                03 / O que não muda
              </p>
              <h2 className="mt-5 font-display text-6xl uppercase leading-[0.84] sm:text-8xl lg:text-[8.5rem]">
                Crescer sem perder a <span className="text-primary">essência.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground lg:col-span-4 lg:pb-2">
              O cardápio evolui e novas cidades chegam. A personalidade, o cuidado e a vontade de
              aproximar pessoas continuam no centro.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div className="relative min-h-[560px] overflow-hidden lg:min-h-[760px]">
              <Image
                src={photos.aboutDrink}
                alt="Cliente brindando na Nacho Man"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div>
              <div className="relative min-h-[460px] overflow-hidden lg:min-h-[570px]">
                <Image
                  src={photos.aboutNachos}
                  alt="Cliente aproveitando uma porção de nachos"
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="mt-7 max-w-2xl font-heading text-3xl font-extrabold uppercase leading-tight sm:text-5xl">
                Comida é o começo. <br/><span className="text-primary">O encontro é o que fica.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[720px] overflow-hidden bg-foreground text-background">
        <Image
          src={photos.masks}
          alt="Máscaras de lucha libre no ambiente Nacho Man"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
        <div className="site-container relative flex min-h-[720px] items-end py-16 lg:py-24">
          <div className="max-w-5xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">
              04 / O próximo capítulo
            </p>
            <h2 className="mt-5 font-display text-6xl uppercase leading-[0.84] sm:text-8xl lg:text-[8.5rem]">
              A história ainda está sendo <span className="text-primary">servida.</span>
            </h2>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <p className="max-w-md text-sm leading-7 text-background/65">
                Mais cidades, novas mesas e a mesma vontade de criar experiências que aproximam.
              </p>
              <Button
                size="pill"
                asChild
                className="w-fit bg-accent text-accent-foreground hover:bg-accent/85"
              >
                <Link href="/contato">
                  Fale com a gente <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
