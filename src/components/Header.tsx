import { useState } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getCartCount, getCartTotal } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { isAuthenticated, user, logout } = useAuth();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
    { name: "CHECKOUT", path: "/checkout" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  return (
    <header className="bg-background py-4 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                <span className="text-brand-navy">UP</span>
                <span className="text-brand-orange">TOWN</span>
              </span>
              <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Upholstery
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Utility Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-32 md:w-48 border border-border px-3 py-1 text-sm focus:outline-none focus:border-primary"
                    autoFocus
                  />
                  <button type="button" onClick={() => setSearchOpen(false)} className="ml-2">
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button onClick={() => setSearchOpen(true)} className="hover:text-primary transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Auth */}
            {isAuthenticated ? (
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm">Hi, {user?.name}</span>
                <button onClick={logout} className="nav-link text-xs">(Logout)</button>
              </div>
            ) : (
              <Link to="/auth" className="hidden sm:flex items-center gap-2 nav-link">
                <User className="w-5 h-5" />
                <span className="text-xs md:text-sm">LOGIN / REGISTER</span>
              </Link>
            )}

            {/* Wishlist */}
            <Link to="/wishlist" className="relative hover:text-primary transition-colors">
              <Heart className="w-5 h-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="flex items-center gap-2 hover:text-primary transition-colors">
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              </div>
              <span className="hidden sm:inline text-sm">${getCartTotal().toFixed(2)}</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {!isAuthenticated && (
                <Link to="/auth" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  LOGIN / REGISTER
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
