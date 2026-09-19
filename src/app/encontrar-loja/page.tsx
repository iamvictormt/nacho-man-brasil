import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StoreLocator } from "@/components/store-locator";

export const metadata: Metadata = {
  title: "Encontrar loja | Nacho Man",
  description: "Encontre uma unidade Nacho Man, consulte os horários e trace sua rota.",
};

export default function EncontrarLojaPage() {
  return (
    <main className="bg-background pt-[69px] text-foreground lg:pt-[65px]">
      <SiteHeader />
      <StoreLocator />
      <SiteFooter />
    </main>
  );
}
