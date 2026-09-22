"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Building2, MapPin, Menu, Store, X } from "lucide-react";
import { IconMascara } from "@/components/brand-icons";
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

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : href.startsWith("/#") ? false : pathname.startsWith(href);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[70] border-b border-background/15 bg-foreground/95 py-4 xl:py-6 text-background backdrop-blur-md">
        <div className="site-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 xl:flex">
          <Link href="/" className="flex min-w-0 items-center">
            <Image
              src={logoWhite}
              alt="Nacho Man"
              width={220}
              height={40}
              className="h-6 w-auto sm:h-7"
            />
          </Link>
          <nav
            className="ml-auto hidden items-center gap-4 xl:gap-6 xl:flex"
            aria-label="Navegação principal"
          >
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs xl:text-sm font-semibold transition-colors hover:text-primary ${
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
              className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-2 text-[10px] xl:text-xs font-bold uppercase tracking-wide text-foreground transition-transform hover:scale-[1.04]"
            >
              <MapPin className="size-4" /> Encontrar loja
            </Link>
            <Link
              href="/#unidades"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-[10px] xl:text-xs font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.04]"
            >
              <Building2 className="size-4" /> Unidades
            </Link>
            <Link
              href="/#franquia"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-2 text-[10px] xl:text-xs font-bold uppercase tracking-wide text-accent-foreground transition-transform hover:scale-[1.04]"
            >
              <Store className="size-4" /> Tenha sua Franquia
            </Link>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden hover:bg-background/10 hover:text-primary"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-menu-panel fixed inset-0 z-[60] overflow-x-hidden overflow-y-auto bg-foreground px-5 pb-6 pt-24 text-background xl:hidden"
          aria-label="Menu mobile"
        >
          <div className="pointer-events-none absolute -right-28 top-24 size-[22rem] text-background opacity-[0.035]">
            <IconMascara className="size-full rotate-12" aria-hidden="true" />
          </div>
          <div className="pointer-events-none absolute -left-24 bottom-0 size-60 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative z-10 mx-auto flex min-h-full max-w-xl flex-col">
            <div>
              <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">
                Menu principal
              </p>
              <div className="border-t border-background/15">
                {nav.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`mobile-menu-item group grid min-h-14 grid-cols-[2.5rem_1fr_auto] items-center border-b border-background/15 transition-colors ${
                      isActive(item.href) ? "text-primary" : "text-background hover:text-primary"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    <span className="font-display text-xl text-background/25">0{index + 1}</span>
                    <span className="font-display text-[2.15rem] uppercase leading-none">
                      {item.label}
                    </span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                ))}
              </div>

              <div className="mobile-menu-item mt-6 grid gap-3">
                <Link
                  href={navSecondary[0].href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-background px-5 text-xs font-extrabold uppercase text-foreground"
                >
                  <MapPin className="size-4" /> {navSecondary[0].label}
                </Link>
                <Link
                  href={navSecondary[1].href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-xs font-extrabold uppercase text-primary-foreground"
                >
                  <Building2 className="size-4" /> {navSecondary[1].label}
                </Link>
                <Link
                  href={navSecondary[2].href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 text-xs font-extrabold uppercase text-accent-foreground"
                >
                  <Store className="size-4" /> Franquia
                </Link>
              </div>
            </div>

            <div className="mobile-menu-item mt-auto flex items-center justify-between border-t border-background/15 pt-5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-background/40">
              <span>Desde 2014</span>
              <span className="text-primary">Mexicano do nosso jeito.</span>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
