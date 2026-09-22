import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EditorialHero, Eyebrow, ActionLink, ClosingBanner } from "@/components/editorial";
import { photos } from "@/lib/photos";
import { ORDER_URL } from "@/lib/links";
const channels = [
  {
    Icon: MessageCircle,
    title: "Bora conversar?",
    label: "WhatsApp",
    value: "(35) 9 9740-5132",
    href: "https://wa.me/5535997405132",
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
    value: "R. Joinville, 861 · Vila Nova",
    href: "https://www.google.com/maps/search/?api=1&query=R.+Joinville+861+Blumenau",
    action: "Ver no mapa",
  },
];
export default function ContatoPage() {
  return (
    <main className="nm-page">
      <SiteHeader />
      <EditorialHero
        variant="contact"
        eyebrow="Contato / Pode chegar"
        title="A gente gosta"
        accent="de um bom papo."
        copy="Uma dúvida, uma ideia ou o próximo grande encontro. Escolha um canal e fale com a nossa equipe."
        image={photos.contact}
        alt="Pessoas reunidas na Nacho Man"
        href="#canais"
        action="Vamos conversar"
      />
      <section id="canais" className="site-container nm-section">
        <div className="nm-section-heading">
          <div>
            <Eyebrow>Conexões de verdade</Eyebrow>
            <h2 className="nm-title">
              Seu oi.
              <br />
              <em>Nosso próximo papo.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-muted-foreground">
            Para dúvidas, sugestões ou oportunidades de franquia, estamos por aqui.
          </p>
        </div>
        <div className="nm-contact-grid">
          {channels.map(({ Icon, ...c }) => (
            <a href={c.href} key={c.label} className="nm-contact-card">
              <div className="flex justify-between">
                <Icon size={26} />
                <span className="nm-eyebrow">{c.label}</span>
              </div>
              <h3>{c.title}</h3>
              <p className="break-words">{c.value}</p>
              <span className="mt-auto flex items-center justify-between border-t border-foreground/15 pt-5 text-xs font-extrabold uppercase">
                {c.action}
                <ArrowUpRight size={18} />
              </span>
            </a>
          ))}
        </div>
      </section>
      <section className="nm-dark nm-section">
        <div className="site-container nm-story-grid">
          <div>
            <Eyebrow>Um atalho para ajudar</Eyebrow>
            <h2 className="nm-title">
              Antes do oi,
              <br />
              <span className="text-primary">talvez esteja aqui.</span>
            </h2>
            <a
              href="https://www.instagram.com/nachomanbrasil/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-sm"
            >
              <Instagram size={20} /> @nachomanbrasil <ArrowUpRight size={16} />
            </a>
          </div>
          <Accordion type="multiple" className="nm-faq">
            <AccordionItem value="Como faço um pedido?">
              <AccordionTrigger>Como faço um pedido?</AccordionTrigger>
              <AccordionContent>
                <p>Você pode escolher seus favoritos no nosso canal oficial de delivery.</p>
                <ActionLink href={ORDER_URL} light>
                  Ir para o delivery
                </ActionLink>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Onde encontro endereços e horários?">
              <AccordionTrigger>Onde encontro endereços e horários?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Na página de lojas você encontra as informações das unidades e os links para
                  traçar sua rota.
                </p>
                <ActionLink href="/encontrar-loja" light>
                  Encontrar loja
                </ActionLink>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="Quero abrir uma franquia. Como começo?">
              <AccordionTrigger>Quero abrir uma franquia. Como começo?</AccordionTrigger>
              <AccordionContent>
                <p>
                  Fale com nossa equipe pelo WhatsApp ou envie sua proposta para
                  franquias@nachomanbrasil.com.br.
                </p>
                <ActionLink href="https://wa.me/5535997405132" light>
                  Falar sobre franquias
                </ActionLink>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <ClosingBanner />
      <SiteFooter />
    </main>
  );
}
