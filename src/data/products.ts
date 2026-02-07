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
