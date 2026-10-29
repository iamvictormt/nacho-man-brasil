import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Youtube } from "lucide-react";

import { ORDER_URL } from "@/lib/links";
import { FloatingIconField } from "./floating-icon-field";
import { FeedbackFlow } from "./feedback-flow";
import styles from "./links.module.css";

export const metadata: Metadata = {
  title: "Links | Nacho Man",
  description:
    "Peça online, confira as promoções do dia e deixe seu contato com o Nacho Man.",
};

function LinkTile({
  href,
  image,
  children,
  tone,
  external = false,
}: {
  href: string;
  image: string;
  children: React.ReactNode;
  tone: "lime" | "red";
  external?: boolean;
}) {
  const toneClass = tone === "lime" ? styles.tileLime : styles.tileRed;
  const className = `${styles.linkTile} ${toneClass}`;

  const content = (
    <>
      <span className={styles.tilePhoto} aria-hidden="true">
        <Image src={image} alt="" fill sizes="80px" className={styles.tilePhotoImage} />
      </span>
      <span className={styles.tileLabel}>{children}</span>
      <span className={styles.tileArrow} aria-hidden="true">
        <ArrowUpRight size={19} />
      </span>
    </>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export default function LinksPage() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-clip bg-foreground text-background">
      <section className={styles.page} aria-label="Links oficiais Nacho Man">
        <div className={styles.backgroundField} aria-hidden="true">
          <FloatingIconField />
        </div>

        <div className={styles.profile}>
          <h1 className={styles.profileHeading}>
            <Image
              src="/images/brand/logo-nacho-man-branco.svg"
              alt="Nacho Man"
              width={330}
              height={60}
              priority
              sizes="(min-width: 640px) 272px, 70vw"
              className={styles.profileLogo}
            />
          </h1>
          <p className={styles.profileDescription}>Comida mexicana sem frescura.</p>

          <nav className={styles.linkList} aria-label="Acesse Nacho Man">
            <LinkTile
              href="/cardapio"
              image="/images/ambiente/cardapio-tacos-nacho-man.webp"
              tone="lime"
            >
              Acesse o cardápio e faça seu pedido
            </LinkTile>
            <LinkTile
              href={ORDER_URL}
              image="/images/video/burritos-nacho-man-poster.webp"
              tone="red"
              external
            >
              Ver promoções do dia
            </LinkTile>
            <FeedbackFlow />
          </nav>

        </div>
      </section>
      <footer className={styles.footer}>
        <nav className={styles.footerSocials} aria-label="Redes sociais">
          <a
            className={styles.footerSocialLink}
            href="https://www.instagram.com/nachoman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={17} aria-hidden="true" />
            Instagram
          </a>
          <a
            className={styles.footerSocialLink}
            href="https://www.youtube.com/@nachoman_oficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={18} aria-hidden="true" />
            YouTube
          </a>
        </nav>
        <nav className={styles.footerLegal} aria-label="Informações legais">
          <Link href="/termos-de-uso">Termos de uso</Link>
          <span aria-hidden="true">·</span>
          <Link href="/politica-de-privacidade">Política de privacidade</Link>
        </nav>
      </footer>
    </main>
  );
}
