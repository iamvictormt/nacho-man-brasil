import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconCoracao, IconPimenta, IconTaco } from "@/components/brand-icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroVideo } from "@/components/hero-video";
import { photos } from "@/lib/photos";

const menuHighlights = [
  {
    number: "01",
    name: "Burritos",
    line: "Recheio até a última mordida.",
    image: photos.burrito,
  },
  {
    number: "02",
    name: "Tacos",
    line: "Pequenos no tamanho. Gigantes na vontade.",
    image: photos.tacos,
  },
  {
    number: "03",
    name: "Quesadilhas",
    line: "Queijo, crocância e zero cerimônia.",
    image: photos.quesadilla,
  },
];

const marqueePhrases = [
  { first: "PAIXÃO", middle: "PELA COMIDA", last: "MEXICANA", icon: IconCoracao },
];

const reviews = [
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

const manifestoFeatures = [
  {
    number: "01",
    title: "Raiz mexicana",
    description: "Tortilla, milho, pimenta e frescor.",
  },
  {
    number: "02",
    title: "Atitude brasileira",
    description: "Combinações autorais e recheio de verdade.",
  },
  {
    number: "03",
    title: "Mesa compartilhada",
    description: "Comida boa sempre pede companhia.",
  },
];

export default function Home() {
  return (
    <main className="home-grain overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      <section
        id="inicio"
        className="relative min-h-svh overflow-hidden bg-foreground pt-24 text-background"
      >
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/20" />

        <div className="site-container relative flex min-h-[calc(100svh-6rem)] flex-col justify-end py-12 lg:py-16">
          <div className="max-w-6xl">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-primary">
              <span className="h-1 w-10 bg-primary" /> México no prato · Brasil no jeito
            </p>
            <h1 className="hero-enter font-display text-[4.8rem] uppercase leading-[0.8] sm:text-[7.5rem] lg:text-[10.5rem]">
              Muito sabor.
              <span className="block text-primary">Zero cerimônia.</span>
            </h1>
          </div>
        </div>
      </section>

      <section
        aria-label="Destaques Nacho Man"
        className="home-collage overflow-hidden bg-foreground"
      >
        <div className="home-collage-track flex w-max py-4 font-heading text-3xl font-extrabold uppercase text-background sm:py-5 md:text-4xl">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1}>
              {[...marqueePhrases, ...marqueePhrases, ...marqueePhrases].map((phrase, index) => (
                <span
                  key={`${phrase.first}-${index}`}
                  className="flex shrink-0 items-center gap-2 whitespace-nowrap px-8"
                >
                  <phrase.icon className="size-7 text-background mr-2" aria-hidden="true" />
                  <span className="text-primary">{phrase.first}</span>
                  <span>{phrase.middle}</span>
                  <span className="text-accent">{phrase.last}</span>
                  <phrase.icon className="size-7 text-background ml-2" aria-hidden="true" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="manifesto" className="bg-background py-20 lg:py-32">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-12">
              <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                <span className="h-1 w-8 bg-accent" /> Nosso jeito
              </p>
              <h2 className="mt-5 font-display text-6xl uppercase leading-[0.84] sm:text-8xl lg:text-[8.5rem]">
                Do México pra mesa.
                <span className="block text-accent">Do nosso jeito.</span>
              </h2>
            </div>
          </div>

          <div className="relative mt-14 min-h-[420px] overflow-hidden bg-foreground sm:min-h-[560px]">
            <Image
              src={photos.feast}
              alt="Embalagens e pratos Nacho Man"
              fill
              sizes="(min-width: 1024px) 88vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/5 to-transparent" />

            <p className="absolute bottom-6 left-6 max-w-xl font-heading text-2xl font-extrabold uppercase leading-tight text-background sm:bottom-10 sm:left-10 sm:text-4xl">
              Sem frescura. <span className="text-accent">Com muito molho.</span>
            </p>
          </div>
          
        </div>
      </section>

      <section id="menu" className="bg-foreground py-20 text-background lg:py-28">
        <div className="site-container grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary">
                <span className="h-1 w-8 bg-primary" /> Vai de quê?
              </p>
              <h2 className="mt-5 max-w-2xl font-display text-6xl uppercase leading-[0.84] sm:text-8xl lg:text-9xl">
                A fome escolhe o <span className="text-primary">caminho.</span>
              </h2>
              <Link href="/cardapio" className="mt-7 inline-flex items-center gap-2 text-xs font-extrabold uppercase hover:text-primary">
                Conhecer o cardápio <ArrowRight className="size-4 text-primary" />
              </Link>
            
            </div>
          </div>

          <div className="lg:col-span-7">
            {menuHighlights.map((item) => (
              <Link
                key={item.name}
                href="/cardapio"
                className="group relative grid grid-cols-[3rem_1fr] gap-5 py-7 lg:grid-cols-[3.25rem_minmax(0,1fr)_11rem_auto] lg:items-center"
              >
                <span className="font-display text-3xl text-background/20 transition-colors group-hover:text-primary">
                  {item.number}
                </span>
                <div className="pr-14 lg:pr-0">
                  <h3 className="font-display text-5xl uppercase leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm text-background/55">{item.line}</p>
                </div>
                <div className="relative col-start-2 aspect-[16/8] overflow-hidden lg:col-start-auto lg:aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={`${item.name} Nacho Man`}
                    fill
                    sizes="(min-width: 1024px) 11rem, 80vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="absolute right-0 top-7 grid size-11 place-content-center rounded-full border border-background/20 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground lg:static">
                  <ArrowRight className="size-5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="unidades" className="bg-background py-20 lg:py-28">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-12">
              <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
                <span className="h-1 w-8 bg-accent" /> Quem prova, volta
              </p>
              <h2 className="mt-5 font-display text-5xl uppercase leading-[0.86] sm:text-7xl lg:text-[7rem]">
                A mesa fala <span className="text-accent">por si.</span>
              </h2>
            </div>
   
 
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3 md:items-start">
            {reviews.map((review, index) => (
              <article
                key={review.name}
                className={`relative flex min-h-[18rem] flex-col overflow-hidden p-7 md:p-8 bg-foreground/5  ${
                  index === 1 ? "md:mt-12" : ""
                }`}
              >
                <span
                  className="pointer-events-none absolute right-5 top-3 font-display text-[8rem] leading-none text-foreground/[0.06]"
                  aria-hidden="true"
                >
                  “
                </span>
                <div className="flex gap-1 text-[#fabb05]" aria-label="Avaliação de cinco estrelas">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="size-5" fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-6 font-heading text-xl font-extrabold uppercase leading-tight">
                  “{review.quote}”
                </blockquote>
                <footer className="mt-7 text-[10px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                  <cite className="not-italic text-foreground">{review.name}</cite>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="franquia" className="bg-accent py-16 text-accent-foreground lg:py-28">
        <div className="site-container grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#F8F8F8]">
                <span className="h-1 w-8 bg-[#F8F8F8]" /> Próximo capítulo
            </p>
            <h2 className="mt-5 font-display text-6xl uppercase leading-[0.84] sm:text-8xl lg:text-[8.5rem]">
              Leve essa fome para sua cidade.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-2">
            <Button variant="ink" size="pill" asChild className="mt-7">
              <Link href="/contato">
                Quero ser franqueado <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
