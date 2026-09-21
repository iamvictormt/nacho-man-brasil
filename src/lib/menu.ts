import { photos } from "./photos";
import type { StaticImageData } from "next/image";
import product6 from "@/assets/products/product-6.webp";
import product7 from "@/assets/products/product-7.webp";
import product8 from "@/assets/products/product-8.webp";
import product9 from "@/assets/products/product-9.webp";
import product13 from "@/assets/products/product-13.webp";
import product14 from "@/assets/products/product-14.webp";
import product15 from "@/assets/products/product-15.webp";
import product16 from "@/assets/products/product-16.webp";
import product10 from "@/assets/products/product-10.webp";
import product11 from "@/assets/products/product-11.webp";
import product12 from "@/assets/products/product-12.webp";
import product5 from "@/assets/products/product-5.webp";
import product20 from "@/assets/products/product-20.webp";
import product21 from "@/assets/products/product-21.webp";
import product22 from "@/assets/products/product-22.webp";
import product23 from "@/assets/products/product-23.webp";
import product25 from "@/assets/products/product-25.webp";
import product26 from "@/assets/products/product-26.webp";
import product27 from "@/assets/products/product-27.webp";
import product28 from "@/assets/products/product-28.webp";
export type MenuItem = { name: string; image: StaticImageData };
export const menuSections = [
  {
    name: "Burritos",
    id: "burritos",
    eyebrow: "Enrolados, quentes e bem recheados",
    items: [
      { name: "Califórnia Burrito", image: product6 },
      { name: "Big Man dos sonhos", image: product7 },
      { name: "Hot Chicken", image: product8 },
      { name: "Burritinhos", image: product9 },
    ],
  },
  {
    name: "Porções",
    id: "porcoes",
    eyebrow: "Para colocar no centro da mesa",
    items: [
      { name: "La Gordita", image: product13 },
      { name: "Surf N Fries", image: product14 },
      { name: "Taquitos de Costela", image: product15 },
      { name: "Carne Asada Fries", image: product16 },
    ],
  },
  {
    name: "Nacho",
    id: "nacho",
    eyebrow: "Crocantes por natureza",
    items: [
      { name: "Nacho Chilli Beans", image: product10 },
      { name: "Barbacoa", image: product11 },
      { name: "Nacho Spicy Vegetariano", image: product12 },
    ],
  },
  {
    name: "Doce",
    id: "doce",
    eyebrow: "Um final cheio de sabor",
    items: [
      { name: "Mini Churros", image: product5 },
      { name: "Churros Doce de Leite", image: photos.churros },
    ],
  },
  {
    name: "Quesadilhas",
    id: "quesadilhas",
    eyebrow: "Douradas e irresistíveis",
    items: [{ name: "Quesadilhas", image: photos.quesadilla }],
  },
  {
    name: "Tacos",
    id: "tacos",
    eyebrow: "Sabor em cada mordida",
    items: [{ name: "Tacos", image: photos.tacos }],
  },
  {
    name: "Chips",
    id: "chips",
    eyebrow: "Crocância para acompanhar",
    items: [{ name: "Chips e Guaca", image: photos.chips }],
  },
  {
    name: "Molhos",
    id: "molhos",
    eyebrow: "O toque que faz a diferença",
    items: [
      { name: "Guacamole", image: photos.guacamole },
      { name: "Pico de Gallo", image: photos.pico },
      { name: "Salsa Ranchera", image: product20 },
      { name: "Molho Chipotle", image: product21 },
      { name: "Sweet Chili", image: product22 },
      { name: "Molho Jalapeño", image: product23 },
      { name: "Sour Cream", image: photos.sourCream },
      { name: "Jalapeño rodelas", image: product25 },
      { name: "Salsa de pêssego", image: product26 },
      { name: "Salsa Mango", image: product27 },
      { name: "Cheddar", image: product28 },
    ],
  },
];
