import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import comboFeast from "@/assets/combo-feast.jpg";
import mapCity from "@/assets/map-city.jpg";

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
    <main className="overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden bg-background pt-32 lg:pt-40">
        <div className="site-container grid items-center gap-10 pb-16 lg:grid-cols-12 lg:pb-24">
          <div className="relative z-10 lg:col-span-6">
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.12em] text-primary">
              <span className="h-1 w-8 bg-primary" /> Contato
            </p>
            <h1 className="max-w-2xl font-display text-6xl uppercase leading-[.84] sm:text-7xl lg:text-[7.1rem]">
              Bora
              <br />
              trocar
              <br />
              <span className="text-primary">ideia?</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-muted-foreground">
              Dúvida, sugestão, parceria ou vontade de contar como foi sua experiência? A gente
              está por aqui.
            </p>
            <Link href="#mensagem" className="mt-8 inline-flex items-center gap-3 text-xs font-extrabold uppercase hover:text-accent">
              Manda um recado <ArrowDown className="size-4 text-primary" />
            </Link>
          </div>

          <div className="relative min-h-[390px] lg:col-span-6 lg:min-h-[500px]">
            <div className="absolute inset-[7%] rounded-full bg-primary" />
            <Image
              src={comboFeast}
              alt="Comida mexicana compartilhada à mesa"
              width={1400}
              height={1000}
              priority
              className="relative z-10 h-full w-full rounded-2xl object-cover shadow-xl"
            />
            <span className="absolute -bottom-2 left-0 z-20 rotate-[-5deg] bg-accent px-4 py-3 font-heading text-2xl font-extrabold uppercase leading-none text-accent-foreground shadow-lg sm:left-4">
              Feito para
              <br />
              conversar.
            </span>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-16 text-background lg:py-20">
        <div className="site-container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase text-primary">
              <span className="h-1 w-8 bg-primary" /> Por onde começar
            </p>
            <h2 className="font-display text-5xl uppercase leading-[.86] sm:text-6xl lg:text-7xl">
              Escolhe
              <br />
              seu
              <br />
              <span className="text-primary">caminho.</span>
            </h2>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            {contactItems.map(({ Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="grid size-11 shrink-0 place-content-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <strong className="block font-heading text-2xl font-extrabold uppercase leading-none">{label}</strong>
                    <span className="mt-3 block whitespace-pre-line text-xs leading-5 text-background/60">{value}</span>
                  </span>
                </>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex min-h-48 flex-col justify-between gap-6 rounded-xl bg-background/5 p-5 transition-colors hover:bg-background/10"
                >
                  {content}
                  <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                </a>
              ) : (
                <div key={label} className="flex min-h-48 flex-col justify-between gap-6 rounded-xl bg-background/5 p-5">
                  {content}
                  <MapPin className="size-4 text-primary" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="mensagem" className="bg-card py-20 lg:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase text-primary">
              <span className="h-1 w-8 bg-primary" /> Escreve aí
            </p>
            <h2 className="max-w-md font-display text-5xl uppercase leading-[.86] sm:text-6xl lg:text-7xl">
              A gente
              <br />
              lê
              <br />
              <span className="text-accent">tudo.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
              Toda mensagem chega para uma equipe de verdade. Conta pra gente o que você precisa.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-foreground p-6 text-background shadow-xl sm:p-9">
            <Image src={mapCity} alt="" width={800} height={500} className="pointer-events-none absolute -bottom-16 -right-16 w-64 opacity-10" />
            <form action={process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT || "#"} method="POST" className="relative grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-bold uppercase">
                  Nome
                  <input name="name" required placeholder="Seu nome" className="h-12 rounded-lg border border-background/15 bg-background px-4 text-sm font-normal normal-case text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </label>
                <label className="grid gap-2 text-xs font-bold uppercase">
                  E-mail
                  <input name="email" type="email" required placeholder="voce@email.com" className="h-12 rounded-lg border border-background/15 bg-background px-4 text-sm font-normal normal-case text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </label>
              </div>
              <label className="grid gap-2 text-xs font-bold uppercase">
                Mensagem
                <textarea name="message" required placeholder="Como podemos ajudar?" rows={6} className="resize-y rounded-lg border border-background/15 bg-background px-4 py-3 text-sm font-normal normal-case text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20" />
              </label>
              <Button type="submit" variant="lime" size="pill" className="mt-1 w-fit">
                Enviar mensagem <ArrowRight />
              </Button>
            </form>
            {!process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT && (
              <p className="relative mt-4 text-xs text-background/55">Formulário aguardando configuração do endpoint de contato.</p>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
