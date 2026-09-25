import type { StaticImageData } from "next/image";

const photo = (src: string, width = 6000, height = 4000): StaticImageData => ({
  src,
  width,
  height,
});

export const photos = {
  home: {
    heroVideoPoster: photo("/images/burrito/big_man.jpg"),
    burrito: photo("/images/burrito/hot_chicken.jpg"),
    tacos: photo("/images/tacos/camaron.jpg"),
    quesadilla: photo("/images/quesadilhas/la_gordita.jpg"),
    loadedNachos: photo("/images/nachos/chili_beans.jpg"),
    churros: photo("/images/doces/palito.jpg"),
    balnearioFacade: photo("/images/ambiente/fachada_balneario.jpg", 2364, 1330),
    galleryCustomer: photo("/images/pessoas/FE NachoMan-19.JPG", 3909, 5863),
    galleryFood: photo("/images/ambiente/Nacho Man 2025 Ebraim Martini-462.jpg"),
    galleryDecor: photo("/images/ambiente/Nacho Man 2025 Ebraim Martini-404.jpg"),
  },
  about: {
    heroGroup: photo("/images/pessoas/_DSC7193.jpg", 3936, 2216),
    blumenauInterior: photo("/images/ambiente/interior_blumenau.webp", 1264, 842),
    customerExperience: photo("/images/pessoas/FE NachoMan-102.JPG", 3835, 5753),
    foodTable: photo("/images/ambiente/Nacho Man 2025 Ebraim Martini-107.jpg", 5731, 3821),
    chipsAndGuacamole: photo("/images/porcoes/chips&guaca.jpg"),
  },
  menu: {
    heroGroup: photo("/images/ambiente/Nacho Man 2025 Ebraim Martini-142.jpg", 6000, 4000),
  },
  contact: {
    heroGroup: photo("/images/pessoas/FE NachoMan-55.JPG", 4000, 6000),
  },
  storeLocator: {
    background: photo("/images/ambiente/Nacho Man 2025 Ebraim Martini-093.jpg"),
  },
} as const;
