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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-3xl font-extrabold uppercase leading-none">{item.name}</h3>
      </div>
    </article>
  );
}

export default function CardapioPage() {
  return (
    <main className="overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden bg-background pt-28 lg:pt-32">
        <div className="site-container grid items-center gap-8 pb-14 lg:grid-cols-12 lg:pb-20">
          <div className="hero-enter relative z-10 lg:col-span-6">
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.12em] text-foreground">
              <span className="h-1 w-8 bg-primary" /> O cardápio
            </p>
            <h1 className="max-w-3xl font-display text-6xl uppercase leading-[1.02] sm:text-7xl lg:text-[6.4rem]">
              Sua fome.
              <br />
              Nosso <span className="text-accent">território.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
              Do crocante ao cremoso, do clássico ao inesperado. Escolha seu favorito e deixe o
              resto com a gente.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="ink" size="pill" asChild>
                <Link href="#burritos">
                  Ver categorias <ArrowRight />
                </Link>
              </Button>
              <span className="self-center text-xs font-extrabold uppercase text-muted-foreground">
                Escolha seu ritmo
              </span>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="absolute inset-[8%] rounded-full bg-primary" />
            <Image
              src={photos.portions}
              alt="Porção Nacho Man com molhos e acompanhamentos"
              width={1000}
              height={1000}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="relative z-10 aspect-[5/4] w-full rounded-[2rem] object-cover"
            />
            <span className="absolute bottom-5 right-0 z-20 rotate-3 bg-foreground px-4 py-3 font-heading text-xl font-extrabold uppercase leading-none text-background shadow-lg">
              Feito para
              <br />
              <span className="text-primary">compartilhar.</span>
            </span>
          </div>
        </div>
      </section>

      <nav
        className="sticky top-[69px] z-40 overflow-x-auto border-b border-border bg-background lg:top-[65px]"
        aria-label="Categorias do cardápio"
      >
        <div className="site-container flex min-w-max gap-3 py-3 text-xs font-extrabold uppercase">
          {menuSections.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-border px-5 py-3 transition-colors hover:border-foreground hover:bg-primary focus-visible:bg-primary"
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
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {section.eyebrow}
                </p>
                <h2 className="font-display text-5xl uppercase sm:text-6xl">
                  {section.name}
                  <span className="text-accent">.</span>
                </h2>
              </div>
              <span
                aria-hidden="true"
                className="font-heading text-5xl font-extrabold text-foreground/15"
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

      <section className="relative overflow-hidden bg-foreground py-14 text-background lg:py-20">
        <div className="site-container grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
              Fome resolvida?
            </p>
            <h2 className="mt-2 font-display text-5xl uppercase leading-none sm:text-6xl">
              Então bora pedir.
            </h2>
            <p className="mt-4 text-sm text-background/65">
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
