import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ORDER_URL } from "@/lib/links";

export function ActionLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link href={href} className={`nm-button ${light ? "nm-button-light" : ""}`}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="nm-eyebrow">
      <span aria-hidden="true">✳</span> {children}
    </p>
  );
}
export function EditorialHero({
  eyebrow,
  title,
  accent,
  copy,
  image,
  alt,
  href,
  action,
  variant,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  copy: string;
  image: StaticImageData;
  alt: string;
  href: string;
  action: string;
  variant: "story" | "menu" | "contact";
}) {
  return (
    <section className="nm-page-opening nm-page-opening-story" data-opening={variant}>
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="nm-story-backdrop object-cover"
      />
      <div className="nm-story-shade" aria-hidden="true" />
      <div className="nm-hero site-container">
        <div className="nm-hero-copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>
            {title}
            <span>{accent}</span>
          </h1>
          <p className="nm-copy">{copy}</p>
          <ActionLink href={href} light>
            {action}
          </ActionLink>
          {variant === "story" && (
            <p className="nm-opening-note">Blumenau, 2014 — O começo de muitos encontros.</p>
          )}
        </div>
      </div>
    </section>
  );
}
export function ClosingBanner() {
  return (
    <section className="nm-closing">
      <div className="site-container flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <Eyebrow>O próximo passo é uma mordida</Eyebrow>
          <h2 className="nm-title">
            Deu fome?
            <br />A gente resolve.
          </h2>
        </div>
        <ActionLink href={ORDER_URL}>Fazer meu pedido</ActionLink>
      </div>
    </section>
  );
}
