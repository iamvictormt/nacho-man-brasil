import { photos } from "@/lib/photos";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { IconAbacate, IconCoracao, IconFogo } from "@/components/brand-icons";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const milestones = [
  { value: "2018", label: "o começo em Blumenau" },
  { value: "01", label: "ideia que virou marca" },
  { value: "∞", label: "vontade de continuar" },
];

const values = [
  {
    Icon: IconAbacate,
    title: "Autêntico",
    copy: "A inspiração vem do México. A forma de fazer é nossa.",
  },
  { Icon: IconFogo, title: "Intenso", copy: "Pesquisa, teste e cuidado em tudo que chega à mesa." },
  {
    Icon: IconCoracao,
    title: "Próximo",
    copy: "Uma marca feita para gente chegar, dividir e ficar.",
  },
];

export default function QuemSomosPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative pt-28 lg:pt-36">
        <div className="site-container grid items-center gap-12 pb-16 lg:grid-cols-2 lg:pb-24">
          <div className="hero-enter">
            <p className="mb-6 flex items-center gap-3 text-xs font-extrabold uppercase tracking-widest">
              <span className="h-1 w-8 bg-primary" /> Muito prazer, Nacho Man.
            </p>
            <h1 className="font-display text-6xl uppercase leading-[1.02] sm:text-7xl lg:text-[6.4rem]">
              Alma mexicana.
              <br />
              <span className="text-accent">Coração brasileiro.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
              De Blumenau para o Brasil. Uma marca feita por gente que acredita que comida boa vira
              encontro, experiência e história.
            </p>
            <Link
              href="#trajetoria"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-bold text-background"
            >
              Nossa história <ArrowDown className="size-4" />
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-lg pb-8 pl-5 sm:pl-10">
            <Image
              src={photos.aboutPerson}
              width={800}
              height={1100}
              priority
              sizes="(min-width: 1024px) 42vw, 90vw"
              alt="Cliente em frente à marca Nacho Man"
              className="relative aspect-[5/6] w-full rounded-2xl object-cover"
            />
            <span className="absolute bottom-8 right-0 z-20 rotate-[-6deg] border border-foreground bg-background px-4 py-3 font-heading text-xl font-extrabold uppercase leading-[1.05] text-foreground shadow-sm sm:text-2xl">
              Gente de verdade.
              <br />
              <span className="text-accent">Sabor de sobra.</span>
            </span>
          </div>
        </div>
      </section>

      <section id="trajetoria" className="bg-foreground py-16 text-background lg:py-20">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase text-primary">
              <span className="h-1 w-8 bg-primary" /> Uma história real
            </p>
            <h2 className="font-display text-5xl uppercase leading-[1.02] sm:text-6xl lg:text-7xl">
              Cada encontro,
              <br />
              um novo <span className="text-primary">capítulo.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-background/70">
              Após muita pesquisa e testes, a Nacho Man encontrou seu lugar. O público abraçou a
              experiência e o que começou em Blumenau ganhou espaço para crescer pelo Brasil.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid border-t border-background/20 sm:grid-cols-3">
              {milestones.map((milestone) => (
                <div
                  key={milestone.value}
                  className="border-b border-background/20 py-7 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
                >
                  <p className="font-display text-6xl leading-none text-primary sm:text-7xl">
                    {milestone.value}
                  </p>
                  <p className="mt-3 max-w-28 text-xs font-extrabold uppercase leading-4 text-background/60">
                    {milestone.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-background/20 pt-8">
              <p className="max-w-2xl font-heading text-3xl font-extrabold uppercase leading-tight sm:text-4xl">
                O que começou com uma ideia em Blumenau virou uma vontade ainda maior: levar a
                autêntica culinária mexicana para novas mesas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 lg:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative lg:col-span-6">
            <Image
              src={photos.aboutFood}
              width={1600}
              height={1200}
              alt="Pratos Nacho Man à mesa, com tacos, porções e acompanhamentos"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-5 -right-3 rotate-3 bg-primary px-5 py-4 font-heading text-2xl font-extrabold uppercase leading-[.9] text-primary-foreground shadow-lg sm:right-5">
              O detalhe
              <br />
              faz o sabor.
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">
              O nosso jeito
            </p>
            <h2 className="mt-5 max-w-xl font-display text-5xl uppercase leading-[1.02] sm:text-6xl lg:text-7xl">
              Padrão alto.
              <br />
              <span className="text-accent">Personalidade maior.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">
              Compartilhamos com nossos franqueados o know-how adquirido na prática, assegurando o
              padrão de qualidade e a originalidade dos produtos em cada unidade.
            </p>
            <div className="mt-9 grid gap-6 border-t border-border pt-7 sm:grid-cols-3">
              {values.map(({ Icon, title, copy }) => (
                <div key={title} className="group">
                  <div className="grid size-11 place-content-center rounded-full bg-primary transition-transform duration-300 group-hover:rotate-12">
                    <Icon className="size-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-extrabold uppercase leading-none">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase text-primary">
              <span className="h-1 w-8 bg-primary" /> O próximo capítulo
            </p>
            <h2 className="font-display text-5xl uppercase leading-[1.02] sm:text-6xl lg:text-7xl">
              Inovando e
              <br />
              crescendo
              <br />
              <span className="text-primary">todo dia.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
              A mesa aumenta, o cardápio evolui e a vontade continua a mesma: levar uma experiência
              mexicana autêntica, divertida e brasileira para cada vez mais pessoas.
            </p>
            <Link
              href="/contato"
              className="mt-8 inline-flex items-center gap-3 text-xs font-extrabold uppercase hover:text-accent"
            >
              Fale com a gente <ArrowRight className="size-4 text-primary" />
            </Link>
          </div>
          <div className="relative">
            <Image
              src={photos.aboutAtmosphere}
              width={1400}
              height={1000}
              alt="Cliente aproveitando um taco no ambiente da Nacho Man"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="absolute bottom-5 left-5 max-w-56 bg-foreground p-5 text-background shadow-xl sm:bottom-8 sm:left-8">
              <p className="font-heading text-2xl font-extrabold uppercase leading-none">
                A próxima
                <br />
                mesa pode
                <br />
                ser a sua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
