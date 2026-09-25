export type MenuPhoto = {
  src: string;
  width: number;
  height: number;
};

export type MenuItem = {
  name: string;
  image: MenuPhoto;
};

const photo = (src: string): MenuPhoto => ({ src, width: 6000, height: 4000 });

export const menuSections = [
  {
    name: "Burritos",
    id: "burritos",
    statement: "Os mais pedidos, todo mundo ama.",
    items: [
      {
        name: "Burrito Big Man",
        image: photo("/images/burrito/big_man.jpg"),
      },
      {
        name: "Combos",
        image: photo("/images/burrito/combo.jpg"),
      },
      {
        name: "Burrito Hot Chicken",
        image: photo("/images/burrito/hot_chicken.jpg"),
      },
      {
        name: "Burrito California",
        image: photo("/images/burrito/california.jpg"),
      },
      {
        name: "Burrito Blumenau",
        image: photo("/images/burrito/blumenau.jpg"),
      },
    ],
  },
  {
    name: "Tacos",
    id: "tacos",
    items: [
      {
        name: "Taco de Camarón",
        image: photo("/images/tacos/camaron.jpg"),
      },
      {
        name: "Taco Barbacoa",
        image: photo("/images/tacos/barbacoa.jpg"),
      },
      {
        name: "Taco vegetariano",
        image: photo("/images/tacos/vegetariano.jpg"),
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
        image: photo("/images/nachos/chili_beans.jpg"),
      },
      {
        name: "Nacho Man",
        image: photo("/images/FALTA IMAGEM.jpg"),
      },
    ],
  },
  {
    name: "Porções",
    id: "porcoes",
    items: [
      {
        name: "Surf & Fries",
        image: photo("/images/porcoes/surf&fries.jpg"),
      },
      {
        name: "Chips & Guaca",
        image: photo("/images/porcoes/chips&guaca.jpg"),
      },
      {
        name: "Chips & Salsas",
        image: photo("/images/porcoes/chips&salsas.jpg"),
      },
    ],
  },

  {
    name: "Doces",
    id: "doce",
    items: [
      {
        name: "Churros Palito",
        image: photo("/images/doces/palito.jpg"),
      },
      {
        name: "Quesadilha doce",
        image: photo("/images/FALTA IMAGEM.jpg"),
      },
    ],
  },
  {
    name: "Quesadilhas",
    id: "quesadilhas",
    items: [
      {
        name: "Quesadilla La Gordita",
        image: photo("/images/quesadilhas/la_gordita.jpg"),
      },
      {
        name: "Quesadilla Barbacoa",
        image: photo("/images/FALTA IMAGEM.jpg"),
      },
    ],
  },

  {
    name: "Salsas (molhos)",
    id: "salsas",
    items: [
      {
        name: "Guacamole",
        image: photo("/images/salsa_molhos/guacamole.jpg"),
      },
      {
        name: "Salsa Pêssego",
        image: photo("/images/salsa_molhos/pessego.jpg"),
      },
      {
        name: "Pico de Gallo",
        image: photo("/images/salsa_molhos/pico_de_gallo.jpg"),
      },
      {
        name: "Salsa Verde",
        image: photo("/images/salsa_molhos/salsa_verde.jpg"),
      },
    ],
  },
  {
    name: "Bowls Mexicanos",
    id: "bowls",
    items: [
      {
        name: "Bowl El Classico",
        image: photo("/images/bowl/el_classico.jpg"),
      },
      {
        name: "Bowl El Caliente",
        image: photo("/images/bowl/el_caliente.jpg"),
      },
    ],
  },
  {
    name: "Bebidas",
    id: "bebidas",
    items: [
      {
        name: "Pink Limonade",
        image: photo("/images/FALTA IMAGEM.jpg"),
      },
      {
        name: "Lollipop",
        image: photo("/images/bebidas/lollipop.jpg"),
      },
      {
        name: "Sodas Mexicanas",
        image: photo("/images/bebidas/sodas_mexicanas.jpg"),
      },
    ],
  },
  {
    name: "Drinks",
    id: "drinks",
    items: [
      {
        name: "Avatar",
        image: photo("/images/drinks/avatar.jpg"),
      },
      {
        name: "Palomita",
        image: photo("/images/drinks/palomita.jpg"),
      },
      {
        name: "Moranguita",
        image: photo("/images/drinks/moranguita.jpg"),
      },
      {
        name: "Mucho Loco",
        image: photo("/images/FALTA IMAGEM.jpg"),
      },
    ],
  },
];
