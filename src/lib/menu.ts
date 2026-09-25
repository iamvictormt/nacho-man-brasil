export type MenuPhoto = {
  src: string;
  width: number;
  height: number;
};

export type MenuItem = {
  name: string;
  image: MenuPhoto;
};

const photo = (src: string, width = 2000, height = 1333): MenuPhoto => ({
  src,
  width,
  height,
});

export const menuSections = [
  {
    name: "Burritos",
    id: "burritos",
    statement: "O mais vendido, enrolado do nosso jeito.",
    items: [
      {
        name: "Burrito Big Man",
        image: photo("/images/burrito/burrito-big-man.webp"),
      },
      {
        name: "Combos",
        image: photo("/images/burrito/combo-burritos.webp"),
      },
      {
        name: "Burrito Hot Chicken",
        image: photo("/images/burrito/burrito-hot-chicken.webp"),
      },
      {
        name: "Burrito California",
        image: photo("/images/burrito/burrito-california.webp", 1707, 2560),
      },
      {
        name: "Burrito Blumenau",
        image: photo("/images/burrito/burrito-blumenau.webp"),
      },
    ],
  },
  {
    name: "Tacos",
    id: "tacos",
    statement: "Pequenos no tamanho. Grandes no sabor.",
    items: [
      {
        name: "Taco de Camarón",
        image: photo("/images/tacos/taco-camaron.webp"),
      },
      {
        name: "Taco Carne Asada",
        image: photo("/images/tacos/taco-carne-asada.webp", 1707, 2560),
      },
      {
        name: "Taco Vegetariano",
        image: photo("/images/tacos/taco-fajitas.webp"),
      },
    ],
  },

  {
    name: "Nachos",
    id: "nacho",
    statement: "Crocância e sabor pra compartilhar. Ou não.",
    items: [
      {
        name: "Nacho Chili Beans",
        image: photo("/images/nachos/nachos-chili-beans.webp"),
      },
      {
        name: "Nacho Man",
        image: photo("/images/nachos/nachos-man.webp", 2560, 1707),
      },
    ],
  },
  {
    name: "Porções",
    id: "porcoes",
    statement: "Pra beliscar, dividir ou deixar só pra você.",
    items: [
      {
        name: "Surf & Fries",
        image: photo("/images/porcoes/surf-fries.webp"),
      },
      {
        name: "Chips & Guaca",
        image: photo("/images/porcoes/chips-guacamole.webp"),
      },
      {
        name: "Chips & Salsas",
        image: photo("/images/porcoes/chips-salsas.webp"),
      },
    ],
  },

  {
    name: "Doces",
    id: "doce",
    statement: "Um final feliz em cada mordida.",
    items: [
      {
        name: "Churros Palito",
        image: photo("/images/doces/churros-palito.webp"),
      },
      {
        name: "Mini Churros",
        image: photo("/images/doces/mini-churros.webp", 2560, 1707),
      },
    ],
  },
  {
    name: "Quesadilhas",
    id: "quesadilhas",
    statement: "Douradinhas, recheadas e prontas pra conquistar.",
    items: [
      {
        name: "Quesadilla La Gordita",
        image: photo("/images/quesadilhas/quesadilla-la-gordita.webp"),
      },
      {
        name: "Quesadilla Costelinha",
        image: photo("/images/quesadilhas/quesadilla-costelinha.webp", 2560, 1707),
      },
    ],
  },

  {
    name: "Salsas (molhos)",
    id: "salsas",
    statement: "Molhos autênticos feitos por nós. Icônicos no México e agora no Brasil.",
    items: [
      {
        name: "Guacamole",
        image: photo("/images/molhos/guacamole.webp", 2000, 1500),
      },
      {
        name: "Salsa Pêssego",
        image: photo("/images/molhos/salsa-pessego.webp", 2560, 1920),
      },
      {
        name: "Pico de Gallo",
        image: photo("/images/molhos/pico-de-gallo.webp"),
      },
      {
        name: "Salsa Verde",
        image: photo("/images/molhos/salsa-verde.webp", 2000, 1500),
      },
    ],
  },
  {
    name: "Bowls Mexicanos",
    id: "bowls",
    statement: "O burrito na tijela, servido do seu jeito.",
    items: [
      {
        name: "Bowl El Classico",
        image: photo("/images/bowl/bowl-el-classico.webp", 1707, 2560),
      },
      {
        name: "Bowl El Caliente",
        image: photo("/images/bowl/bowl-el-caliente.webp"),
      },
    ],
  },
  {
    name: "Bebidas",
    id: "bebidas",
    statement: "Pra brindar, refrescar e acompanhar seu lado mais mexicano.",
    items: [
      {
        name: "Pink Limonade",
        image: photo("/images/bebidas/bebida-pink-limonade.webp", 1707, 2560),
      },
      {
        name: "Lollipop",
        image: photo("/images/bebidas/bebida-lollipop.webp"),
      },
      {
        name: "Sodas Mexicanas",
        image: photo("/images/bebidas/sodas-mexicanas.webp"),
      },
    ],
  },
  {
    name: "Drinks",
    id: "drinks",
    statement: "Bebidas autorais para brindar seu lado mais mexicano.",
    items: [
      {
        name: "Avatar",
        image: photo("/images/drinks/drink-avatar.webp", 1707, 2560),
      },
      {
        name: "Palomita",
        image: photo("/images/drinks/drink-palomita.webp"),
      },
      {
        name: "Moranguita",
        image: photo("/images/drinks/drink-moranguita.webp", 1707, 2560),
      },
      {
        name: "Mucho Loco",
        image: photo("/images/drinks/drink-mucho-loco.webp", 1707, 2560),
      },
    ],
  },
];
