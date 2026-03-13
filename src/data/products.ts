import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";
import product5 from "@/assets/product-5.jpeg";
import product6 from "@/assets/product-6.jpeg";
import product7 from "@/assets/product-7.jpeg";
import product8 from "@/assets/product-8.jpeg";
import product9 from "@/assets/product-9.jpeg";
import product10 from "@/assets/product-10.jpeg";
import product11a from "@/assets/product-11a.jpeg";
import product11b from "@/assets/product-11b.jpeg";
import product12 from "@/assets/product-12.jpeg";
import product13 from "@/assets/product-13.jpeg";
import product14 from "@/assets/product-14.jpeg";
import product15a from "@/assets/product-15a.jpeg";
import product15b from "@/assets/product-15b.jpeg";
import product15c from "@/assets/product-15c.jpeg";
import product15d from "@/assets/product-15d.jpeg";
import product16a from "@/assets/product-16a.jpeg";
import product16b from "@/assets/product-16b.jpeg";
import product17 from "@/assets/product-17.jpeg";
import product18 from "@/assets/product-18.jpeg";
import product19 from "@/assets/product-19.jpeg";
import product20 from "@/assets/product-20.jpeg";
import product20b from "@/assets/product-20b.jpeg";
import product21 from "@/assets/product-21.jpeg";
import product22 from "@/assets/product-22.jpeg";
import product22b from "@/assets/product-22b.jpeg";
import product22c from "@/assets/product-22c.jpeg";
import product23 from "@/assets/product-23.jpeg";
import product23b from "@/assets/product-23b.jpeg";
import product24 from "@/assets/product-24.jpeg";
import product25 from "@/assets/product-25.jpeg";
import product26 from "@/assets/product-26.jpeg";
import product27 from "@/assets/product-27.jpeg";
import product28 from "@/assets/product-28.jpeg";
import product29 from "@/assets/product-29.jpeg";
import product30 from "@/assets/product-30.jpeg";
import product31 from "@/assets/product-31.jpeg";
import product32 from "@/assets/product-32.jpeg";
import product33 from "@/assets/product-33.jpeg";
import product34 from "@/assets/product-34.jpeg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[]; // Multiple images for a product
  category: string;
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Tan Plaid Bench Seat Cover",
    price: 899.99,
    originalPrice: 1099.99,
    image: product1,
    category: "Seat Covers",
    description: "High-quality tan leather with classic plaid inserts. Perfect for classic Chevy trucks.",
    inStock: true,
  },
  {
    id: "2",
    name: "Complete Interior Kit - Tan Plaid",
    price: 1499.99,
    originalPrice: 1799.99,
    image: product2,
    category: "Interior Kits",
    description: "Full interior restoration kit including seat, door panels, and trim pieces.",
    inStock: true,
  },
  {
    id: "3",
    name: "Burgundy Complete Interior Package",
    price: 1899.99,
    image: product3,
    category: "Interior Kits",
    description: "Premium burgundy upholstery complete interior package with all panels and accessories.",
    inStock: true,
  },
  {
    id: "4",
    name: "Bench Seat with Dashboard Kit",
    price: 1299.99,
    originalPrice: 1499.99,
    image: product4,
    category: "Seat Covers",
    description: "Matching bench seat and dashboard cover kit in tan with plaid accents.",
    inStock: true,
  },
  {
    id: "5",
    name: "Deluxe Bench Seat & Visor Set",
    price: 1099.99,
    image: product5,
    category: "Seat Covers",
    description: "Premium bench seat cover with matching sun visors in tan leather.",
    inStock: true,
  },
  {
    id: "6",
    name: "Navy Blue & Red Custom Bucket Seats",
    price: 1599.99,
    originalPrice: 1899.99,
    image: product6,
    category: "Seat Covers",
    description: "Custom navy blue leather bucket seats with red polka dot center inserts. Bold two-tone design.",
    inStock: true,
  },
  {
    id: "7",
    name: "Turquoise Custom Dashboard Cover",
    price: 699.99,
    image: product7,
    category: "Dashboards",
    description: "Premium turquoise leather wrapped dashboard with original vents and speaker grilles preserved.",
    inStock: true,
  },
  {
    id: "8",
    name: "Cognac Premium Interior Kit",
    price: 2499.99,
    originalPrice: 2899.99,
    image: product8,
    category: "Interior Kits",
    description: "Complete cognac leather interior kit with bucket seats, console, dashboard pad, and door panels.",
    inStock: true,
  },
  {
    id: "9",
    name: "Black & Burgundy Bucket Seats with Console",
    price: 1799.99,
    image: product9,
    category: "Seat Covers",
    description: "Premium black leather bucket seats with burgundy ribbed inserts and matching center console with cupholders.",
    inStock: true,
  },
  {
    id: "10",
    name: "Royal Blue Plaid Bucket Seats",
    price: 1899.99,
    originalPrice: 2199.99,
    image: product10,
    category: "Seat Covers",
    description: "Stunning royal blue bucket seats with matching plaid pattern inserts and custom wing emblems.",
    inStock: true,
  },
  {
    id: "11",
    name: "Tan & Black Diamond Stitch Bucket Seats",
    price: 1699.99,
    image: product11a,
    images: [product11a, product11b],
    category: "Seat Covers",
    description: "Elegant tan diamond-stitched leather bucket seats with black trim and matching center console.",
    inStock: true,
  },
  {
    id: "12",
    name: "Cognac Bench Seat with Console",
    price: 1899.99,
    originalPrice: 2199.99,
    image: product12,
    category: "Seat Covers",
    description: "Premium cognac leather bench seat with black ribbed inserts, cupholders, and matching console extension.",
    inStock: true,
  },
  {
    id: "13",
    name: "Navy Blue Bucket Seats with Console",
    price: 1599.99,
    image: product13,
    category: "Seat Covers",
    description: "Classic navy blue leather bucket seats with ribbed stitching and matching center console with cupholders.",
    inStock: true,
  },
  {
    id: "14",
    name: "Red Premium Bucket Seats with Console",
    price: 1699.99,
    originalPrice: 1999.99,
    image: product14,
    category: "Seat Covers",
    description: "Vibrant red leather bucket seats with detailed stitching, center console with cupholders, and matching armrest.",
    inStock: true,
  },
  {
    id: "15",
    name: "Maroon & Tan Diamond Stitch Complete Kit",
    price: 2699.99,
    originalPrice: 3199.99,
    image: product15a,
    images: [product15a, product15b, product15c, product15d],
    category: "Interior Kits",
    description: "Complete interior package featuring maroon leather with tan diamond stitching. Includes bucket seats, center console, door panels, and dashboard cover.",
    inStock: true,
  },
  {
    id: "16",
    name: "Brown & Tan Two-Tone Bucket Seats",
    price: 1799.99,
    image: product16a,
    images: [product16a, product16b],
    category: "Seat Covers",
    description: "Elegant two-tone bucket seats with brown outer sections and tan ribbed center inserts. Includes matching center console.",
    inStock: true,
  },
  {
    id: "17",
    name: "Turquoise Classic Bucket Seats",
    price: 1599.99,
    image: product17,
    category: "Seat Covers",
    description: "Retro turquoise leather bucket seats with vertical pleating and chrome trim accents.",
    inStock: true,
  },
  {
    id: "18",
    name: "Black & Silver Racing Bucket Seats",
    price: 1899.99,
    originalPrice: 2199.99,
    image: product18,
    category: "Seat Covers",
    description: "Sporty black bucket seats with silver racing stripe accents and matching center console with cupholders.",
    inStock: true,
  },
   {
     id: "19",
     name: "Tan Diamond Pattern Interior Kit",
     price: 2299.99,
     image: product19,
     category: "Interior Kits",
     description: "Complete tan leather interior kit with diamond stitch pattern. Includes bucket seats, console, and door panel accents.",
     inStock: true,
   },
   {
     id: "20",
     name: "Black & Blue Plaid Bench Seat with Console",
     price: 1499.99,
     image: product20,
     images: [product20, product20b],
     category: "Seat Covers",
     description: "Classic black and light blue plaid bench seat with matching console and cupholders. Retro-inspired design.",
     inStock: true,
   },
   {
     id: "21",
     name: "Red Truck Black & Red Bucket Seats",
     price: 1799.99,
     image: product21,
     category: "Seat Covers",
     description: "Bold black bucket seats with red stitching accents installed in a classic red truck. High-contrast design.",
     inStock: true,
   },
   {
     id: "22",
     name: "Black & Burgundy Ribbed Bucket Seats with Console",
     price: 1699.99,
     originalPrice: 1999.99,
     image: product22,
     images: [product22, product22b, product22c],
     category: "Seat Covers",
     description: "Premium black leather bucket seats with burgundy ribbed inserts and center console with cupholders. Multiple viewing angles.",
     inStock: true,
   },
   {
     id: "23",
     name: "Blue & Red Plaid Complete Interior Kit",
     price: 2199.99,
     image: product23,
     images: [product23, product23b],
     category: "Interior Kits",
     description: "Complete interior package featuring royal blue leather with red plaid inserts. Includes bucket seats, console, and door panels.",
     inStock: true,
   },
   {
     id: "24",
     name: "Light Blue GMC Bucket Seats with Console",
     price: 1599.99,
     image: product24,
     category: "Seat Covers",
     description: "Classic light blue leather bucket seats with GMC branding and matching console. Retro truck restoration look.",
     inStock: true,
   },
 ];

export const categories = [
  "All Products",
  "Seat Covers",
  "Interior Kits",
  "Dashboards",
  "Door Panels",
  "Headliners",
  "Carpets",
  "Accessories",
];
