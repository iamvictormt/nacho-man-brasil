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
    statement: "Os mais pedidos, todo mundo ama.",
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
        image: photo("/images/burrito/burrito-california.webp"),
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
    items: [
      {
        name: "Taco de Camarón",
        image: photo("/images/tacos/taco-camaron.webp"),
      },
      {
        name: "Taco Barbacoa",
        image: photo("/images/tacos/taco-barbacoa.webp"),
      },
      {
        name: "Taco vegetariano",
        image: photo("/images/tacos/taco-vegetariano.webp"),
      },
    ],
  },

  {
    name: "Nachos",
    id: "nacho",
    statement: "Perfeito para dividir.",
    items: [
      {
        name: "Nacho Chili Beans",
        image: photo("/images/nachos/nachos-chili-beans.webp"),
      },
      {
        name: "Nacho Man",
        image: photo("/images/placeholder/produto-sem-foto.webp", 665, 362),
      },
    ],
  },
  {
    name: "Porções",
    id: "porcoes",
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
    items: [
      {
        name: "Churros Palito",
        image: photo("/images/doces/churros-palito.webp"),
      },
      {
        name: "Quesadilha doce",
        image: photo("/images/placeholder/produto-sem-foto.webp", 665, 362),
      },
    ],
  },
  {
    name: "Quesadilhas",
    id: "quesadilhas",
    items: [
      {
        name: "Quesadilla La Gordita",
        image: photo("/images/quesadilhas/quesadilla-la-gordita.webp"),
      },
      {
        name: "Quesadilla Barbacoa",
        image: photo("/images/placeholder/produto-sem-foto.webp", 665, 362),
      },
    ],
  },

  {
    name: "Salsas (molhos)",
    id: "salsas",
    items: [
      {
        name: "Guacamole",
        image: photo("/images/molhos/guacamole.webp", 2000, 1500),
      },
      {
        name: "Salsa Pêssego",
        image: photo("/images/molhos/salsa-pessego.webp"),
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
    items: [
      {
        name: "Bowl El Classico",
        image: photo("/images/bowl/bowl-el-classico.webp"),
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
    items: [
      {
        name: "Pink Limonade",
        image: photo("/images/placeholder/produto-sem-foto.webp", 665, 362),
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
    items: [
      {
        name: "Avatar",
        image: photo("/images/drinks/drink-avatar.webp"),
      },
      {
        name: "Palomita",
        image: photo("/images/drinks/drink-palomita.webp"),
      },
      {
        name: "Moranguita",
        image: photo("/images/drinks/drink-moranguita.webp"),
      },
      {
        name: "Mucho Loco",
        image: photo("/images/placeholder/produto-sem-foto.webp", 665, 362),
      },
    ],
  },
];
