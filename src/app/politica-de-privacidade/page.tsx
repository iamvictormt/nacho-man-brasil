import Link from "next/link";

export default function PrivacyPolicyPage() {
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
        <h1 className="mt-4 font-display text-5xl uppercase sm:text-7xl">
          Política de privacidade
        </h1>
        <p className="mt-6 text-sm leading-7 text-muted-foreground">
          Esta página apresenta as informações sobre privacidade do site Nacho Man. O conteúdo
          está em revisão e será atualizado antes da publicação definitiva.
        </p>
        <div className="mt-12 grid gap-8 border-t border-border pt-8 text-sm leading-7">
          <section>
            <h2 className="font-heading text-2xl font-extrabold uppercase">
              Dados coletados
            </h2>
            <p className="mt-2 text-muted-foreground">
              Quando você interage com nossos canais, podemos receber os dados necessários para
              responder à sua solicitação, prestar atendimento e melhorar sua experiência.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-extrabold uppercase">Uso das informações</h2>
            <p className="mt-2 text-muted-foreground">
              Usamos as informações de forma responsável, para operar o site, divulgar novidades
              quando solicitado e manter nossos canais de atendimento funcionando.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-extrabold uppercase">Contato</h2>
            <p className="mt-2 text-muted-foreground">
              Para dúvidas sobre privacidade, fale com a equipe Nacho Man pelos canais oficiais
              indicados no site.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
