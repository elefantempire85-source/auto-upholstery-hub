import product1 from "@/assets/product-1.jpeg";
import product2 from "@/assets/product-2.jpeg";
import product3 from "@/assets/product-3.jpeg";
import product4 from "@/assets/product-4.jpeg";
import product5 from "@/assets/product-5.jpeg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
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
];

export const categories = [
  "All Products",
  "Seat Covers",
  "Interior Kits",
  "Door Panels",
  "Headliners",
  "Carpets",
  "Accessories",
];
