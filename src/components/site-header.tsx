"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Building2, MapPin, Menu, Store, X } from "lucide-react";
import { IconMascara } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";

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
              src="/images/brand/logo-white.png"
              alt="Nacho Man"
              width={220}
              height={40}
              priority
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
            className="h-10 w-auto gap-2 rounded-full border border-background/20 px-4 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] xl:hidden hover:border-primary hover:bg-primary hover:text-foreground"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span>{menuOpen ? "Fechar" : "Menu"}</span>
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </header>
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-menu-panel fixed inset-0 z-[60] overflow-x-hidden overflow-y-auto bg-foreground px-5 pb-6 pt-24 text-background xl:hidden sm:px-8"
          aria-label="Menu mobile"
        >
          <div className="pointer-events-none absolute -right-32 top-20 size-[25rem] text-background opacity-[0.025] sm:size-[32rem]">
            <IconMascara className="size-full rotate-[16deg]" aria-hidden="true" />
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-4 -left-4 font-display text-[12rem] leading-none text-background/[0.025] sm:text-[18rem]"
          >
            2018
          </span>

          <div className="relative z-10 mx-auto flex min-h-full max-w-6xl flex-col">
            <div className="mb-5 flex items-center justify-between text-[0.6rem] font-extrabold uppercase tracking-[0.18em]">
              <span className="text-primary">Escolha seu caminho</span>
              <span className="text-background/40">Blumenau · desde 2018</span>
            </div>

            <div className="grid flex-1 gap-8 md:grid-cols-[1.35fr_0.65fr] md:items-start md:gap-10">
              <div className="border-t border-background/15">
                {nav.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`mobile-menu-item group grid min-h-[4.75rem] grid-cols-[2.25rem_1fr_auto] items-center border-b border-background/15 transition-colors sm:min-h-24 sm:grid-cols-[3rem_1fr_auto] ${
                      isActive(item.href) ? "text-primary" : "text-background hover:text-primary"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    style={{ animationDelay: `${index * 55}ms` }}
                  >
                    <span
                      className={`font-display text-lg ${isActive(item.href) ? "text-primary" : "text-background/20"}`}
                    >
                      0{index + 1}
                    </span>
                    <span className="font-display text-[clamp(2.7rem,13vw,5rem)] uppercase leading-[0.82] tracking-[-0.025em]">
                      {item.label}
                    </span>
                    <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                ))}
              </div>

              <div className="mobile-menu-item grid content-start gap-3 md:pt-1">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href={navSecondary[0].href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex min-h-24 flex-col justify-between rounded-2xl bg-background p-4 text-[0.65rem] font-extrabold uppercase text-foreground transition hover:-translate-y-1"
                  >
                    <MapPin className="size-5" />
                    <span className="flex items-end justify-between gap-2">
                      {navSecondary[0].label}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                  <Link
                    href={navSecondary[1].href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex min-h-24 flex-col justify-between rounded-2xl bg-primary p-4 text-[0.65rem] font-extrabold uppercase text-foreground transition hover:-translate-y-1"
                  >
                    <Building2 className="size-5" />
                    <span className="flex items-end justify-between gap-2">
                      {navSecondary[1].label}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </div>

                <Link
                  href={navSecondary[2].href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex min-h-14 items-center justify-between rounded-2xl bg-accent px-5 text-[0.65rem] font-extrabold uppercase text-accent-foreground transition hover:-translate-y-1"
                >
                  <span className="flex items-center gap-2">
                    <Store className="size-4" /> Tenha sua franquia
                  </span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
