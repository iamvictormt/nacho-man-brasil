"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoWhite from "@/assets/logo-white.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Cardápio", href: "/cardapio" },
  { label: "Contato", href: "/contato" },
  { label: "Encontrar loja", href: "/#unidades" },
];

const stores = [
  { name: "Goiânia", phone: "(62) 99365-3223" },
  { name: "Cristalina", phone: "(61) 99827-0888" },
];

export function SiteFooter() {
  const [newsletter, setNewsletter] = useState("");
  const [status, setStatus] = useState<"success" | "error" | "unconfigured" | null>(null);

  return (
    <footer id="contato" className="bg-foreground py-16 text-background">
      <div className="site-container">
        <div className="grid gap-10 border-b border-background/15 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr]">
          <div>
            <Image src={logoWhite} alt="Nacho Man" width={220} height={40} className="h-9 w-auto" />
            <p className="mt-3 max-w-[14rem] text-sm leading-6 text-background/60">
              Mexicano do nosso jeito. Feito para comer junto e lembrar depois.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-background/45">Explore</p>
            <nav className="grid gap-3 text-sm text-background/70">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-background/45">Fale com a gente</p>
            <div className="grid gap-3 text-sm text-background/70">
              <Link href="/#franquia" className="hover:text-primary">Quero ser franqueado</Link>
              <a href="https://www.instagram.com/nachomanbrasil/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary">
                <Instagram className="size-4" /> Instagram
              </a>
              <div className="mt-2 border-t border-background/15 pt-3">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-background/40">
                  Unidades
                </p>
                {stores.map((store) => (
                  <a key={store.name} href={`tel:${store.phone.replace(/\D/g, "")}`} className="mb-2 block text-xs hover:text-primary">
                    Nacho Man {store.name}
                    <span className="mt-0.5 block text-background/50">{store.phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
              if (!endpoint) {
                setStatus("unconfigured");
                return;
              }
              try {
                const response = await fetch(endpoint, {
                  method: "POST",
                  body: new FormData(event.currentTarget),
                  headers: { Accept: "application/json" },
                });
                if (!response.ok) throw new Error("Newsletter request failed");
                setStatus("success");
                setNewsletter("");
              } catch {
                setStatus("error");
              }
            }}
          >
            <label htmlFor="footer-email" className="font-heading text-xl font-extrabold uppercase">
              Receba novidades
            </label>
            <p className="mt-1 text-xs text-background/50">Novos sabores, combos e aberturas.</p>
            {status === "success" ? (
              <p className="mt-4 text-primary">Pronto! Você está na lista.</p>
            ) : status === "unconfigured" ? (
              <p className="mt-4 text-sm text-primary">Newsletter em configuração. Tente novamente em breve.</p>
            ) : status === "error" ? (
              <p className="mt-4 text-sm text-accent">Não foi possível cadastrar agora. Tente novamente.</p>
            ) : (
              <div className="mt-4 flex">
                <Input
                  id="footer-email"
                  name="email"
                  type="email"
                  required
                  value={newsletter}
                  onChange={(event) => setNewsletter(event.target.value)}
                  placeholder="Seu e-mail"
                  className="h-11 rounded-l-lg rounded-r-none border-background/25 text-background"
                />
                <Button type="submit" variant="lime" size="icon" className="h-11 rounded-l-none rounded-r-lg" aria-label="Cadastrar e-mail">
                  <ChevronRight />
                </Button>
              </div>
            )}
          </form>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-6 text-xs text-background/45">
          <p>© 2026 Nacho Man. Todos os direitos reservados.</p>
          <p>
            <Link href="/politica-de-privacidade" className="hover:text-background">Política de Privacidade</Link>{" "}
            ·{" "}
            <Link href="/termos-de-uso" className="hover:text-background">Termos de Uso</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
