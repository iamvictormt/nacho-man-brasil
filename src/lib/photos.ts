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
    quesadilla: photo("/images/quesadilhas/quesadilla-la-gordita.webp"),
    loadedNachos: photo("/images/nachos/nachos-chili-beans.webp"),
    churros: photo("/images/doces/churros-palito.webp"),
    blumenauInterior: photo("/images/ambiente/interior-nacho-man-blumenau.webp", 2000, 1125),
    galleryCustomer: photo("/images/pessoas/cliente-unidade-nacho-man.webp", 2000, 3000),
    galleryFood: photo("/images/ambiente/nachos-guacamole-nacho-man.webp"),
    galleryDecor: photo("/images/ambiente/mascaras-lucha-libre.webp"),
  },
  about: {
    heroGroup: photo("/images/pessoas/clientes-mesa-nacho-man.webp", 2560, 1441),
    blumenauInterior: photo("/images/ambiente/interior-nacho-man-blumenau.webp", 1264, 842),
    nachoFactoryFacade: photo("/images/ambiente/fachada-nacho-factory.webp", 1200, 1600),
    foodTable: photo("/images/ambiente/mesa-burritos-tacos.webp"),
    chipsAndGuacamole: photo("/images/porcoes/chips-guacamole.webp"),
  },
  menu: {
    heroGroup: photo("/images/ambiente/cardapio-tacos-nacho-man.webp", 2560, 1707),
  },
  contact: {
    heroGroup: photo("/images/pessoas/clientes-brindando-drinks.webp", 2560, 3840),
  },
  storeLocator: {
    background: photo("/images/ambiente/mesa-tacos-mascaras-lucha-libre.webp", 2560, 1707),
  },
} as const;
