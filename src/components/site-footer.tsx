"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Cardápio", href: "/cardapio" },
  { label: "Contato", href: "/contato" },
  { label: "Unidades", href: "/unidades" },
  { label: "Encontrar loja", href: "/encontrar-loja" },
];

export function SiteFooter() {
  return (
    <footer
      id="contato"
      className="border-t border-background/15 bg-foreground py-14 text-background"
    >
      <div className="site-container">
        <div className="grid gap-10 border-b border-background/15 pb-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              src="/images/brand/logo-nacho-man-branco.svg"
              alt="Nacho Man"
              width={220}
              height={40}
              className="h-9 w-auto"
            />
            <p className="mt-3 max-w-[14rem] text-sm leading-6 text-background/60">
              Autêntica comida mexicana agora no Brasil.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-background/45">Explore</p>
            <nav className="grid gap-3 text-sm text-background/70">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-background/45">Fale com a gente</p>
            <div className="grid gap-3 text-sm text-background/70">
              <Link href="/franquia" className="hover:text-primary">
                Quero ser franqueado
              </Link>
              <a
                href="https://www.instagram.com/nachoman/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Instagram className="size-4" /> @nachoman
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-6 text-xs text-background/45">
          <p>© 2026 Nacho Man. Todos os direitos reservados.</p>
          <p>
            <Link href="/politica-de-privacidade" className="hover:text-background">
              Política de Privacidade
            </Link>{" "}
            ·{" "}
            <Link href="/termos-de-uso" className="hover:text-background">
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
