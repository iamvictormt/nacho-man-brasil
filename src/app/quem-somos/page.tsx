import Image from "next/image";

import { IconCacto, IconCoracao, IconFogo, IconNachos, IconRaio, IconSombrero } from "@/components/brand-icons";
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
  { date: "2014", title: "A primeira mesa", copy: "Nossa história começa em Blumenau." },
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
        eyebrow="Nossa história / Desde 2014"
        title="Raiz mexicana."
        accent="Alma brasileira."
        copy="Uma vontade de fazer diferente. Uma mesa que não para de crescer. Muito prazer, somos a Nacho Man."
        image={photos.homePeople}
        alt="Amigos compartilhando um encontro na Nacho Man"
        href="#origem"
        action="Conheça nosso jeito"
      />

      <PageSection
        id="origem"
        className="relative overflow-hidden"
        containerClassName="relative"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-24 font-display text-[18rem] leading-none text-foreground/[0.025] sm:text-[28rem]"
        >
          2014
        </span>

        <Eyebrow>01 / Onde tudo começou</Eyebrow>

        <div className="relative mt-8 grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-6">
          <figure className="group relative min-h-[510px] overflow-hidden rounded-[2rem] bg-foreground lg:col-span-7 lg:min-h-[680px]">
            <Image
              src={photos.blumenau}
              alt="Primeira casa da Nacho Man em Blumenau"
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
              <p className="max-w-[9ch] font-display text-[clamp(3.4rem,7vw,7rem)] uppercase leading-[0.86] tracking-[-0.025em] text-background">
                De Blumenau.
                <span className="block text-accent">Pro mundo.</span>
              </p>
            </div>

            <IconCoracao
              aria-hidden="true"
              className="absolute -right-8 top-14 size-36 -rotate-12 text-background/15 sm:size-48"
            />
          </figure>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-foreground p-7 text-background sm:p-10 lg:col-span-5 lg:p-12">
            <div>
              <div className="mb-9 flex items-end justify-between border-b border-background/15 pb-6">
                <span className="font-display text-[5.5rem] leading-[0.75] text-accent sm:text-[7rem]">
                  2014
                </span>
                <span className="max-w-[8rem] text-right text-[0.6rem] font-extrabold uppercase leading-4 tracking-[0.14em] text-background/45">
                  A primeira mesa
                </span>
              </div>

              <p className="max-w-[17ch] font-heading text-[clamp(2rem,3.4vw,3.75rem)] font-bold leading-[1.04]">
                A ideia nunca foi só servir comida.
                <span className="mt-2 block text-primary">Foi dar vontade de voltar.</span>
              </p>
            </div>

            <div className="mt-14 grid gap-6 border-t border-primary/45 pt-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <BodyCopy className="text-background/62">
                Em Blumenau, a Nacho Man nasceu de pesquisa, testes e uma boa dose de
                personalidade. A inspiração veio do México; o preparo e o jeito de receber ganharam
                nosso sotaque.
              </BodyCopy>
              <BodyCopy className="text-background/62">
                Da primeira mesa aos novos encontros, seguimos com a mesma vontade: comida
                marcante, gente por perto e uma experiência sem cerimônia.
              </BodyCopy>
            </div>
          </div>
        </div>
      </PageSection>

      <StreetTicker
        items={[
          "Desde 2014 em Blumenau",
          "México inspira, o Brasil dá o ritmo",
          "Nacho Man, feito para dividir",
        ]}
        className="bg-accent text-accent-foreground"
        label="O jeito Nacho Man"
        tilted
      />

      <PageSection tone="ink">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow className="text-primary">02 / A nossa assinatura</Eyebrow>
            <DisplayTitle className="max-w-[10ch]">
              México acende.{" "}
              <span className="text-primary">
                {" "}
                <br /> A gente põe o sotaque.
              </span>
            </DisplayTitle>
            <BodyCopy className="my-7 text-background/65">
              A referência está nas cores, nos ingredientes e na vontade de reunir gente. O resto
              nasce aqui: pesquisa, liberdade e um jeito brasileiro de fazer cada prato ganhar
              personalidade.
            </BodyCopy>
          </div>

          <figure className="group relative min-h-[520px] overflow-hidden rounded-[2rem] lg:col-span-7 lg:min-h-[680px]">
            <Image
              src={photos.aboutAtmosphere}
              alt="Experiência Nacho Man compartilhada à mesa"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/10 to-transparent" />
            <figcaption className="absolute inset-x-5 bottom-5 sm:inset-x-8 sm:bottom-8">
              <p className="mt-5 max-w-[15ch] font-display text-4xl uppercase leading-[0.95] text-background sm:text-6xl">
                Origem mexicana. <br /> Jeito brasileiro.
              </p>
            </figcaption>
          </figure>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          aside={
            <BodyCopy className="max-w-sm">
              O México acende a ideia. O Brasil coloca ritmo. E a nossa equipe transforma tudo em
              uma experiência com cara própria.
            </BodyCopy>
          }
        >
          <Eyebrow>03 / Da referência à nossa mesa</Eyebrow>
          <DisplayTitle className="max-w-[12ch]">
            Nosso jeito não cabe <span className="text-accent">numa receita.</span>
          </DisplayTitle>
        </SectionHeading>

        <div className="grid gap-3 lg:grid-cols-12 lg:grid-rows-[270px_270px]">
          <figure className="group relative min-h-[420px] overflow-hidden rounded-[2rem] lg:col-span-5 lg:row-span-2 lg:min-h-0">
            <Image
              src={photos.aboutDrink}
              alt="Cliente vivendo a experiência Nacho Man"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <figcaption className="absolute bottom-5 left-5 rotate-[-2deg] bg-foreground px-4 py-2 font-heading text-lg font-extrabold uppercase shadow-[4px_4px_0_var(--accent)] text-background sm:text-xl">
              Sem pose. Com molho.
            </figcaption>
          </figure>

          <figure className="group relative min-h-[270px] overflow-hidden rounded-[2rem] lg:col-span-7">
            <Image
              src={photos.aboutFood}
              alt="Mesa com pratos da Nacho Man para compartilhar"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/55 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-[12ch] font-display text-4xl uppercase leading-[0.9] text-background sm:text-5xl">
              Cor, textura e vontade de repetir.
            </p>
          </figure>

          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            <figure className="group relative min-h-[260px] overflow-hidden rounded-[2rem]">
              <Image
                src={photos.preparation}
                alt="Preparo dos pratos Nacho Man"
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
            <div className="relative overflow-hidden rounded-[1.5rem] bg-accent p-7 lg:col-span-1">
              <p className="font-display text-4xl uppercase leading-[0.92] text-background sm:text-5xl">
                Referência mexicana. Liberdade brasileira.
              </p>
              <IconNachos className="absolute -bottom-8 -right-5 size-32 rotate-12 opacity-15 text-background" />
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection tone="ink">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="relative lg:col-span-5">
            <Eyebrow className="text-primary">04 / Código da casa</Eyebrow>
            <DisplayTitle className="max-w-[10ch]">
              Tem coisa que a gente <span className="text-primary">não negocia.</span>
            </DisplayTitle>
            <BodyCopy className="mt-7 text-background/60">
              Não é manual de etiqueta. É o que mantém a Nacho Man reconhecível em cada prato,
              parede e encontro.
            </BodyCopy>
            <IconCacto
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 right-0 hidden size-64 rotate-6 text-primary/[0.08] lg:block"
            />
          </div>

          <div className="border-t border-primary/45 lg:col-span-7">
            {houseCode.map(({ Icon, label, copy }, index) => (
              <article
                key={label}
                className="group grid gap-5 border-b border-background/15 py-7 transition-colors hover:bg-primary hover:px-5 hover:text-foreground sm:grid-cols-[3rem_4rem_1fr] sm:items-center sm:py-8"
              >
                <span className="font-display text-3xl text-primary transition-colors group-hover:text-foreground/35">
                  0{index + 1}
                </span>
                <Icon className="size-12 text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:text-foreground" />
                <div>
                  <h3 className="font-heading text-2xl font-extrabold uppercase leading-none sm:text-3xl">
                    {label}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-background/55 transition-colors group-hover:text-foreground/70">
                    {copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <Eyebrow>05 / A vida acontece à mesa</Eyebrow>
        <SectionHeading
          className="mt-1"
          aside={
            <BodyCopy className="max-w-sm">
              Um brinde, mais uma porção e aquela conversa que rende. Tem coisa que só acontece
              quando a gente se encontra.
            </BodyCopy>
          }
        >
          <DisplayTitle className="max-w-[13ch]">
            A comida é o começo. <span className="text-accent">O encontro fica.</span>
          </DisplayTitle>
        </SectionHeading>

        <div className="grid grid-cols-[1.2fr_1fr] gap-3">
          <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] sm:h-[480px]">
            <Image
              src={photos.aboutFood}
              alt="Mesa com pratos da Nacho Man para compartilhar"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-[1.5rem] sm:h-[480px]">
            <Image
              src={photos.chips}
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

      <ClosingBanner />
      <SiteFooter />
    </main>
  );
}
