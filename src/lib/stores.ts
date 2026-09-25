export type PaymentBrand =
  | "mastercard"
  | "visa"
  | "elo"
  | "alelo"
  | "ifood-beneficios"
  | "sodexo";

export type Store = {
  slug: string;
  name: string;
  state: string;
  uf: string;
  hours: string[];
  serviceModes?: string[];
  paymentCards?: PaymentBrand[];
  mealVouchers?: PaymentBrand[];
  features?: string[];
  image?: string;
  gallery?: Array<{
    image: string;
    alt: string;
    label: string;
    placeholder?: boolean;
  }>;
};

const standardHours = [
  "Terça a quinta, das 18h às 22h30",
  "Sexta e sábado, das 18h às 23h",
  "Domingo, das 18h às 22h",
];

const eveningHours = [
  "Terça a quinta, das 18h30 às 23h",
  "Sexta e sábado, das 18h30 às 23h30",
  "Domingo, das 18h30 às 22h30",
];

const serviceModes = ["Presencial", "Delivery"];
const paymentCards: PaymentBrand[] = ["mastercard", "visa", "elo"];

export const stores: Store[] = [
  {
    slug: "vitoria-da-conquista-ba",
    name: "Vitória da Conquista",
    state: "Bahia",
    uf: "BA",
    hours: standardHours,
    serviceModes,
    paymentCards,
  },
  {
    slug: "guara-brasilia-df",
    name: "Guará, Brasília",
    state: "Distrito Federal",
    uf: "DF",
    hours: ["Todos os dias, das 11h30 às 23h"],
    serviceModes,
    paymentCards,
    mealVouchers: ["alelo", "sodexo"],
  },
  {
    slug: "cristalina-go",
    name: "Cristalina",
    state: "Goiás",
    uf: "GO",
    hours: [
      "Segunda, quarta e quinta, das 18h às 22h30",
      "Sexta, sábado e domingo, das 18h às 22h30",
    ],
    serviceModes,
    paymentCards,
  },
  {
    slug: "caldas-novas-go",
    name: "Caldas Novas",
    state: "Goiás",
    uf: "GO",
    hours: ["Todos os dias, das 11h às 23h"],
    serviceModes,
    paymentCards,
  },
  {
    slug: "prado-belo-horizonte-mg",
    name: "Prado, Belo Horizonte",
    state: "Minas Gerais",
    uf: "MG",
    hours: standardHours,
    serviceModes,
    paymentCards,
  },
  {
    slug: "uberlandia-mg",
    name: "Uberlândia",
    state: "Minas Gerais",
    uf: "MG",
    hours: standardHours,
    serviceModes,
    paymentCards,
  },
  {
    slug: "buritis-belo-horizonte-mg",
    name: "Buritis, Belo Horizonte",
    state: "Minas Gerais",
    uf: "MG",
    hours: standardHours,
    serviceModes,
    paymentCards: ["mastercard", "visa"],
  },
  {
    slug: "santa-amelia-mg",
    name: "Santa Amélia",
    state: "Minas Gerais",
    uf: "MG",
    hours: standardHours,
    serviceModes,
  },
  {
    slug: "londrina-pr",
    name: "Londrina",
    state: "Paraná",
    uf: "PR",
    hours: eveningHours,
    serviceModes,
    paymentCards,
  },
  {
    slug: "curitiba-pr",
    name: "Curitiba",
    state: "Paraná",
    uf: "PR",
    hours: standardHours,
    serviceModes,
  },
  {
    slug: "carazinho-rs",
    name: "Carazinho",
    state: "Rio Grande do Sul",
    uf: "RS",
    hours: [
      "Terça a quinta, das 18h30 às 22h30",
      "Sexta e sábado, das 18h30 às 22h30",
      "Domingo, das 18h30 às 22h30",
    ],
    serviceModes,
    paymentCards,
  },
  {
    slug: "blumenau-sc",
    name: "Blumenau",
    state: "Santa Catarina",
    uf: "SC",
    hours: standardHours,
    serviceModes,
    paymentCards,
    mealVouchers: ["alelo", "ifood-beneficios", "sodexo"],
    features: ["Aceita pets", "Promoções da semana"],
  },
  {
    slug: "balneario-camboriu-sc",
    name: "Balneário Camboriú",
    state: "Santa Catarina",
    uf: "SC",
    hours: eveningHours,
    serviceModes,
    paymentCards,
    mealVouchers: ["alelo"],
  },
  {
    slug: "joinville-sc",
    name: "Joinville",
    state: "Santa Catarina",
    uf: "SC",
    hours: standardHours,
    serviceModes,
    paymentCards,
  },
  {
    slug: "sao-jose-sc",
    name: "São José",
    state: "Santa Catarina",
    uf: "SC",
    hours: ["Todos os dias, das 11h às 23h"],
    serviceModes,
    paymentCards,
  },
  {
    slug: "praia-brava-itajai-sc",
    name: "Praia Brava, Itajaí",
    state: "Santa Catarina",
    uf: "SC",
    hours: [
      "Domingo a quarta, das 11h30 às 22h",
      "Quinta a sábado, das 11h30 às 23h",
    ],
    serviceModes,
    paymentCards,
    mealVouchers: ["ifood-beneficios"],
  },
  {
    slug: "balneario-picarras-sc",
    name: "Balneário Piçarras",
    state: "Santa Catarina",
    uf: "SC",
    hours: standardHours,
    serviceModes,
  },
  {
    slug: "rio-do-sul-sc",
    name: "Rio do Sul",
    state: "Santa Catarina",
    uf: "SC",
    hours: standardHours,
    serviceModes,
    paymentCards,
  },
  {
    slug: "tubarao-sc",
    name: "Tubarão",
    state: "Santa Catarina",
    uf: "SC",
    hours: standardHours,
    serviceModes,
  },
  {
    slug: "atibaia-sp",
    name: "Atibaia",
    state: "São Paulo",
    uf: "SP",
    hours: standardHours,
    serviceModes,
    paymentCards,
    mealVouchers: ["sodexo"],
  },
  {
    slug: "itapeva-sp",
    name: "Itapeva",
    state: "São Paulo",
    uf: "SP",
    hours: [
      "Segunda a quinta, das 18h às 22h30",
      "Sábado, das 18h às 23h",
      "Domingo, das 18h às 22h",
    ],
    serviceModes,
  },
  {
    slug: "sao-jose-dos-campos-sp",
    name: "São José dos Campos",
    state: "São Paulo",
    uf: "SP",
    hours: ["Todos os dias, das 12h às 22h"],
    serviceModes,
  },
  {
    slug: "ribeirao-preto-sp",
    name: "Ribeirão Preto",
    state: "São Paulo",
    uf: "SP",
    hours: standardHours,
    serviceModes,
    paymentCards,
  },
  {
    slug: "jacarei-sp",
    name: "Jacareí",
    state: "São Paulo",
    uf: "SP",
    hours: standardHours,
    serviceModes,
  },
  {
    slug: "salto-sp",
    name: "Salto",
    state: "São Paulo",
    uf: "SP",
    hours: [
      "Segunda-feira, fechado",
      "Terça a sexta, das 18h às 22h30",
      "Sábado, das 11h30 às 14h30 e das 18h às 22h30",
      "Domingo, das 11h30 às 14h30 e das 18h às 22h",
    ],
  },
  {
    slug: "palmas-to",
    name: "Palmas",
    state: "Tocantins",
    uf: "TO",
    hours: [
      "Terça a quinta, das 19h às 23h30",
      "Sexta e sábado, das 19h à 0h",
      "Domingo, das 19h às 23h30",
    ],
    serviceModes,
    paymentCards,
  },
];
