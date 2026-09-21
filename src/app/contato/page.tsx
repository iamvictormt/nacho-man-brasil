import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { photos } from "@/lib/photos";

const contactItems = [
  {
    Icon: MapPin,
    label: "Vem visitar",
    value: "R. Joinville, 861 - Vila Nova\nBlumenau - SC, 89035-200",
  },
  {
    Icon: Mail,
    label: "Manda um e-mail",
    value: "franquias@nachomanbrasil.com.br",
    href: "mailto:franquias@nachomanbrasil.com.br",
  },
  {
    Icon: MessageCircle,
    label: "Chama no Whats",
    value: "(35) 9 9740-5132",
    href: "https://wa.me/5535997405132",
  },
];

export default function ContatoPage() {
  return (
    <main className="home-grain overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden bg-primary pt-28 text-primary-foreground lg:pt-36">
        <div className="pointer-events-none absolute -right-20 -top-16 font-display text-[18rem] leading-none text-primary-foreground/10">?</div>
        <div className="site-container grid min-h-[650px] items-center gap-10 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:pb-20">
          <div className="hero-enter relative z-10">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary-foreground">
              <span className="h-1 w-10 bg-primary-foreground" /> A conversa começa aqui
            </p>
            <h1 className="font-display text-6xl uppercase leading-[0.8] sm:text-8xl lg:text-[8rem]">
              Pode
              <br />
              <span className="text-foreground">chegar.</span>
              <br />
              A casa
              <br />
              <span className="text-foreground">é sua.</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-7 text-primary-foreground/75">
              Dúvida, sugestão, parceria ou vontade de contar como foi sua experiência? Puxa uma
              cadeira e fala com a gente.
            </p>
            <Button variant="ink" size="pill" asChild className="mt-8">
              <a href="https://wa.me/5535997405132" target="_blank" rel="noreferrer">
                Chamar no WhatsApp <MessageCircle />
              </a>
            </Button>
            <Link href="#mensagem" className="mt-5 flex w-fit items-center gap-2 text-sm font-bold">
              Prefere escrever? <ArrowDown className="size-4" />
            </Link>
          </div>
          <div className="relative pb-5 pl-5 lg:pl-10">
            <div className="absolute -left-1 top-8 h-3/4 w-4 bg-accent lg:left-4" />
            <Image
              src={photos.contact}
              alt="Amigas brindando juntas na Nacho Man"
              width={1400}
              height={1000}
              sizes="(min-width: 1024px) 45vw, 90vw"
              priority
              className="relative aspect-[5/6] w-full rounded-[2rem] border-4 border-foreground object-cover"
            />
            <span className="home-sticker home-sticker-tape home-sticker-red absolute -bottom-2 right-4 rotate-3">
              Conversa boa dá fome.
            </span>
          </div>
        </div>
      </section>
      <section aria-label="Canais de contato" className="home-section-light site-container py-16 lg:py-20">
        <div className="grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-3">
          {contactItems.map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={
                href || "https://www.google.com/maps/search/?api=1&query=R.+Joinville+861+Blumenau"
              }
              target={href?.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex flex-col items-start border-b border-border p-7 transition-colors last:border-0 hover:bg-primary/10 md:border-b-0 md:border-r"
            >
              <span className="mb-6 grid size-12 place-content-center rounded-full bg-primary">
                <Icon className="size-5" />
              </span>
              <strong className="font-heading text-3xl font-extrabold uppercase">{label}</strong>
              <span className="mb-6 mt-2 whitespace-pre-line break-all text-sm leading-6 text-muted-foreground">
                {value}
              </span>
              <ArrowRight className="mt-auto size-5 transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </section>

      <section id="mensagem" className="home-section-dark scroll-mt-24 bg-foreground py-20 text-background lg:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="home-eyebrow-accent mb-4 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.2em]">
              <span className="h-1 w-10 bg-accent" /> Escreve aí
            </p>
            <h2 className="home-title max-w-md font-display text-6xl uppercase leading-[0.88] sm:text-8xl">
              Seu recado.
              <br />
              Nossa <span className="home-highlight home-highlight-accent">atenção.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-background/65">
              Toda mensagem chega para uma equipe de verdade. Conta pra gente o que você precisa.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-background/15 bg-background/5 p-6 text-background sm:p-9">
            {process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT ? (
              <form
                action={process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT}
                method="POST"
                className="relative grid gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Label className="grid gap-2">
                    Nome
                    <Input name="name" autoComplete="name" required placeholder="Seu nome" />
                  </Label>
                  <Label className="grid gap-2">
                    E-mail
                    <Input
                      name="email"
                      autoComplete="email"
                      type="email"
                      required
                      placeholder="voce@email.com"
                    />
                  </Label>
                </div>
                <Label className="grid gap-2">
                  Mensagem
                  <Textarea name="message" required placeholder="Como podemos ajudar?" rows={6} />
                </Label>
                <Button type="submit" variant="lime" size="pill" className="mt-1 w-fit">
                  Enviar mensagem <ArrowRight />
                </Button>
              </form>
            ) : (
              <div className="relative">
                <Mail className="mb-6 size-9 text-primary" />
                <h3 className="font-heading text-3xl font-extrabold uppercase">
                  Uma boa conversa começa com um oi.
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-background/70">
                  Envie sua dúvida, sugestão ou proposta por e-mail. Conte seu nome e como podemos
                  ajudar.
                </p>
                <Button variant="lime" size="pill" asChild className="mt-8">
                  <a href="mailto:franquias@nachomanbrasil.com.br">
                    Escrever e-mail <ArrowRight />
                  </a>
                </Button>
                <p className="mt-5 break-all text-xs text-background/60">
                  franquias@nachomanbrasil.com.br
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
