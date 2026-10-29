import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { BodyCopy, DisplayTitle, Eyebrow, PageSection } from "@/components/editorial";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type LegalSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
};

export function LegalDocumentPage({
  title,
  accent,
  summary,
  sections,
}: {
  title: string;
  accent: string;
  summary: string;
  sections: readonly LegalSection[];
}) {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />

      <PageSection tone="ink" className="pb-14 pt-32 sm:pb-18 sm:pt-40 lg:pb-20 lg:pt-44">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-14">
          <div className="lg:col-span-8">
            <Eyebrow className="text-primary">Informações legais</Eyebrow>
            <DisplayTitle
              as="h1"
              className="max-w-none text-[clamp(3.3rem,8vw,7.8rem)] text-background"
            >
              {title} <span className="block text-primary">{accent}</span>
            </DisplayTitle>
          </div>
          <BodyCopy className="max-w-lg text-base text-background/75 sm:text-lg lg:col-span-4 lg:pb-2">
            {summary}
          </BodyCopy>
        </div>
      </PageSection>

      <PageSection className="py-14 sm:py-18 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <h2 className="font-heading text-2xl font-extrabold uppercase leading-tight">
              Neste documento
            </h2>
            <nav className="mt-5 grid max-w-md" aria-label="Navegação do documento">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex min-h-12 items-center justify-between gap-4 border-b border-foreground/15 py-3 text-sm font-bold transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {section.title}
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </nav>
          </aside>

          <div className="lg:col-span-8">
            <div className="space-y-10 sm:space-y-12">
              {sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <h2 className="font-heading text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 max-w-3xl space-y-4 text-base leading-7 text-foreground/75 sm:leading-8">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <SiteFooter />
    </main>
  );
}
