// Fotos originais em public/images. Atualize os caminhos aqui após a conversão para WebP.
import type { StaticImageData } from "next/image";

export const photos = {
  heroBurrito: {
    src: "/images/burrito/Nacho Man 2025 Ebraim Martini-234.jpg",
    width: 6000,
    height: 4000,
  },
  burrito: {
    src: "/images/burrito/Nacho Man 2025 Ebraim Martini-229.jpg",
    width: 6000,
    height: 4000,
  },
  chips: {
    src: "/images/porcoes/Nacho Man 2025 Ebraim Martini-557.jpg",
    width: 6000,
    height: 4000,
  },
  churros: {
    src: "/images/churros/Nacho Man 2025 Ebraim Martini-464.jpg",
    width: 6000,
    height: 4000,
  },
  churrosSocial: {
    src: "/images/churros/Nacho Man 2025 Ebraim Martini-470.jpg",
    width: 6000,
    height: 4000,
  },
  table: {
    src: "/images/ambiente/Nacho Man 2025 Ebraim Martini-093.jpg",
    width: 6000,
    height: 4000,
  },
  feast: {
    src: "/images/ambiente/Nacho Man 2025 Ebraim Martini-123.jpg",
    width: 6000,
    height: 4000,
  },
  preparation: {
    src: "/images/ambiente/Nacho Man 2025 Ebraim Martini-146.jpg",
    width: 6000,
    height: 4000,
  },
  masks: {
    src: "/images/ambiente/Nacho Man 2025 Ebraim Martini-404.jpg",
    width: 6000,
    height: 4000,
  },
  friends: { src: "/images/pessoas/FE NachoMan-65.JPG", width: 3480, height: 5220 },
  contact: { src: "/images/pessoas/FE NachoMan-55.JPG", width: 4000, height: 6000 },
  aboutPerson: { src: "/images/pessoas/FE NachoMan-19.JPG", width: 3909, height: 5863 },
  aboutFood: {
    src: "/images/ambiente/Nacho Man 2025 Ebraim Martini-107.jpg",
    width: 5731,
    height: 3821,
  },
  aboutAtmosphere: { src: "/images/pessoas/FE NachoMan-102.JPG", width: 3835, height: 5753 },
  quesadilla: {
    src: "/images/quesadilhas/Nacho Man 2025 Ebraim Martini-643.jpg",
    width: 6000,
    height: 4000,
  },
  tacos: { src: "/images/tacos/Nacho Man 2025 Ebraim Martini-042.jpg", width: 6000, height: 4000 },
  guacamole: {
    src: "/images/molhos_adicionais/Nacho Man 2025 Ebraim Martini-119.jpg",
    width: 5333,
    height: 4000,
  },
  pico: {
    src: "/images/molhos_adicionais/Nacho Man 2025 Ebraim Martini-126.jpg",
    width: 6000,
    height: 4000,
  },
  sourCream: {
    src: "/images/molhos_adicionais/Nacho Man 2025 Ebraim Martini-130.jpg",
    width: 5333,
    height: 4000,
  },
  portions: {
    src: "/images/porcoes/Nacho Man 2025 Ebraim Martini-581.jpg",
    width: 6000,
    height: 4000,
  },
} satisfies Record<string, StaticImageData>;
