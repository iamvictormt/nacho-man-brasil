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
      {
        name: "Burrito Nacho Man",
        description: "Recheio generoso, queijo derretido e o molho da casa.",
        price: "29,90",
        image: menuBurritos,
        featured: true,
      },
      {
        name: "Nachos da casa",
        description: "Crocância, guacamole e aquela vontade de pedir mais.",
        price: "24,90",
        image: menuNachos,
      },
      {
        name: "Combo sem erro",
        description: "Principal, acompanhamento e bebida para dividir.",
        price: "39,90",
        image: comboFeast,
      },
    ],
  },
  {
    name: "Burritos",
    eyebrow: "Enrolados, quentes e bem recheados",
    items: [
      {
        name: "Burrito de frango",
        description: "Frango temperado, arroz, feijão, queijo e salsa fresca.",
        price: "27,90",
        image: menuBurritos,
      },
      {
        name: "Burrito veggie",
        description: "Legumes, feijão, guacamole e muito sabor em cada mordida.",
        price: "26,90",
        image: friendsFood,
      },
      {
        name: "Burrito da casa",
        description: "A combinação autoral para quem chegou com fome.",
        price: "31,90",
        image: menuProducts,
      },
    ],
  },
  {
    name: "Nachos",
    eyebrow: "Crocantes por natureza",
    items: [
      {
        name: "Nachos com guacamole",
        description: "Chips de milho, guacamole fresco e pico de gallo.",
        price: "24,90",
        image: menuNachos,
      },
      {
        name: "Nachos de chilli",
        description: "Chilli da casa, queijo cremoso e jalapeño.",
        price: "28,90",
        image: comboFeast,
      },
      {
        name: "Nachos para compartilhar",
        description: "Uma montanha de crocância para colocar no centro da mesa.",
        price: "34,90",
        image: friendsFood,
      },
    ],
  },
  {
    name: "Combos",
    eyebrow: "Quando um prato só não resolve",
    items: [
      {
        name: "Combo Nacho Man",
        description: "Burrito, nachos e bebida. A escolha mais fácil da noite.",
        price: "39,90",
        image: comboFeast,
        featured: true,
      },
      {
        name: "Combo para dois",
        description: "Dois principais, acompanhamento e bebida para dividir.",
        price: "69,90",
        image: friendsFood,
      },
    ],
  },
  {
    name: "Sobremesas",
    eyebrow: "Porque sempre cabe mais um doce",
    items: [
      {
        name: "Churros da casa",
        description: "Quentinhos, crocantes e acompanhados de doce de leite.",
        price: "16,90",
        image: menuChurros,
      },
      {
        name: "Churros para dividir",
        description: "Porção generosa para fechar a mesa com chave de ouro.",
        price: "21,90",
        image: menuChurros,
      },
    ],
  },
];

function ProductCard({ item }: { item: MenuItem }) {
  const cutout = [menuBurritos, menuNachos, menuChurros].includes(item.image);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className={
            cutout
              ? "object-contain p-5 transition-transform duration-500 group-hover:scale-105"
              : "object-cover transition-transform duration-500 group-hover:scale-105"
          }
        />
        {item.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-2 text-[10px] font-extrabold uppercase">
            Favorito da casa
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-3xl font-extrabold uppercase leading-none">{item.name}</h3>
        <p className="mb-6 mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-5">
          <strong className="font-heading text-2xl font-extrabold">R$ {item.price}</strong>
          <Link
            href="/pedido"
            aria-label={"Pedir " + item.name}
            className="inline-flex items-center gap-2 rounded-full bg-foreground py-2 pl-4 pr-2 text-xs font-bold text-background transition-colors hover:bg-accent"
          >
            Pedir{" "}
            <span className="grid size-7 place-content-center rounded-full bg-primary text-foreground">
              <Plus className="size-4" />
            </span>
          </Link>
        </div>
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
                <Link href="#destaques">
                  Ver favoritos <ArrowRight />
                </Link>
              </Button>
              <span className="self-center text-xs font-extrabold uppercase text-muted-foreground">
                Escolha seu ritmo
              </span>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:col-span-6 lg:min-h-[510px]">
            <div className="absolute inset-[8%] rounded-full bg-primary" />
            <Image
              src={menuNachos}
              alt="Nachos e acompanhamentos Nacho Man"
              width={1000}
              height={1000}
              priority
              className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
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
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="rounded-full border border-border px-5 py-3 transition-colors hover:border-foreground hover:bg-primary focus-visible:bg-primary"
            >
              {category}
            </a>
          ))}
        </div>
      </nav>

      <div className="site-container py-14 lg:py-20">
        {menuSections.map((section, sectionIndex) => (
          <section
            key={section.name}
            id={section.name.toLowerCase()}
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
              Monte seu pedido e escolha como viver seu momento Nacho Man.
            </p>
          </div>
          <Button variant="lime" size="pill" asChild>
            <Link href="/pedido">
              Montar meu pedido <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
