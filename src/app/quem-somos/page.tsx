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
    <main className="home-grain overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden bg-background pt-28 text-foreground lg:pt-36">
        <div className="pointer-events-none absolute -right-20 top-24 font-display text-[20rem] leading-none text-primary/10">01</div>
        <div className="site-container grid min-h-[680px] items-end gap-10 pb-16 lg:grid-cols-[0.78fr_1.22fr] lg:pb-24">
          <div className="hero-enter relative z-10 pb-4">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">
              <span className="h-1 w-10 bg-primary" /> Uma marca em movimento
            </p>
            <h1 className="font-display text-6xl uppercase leading-[0.8] sm:text-8xl lg:text-[8rem]">
              Alma
              <br />
              <span className="text-primary">mexicana.</span>
              <br />
              Coração
              <br />
              <span className="text-accent">brasileiro.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-muted-foreground">
              Uma história feita de encontros, testes e mesas cheias. De Blumenau para onde a fome
              chamar.
            </p>
            <Link href="#trajetoria" className="mt-8 inline-flex items-center gap-3 border-b-2 border-primary pb-2 text-sm font-bold">
              Ver nossa trajetória <ArrowDown className="size-4" />
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -left-5 bottom-8 top-8 w-3 bg-accent sm:-left-8" />
            <Image
              src={photos.aboutPerson}
              width={1000}
              height={800}
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              alt="Cliente em frente à marca Nacho Man"
              className="relative aspect-[16/10] w-full rounded-[2rem] object-cover"
            />
            <span className="home-sticker home-sticker-tape absolute -bottom-5 right-5 z-20 rotate-[-4deg]">
              Gente de verdade.
              <br />
              <span className="text-accent">Sabor de sobra.</span>
            </span>
          </div>
        </div>
      </section>

      <section id="trajetoria" className="home-section-light bg-background py-20 text-foreground lg:py-32">
        <div className="site-container grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-24">
          <div>
            <p className="home-eyebrow-signal mb-5 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em]">
              <span className="h-1 w-10 bg-primary" /> Uma história real
            </p>
            <h2 className="home-title max-w-lg font-display text-6xl uppercase leading-[0.82] sm:text-8xl">
              Cada encontro.
              <br />
              Um novo
              <br />
              <span className="home-highlight">capítulo.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
              Após muita pesquisa e testes, a Nacho Man encontrou seu lugar. O público abraçou a
              experiência e o que começou em Blumenau ganhou espaço para crescer pelo Brasil.
            </p>
          </div>
          <div className="lg:pt-14">
            <div className="grid border-y border-foreground/15 sm:grid-cols-3">
              {milestones.map((milestone) => (
                <div
                  key={milestone.value}
                  className="border-b border-foreground/15 py-7 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
                >
                  <p className="font-display text-6xl leading-none text-primary sm:text-8xl">
                    {milestone.value}
                  </p>
                  <p className="mt-3 max-w-28 text-xs font-extrabold uppercase leading-4 text-foreground/60">
                    {milestone.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 border-l-4 border-accent pl-6">
              <p className="max-w-2xl font-heading text-2xl font-extrabold uppercase leading-tight sm:text-4xl">
                O que começou com uma ideia em Blumenau virou uma vontade ainda maior: levar a
                autêntica culinária mexicana para novas mesas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section-dark bg-foreground py-20 text-background lg:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative lg:col-span-6">
            <Image
              src={photos.aboutFood}
              width={1600}
              height={1200}
              alt="Pratos Nacho Man à mesa, com tacos, porções e acompanhamentos"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="home-sticker home-sticker-tape home-sticker-red absolute -bottom-5 -right-3 rotate-3 sm:right-5">
              O detalhe
              <br />
              faz o sabor.
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-5">
            <p className="home-eyebrow-accent text-[11px] font-extrabold uppercase tracking-[0.2em]">
              O nosso jeito
            </p>
            <h2 className="home-title mt-5 max-w-xl font-display text-6xl uppercase leading-[0.88] sm:text-8xl">
              Padrão alto.
              <br />
              <span className="home-highlight home-highlight-accent">Personalidade maior.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-background/65">
              Compartilhamos com nossos franqueados o know-how adquirido na prática, assegurando o
              padrão de qualidade e a originalidade dos produtos em cada unidade.
            </p>
            <div className="mt-9 grid gap-6 border-t border-background/15 pt-7 sm:grid-cols-3">
              {values.map(({ Icon, title, copy }) => (
                <div key={title} className="group">
                  <div className="grid size-11 place-content-center rounded-full bg-primary transition-transform duration-300 group-hover:rotate-12">
                    <Icon className="size-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl font-extrabold uppercase leading-none">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-background/60">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section-light bg-background py-20 lg:py-28">
        <div className="site-container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="home-eyebrow-signal mb-4 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em]">
              <span className="h-1 w-8 bg-primary" /> O próximo capítulo
            </p>
            <h2 className="home-title font-display text-6xl uppercase leading-[0.88] sm:text-8xl">
              Inovando e
              <br />
              crescendo
              <br />
              <span className="home-highlight">todo dia.</span>
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
            <div className="home-sticker home-sticker-tape absolute bottom-5 left-5 max-w-56 bg-foreground p-5 text-background sm:bottom-8 sm:left-8">
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
