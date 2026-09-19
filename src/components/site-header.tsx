"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Building2, MapPin, Menu, Store, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";

const nav = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Cardápio", href: "/cardapio" },
  { label: "Contato", href: "/contato" },
];

const navSecondary = [
  { label: "Encontrar loja", href: "/encontrar-loja" },
  { label: "Unidades", href: "/#unidades" },
  { label: "Tenha sua Franquia", href: "/#franquia" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("mobile-menu-open", menuOpen);
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => {
      document.documentElement.classList.remove("mobile-menu-open");
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  const allNav = [...nav, ...navSecondary];
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : href.startsWith("/#")
        ? false
        : pathname.startsWith(href);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[70] border-b border-background/15 bg-foreground/95 py-4 text-background backdrop-blur-md">
      <div className="site-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex">
        <Link href="/" className="flex min-w-0 items-center">
          <Image
            src={logoWhite}
            alt="Nacho Man"
            width={220}
            height={40}
            className="h-6 w-auto sm:h-7"
          />
        </Link>
        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                (item.href === "/" && pathname === "/") ||
                (item.href !== "/" && pathname.startsWith(item.href))
                  ? "text-primary"
                  : "text-background/85"
              }`}
              aria-current={
                (item.href === "/" && pathname === "/") ||
                (item.href !== "/" && pathname.startsWith(item.href))
                  ? "page"
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
          <span className="h-5 w-px bg-background/20" aria-hidden="true" />
          <Link
            href="/encontrar-loja"
            aria-current={pathname === "/encontrar-loja" ? "page" : undefined}
            className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-bold uppercase tracking-wide text-foreground transition-transform hover:scale-[1.04]"
          >
            <MapPin className="size-4" /> Encontrar loja
          </Link>
          <Link
            href="/#unidades"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.04]"
          >
            <Building2 className="size-4" /> Unidades
          </Link>
          <Link
            href="/#franquia"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:scale-[1.04]"
          >
            <Store className="size-4" /> Tenha sua Franquia
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden hover:bg-background/10 hover:text-primary"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      </header>
      {menuOpen && (
        <nav
          className="mobile-menu-panel fixed inset-0 z-[60] overflow-hidden bg-foreground px-5 pb-8 pt-24 text-background lg:hidden"
          aria-label="Menu mobile"
        >
          <div className="pointer-events-none absolute -right-20 top-8 size-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-12 size-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            {allNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`mobile-menu-item flex min-h-16 items-center border-b border-background/15 text-lg font-heading font-extrabold uppercase tracking-wide transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-background/85"
                }`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                <span>{item.label}</span>
                <span className="ml-auto text-sm text-primary">↗</span>
              </Link>
            ))}
            <div className="mobile-menu-item mt-10 border-t border-background/15 pt-6 text-xs uppercase tracking-[0.16em] text-background/45">
              Mexicano do nosso jeito.
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
