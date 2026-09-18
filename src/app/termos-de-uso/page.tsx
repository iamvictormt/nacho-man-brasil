import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground sm:px-8 lg:py-16">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-xs font-extrabold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-primary"
        >
          ← Voltar para o início
        </Link>
        <p className="mt-16 flex items-center gap-3 text-xs font-extrabold uppercase text-primary">
          <span className="h-1 w-8 bg-primary" /> Nacho Man
        </p>
        <h1 className="mt-4 font-display text-5xl uppercase sm:text-7xl">Termos de uso</h1>
        <p className="mt-6 text-sm leading-7 text-muted-foreground">
          Esta página apresenta as regras gerais de utilização do site Nacho Man. O conteúdo está
          em revisão e será atualizado antes da publicação definitiva.
        </p>
        <div className="mt-12 grid gap-8 border-t border-border pt-8 text-sm leading-7">
          <section>
            <h2 className="font-heading text-2xl font-extrabold uppercase">Uso do site</h2>
            <p className="mt-2 text-muted-foreground">
              Ao acessar este site, você concorda em utilizá-lo de maneira responsável e de acordo
              com a legislação aplicável.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-extrabold uppercase">Conteúdo</h2>
            <p className="mt-2 text-muted-foreground">
              Cardápio, preços, horários e disponibilidade podem mudar sem aviso prévio. A
              confirmação final acontece nos canais oficiais de atendimento e pedido.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-extrabold uppercase">Dúvidas</h2>
            <p className="mt-2 text-muted-foreground">
              Se você tiver dúvidas sobre estes termos, entre em contato com a equipe Nacho Man
              pelos canais oficiais indicados no site.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
