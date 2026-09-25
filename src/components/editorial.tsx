import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { ORDER_URL } from "@/lib/links";

type SectionTone = "paper" | "ink" | "lime" | "red";

const sectionTones: Record<SectionTone, string> = {
  paper: "bg-background text-foreground",
  ink: "bg-foreground text-background",
  lime: "bg-primary text-primary-foreground",
  red: "bg-accent text-accent-foreground",
};

export function PageSection({
  id,
  tone = "paper",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-28",
        sectionTones[tone],
        className,
      )}
    >
      <div className={cn("site-container relative", containerClassName)}>{children}</div>
    </section>
  );
}

export function ActionLink({
  href,
  children,
  light = false,
  accent = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  accent?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 w-fit max-w-full items-center justify-between gap-7 rounded-full border px-5 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.045em] transition duration-200 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-accent",
        light
          ? "border-primary bg-primary text-primary-foreground hover:bg-background"
          : "border-foreground bg-foreground text-background hover:bg-background hover:text-foreground",
        accent &&
          "border-accent bg-accent text-accent-foreground hover:bg-background hover:text-foreground",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight
        size={18}
        aria-hidden="true"
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-[0.65rem] font-extrabold uppercase leading-relaxed tracking-[0.16em]",
        className,
      )}
    >
      <span aria-hidden="true" className="h-[3px] w-8 shrink-0 bg-current" />
      {children}
    </p>
  );
}

export function DisplayTitle({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "mt-4 max-w-[14ch] font-display text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.94] tracking-[-0.025em] uppercase",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function BodyCopy({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "max-w-[34rem] text-sm leading-7 text-muted-foreground sm:text-[0.95rem] sm:leading-8",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  aside,
  className,
}: {
  children: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col items-start justify-between gap-7 md:mb-14 md:flex-row md:items-end",
        className,
      )}
    >
      <div>{children}</div>
      {aside}
    </div>
  );
}

export function EditorialHeroContent({
  eyebrow,
  title,
  accent,
  copy,
  note,
  children,
}: {
  eyebrow?: string;
  title: string;
  accent: string;
  copy: string;
  note?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="site-container relative pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="max-w-4xl motion-safe:animate-[rise-in_700ms_cubic-bezier(0.16,1,0.3,1)_both]">
        {eyebrow && <Eyebrow className="text-primary">{eyebrow}</Eyebrow>}
        <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(3.3rem,8vw,8.2rem)] leading-[0.9] tracking-[-0.035em] uppercase">
          {title}
          <span className="block text-primary">{accent}</span>
        </h1>
        <BodyCopy className="my-7 max-w-[31rem] text-background/80">{copy}</BodyCopy>
        <div className="flex flex-wrap items-center gap-5">{children}</div>
        {note && (
          <p className="mt-10 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-background/65">
            {note}
          </p>
        )}
      </div>
    </div>
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
  eyebrow: string | undefined;
  title: string;
  accent: string;
  copy: string;
  image: StaticImageData;
  alt: string;
  href: string;
  action: string;
  variant: "story" | "menu" | "contact" | "store";
}) {
  const position =
    variant === "contact"
      ? "object-[center_42%]"
      : variant === "story"
        ? "object-[62%_center] md:object-[center_40%]"
        : variant === "store"
          ? "object-[58%_center] md:object-center"
        : "object-center";

  return (
    <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-foreground text-background md:min-h-[900px]">
      <Image
        src={image}
        alt={alt}
        fill
        preload
        sizes="100vw"
        className={cn("-z-20 object-cover", position)}
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,oklch(0.12_0_0/0.9),oklch(0.12_0_0/0.52)_58%,oklch(0.12_0_0/0.15)),linear-gradient(0deg,oklch(0.12_0_0/0.68),transparent_52%)]"
        aria-hidden="true"
      />
      <EditorialHeroContent
        eyebrow={eyebrow}
        title={title}
        accent={accent}
        copy={copy}
        note={variant === "story" ? "Blumenau, 2018 — O início de um sonho." : undefined}
      >
        <ActionLink href={href} light>
          {action}
        </ActionLink>
      </EditorialHeroContent>
    </section>
  );
}

export function ClosingBanner() {
  return (
    <PageSection tone="red" className="py-16 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <div>
          <DisplayTitle className="max-w-none text-[clamp(2.8rem,5vw,5.2rem)] text-background">
            Deu fome? <br/> A gente resolve.
          </DisplayTitle>
        </div>
        <ActionLink href={ORDER_URL}>Fazer meu pedido</ActionLink>
      </div>
    </PageSection>
  );
}
