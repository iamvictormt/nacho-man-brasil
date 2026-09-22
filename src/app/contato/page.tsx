import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ORDER_URL } from "@/lib/links";
import { photos } from "@/lib/photos";

const contactItems = [
  {
    Icon: MessageCircle,
    number: "01",
    label: "WhatsApp",
    action: "Chamar agora",
    value: "(35) 9 9740-5132",
    href: "https://wa.me/5535997405132",
    external: true,
  },
  {
    Icon: Mail,
    number: "02",
    label: "E-mail",
    action: "Escrever mensagem",
    value: "franquias@nachomanbrasil.com.br",
    href: "mailto:franquias@nachomanbrasil.com.br",
    external: false,
  },
  {
    Icon: MapPin,
    number: "03",
    label: "Endereço",
    action: "Abrir no mapa",
    value: "R. Joinville, 861 · Vila Nova · Blumenau — SC",
    href: "https://www.google.com/maps/search/?api=1&query=R.+Joinville+861+Blumenau",
    external: true,
  },
];

export default function ContatoPage() {
  return (
    <main className="home-grain overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      <section className="relative min-h-[760px] overflow-hidden bg-foreground pt-24 text-background">
        <Image
          src={photos.contact}
          alt="Pessoas reunidas na Nacho Man"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_42%] opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-foreground/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-transparent to-foreground/20" />
        <div className="site-container relative flex min-h-[calc(100svh-6rem)] flex-col justify-end py-12 lg:py-16">
          <div className="max-w-6xl">
            <p className="mb-5 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-primary">
              <span className="h-1 w-10 bg-primary" /> A conversa começa aqui
            </p>
            <h1 className="hero-enter font-display text-[4.7rem] uppercase leading-[0.82] sm:text-[7.5rem] lg:text-[10rem]">
              Puxa uma cadeira.
              <span className="block text-primary">Fala com a gente.</span>
            </h1>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <Link
                href="#canais"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase"
              >
                Escolher um canal <ArrowDownRight className="size-4 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="canais" className="scroll-mt-24 bg-background py-20 lg:py-28">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-12">
              <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">
            <span className="h-1 w-8 bg-accent" /> Por onde começamos?
              </p>
              <h2 className="mt-5 font-display text-6xl uppercase leading-[0.86] sm:text-8xl lg:text-9xl">
                Escolha o seu <span className="text-accent">canal.</span>
              </h2>
            </div>
          </div>

          <div className="mt-14 border-t border-foreground/20">
            {contactItems.map(({ Icon, number, label, action, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group grid gap-5 border-b border-foreground/20 py-7 sm:grid-cols-[4rem_1fr_1fr_auto] sm:items-center"
              >
                <span className="font-display text-3xl text-foreground/20">{number}</span>
                <div>
                  <strong className="font-display text-5xl uppercase leading-none sm:text-6xl">
                    {label}
                  </strong>
                  <span className="mt-2 block text-[10px] font-extrabold uppercase tracking-[0.16em] text-accent">
                    {action}
                  </span>
                </div>
                <span className="break-all text-sm leading-6 text-muted-foreground">{value}</span>
                <span className="grid size-12 place-content-center rounded-full border border-foreground/20 transition-colors group-hover:border-accent group-hover:bg-accent/5">
                  <Icon className="size-5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="mensagem" className="scroll-mt-24 bg-foreground py-20 text-background lg:py-32">
        <div className="site-container">
          <div className="grid gap-8 border-b border-background/15 pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">
                Prefere escrever?
              </p>
              <h2 className="mt-5 font-display text-6xl uppercase leading-[0.86] sm:text-8xl lg:text-9xl">
                Seu recado.
                <span className="block text-primary">Nossa atenção.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-background/55 lg:col-span-4">
              Toda mensagem chega para uma equipe de verdade. Conta o que você precisa e deixa o
              resto com a gente.
            </p>
          </div>

          <div className="pt-12">
            {process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT ? (
              <form
                action={process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT}
                method="POST"
                className="grid gap-6 lg:grid-cols-12"
              >
                <Label className="grid gap-2 text-xs font-extrabold uppercase tracking-[0.14em] lg:col-span-4">
                  Nome
                  <Input
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Seu nome"
                    className="h-14 rounded-full border-background/15 bg-background px-6 text-foreground"
                  />
                </Label>
                <Label className="grid gap-2 text-xs font-extrabold uppercase tracking-[0.14em] lg:col-span-4">
                  E-mail
                  <Input
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    placeholder="voce@email.com"
                    className="h-14 rounded-full border-background/15 bg-background px-6 text-foreground"
                  />
                </Label>
                <div className="hidden lg:col-span-4 lg:block" />
                <Label className="grid gap-2 text-xs font-extrabold uppercase tracking-[0.14em] lg:col-span-8">
                  Mensagem
                  <Textarea
                    name="message"
                    required
                    placeholder="Como podemos ajudar?"
                    rows={6}
                    className="rounded-[1.5rem] border-background/15 bg-background p-6 text-foreground"
                  />
                </Label>
                <div className="flex items-end lg:col-span-4">
                  <Button
                    type="submit"
                    size="pill"
                    className="w-fit bg-accent text-accent-foreground hover:bg-accent/85"
                  >
                    Enviar mensagem <ArrowRight />
                  </Button>
                </div>
              </form>
            ) : (
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <Mail className="size-10 text-primary" />
                  <h3 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold uppercase leading-tight sm:text-5xl">
                    Uma boa conversa começa com um oi.
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-background/60">
                    Conta sua dúvida, sugestão ou proposta com calma. A mensagem vai direto para a
                    nossa equipe.
                  </p>
                </div>
                <Button variant="lime" size="pill" asChild>
                  <a href="mailto:franquias@nachomanbrasil.com.br">
                    Escrever e-mail <ArrowRight />
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section> */}

      <section className="bg-accent py-16 text-accent-foreground lg:py-20">
        <div className="site-container grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <h2 className="max-w-4xl font-display text-5xl uppercase leading-[0.86] sm:text-7xl">
            Conversa boa também dá fome.
          </h2>
          <Button variant="ink" size="pill" asChild>
            <a href={ORDER_URL}>
              Fazer pedido <ArrowRight />
            </a>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
