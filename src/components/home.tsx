import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ActionLink, Eyebrow } from "@/components/editorial";
import { IconCoracao } from "@/components/brand-icons";
import { HeroVideo } from "@/components/hero-video";
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
export default function Home() {
  return (
    <main className="nm-page">
      <SiteHeader />
      <section className="nm-home-hero" aria-label="Bem-vindo à Nacho Man">
        <HeroVideo />
        <div className="nm-home-shade" aria-hidden="true" />
        <div className="site-container nm-home-hero-content">
          <Eyebrow>México no prato. Brasil no jeito.</Eyebrow>
          <h1>
            Mucho sabor.
            <br />
            <span>Zero cerimônia.</span>
          </h1>
          <p>
            Puxa uma cadeira, chama a turma e deixa o resto com a gente. Seu próximo favorito está
            aqui.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <ActionLink href="/cardapio" light>
              Explorar o cardápio
            </ActionLink>
            <Link
              href="/encontrar-loja"
              className="inline-flex min-h-12 items-center gap-2 text-xs font-bold uppercase"
            >
              Encontrar uma loja <ArrowUpRight size={18} />
            </Link>
          </div>
          <span className="nm-home-footnote">Desde 2014 · Feito para comer junto</span>
        </div>
      </section>
      <section
        className="home-collage-band overflow-hidden bg-foreground py-5 sm:py-6"
        aria-label="Paixão pela comida mexicana"
      >
        <div
          className="home-collage-track flex w-max font-heading text-3xl font-extrabold uppercase text-background md:text-4xl"
          aria-hidden="true"
        >
          {[0, 1].map((group) => (
            <div key={group} className="flex min-w-[100vw] shrink-0 items-center justify-around">
              {[0, 1, 2].map((item) => (
                <span
                  key={item}
                  className="flex shrink-0 items-center gap-2 whitespace-nowrap px-8"
                >
                  <IconCoracao className="mr-2 size-7" />
                  <span className="text-primary">Paixão</span>
                  <span>pela comida</span>
                  <span className="text-accent">mexicana</span>
                  <IconCoracao className="ml-2 size-7" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="site-container nm-section">
        <div className="nm-section-heading">
          <div>
            <Eyebrow>Pra começar bem</Eyebrow>
            <h2 className="nm-title">
              Qual é a sua
              <br />
              <em>vontade de hoje?</em>
            </h2>
          </div>
          <ActionLink href="/cardapio">Ver cardápio completo</ActionLink>
        </div>
        <div className="nm-favorites">
          {favorites.map((item, i) => (
            <Link href={`/cardapio#${item.id}`} key={item.name} className="nm-food-card group hover:text-accent">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="nm-card-number">0{i + 1}</span>
              </div>
              <div className="flex items-center justify-between gap-3 pt-5">
                <h3 className="font-display text-4xl uppercase">{item.name}</h3>
                <ArrowUpRight aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.caption}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="nm-dark nm-section">
        <div className="site-container nm-story-grid">
          <div className="relative min-h-80 overflow-hidden rounded-[2rem] md:min-h-[540px]">
            <Image
              src={photos.friends}
              alt="Encontro de amigos na Nacho Man"
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="py-5">
            <Eyebrow>Mais que comida mexicana</Eyebrow>
            <h2 className="nm-title">
              O melhor da mesa
              <br />
              <span className="text-primary">é quem senta nela.</span>
            </h2>
            <p className="nm-copy">
              A gente acredita em comida com personalidade, molho sem economia e encontros sem hora
              pra acabar. Desde 2014, esse é o nosso jeito de receber.
            </p>
            <ActionLink href="/quem-somos" light>
              Conheça nossa história
            </ActionLink>
          </div>
        </div>
      </section>
      <section id="unidades" className="site-container nm-section">
        <div className="nm-location">
          <div>
            <Eyebrow>O seu próximo ponto de encontro</Eyebrow>
            <h2 className="nm-title">
              Tem uma mesa
              <br />
              <em>te esperando.</em>
            </h2>
            <p className="nm-copy">
              Encontre uma unidade, confira os horários e trace o caminho para matar essa vontade.
            </p>
            <ActionLink href="/encontrar-loja">Encontrar uma loja</ActionLink>
          </div>
          <div className="nm-location-photo">
            <Image
              src={photos.blumenau}
              alt="Fachada da Nacho Man em Blumenau"
              fill
              sizes="(min-width: 900px) 45vw, 100vw"
              className="object-cover"
            />
            <span>
              <MapPin size={16} /> Do seu jeito. Perto de você.
            </span>
          </div>
        </div>
      </section>
      <section id="franquia" className="nm-franchise">
        <div className="site-container nm-section-heading">
          <div>
            <Eyebrow>Vamos crescer juntos</Eyebrow>
            <h2 className="nm-title">
              Sua cidade.
              <br />
              Nosso tempero.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7">
              Leve a experiência Nacho Man para mais mesas. Converse com a nossa equipe sobre
              franquias.
            </p>
          </div>
          <ActionLink href="/contato#canais">Quero ser franqueado</ActionLink>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
