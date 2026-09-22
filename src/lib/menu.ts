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
    statement: "Recheio de ponta a ponta. Sem espaço para fome.",
    items: [
      {
        name: "Burrito Nacho Man",
        image: photo("/images/burrito/Nacho Man 2025 Ebraim Martini-229.jpg"),
      },
      {
        name: "Burrito da casa",
        image: photo("/images/burrito/Nacho Man 2025 Ebraim Martini-234.jpg"),
      },
    ],
  },
  {
    name: "Porções",
    id: "porcoes",
    statement: "Começa compartilhando. Termina disputando o último pedaço.",
    items: [
      {
        name: "Porção Nacho Man",
        image: photo("/images/porcoes/Nacho Man 2025 Ebraim Martini-549.jpg"),
      },
      {
        name: "Porção para dividir",
        image: photo("/images/porcoes/Nacho Man 2025 Ebraim Martini-581.jpg"),
      },
      {
        name: "Favorito da mesa",
        image: photo("/images/porcoes/Nacho Man 2025 Ebraim Martini-586.jpg"),
      },
    ],
  },
  {
    name: "Nacho",
    id: "nacho",
    statement: "Camadas de sabor, molho e crocância em cada garfada.",
    items: [
      {
        name: "Nacho da casa",
        image: photo("/images/porcoes/Nacho Man 2025 Ebraim Martini-551.jpg"),
      },
      {
        name: "Nacho carregado",
        image: photo("/images/porcoes/Nacho Man 2025 Ebraim Martini-557.jpg"),
      },
    ],
  },
  {
    name: "Doce",
    id: "doce",
    statement: "O final crocante, doce e exagerado que a mesa merece.",
    items: [
      {
        name: "Churros Nacho Man",
        image: photo("/images/churros/Nacho Man 2025 Ebraim Martini-464.jpg"),
      },
      {
        name: "Churros com molho",
        image: photo("/images/churros/Nacho Man 2025 Ebraim Martini-470.jpg"),
      },
      {
        name: "Doce da casa",
        image: photo("/images/churros/Nacho Man 2025 Ebraim Martini-201.jpg"),
      },
    ],
  },
  {
    name: "Quesadilhas",
    id: "quesadilhas",
    statement: "Tortilla dourada por fora. Recheio generoso por dentro.",
    items: [
      {
        name: "Quesadilla Nacho Man",
        image: photo("/images/quesadilhas/Nacho Man 2025 Ebraim Martini-286.jpg"),
      },
      {
        name: "Quesadilla da casa",
        image: photo("/images/quesadilhas/Nacho Man 2025 Ebraim Martini-304.jpg"),
      },
      {
        name: "Quesadilla especial",
        image: photo("/images/quesadilhas/Nacho Man 2025 Ebraim Martini-643.jpg"),
      },
    ],
  },
  {
    name: "Tacos",
    id: "tacos",
    statement: "Feitos para comer com a mão, molho escorrendo e zero cerimônia.",
    items: [
      {
        name: "Tacos Nacho Man",
        image: photo("/images/tacos/Nacho Man 2025 Ebraim Martini-042.jpg"),
      },
      {
        name: "Tacos da casa",
        image: photo("/images/tacos/Nacho Man 2025 Ebraim Martini-085.jpg"),
      },
      {
        name: "Tacos especiais",
        image: photo("/images/tacos/Nacho Man 2025 Ebraim Martini-657.jpg"),
      },
    ],
  },
  {
    name: "Chips",
    id: "chips",
    statement: "O começo perfeito para mergulhar nos molhos da casa.",
    items: [
      {
        name: "Chips Nacho Man",
        image: photo("/images/porcoes/Nacho Man 2025 Ebraim Martini-587.jpg"),
      },
      {
        name: "Chips para dividir",
        image: photo("/images/porcoes/Nacho Man 2025 Ebraim Martini-549.jpg"),
      },
    ],
  },
  {
    name: "Molhos",
    id: "molhos",
    statement: "Frescos, cremosos e feitos para mudar cada mordida.",
    items: [
      {
        name: "Guacamole",
        image: photo("/images/molhos_adicionais/Nacho Man 2025 Ebraim Martini-119.jpg"),
      },
      {
        name: "Pico de gallo",
        image: photo("/images/molhos_adicionais/Nacho Man 2025 Ebraim Martini-126.jpg"),
      },
      {
        name: "Sour cream",
        image: photo("/images/molhos_adicionais/Nacho Man 2025 Ebraim Martini-130.jpg"),
      },
    ],
  },
  {
    name: "Bowls",
    id: "bowls",
    statement: "Uma refeição completa, colorida e montada do nosso jeito.",
    items: [
      {
        name: "Bowl Nacho Man",
        image: photo("/images/bowl/Nacho Man 2025 Ebraim Martini-631.jpg"),
      },
      {
        name: "Bowl da casa",
        image: photo("/images/bowl/Nacho Man 2025 Ebraim Martini-650.jpg"),
      },
    ],
  },
  {
    name: "Sodas",
    id: "sodas",
    statement: "Sabores gelados para equilibrar a pimenta e continuar a conversa.",
    items: [
      {
        name: "Soda Nacho Man",
        image: photo("/images/sodas/Nacho Man 2025 Ebraim Martini-523.jpg"),
      },
      {
        name: "Soda da casa",
        image: photo("/images/sodas/Nacho Man 2025 Ebraim Martini-529.jpg"),
      },
      {
        name: "Soda especial",
        image: photo("/images/sodas/Nacho Man 2025 Ebraim Martini-539.jpg"),
      },
    ],
  },
  {
    name: "Drinks",
    id: "drinks",
    statement: "Misturas autorais, cores intensas e uma mesa que pede mais uma rodada.",
    items: [
      {
        name: "Drink Nacho Man",
        image: photo("/images/drinks/Nacho Man 2025 Ebraim Martini-561.jpg"),
      },
      {
        name: "Drink da casa",
        image: photo("/images/drinks/Nacho Man 2025 Ebraim Martini-609.jpg"),
      },
      {
        name: "Drink especial",
        image: photo("/images/drinks/Nacho Man 2025 Ebraim Martini-668.jpg"),
      },
    ],
  },
];
