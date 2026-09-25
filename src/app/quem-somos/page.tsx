import Image from "next/image";

import {
  IconCacto,
  IconCoracao,
  IconFogo,
  IconNachos,
  IconRaio,
  IconSombrero,
} from "@/components/brand-icons";
import {
  ActionLink,
  BodyCopy,
  ClosingBanner,
  DisplayTitle,
  EditorialHero,
  Eyebrow,
  PageSection,
  SectionHeading,
} from "@/components/editorial";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StreetTicker } from "@/components/street-ticker";
import { photos } from "@/lib/photos";

const timeline = [
  { date: "2018", title: "A primeira mesa", copy: "Nossa história começa em Blumenau." },
  {
    date: "Hoje",
    title: "Mais gente por perto",
    copy: "Novos sabores, novas mesas e o mesmo cuidado.",
  },
  {
    date: "Amanhã",
    title: "O próximo encontro",
    copy: "Seguimos levando nosso jeito a mais cidades.",
  },
];

const houseCode = [
  {
    Icon: IconFogo,
    label: "Sabor antes de tendência",
    copy: "O prato precisa ser marcante antes de ser novidade.",
  },
  {
    Icon: IconCoracao,
    label: "Gente antes de pose",
    copy: "Mesa cheia e conversa solta valem mais do que qualquer cerimônia.",
  },
  {
    Icon: IconRaio,
    label: "Personalidade em tudo",
    copy: "Da parede ao molho, cada escolha precisa ter a nossa cara.",
  },
  {
    Icon: IconSombrero,
    label: "México como inspiração",
    copy: "A referência acende a ideia. O nosso jeito conduz o resultado.",
  },
];

export default function QuemSomosPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />
      <EditorialHero
        variant="story"
        eyebrow=""
        title="Raiz mexicana"
        accent="Alma brasileira."
        copy="Foi em um pequeno delivery de comida mexicana que nasceu a melhor rede de comida mexicana do Brasil."
        image={photos.about.heroGroup}
        alt="Amigos compartilhando um encontro na Nacho Man"
        href="#origem"
        action="Conheça nosso jeito"
      />

      <PageSection id="origem" className="relative overflow-hidden" containerClassName="relative">
        <div className="relative mt-8 grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-6">
          <figure className="group relative min-h-[510px] overflow-hidden rounded-[2rem] bg-foreground lg:col-span-7 lg:min-h-[680px]">
            <Image
              src={photos.about.blumenauInterior}
              alt="Interior da primeira loja da Nacho Man em Blumenau"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/10 to-transparent" />

            <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full bg-background px-4 py-2 text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-foreground sm:left-8 sm:top-8">
              <span className="size-2 rounded-full bg-accent" />
              Blumenau · SC
            </div>

            <div className="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8">
              <p className="max-w-[12ch] font-display text-[clamp(3.4rem,7vw,7rem)] uppercase leading-[0.86] tracking-[-0.025em] text-background">
                De Blumenau <br />
                <span className="block text-accent">para o mundo.</span>
              </p>
            </div>
          </figure>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-foreground p-7 text-background sm:p-10 lg:col-span-5 lg:p-12">
            <div>
              <div className="mb-9 flex items-end justify-between pb-4">
                <span className="font-display text-[5.5rem] leading-[0.75] text-accent sm:text-[7rem]">
                  2018.
                </span>
              </div>

              <p className="max-w-[17ch] font-heading text-[clamp(2rem,3.4vw,3.75rem)] font-bold leading-[1.04]">
                Tudo começou em uma garagem. <br /> O resto a gente foi construindo.
              </p>
            </div>

            <div className="mt-14 grid gap-6 pt-4">
              <BodyCopy className="text-background/62">
                Em 5 de abril de 2018, Will, o Nacho Man colocou os primeiros burritos na rua. Não
                tinha grande estrutura. Não tinha fórmula pronta. Tinha uma ideia, muita vontade e a
                coragem de começar.
              </BodyCopy>
              <BodyCopy className="text-background/62">
                A garagem virou cozinha. A cozinha virou restaurante. O restaurante virou uma marca.
                E a marca ganhou o Brasil.
              </BodyCopy>
              <BodyCopy className="text-background/62">
                Oito anos depois, seguimos com a mesma inquietação de quem está começando: criar uma
                experiência mexicana diferente, com comida de verdade, personalidade e um jeito
                próprio de fazer as coisas.
              </BodyCopy>
            </div>
          </div>
        </div>
      </PageSection>

      <StreetTicker
        items={["Tacos", "Nachos", "Burritos", "Quesadillas", "Guacamole"]}
        className="bg-accent text-accent-foreground"
        label="O jeito Nacho Man"
        tilted
      />

      <PageSection tone="ink">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <DisplayTitle className="max-w-[12ch]">
              Não é só comida, é
              <span className="text-primary">
                <br /> a experiência completa.
              </span>
            </DisplayTitle>
          </div>

          <figure className="group relative min-h-[560px] overflow-hidden rounded-[2rem] lg:col-span-7 lg:min-h-[840px]">
            <Image
              src={photos.about.customerExperience}
              alt="Cliente aproveitando burritos na Nacho Man"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              style={{ objectPosition: "50% 12%", transformOrigin: "50% 12%" }}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/10 to-transparent" />
            <figcaption className="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8">
              <p className="mt-5 max-w-[15ch] font-display text-4xl uppercase leading-[0.95] text-background sm:text-6xl">
                A experiência <span className="text-primary">Nacho Man.</span>
              </p>
            </figcaption>
          </figure>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading className="mt-1">
          <DisplayTitle className="max-w-[14ch]">
            A comida é <br /> <span className="text-accent">o que nos une.</span>
          </DisplayTitle>
        </SectionHeading>

        <div className="grid grid-cols-[1.2fr_1fr] lg:grid-cols-[1.8fr_1fr] gap-3">
          <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] sm:h-[480px]">
            <Image
              src={photos.about.foodTable}
              alt="Mesa com pratos da Nacho Man para compartilhar"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] sm:h-[480px]">
            <Image
              src={photos.about.chipsAndGuacamole}
              alt="Porção de nachos Nacho Man com guacamole e molho picante"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative mt-12 grid gap-9 border-l border-border pl-7 md:grid-cols-3 md:gap-0 md:border-l-0 md:border-t md:pl-0">
          {timeline.map((item, index) => (
            <article
              key={item.date}
              className="relative md:min-h-52 md:px-8 md:pt-10 md:first:pl-0"
            >
              <span
                className={`absolute -left-[2.05rem] top-1 size-3 rounded-full border-2 border-background bg-accent ring-1 ring-accent/30 md:-top-1.5 ${index === 0 ? "md:left-0" : "md:left-8"}`}
              />
              <p className="font-display text-5xl uppercase text-accent">{item.date}</p>
              <h3 className="mt-3 font-extrabold">{item.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-7 text-muted-foreground">{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <ActionLink href="/encontrar-loja">Viver a experiência</ActionLink>
        </div>
      </PageSection>

      <SiteFooter />
    </main>
  );
}
