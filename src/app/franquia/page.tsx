import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";

import { IconCacto, IconPimenta, IconSombrero } from "@/components/brand-icons";
import {
  BodyCopy,
  DisplayTitle,
  EditorialHero,
  PageSection,
  SectionHeading,
} from "@/components/editorial";
import { FranchiseForm } from "@/components/franchise-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Franquias | Nacho Man",
  description:
    "Conheça a franquia Nacho Man, seus diferenciais operacionais e as condições para abrir uma unidade na sua cidade.",
};

const modelReasons = [
  "Produto com alta aceitação no mercado",
  "Possibilidade de múltiplas lojas",
  "Não exige experiência no ramo",
  "Expansão com presença nacional",
  "Operação facilitada",
  "Alta lucratividade",
];

const businessNumbers = [
  {
    value: "+ R$ 1 mi",
    label: "de faturamento anual",
    className: "bg-accent text-background",
    detailClassName: "text-background/70",
    numberClassName: "text-background/15",
  },
  {
    value: "24–36 meses",
    label: "prazo médio de retorno",
    className: "bg-foreground text-background",
    detailClassName: "text-background/65",
    numberClassName: "text-background/15",
  },
  {
    value: "12%–20%",
    label: "de lucro líquido",
    className: "bg-primary text-primary-foreground",
    detailClassName: "text-primary-foreground/65",
    numberClassName: "text-primary-foreground/15",
  },
];

export default function FranquiaPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      <EditorialHero
        variant="store"
        eyebrow=""
        title="Tenha uma franquia"
        accent="na sua cidade."
        copy="Uma franquia para quem busca diferenciação, pouca concorrência e um modelo de comida mexicana descolado, com suporte para sair do plano e abrir as portas."
        image={photos.franchise.hero}
        alt="Fachada de uma unidade Nacho Man em Curitiba"
        href="#contato"
        action="Quero ser franqueado"
      />

      <PageSection>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-6">
            <DisplayTitle>
              Um mercado com espaço para <span className="text-accent">ser diferente.</span>
            </DisplayTitle>
            <BodyCopy className="mt-7">
              Criada em 2018, a Nacho Man nasceu para levar ao Brasil sabores autênticos da
              culinária mexicana raiz em uma experiência atual, reconhecível e preparada para
              expansão.
            </BodyCopy>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[1.75rem] bg-foreground/10 sm:grid-cols-2 lg:col-span-6">
            {modelReasons.map((item, index) => (
              <div key={item} className="flex min-h-32 gap-4 bg-card p-6">
                <span className="grid size-8 shrink-0 place-items-center rounded-full border-accent border-2 text-accent">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <span className="text-[0.6rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                    0{index + 1}
                  </span>
                  <p className="mt-2 font-heading text-xl font-extrabold uppercase leading-tight">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection tone="ink">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="text-background lg:col-span-5">
            <DisplayTitle className="text-background">
              Produção artesanal de <span className="text-primary">tortilhas e molhos.</span>
            </DisplayTitle>
            <BodyCopy className="mt-7 text-background/75">
              Ingredientes de qualidade e produção própria ajudam a preservar frescor, sabor e
              exclusividade. É um diferencial de produto e uma vantagem diante da concorrência.
            </BodyCopy>
          </div>

          <div className="grid h-[520px] grid-cols-2 grid-rows-2 gap-3 lg:col-span-7">
            <figure className="relative row-span-2 overflow-hidden rounded-[1.75rem] bg-background/10">
              <Image
                src="/images/porcoes/chips-salsas.webp"
                alt="Tortilhas Nacho Man servidas com molhos artesanais"
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative overflow-hidden rounded-[1.75rem] bg-background/10">
              <Image
                src="/images/molhos/salsa-verde.webp"
                alt="Salsa verde artesanal Nacho Man"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative overflow-hidden rounded-[1.75rem] bg-background/10">
              <Image
                src="/images/molhos/pico-de-gallo.webp"
                alt="Pico de gallo artesanal Nacho Man"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </figure>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeading
          aside={
            <BodyCopy>
              Três indicadores para entender o potencial financeiro e o horizonte do investimento.
            </BodyCopy>
          }
        >
          <DisplayTitle>
            Um negócio pensado para <span className="text-accent">funcionar.</span>
          </DisplayTitle>
        </SectionHeading>

        <div className="grid gap-3 md:grid-cols-3">
          {businessNumbers.map(
            ({ value, label, className, detailClassName, numberClassName }, index) => (
              <article
                key={label}
                className={`group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-[1.75rem] p-7 transition-transform duration-300 hover:-translate-y-1 sm:min-h-72 sm:p-8 ${className}`}
              >
                <span
                  className={`absolute right-6 top-4 font-display text-7xl leading-none ${numberClassName}`}
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
                <span className="h-1 w-12 bg-current opacity-80" aria-hidden="true" />
                <div className="relative">
                  <strong className="block font-display text-[clamp(3.5rem,6vw,4.3rem)] leading-[0.85] tracking-[-0.03em] uppercase">
                    {value}
                  </strong>
                  <p
                    className={`mt-4 max-w-[18rem] text-xs font-extrabold uppercase leading-5 tracking-[0.12em] ${detailClassName}`}
                  >
                    {label}
                  </p>
                </div>
              </article>
            ),
          )}
        </div>

      </PageSection>

      <PageSection id="contato" tone="red" className="py-16 sm:py-20 lg:py-24">
        <IconSombrero
          aria-hidden="true"
          className="absolute -left-24 bottom-12 size-80 rotate-[28deg] text-background/[0.08]"
        />
        <IconCacto
          aria-hidden="true"
          className="absolute -right-20 top-16 size-72 rotate-[-8deg] text-background/[0.08]"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="text-background lg:sticky lg:top-36 lg:col-span-5">
            <DisplayTitle className="text-background">
              Abra uma unidade <span className="text-foreground">na sua cidade.</span>
            </DisplayTitle>
            <BodyCopy className="mt-7 text-background/75">
              Envie seus dados pelo formulário e abra uma conversa no WhatsApp com a equipe de
              expansão.
            </BodyCopy>
          </div>

          <div className="lg:col-span-7">
            <FranchiseForm />
          </div>
        </div>
      </PageSection>

      <SiteFooter />
    </main>
  );
}
