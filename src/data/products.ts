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
import product35 from "@/assets/product-35.jpeg";
import product36 from "@/assets/product-36.jpeg";
import product37 from "@/assets/product-37.jpeg";
import product38a from "@/assets/product-38a.jpeg";
import product38b from "@/assets/product-38b.jpeg";
import product39 from "@/assets/product-39.jpeg";
import product40 from "@/assets/product-40.jpeg";
import product41 from "@/assets/product-41.jpeg";
import product42 from "@/assets/product-42.jpeg";

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
    {
      id: "25",
      name: "Tan & Blue Plaid Bucket Seats with Console",
      price: 1795.95,
      image: product25,
      category: "Seat Covers",
      description: "Premium tan leather bucket seats with blue and red plaid diamond inserts and matching center console with cupholders.",
      inStock: true,
    },
    {
      id: "26",
      name: "Green & Tan Two-Tone Center Console",
      price: 549.45,
      image: product26,
      category: "Accessories",
      description: "Custom two-tone center console in forest green and tan leather with dual stainless steel cupholders and padded armrest.",
      inStock: true,
    },
    {
      id: "27",
      name: "Black & Tan Diamond Stitch Bucket Seats",
      price: 1695.95,
      image: product27,
      category: "Seat Covers",
      description: "Elegant black leather bucket seats with tan diamond-stitched center inserts and matching center console.",
      inStock: true,
    },
    {
      id: "28",
      name: "Hot Pink Custom Bucket Seats with Console",
      price: 1895.45,
      image: product28,
      category: "Seat Covers",
      description: "Bold hot pink leather bucket seats with detailed stitching and matching center console with cupholders. Eye-catching custom build.",
      inStock: true,
    },
    {
      id: "29",
      name: "Red Premium Bucket Seats with Armrest",
      price: 1745.95,
      image: product29,
      category: "Seat Covers",
      description: "Vibrant red leather bucket seats with chevron stitching, matching center console with cupholders, and coordinating armrest piece.",
      inStock: true,
    },
    {
      id: "30",
      name: "Navy Blue Bucket Seats with Console",
      price: 1595.45,
      image: product30,
      category: "Seat Covers",
      description: "Classic navy blue leather bucket seats with ribbed stitching detail and matching center console with dual cupholders.",
      inStock: true,
    },
    {
      id: "31",
      name: "Cognac & Black Bench Seat with Dashboard Kit",
      price: 2495.95,
      image: product31,
      category: "Interior Kits",
      description: "Premium cognac leather bench seat with black ribbed accents, matching dashboard cover with brushed metal trim, and coordinating door panels.",
      inStock: true,
    },
    {
      id: "32",
      name: "Royal Blue Plaid Bucket Seats with Console",
      price: 1845.45,
      image: product32,
      category: "Seat Covers",
      description: "Stunning royal blue bucket seats with multi-tone blue plaid inserts, wing emblems, and matching center console with cupholders.",
      inStock: true,
    },
    {
      id: "33",
      name: "Black & Burgundy Ribbed Bucket Seats",
      price: 1645.95,
      image: product33,
      category: "Seat Covers",
      description: "Premium black leather bucket seats with burgundy ribbed center inserts and matching center console with dual cupholders.",
      inStock: true,
    },
    {
      id: "34",
      name: "Cognac Complete Interior Package",
      price: 2895.45,
      image: product34,
      category: "Interior Kits",
      description: "Complete cognac leather interior package including bucket seats with console, dashboard cover, and door panels with black accent inserts.",
      inStock: true,
    },
    {
      id: "35",
      name: "Black & Red Stitch Bucket Seats with Console",
      price: 1745.95,
      image: product35,
      category: "Seat Covers",
      description: "Sleek black leather bucket seats with red contrast stitching throughout and matching center console with red base accent and dual cupholders.",
      inStock: true,
    },
    {
      id: "36",
      name: "Navy Blue Complete Interior Package",
      price: 2695.45,
      image: product36,
      category: "Interior Kits",
      description: "Complete navy blue leather interior package including bucket seats with console, dashboard cover, and door panels. Full restoration kit.",
      inStock: true,
    },
    {
      id: "37",
      name: "Black & Cognac Two-Tone Bucket Seats",
      price: 1695.95,
      image: product37,
      category: "Seat Covers",
      description: "Premium two-tone bucket seats with black outer leather and cognac center inserts, wing emblems, and matching center console.",
      inStock: true,
    },
    {
      id: "38",
      name: "Black Diamond Stitch Interior Kit with Red Accent",
      price: 2895.45,
      image: product38a,
      images: [product38a, product38b],
      category: "Interior Kits",
      description: "Complete black leather interior kit with diamond stitching and red accent threading. Includes bench seat, door panels, dashboard, and kick panels.",
      inStock: true,
    },
    {
      id: "39",
      name: "Red Custom Bucket Seats with Console",
      price: 1595.95,
      image: product39,
      category: "Seat Covers",
      description: "Vibrant red leather bucket seats with textured mesh headrest inserts and matching center console with cupholders.",
      inStock: true,
    },
    {
      id: "40",
      name: "Custom Speaker Panel with Subwoofer",
      price: 895.45,
      image: product40,
      category: "Accessories",
      description: "Custom upholstered rear speaker panel with integrated Rockford Fosgate subwoofer and honeycomb speaker grilles.",
      inStock: true,
    },
    {
      id: "41",
      name: "Olive Green Storage Console Box",
      price: 449.95,
      image: product41,
      category: "Accessories",
      description: "Custom olive green leather-wrapped storage console with hinged lid and felt-lined interior compartment.",
      inStock: true,
    },
    {
      id: "42",
      name: "Cognac & Black Bench Seat with Dashboard",
      price: 2545.45,
      image: product42,
      category: "Interior Kits",
      description: "Premium cognac leather bench seat with black ribbed inserts, matching dashboard cover with brushed metal trim panel.",
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
