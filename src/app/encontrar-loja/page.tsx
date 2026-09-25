import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreLocator } from "@/components/store-locator";
import { getStoresWithGalleries } from "@/lib/store-gallery";

export const metadata: Metadata = {
  title: "Encontrar loja | Nacho Man",
  description:
    "Encontre a unidade Nacho Man mais próxima e confira horários, atendimento e formas de pagamento.",
};

export default function EncontrarLojaPage() {
  const stores = getStoresWithGalleries();

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />
      <StoreLocator stores={stores} />
      <SiteFooter />
    </main>
  );
}
