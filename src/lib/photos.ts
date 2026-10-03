import type { StaticImageData } from "next/image";

const photo = (src: string, width = 2000, height = 1333): StaticImageData => ({
  src,
  width,
  height,
});

export const photos = {
  home: {
    heroVideoPoster: photo("/images/video/burritos-nacho-man-poster.webp", 1920, 1280),
    burrito: photo("/images/burrito/burrito-hot-chicken.webp"),
    tacos: photo("/images/tacos/taco-camaron.webp"),
    quesadilla: photo("/images/quesadillas/quesadilla-la-gordita.webp"),
    loadedNachos: photo("/images/nachos/nachos-chili-beans.webp"),
    churros: photo("/images/doces/churros-palito.webp"),
    blumenauInterior: photo("/images/ambiente/interior-nacho-man-blumenau.webp", 2000, 1125),
    galleryCustomer: photo("/images/pessoas/cliente-unidade-nacho-man.webp", 2000, 3000),
    galleryFood: photo("/images/ambiente/nachos-guacamole-nacho-man.webp"),
    galleryDecor: photo("/images/ambiente/mascaras-lucha-libre.webp"),
  },
  about: {
    heroGroup: photo("/images/pessoas/clientes-mesa-nacho-man.webp", 2560, 1441),
    blumenauInterior: photo("/images/unidades/blumenau-sc/interior.webp", 1600, 1067),
    nachoFactory: {
      manufacture: photo("/images/nacho-factory/fabrica.webp", 1600, 2133),
      sauces: photo("/images/nacho-factory/molhos.webp", 1600, 2133),
      production: photo("/images/nacho-factory/carnes.webp", 1600, 1854),
      coldStorage: photo("/images/nacho-factory/deposito.webp", 1600, 2133),
      packedProducts: photo("/images/nacho-factory/carnes-embaladas.webp", 1600, 2133),
      tomatoes: photo("/images/nacho-factory/tomate.webp", 597, 1280),
      mexicanGreenTomatoes: photo("/images/nacho-factory/tomate-verde-mexicano.webp", 960, 1280),
      jalapenoPeppers: photo("/images/nacho-factory/pimenta-jalapeno.webp", 960, 1280),
    },
    foodTable: photo("/images/ambiente/mesa-burritos-tacos.webp"),
    chipsAndGuacamole: photo("/images/porcoes/chips-guacamole.webp"),
  },
  menu: {
    heroGroup: photo("/images/ambiente/cardapio-tacos-nacho-man.webp", 2560, 1707),
  },
  contact: {
    heroGroup: photo("/images/pessoas/clientes-brindando-drinks.webp", 2560, 3840),
  },
  franchise: {
    hero: photo("/images/unidades/curitiba-pr/fachada-02.webp", 2048, 1365),
  },
  storeLocator: {
    background: photo("/images/ambiente/mesa-tacos-mascaras-lucha-libre.webp", 2560, 1707),
  },
} as const;
