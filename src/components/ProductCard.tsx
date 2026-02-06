import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.info(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(product);
      toast.success(`${product.name} added to wishlist!`);
    }
  };

  return (
    <div className="group bg-card border border-border overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 p-2 bg-background/80 rounded-full transition-colors ${
            inWishlist ? "text-destructive" : "hover:text-primary"
          }`}
        >
          <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
        </button>
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-medium">
            SALE
          </span>
        )}
      </div>
      <div className="p-4 space-y-3">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="font-display text-lg leading-tight">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-2">
          <span className="font-display text-xl">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full btn-submit flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
