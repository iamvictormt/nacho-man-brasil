import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ActionLink } from "@/components/editorial";
import { SiteHeader } from "@/components/site-header";
import { StreetTicker } from "@/components/street-ticker";

export default function NotFound() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      <section
        className="flex min-h-screen flex-col overflow-hidden pt-20 xl:pt-24"
        aria-label="Página não encontrada"
      >
        <div className="site-container flex flex-1 flex-col items-center justify-center py-14 text-center sm:py-20">
          <div
            className="relative flex items-center justify-center gap-[clamp(0.25rem,2vw,1.25rem)]"
            aria-hidden="true"
          >
            <span className="font-display text-[clamp(6rem,22vw,16rem)] leading-[0.68]">4</span>
            <span className="relative size-[clamp(5rem,16vw,11.5rem)] shrink-0 rotate-[-4deg] overflow-visible rounded-full border-[5px] border-foreground bg-foreground shadow-[8px_8px_0_var(--primary)] sm:border-[7px] sm:shadow-[12px_12px_0_var(--primary)]">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src="/images/tacos/taco-camaron.webp"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 190px, 100px"
                  className="object-cover"
                />
              </span>
              <span className="absolute -right-5 -top-4 rotate-[8deg] bg-accent px-3 py-2 font-heading text-[0.58rem] font-extrabold uppercase tracking-[0.12em] text-background shadow-[3px_3px_0_var(--foreground)] sm:-right-8 sm:px-4 sm:text-xs">
                Cadê?
              </span>
            </span>
            <span className="font-display text-[clamp(6rem,22vw,16rem)] leading-[0.68]">4</span>
          </div>

          <h1 className="mt-10 max-w-[14ch] font-display text-[clamp(2.8rem,5vw,5.4rem)] uppercase leading-[0.92] tracking-[-0.025em]">
            Essa página <br /> <span className="text-accent">não existe.</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-[0.95rem] sm:leading-8">
            A página saiu do cardápio, mudou de endereço ou nunca esteve por aqui. Mas a fome ainda
            tem solução.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <ActionLink href="/">Voltar para a Home</ActionLink>
            <Link
              href="/cardapio"
              className="group inline-flex min-h-12 items-center gap-2 text-xs font-bold uppercase transition hover:text-accent focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Ver cardápio
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <StreetTicker
          items={["Página não encontrada", "Volte para o menu", "É nacho ou nada"]}
          label="Erro 404"
          className="shrink-0 py-3 sm:py-4"
        />
      </section>
    </main>
  );
}
