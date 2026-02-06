import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const Wishlist = () => {
  const { items, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof items[0]) => {
    addToCart(product);
    removeFromWishlist(product.id);
    toast.success(`${product.name} moved to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <CategoryBar />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl text-center mb-12">
            <Heart className="inline-block w-10 h-10 mr-3" />
            My Wishlist
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg mb-4">Your wishlist is empty</p>
              <Link to="/shop" className="btn-submit inline-block">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => {
                    clearWishlist();
                    toast.info("Wishlist cleared");
                  }}
                  className="text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear Wishlist
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((product) => (
                  <div
                    key={product.id}
                    className="bg-card border border-border p-4 flex flex-col"
                  >
                    <div className="aspect-square overflow-hidden mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-display text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {product.category}
                    </p>
                    <p className="font-display text-xl mb-4">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="flex gap-2 mt-auto">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 btn-submit flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                      <button
                        onClick={() => {
                          removeFromWishlist(product.id);
                          toast.info(`${product.name} removed from wishlist`);
                        }}
                        className="p-3 border border-border hover:border-destructive hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
