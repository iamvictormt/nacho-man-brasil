import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreLocator } from "@/components/store-locator";
import { getStoresWithGalleries } from "@/lib/store-gallery";

export const metadata: Metadata = {
  title: "Unidades | Nacho Man",
  description:
    "Conheça as unidades Nacho Man e confira cidades, horários, atendimento e formas de pagamento.",
};

export default function UnidadesPage() {
  const stores = getStoresWithGalleries();

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />
      <StoreLocator stores={stores} />
      <SiteFooter />
    </main>
  );
}
