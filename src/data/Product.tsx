// Define a TypeScript type for a product
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  sale?: number;
  image: string;
  quantity?: number
}

let idCounter = 1;
export const products: Product[] = [
  {
    id:(idCounter++).toString(),
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 1500,
    sale: 2500,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526793/cafeChair_d4rz7p.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2000,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526789/cafeChair2_m1fjif.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Lolito",
    description: "Luxury big sofa",
    price: 2000,
    sale: 4000,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526901/bigSofa_cbbpb3.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526821/outdoorTable_r8dnrd.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Grifo",
    description: "Night lamp",
    price: 400,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526849/lamp_lal7lc.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Muggo",
    description: "Small mug",
    price: 30,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526820/mug_cavpux.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Pingky",
    description: "Cute bed set",
    price: 1000,
    sale: 1400,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526797/bed_c2p20h.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Potty",
    description: "Minimalist flower pot",
    price: 100,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737527689/pot_sorh6b.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Syltherine",
    description: "Postmodern glass pot",
    price: 150,
    sale: 400,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526904/furniture10_usafeg.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Leviosa",
    description: "Stylish tv table",
    price: 1500,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526917/furniture11_b8q5gw.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Lolito",
    description: "Bedroom chair",
    price: 700,
    sale: 1000,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526897/furniture12_rtgqj6.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Respira",
    description: "Bar table and stool",
    price: 1700,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526910/furniture13_qb2dra.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Grifo",
    description: "Stylish Cafe table",
    price: 1000,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526880/furniture14_kmoqod.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Muggo",
    description: "Outdoor table and chair",
    price: 2550,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526894/furniture15_xnumuh.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Pingky",
    description: "Minimalist Kitchen table",
    price: 1500,
    sale: 3000,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526913/furniture16_mb4neb.jpg",
  },
  {
    id:(idCounter++).toString(),
    name: "Potty",
    description: "Classic Wooden Library",
    price: 2000,
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526895/furniture17_pqeiry.jpg",
  },
];
