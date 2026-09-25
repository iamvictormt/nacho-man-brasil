import "server-only";

import fs from "node:fs";
import path from "node:path";

import { stores, type Store } from "@/lib/stores";

const galleryRoot = path.join(process.cwd(), "public", "images", "unidades");
const supportedImage = /\.(?:avif|jpe?g|png|webp)$/i;
const placeholderImage = "/images/placeholder/produto-sem-foto.webp";

const normalizedFileName = (fileName: string) =>
  path.parse(fileName).name.replace(/^\d+[\s_-]*/, "").toLowerCase();

const coverPriority = (fileName: string) => {
  const name = normalizedFileName(fileName);
  return name.startsWith("fachada") || name.startsWith("capa") ? 0 : 1;
};

const galleryLabel = (fileName: string) =>
  path
    .parse(fileName)
    .name.replace(/^\d+[\s_-]*/, "")
    .replace(/[\s_-]+/g, " ")
    .replace(/\b\p{L}/gu, (letter) => letter.toLocaleUpperCase("pt-BR"));

const galleryFilesFor = (store: Store) => {
  const directory = path.join(galleryRoot, store.slug);

  if (!fs.existsSync(directory)) return [];

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && supportedImage.test(entry.name))
    .map((entry) => entry.name)
    .sort(
      (left, right) =>
        coverPriority(left) - coverPriority(right) ||
        left.localeCompare(right, "pt-BR", { numeric: true, sensitivity: "base" }),
    )
    .slice(0, 3);
};

export function getStoresWithGalleries(): Store[] {
  return stores.map((store) => {
    const gallery = galleryFilesFor(store).map((fileName) => {
      const label = galleryLabel(fileName);

      return {
        image: `/images/unidades/${store.slug}/${encodeURIComponent(fileName)}`,
        label,
        alt: `${label} da unidade Nacho Man em ${store.name}`,
        placeholder: false,
      };
    });

    if (!gallery.length) {
      return {
        ...store,
        image: placeholderImage,
        gallery: [
          {
            image: placeholderImage,
            label: "Imagem em breve",
            alt: `Imagem em breve da unidade Nacho Man em ${store.name}`,
            placeholder: true,
          },
        ],
      };
    }

    return {
      ...store,
      image: gallery[0].image,
      gallery,
    };
  });
}
