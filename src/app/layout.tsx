import type { Metadata } from "next";
import { Anton, Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const barlow = Barlow_Condensed({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
export const metadata: Metadata = {
  title: "Nacho Man | Mexicano do nosso jeito",
  description:
    "Burritos, nachos, tacos e combos mexicanos preparados do seu jeito. Peça agora ou encontre a Nacho Man mais próxima.",
  authors: [{ name: "Nacho Man" }],
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Nacho Man",
  },
  openGraph: {
    title: "Nacho Man | Mexicano do nosso jeito",
    description: "Muito sabor, ingredientes frescos e combinações do seu jeito.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={[anton.variable, barlow.variable, manrope.variable].join(" ")}>
      <body>{children}</body>
    </html>
  );
}
