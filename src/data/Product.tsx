// Define a TypeScript type for a product
export interface Product {
  name: string;
  description: string;
  price: string;
  sale?: string; // Optional property
  image: string;
}

// Export the products array with the defined type
export const products: Product[] = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "1.500 $",
    sale: "2.500 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526793/cafeChair_d4rz7p.jpg",
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "2.000 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526789/cafeChair2_m1fjif.jpg",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "2.000 $",
    sale: "4.000 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526901/bigSofa_cbbpb3.jpg",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "500 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526821/outdoorTable_r8dnrd.jpg",
  },
  {
    name: "Grifo",
    description: "Night lamp",
    price: "400 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526849/lamp_lal7lc.jpg",
  },
  {
    name: "Muggo",
    description: "Small mug",
    price: "30 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526820/mug_cavpux.jpg",
  },
  {
    name: "Pingky",
    description: "Cute bed set",
    price: "1.000 $",
    sale: "1400 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526797/bed_c2p20h.jpg",
  },
  {
    name: "Potty",
    description: "Minimalist flower pot",
    price: "100 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737527689/pot_sorh6b.jpg",
  },
  {
    name: "Syltherine",
    description: "Postmodern glass pot",
    price: "150 $",
    sale: "400 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526904/furniture10_usafeg.jpg",
  },
  {
    name: "Leviosa",
    description: "Stylish tv table",
    price: "1.500 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526917/furniture11_b8q5gw.jpg",
  },
  {
    name: "Lolito",
    description: "Bedroom chair",
    price: "700 $",
    sale: "1.000 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526897/furniture12_rtgqj6.jpg",
  },
  {
    name: "Respira",
    description: "Bar table and stool",
    price: "1.700 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526910/furniture13_qb2dra.jpg",
  },
  {
    name: "Grifo",
    description: "Stylish Cafe table",
    price: "1.000 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526880/furniture14_kmoqod.jpg",
  },
  {
    name: "Muggo",
    description: "Outdoor table and chair",
    price: "2.550 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526894/furniture15_xnumuh.jpg",
  },
  {
    name: "Pingky",
    description: "Minimalist Kitchen table",
    price: "1.500 $",
    sale: "3.000 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526913/furniture16_mb4neb.jpg",
  },
  {
    name: "Potty",
    description: "Classic Wooden Library",
    price: "2.000 $",
    image:
      "https://res.cloudinary.com/dxjjsfami/image/upload/v1737526895/furniture17_pqeiry.jpg",
  },
];
