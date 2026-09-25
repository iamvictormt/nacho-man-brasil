import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ActionLink,
  BodyCopy,
  DisplayTitle,
  EditorialHero,
  Eyebrow,
  PageSection,
  SectionHeading,
} from "@/components/editorial";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FRANCHISE_WHATSAPP_URL, ORDER_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/links";
import { photos } from "@/lib/photos";

const channels = [
  {
    Icon: MessageCircle,
    title: "Bora conversar?",
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP_URL,
    action: "Abrir WhatsApp",
  },
  {
    Icon: Mail,
    title: "Seu recado é bem-vindo.",
    label: "E-mail",
    value: "franquias@nachomanbrasil.com.br",
    href: "mailto:franquias@nachomanbrasil.com.br",
    action: "Escrever e-mail",
  },
  {
    Icon: MapPin,
    title: "Nossa origem tem endereço.",
    label: "Blumenau · SC",
    value: "Rua Wilhelm Schellworth, 200 · Blumenau, SC",
  },
];

const triggerClass =
  "gap-5 py-6 text-left font-heading text-2xl font-bold uppercase leading-tight no-underline hover:text-primary hover:no-underline data-[state=open]:text-primary";

export default function ContatoPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />
      <EditorialHero
        variant="contact"
        eyebrow=""
        title="A gente gosta"
        accent="de um bom papo."
        copy="Uma dúvida, uma ideia ou o próximo grande encontro. Escolha um canal e fale com a nossa equipe."
        image={photos.contact.heroGroup}
        alt="Pessoas reunidas na Nacho Man"
        href="#canais"
        action="Vamos conversar"
      />

      <PageSection id="canais">
        <SectionHeading
          aside={
            <BodyCopy className="max-w-xs">
              Para dúvidas, sugestões ou oportunidades de franquia, estamos por aqui.
            </BodyCopy>
          }
        >
          <DisplayTitle>
            Seu oi. <span className="text-accent">Nosso próximo papo.</span>
          </DisplayTitle>
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-3">
          {channels.map(({ Icon, ...channel }) => {
            const content = (
              <>
                <div className="flex justify-between gap-4">
                  <Icon size={26} />
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.16em]">
                    {channel.label}
                  </span>
                </div>
                <h2 className="font-heading text-4xl font-extrabold uppercase leading-none">
                  {channel.title}
                </h2>
                <p className="break-words text-sm leading-7">{channel.value}</p>
                {channel.action && (
                  <span className="mt-auto flex items-center justify-between border-t border-foreground/15 pt-5 text-xs font-extrabold uppercase">
                    {channel.action}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                )}
              </>
            );

            if (!channel.href) {
              return (
                <article
                  key={channel.label}
                  className="flex min-h-80 flex-col gap-6 rounded-[1.5rem] border border-border bg-card p-7"
                >
                  {content}
                </article>
              );
            }

            return (
              <a
                href={channel.href}
                key={channel.label}
                className="group flex min-h-80 flex-col gap-6 rounded-[1.5rem] border border-border bg-card p-7 transition duration-200 hover:-translate-y-1 hover:bg-primary"
              >
                {content}
              </a>
            );
          })}
        </div>
      </PageSection>

      <PageSection tone="ink" containerClassName="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <DisplayTitle className="max-w-[11ch]">
            Hablamos <span className="text-primary">Espanhol ;]</span>
          </DisplayTitle>
          <a
            href="https://www.instagram.com/nachoman/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 text-sm transition hover:text-primary"
          >
            <Instagram size={20} /> @nachoman <ArrowUpRight size={16} />
          </a>
        </div>

        <Accordion type="multiple">
          <AccordionItem value="Como faço um pedido?" className="border-background/25">
            <AccordionTrigger className={triggerClass}>Como faço um pedido?</AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="mb-5 text-sm leading-7 text-background/70">
                Você pode escolher seus favoritos no nosso canal oficial de delivery.
              </p>
              <ActionLink href={ORDER_URL} light>
                Ir para o delivery
              </ActionLink>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="Onde encontro endereços e horários?"
            className="border-background/25"
          >
            <AccordionTrigger className={triggerClass}>
              Onde encontro endereços e horários?
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="mb-5 text-sm leading-7 text-background/70">
                Na página de unidades você encontra as informações, horários e formas de
                atendimento.
              </p>
              <ActionLink href="/unidades" light>
                Ver unidades
              </ActionLink>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="Quero abrir uma franquia. Como começo?"
            className="border-background/25"
          >
            <AccordionTrigger className={triggerClass}>
              Quero abrir uma franquia. Como começo?
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="mb-5 text-sm leading-7 text-background/70">
                Fale com nossa equipe pelo Whatsapp ou envie um e-mail para
                franquias@nachomanbrasil.com.br
              </p>
              <ActionLink href={FRANCHISE_WHATSAPP_URL} light>
                Falar sobre franquias
              </ActionLink>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </PageSection>

      <SiteFooter />
    </main>
  );
}
