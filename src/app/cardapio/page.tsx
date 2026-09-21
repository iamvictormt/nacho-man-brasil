import Image from "next/image";
import Link from "next/link";
import { ORDER_URL } from "@/lib/links";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { photos } from "@/lib/photos";
import { menuSections, type MenuItem } from "@/lib/menu";

function ProductCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-foreground/15 bg-card transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-background/30 bg-foreground/85 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-background backdrop-blur">
          Nacho Man
        </span>
      </div>
      <div className="flex flex-1 items-center justify-between gap-4 p-5 sm:p-6">
        <h3 className="font-heading text-3xl font-extrabold uppercase leading-none">{item.name}</h3>
        <span className="grid size-10 shrink-0 place-content-center rounded-full bg-foreground text-background transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowRight className="size-4" />
        </span>
      </div>
    </article>
  );
}

export default function CardapioPage() {
  return (
    <main className="home-grain overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden bg-accent pt-28 text-accent-foreground lg:pt-32">
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-72 rounded-full border-[3rem] border-accent-foreground/10" />
        <div className="site-container grid items-center gap-8 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20">
          <div className="hero-enter relative z-10">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent-foreground">
              <span className="h-1 w-10 bg-accent-foreground" /> O cardápio
            </p>
            <h1 className="max-w-3xl font-display text-6xl uppercase leading-[0.8] sm:text-8xl lg:text-[8rem]">
              Escolha
              <br />
              seu <span className="text-foreground">estrago.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-accent-foreground/75">
              Um cardápio para quem não veio beliscar: crocância, molho e recheio em proporções
              perigosamente boas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="ink" size="pill" asChild>
                <Link href="#burritos">
                  Atacar o cardápio <ArrowRight />
                </Link>
              </Button>
              <span className="self-center text-xs font-extrabold uppercase text-accent-foreground/70">
                Sem pedido tímido
              </span>
            </div>
          </div>
          <div className="relative rotate-2 lg:translate-y-8">
            <div className="absolute -inset-4 -rotate-3 border-2 border-accent-foreground/40" />
            <Image
              src={photos.portions}
              alt="Porção Nacho Man com molhos e acompanhamentos"
              width={1000}
              height={1000}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="relative z-10 aspect-[5/4] w-full rounded-[1rem] border-4 border-accent-foreground object-cover"
            />
            <span className="home-sticker home-sticker-tape home-sticker-red absolute bottom-5 right-0 z-20 rotate-3">
              Feito para
              <br />
              compartilhar.
            </span>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-[69px] z-40 overflow-x-auto border-b border-border bg-background/95 backdrop-blur lg:top-[65px]"
        aria-label="Categorias do cardápio"
      >
        <div className="site-container flex min-w-max gap-3 py-3 text-xs font-extrabold uppercase">
          {menuSections.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-foreground/15 px-5 py-3 transition-colors hover:border-primary hover:bg-primary focus-visible:bg-primary"
            >
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="site-container py-14 lg:py-20">
        {menuSections.map((section, sectionIndex) => (
          <section
            key={section.name}
            id={section.id}
            className={
              sectionIndex === 0
                ? "scroll-mt-40"
                : "mt-16 scroll-mt-40 border-t border-border pt-14 lg:mt-20"
            }
          >
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="home-eyebrow-accent mb-3 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em]">
                  <span className="h-1 w-8 bg-accent" />
                  {section.eyebrow}
                </p>
                <h2 className="font-display text-6xl uppercase leading-[0.9] sm:text-8xl">
                  {section.name}
                  <span className="text-primary">.</span>
                </h2>
              </div>
              <span
                aria-hidden="true"
                className="font-display text-7xl text-foreground/10"
              >
                0{sectionIndex + 1}
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <ProductCard key={item.name} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="relative overflow-hidden bg-accent py-16 text-accent-foreground lg:py-24">
        <div className="site-container grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em]">
              Fome resolvida?
            </p>
            <h2 className="mt-2 font-display text-5xl uppercase leading-none sm:text-6xl">
              Então bora pedir.
            </h2>
            <p className="mt-4 text-sm opacity-75">
              Faça seu pedido no nosso site de delivery.
            </p>
          </div>
          <Button variant="lime" size="pill" asChild>
            <a href={ORDER_URL}>
              Fazer pedido <ArrowRight />
            </a>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
