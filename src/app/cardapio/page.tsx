import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import comboFeast from "@/assets/combo-feast.jpg";
import friendsFood from "@/assets/friends-food.jpg";
import menuBurritos from "@/assets/menu-burritos.png";
import menuChurros from "@/assets/menu-churros.png";
import menuNachos from "@/assets/menu-nachos.png";
import menuProducts from "@/assets/menu-products.jpg";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: StaticImageData;
  featured?: boolean;
};

const categories = ["Destaques", "Burritos", "Nachos", "Combos", "Sobremesas"];

const menuSections: { name: string; eyebrow: string; items: MenuItem[] }[] = [
  {
    name: "Destaques",
    eyebrow: "Para começar sem pensar muito",
    items: [
      { name: "Burrito Nacho Man", description: "Recheio generoso, queijo derretido e o molho da casa.", price: "29,90", image: menuBurritos, featured: true },
      { name: "Nachos da casa", description: "Crocância, guacamole e aquela vontade de pedir mais.", price: "24,90", image: menuNachos },
      { name: "Combo sem erro", description: "Principal, acompanhamento e bebida para dividir.", price: "39,90", image: comboFeast },
    ],
  },
  {
    name: "Burritos",
    eyebrow: "Enrolados, quentes e bem recheados",
    items: [
      { name: "Burrito de frango", description: "Frango temperado, arroz, feijão, queijo e salsa fresca.", price: "27,90", image: menuBurritos },
      { name: "Burrito veggie", description: "Legumes, feijão, guacamole e muito sabor em cada mordida.", price: "26,90", image: friendsFood },
      { name: "Burrito da casa", description: "A combinação autoral para quem chegou com fome.", price: "31,90", image: menuProducts },
    ],
  },
  {
    name: "Nachos",
    eyebrow: "Crocantes por natureza",
    items: [
      { name: "Nachos com guacamole", description: "Chips de milho, guacamole fresco e pico de gallo.", price: "24,90", image: menuNachos },
      { name: "Nachos de chilli", description: "Chilli da casa, queijo cremoso e jalapeño.", price: "28,90", image: comboFeast },
      { name: "Nachos para compartilhar", description: "Uma montanha de crocância para colocar no centro da mesa.", price: "34,90", image: friendsFood },
    ],
  },
  {
    name: "Combos",
    eyebrow: "Quando um prato só não resolve",
    items: [
      { name: "Combo Nacho Man", description: "Burrito, nachos e bebida. A escolha mais fácil da noite.", price: "39,90", image: comboFeast, featured: true },
      { name: "Combo para dois", description: "Dois principais, acompanhamento e bebida para dividir.", price: "69,90", image: friendsFood },
    ],
  },
  {
    name: "Sobremesas",
    eyebrow: "Porque sempre cabe mais um doce",
    items: [
      { name: "Churros da casa", description: "Quentinhos, crocantes e acompanhados de doce de leite.", price: "16,90", image: menuChurros },
      { name: "Churros para dividir", description: "Porção generosa para fechar a mesa com chave de ouro.", price: "21,90", image: menuChurros },
    ],
  },
];

function ProductCard({
  item,
  compact = false,
  featured = false,
  dark = false,
}: {
  item: MenuItem;
  compact?: boolean;
  featured?: boolean;
  dark?: boolean;
}) {
  if (!featured) {
    return (
      <article className={`group relative flex items-start gap-4 rounded-xl px-3 py-5 transition-colors sm:gap-6 sm:px-4 ${dark ? "text-background hover:bg-background/10" : "text-foreground hover:bg-foreground/5"}`}>
        <span className="absolute left-0 top-7 h-5 w-1 rounded-r-full bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative hidden size-20 shrink-0 overflow-hidden rounded-full bg-muted ring-1 ring-foreground/10 sm:block">
          <Image src={item.image} alt="" fill sizes="80px" className={`object-cover ${compact ? "object-contain p-2" : ""}`} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-heading text-2xl font-extrabold uppercase leading-none">{item.name}</h3>
            <strong className="whitespace-nowrap font-heading text-xl font-extrabold text-accent">R$ {item.price}</strong>
          </div>
          <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">{item.description}</p>
          <Link href="/pedido" className="mt-3 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase transition-colors hover:text-accent">
            Pedir este <Plus className="size-3 text-primary" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-background text-foreground shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[1.45/1] overflow-hidden bg-muted sm:aspect-[1.7/1]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className={`object-cover transition-transform duration-500 group-hover:scale-105 ${compact ? "object-contain p-5" : ""}`}
        />
        <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-primary-foreground">
          Favorito da casa
        </span>
      </div>
      <div className="flex flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="max-w-[16rem] font-heading text-2xl font-extrabold uppercase leading-none sm:text-3xl">{item.name}</h3>
          <strong className="whitespace-nowrap font-heading text-xl font-extrabold text-accent">R$ {item.price}</strong>
        </div>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{item.description}</p>
        <Link href="/pedido" className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-extrabold uppercase transition-colors hover:text-accent">
          Pedir este <span className="grid size-7 place-content-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-12"><Plus className="size-4" /></span>
        </Link>
      </div>
    </article>
  );
}

export default function CardapioPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden bg-card pt-32 lg:pt-40">
        <div className="site-container grid items-center gap-8 pb-14 lg:grid-cols-12 lg:pb-20">
          <div className="relative z-10 lg:col-span-7">
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.12em] text-primary">
              <span className="h-1 w-8 bg-primary" /> O cardápio
            </p>
            <h1 className="max-w-3xl font-display text-6xl uppercase leading-[.84] sm:text-7xl lg:text-[7.1rem]">
              Um cardápio
              <br />
              para comer
              <br />
              <span className="text-accent">sem pressa.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
              Do crocante ao cremoso, do clássico ao inesperado. Escolha seu favorito e deixe o
              resto com a gente.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="ink" size="pill" asChild>
                <Link href="#destaques">Ver favoritos <ArrowRight /></Link>
              </Button>
              <span className="self-center text-xs font-extrabold uppercase text-muted-foreground">Escolha seu ritmo</span>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:col-span-5 lg:min-h-[510px]">
            <div className="absolute inset-[8%] rounded-full bg-primary" />
            <Image src={menuNachos} alt="Nachos e acompanhamentos Nacho Man" width={1000} height={1000} className="relative z-10 h-full w-full object-contain drop-shadow-2xl" />
            <span className="absolute bottom-5 right-0 z-20 rotate-3 bg-foreground px-4 py-3 font-heading text-xl font-extrabold uppercase leading-none text-background shadow-lg">
              Feito para
              <br />
              <span className="text-primary">compartilhar.</span>
            </span>
          </div>
        </div>
      </section>

      <nav className="sticky top-16 z-40 overflow-x-auto border-b border-border bg-background/95 backdrop-blur" aria-label="Categorias do cardápio">
        <div className="site-container flex min-w-max gap-7 py-4 text-xs font-extrabold uppercase">
          {categories.map((category, index) => (
            <a key={category} href={`#${category.toLowerCase()}`} className={index === 0 ? "text-accent" : "text-muted-foreground hover:text-foreground"}>
              {category}
            </a>
          ))}
        </div>
      </nav>

      <div className="site-container py-16 lg:py-24">
        {menuSections.map((section, sectionIndex) => (
          <section key={section.name} id={section.name.toLowerCase()} className={sectionIndex === 0 ? "scroll-mt-32" : "mt-20 scroll-mt-32 border-t border-border pt-16 lg:mt-28 lg:pt-20"}>
            <div className={`grid gap-8 rounded-3xl p-5 sm:p-8 lg:grid-cols-[.65fr_1.35fr] lg:gap-12 lg:p-12 ${sectionIndex % 2 === 0 ? "bg-foreground text-background" : "bg-card"}`}>
              <div className="flex flex-col justify-between lg:min-h-[32rem]">
                <div>
                  <p className={`text-xs font-extrabold uppercase tracking-[0.16em] ${sectionIndex % 2 === 0 ? "text-primary" : "text-accent"}`}>
                    0{sectionIndex + 1} / {section.eyebrow}
                  </p>
                  <h2 className="mt-4 font-display text-6xl uppercase leading-[.82] sm:text-7xl">{section.name}</h2>
                  <p className={`mt-5 max-w-xs text-sm leading-6 ${sectionIndex % 2 === 0 ? "text-background/65" : "text-muted-foreground"}`}>
                    {sectionIndex === 0
                      ? "Os favoritos para provar o espírito da casa."
                      : section.eyebrow + "."}
                  </p>
                </div>
                <span className={`mt-10 hidden font-display text-[10rem] leading-none sm:block ${sectionIndex % 2 === 0 ? "text-primary/20" : "text-accent/15"}`}>
                  0{sectionIndex + 1}
                </span>
              </div>
              <div>
                <ProductCard item={section.items[0]} compact={section.name === "Sobremesas"} featured />
                <div className="mt-3">
                  {section.items.slice(1).map((item) => (
                    <ProductCard key={item.name} item={item} compact={section.name === "Sobremesas"} dark={sectionIndex % 2 === 0} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="relative overflow-hidden bg-foreground py-14 text-background lg:py-20">
        <div className="site-container grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">Fome resolvida?</p>
            <h2 className="mt-2 font-display text-5xl uppercase leading-none sm:text-6xl">Então bora pedir.</h2>
            <p className="mt-4 text-sm text-background/65">Monte seu pedido e escolha como viver seu momento Nacho Man.</p>
          </div>
          <Button variant="lime" size="pill" asChild>
            <Link href="/pedido">Montar meu pedido <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
