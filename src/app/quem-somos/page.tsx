import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { IconAbacate, IconCoracao, IconFogo } from "@/components/brand-icons";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import equipeNachoMan from "@/assets/equipe-nacho-man.png";
import franquiaLoja from "@/assets/franquia-loja.png";
import historiaPreparo from "@/assets/historia-preparo.jpg";
import menuChurros from "@/assets/menu-churros.png";

const milestones = [
  { value: "2018", label: "o começo em Blumenau" },
  { value: "01", label: "ideia que virou marca" },
  { value: "∞", label: "vontade de continuar" },
];

const values = [
  { Icon: IconAbacate, title: "Autêntico", copy: "A inspiração vem do México. A forma de fazer é nossa." },
  { Icon: IconFogo, title: "Intenso", copy: "Pesquisa, teste e cuidado em tudo que chega à mesa." },
  { Icon: IconCoracao, title: "Próximo", copy: "Uma marca feita para gente chegar, dividir e ficar." },
];

export default function QuemSomosPage() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden bg-background pt-32 lg:pt-40">
        <div className="site-container pb-14 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="relative z-10 lg:col-span-7">
              <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.12em] text-primary">
                <span className="h-1 w-8 bg-primary" /> Quem somos
              </p>
              <h1 className="max-w-4xl font-display text-6xl uppercase leading-[.82] sm:text-7xl lg:text-[7.1rem]">
                De
                <br />
                Blumenau
                <br />
                para o <span className="text-primary">Brasil.</span>
              </h1>
              <div className="mt-8 flex max-w-xl items-start gap-4 border-l-2 border-primary pl-4">
                <p className="text-base leading-7 text-muted-foreground">
                  Uma marca brasileira com alma mexicana, criada para transformar comida em
                  experiência e crescimento em novas histórias.
                </p>
              </div>
              <Link href="#trajetoria" className="mt-8 inline-flex items-center gap-3 text-xs font-extrabold uppercase hover:text-accent">
                Conheça a trajetória <ArrowDown className="size-4 text-primary" />
              </Link>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute -right-12 -top-12 size-56 rounded-full bg-primary sm:size-72" />
              <div className="relative z-10 ml-auto w-[86%] rotate-2 overflow-hidden rounded-2xl border-4 border-foreground bg-foreground shadow-2xl">
                <Image
                  src={equipeNachoMan}
                  width={800}
                  height={1100}
                  priority
                  alt="Equipe Nacho Man usando máscaras coloridas"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent p-5 pt-20 text-background">
                  <p className="font-heading text-2xl font-extrabold uppercase leading-none">
                    A equipe por trás
                    <br />
                    <span className="text-primary">da experiência.</span>
                  </p>
                </div>
              </div>
              <span className="absolute left-0 top-5 z-20 -rotate-6 bg-accent px-4 py-3 font-heading text-xl font-extrabold uppercase leading-none text-accent-foreground shadow-lg sm:left-2">
                Feito por gente.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="trajetoria" className="bg-foreground py-16 text-background lg:py-20">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase text-primary">
              <span className="h-1 w-8 bg-primary" /> Uma história real
            </p>
            <h2 className="font-display text-5xl uppercase leading-[.86] sm:text-6xl lg:text-7xl">
              Não foi
              <br />
              do dia
              <br />
              para a <span className="text-primary">noite.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-background/70">
              Após muita pesquisa e testes, a Nacho Man encontrou seu lugar. O público abraçou a
              experiência e o que começou em Blumenau ganhou espaço para crescer pelo Brasil.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid border-t border-background/20 sm:grid-cols-3">
              {milestones.map((milestone) => (
                <div key={milestone.value} className="border-b border-background/20 py-7 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
                  <p className="font-display text-6xl leading-none text-primary sm:text-7xl">{milestone.value}</p>
                  <p className="mt-3 max-w-28 text-xs font-extrabold uppercase leading-4 text-background/60">{milestone.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-background/20 pt-8">
              <p className="max-w-2xl font-heading text-3xl font-extrabold uppercase leading-[.95] sm:text-4xl">
                O resultado foi uma empresa rentável, lucrativa e, acima de tudo, uma propagadora da
                autêntica culinária mexicana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 lg:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative lg:col-span-6">
            <Image
              src={historiaPreparo}
              width={1600}
              height={1200}
              alt="Preparo de ingredientes frescos na cozinha Nacho Man"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="absolute -bottom-5 -right-3 rotate-3 bg-primary px-5 py-4 font-heading text-2xl font-extrabold uppercase leading-[.9] text-primary-foreground shadow-lg sm:right-5">
              O detalhe
              <br />
              faz o sabor.
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-accent">O nosso jeito</p>
            <h2 className="mt-5 max-w-xl font-display text-5xl uppercase leading-[.86] sm:text-6xl lg:text-7xl">
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
                  <h3 className="mt-4 font-heading text-2xl font-extrabold uppercase leading-none">{title}</h3>
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
            <h2 className="font-display text-5xl uppercase leading-[.86] sm:text-6xl lg:text-7xl">
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
            <Link href="/contato" className="mt-8 inline-flex items-center gap-3 text-xs font-extrabold uppercase hover:text-accent">
              Fale com a gente <ArrowRight className="size-4 text-primary" />
            </Link>
          </div>
          <div className="relative">
            <Image src={franquiaLoja} width={1400} height={1000} alt="Unidade Nacho Man" className="aspect-[4/3] w-full rounded-2xl object-cover" />
            <div className="absolute bottom-5 left-5 max-w-56 bg-foreground p-5 text-background shadow-xl sm:bottom-8 sm:left-8">
              <p className="font-heading text-2xl font-extrabold uppercase leading-none">
                A próxima
                <br />
                mesa pode
                <br />
                ser a sua.
              </p>
            </div>
            <Image src={menuChurros} alt="Churros Nacho Man" width={500} height={500} className="absolute -bottom-12 right-4 hidden w-36 drop-shadow-2xl sm:block lg:w-44" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
