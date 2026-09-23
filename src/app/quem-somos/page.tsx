import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { EditorialHero, Eyebrow, ClosingBanner } from "@/components/editorial";
import { photos } from "@/lib/photos";

export default function QuemSomosPage() {
  return (
    <main className="nm-page">
      <SiteHeader />
      <EditorialHero
        variant="story"
        eyebrow="Nossa história / Desde 2014"
        title="Raiz mexicana."
        accent="Alma brasileira."
        copy="Uma vontade de fazer diferente. Uma mesa que não para de crescer. Muito prazer, somos a Nacho Man."
        image={photos.homePeople}
        alt="Amigos compartilhando um encontro na Nacho Man"
        href="#origem"
        action="Conheça nosso jeito"
      />
      <section id="origem" className="site-container nm-section nm-story-grid">
        <div>
          <Eyebrow>01 / Onde tudo começou</Eyebrow>
          <h2 className="nm-title">
            De Blumenau.
            <br />
            <em>
              Pra dividir
              <br />
              com o mundo.
            </em>
          </h2>
        </div>
        <div className="self-center">
          <p className="font-heading text-3xl font-bold leading-tight sm:text-4xl">
            A ideia nunca foi só servir comida. Foi criar um lugar que desse vontade de voltar.
          </p>
          <p className="nm-copy">
            Em 2014, em Blumenau, a Nacho Man nasceu de pesquisa, testes e uma boa dose de
            personalidade. A inspiração veio do México. O jeito de preparar, combinar e receber
            ganhou o nosso sotaque.
          </p>
          <p className="nm-copy">
            Da primeira mesa aos novos encontros, seguimos com a mesma vontade: comida marcante,
            gente por perto e uma experiência sem cerimônia.
          </p>
        </div>
      </section>
      <section className="nm-dark nm-section nm-values-section">
        <div className="site-container">
          <div className="nm-section-heading nm-values-heading">
            <div>
              <Eyebrow>02 / Nosso ingrediente principal</Eyebrow>
              <h2 className="nm-title">
                Personalidade.
                <br />
                <span className="text-primary">Em cada detalhe.</span>
              </h2>
            </div>
            <p className="nm-values-lede max-w-xs text-sm leading-7 text-background/70">
              Do primeiro preparo ao último nacho da mesa, é isso que faz a gente ser quem é.
            </p>
          </div>
          <div className="nm-values">
            {[
              {
                n: "01",
                title: "Sabor que marca",
                copy: "Tortilla, milho, pimenta e frescor. Inspiração mexicana com combinações do nosso jeito.",
              },
              {
                n: "02",
                title: "Cuidado que aparece",
                copy: "Pesquisa, teste e atenção ao que chega à sua mesa. O detalhe também é ingrediente.",
              },
              {
                n: "03",
                title: "Gente que aproxima",
                copy: "Um lugar para chegar, compartilhar e ficar. Porque comida boa pede companhia.",
              },
            ].map((v) => (
              <article key={v.n}>
                <span>{v.n}</span>
                <h3>{v.title}</h3>
                <p>{v.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="site-container nm-section nm-timeline-section">
        <Eyebrow>03 / A vida acontece à mesa</Eyebrow>
        <div className="nm-section-heading">
          <h2 className="nm-title">
            A comida é o começo.
            <br />
            <em>O encontro fica.</em>
          </h2>
          <p className="max-w-sm text-sm leading-7 text-muted-foreground">
            Um brinde, mais uma porção e aquela conversa que rende. Tem coisa que só acontece quando
            a gente se encontra.
          </p>
        </div>
        <div className="nm-photo-duo">
          <div>
            <Image
              src={photos.aboutFood}
              alt="Mesa com pratos da Nacho Man para compartilhar"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Image
              src={photos.aboutDrink}
              alt="Cliente brindando na Nacho Man"
              fill
              sizes="(min-width: 768px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="nm-timeline">
          {[
            { date: "2014", title: "A primeira mesa", copy: "Nossa história começa em Blumenau." },
            {
              date: "Hoje",
              title: "Mais gente por perto",
              copy: "Novos sabores, novas mesas e o mesmo cuidado.",
            },
            {
              date: "Amanhã",
              title: "O próximo encontro",
              copy: "Seguimos levando nosso jeito a mais cidades.",
            },
          ].map((item) => (
            <article key={item.date}>
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <ClosingBanner />
      <SiteFooter />
    </main>
  );
}
