import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact", active: true },
    { name: "CHECKOUT", path: "/checkout" },
  ];

  return (
    <header className="bg-background py-4 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="font-display text-3xl font-bold tracking-tight">
                <span className="text-brand-navy">CH</span>
                <span className="text-brand-orange">E</span>
                <span className="text-brand-navy">VY</span>
              </span>
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Upholstery Guy
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${link.active ? "nav-link-active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Utility Icons */}
          <div className="flex items-center gap-6">
            <button className="hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/login" className="hidden sm:flex items-center gap-2 nav-link">
              <User className="w-5 h-5" />
              <span>LOGIN / REGISTER</span>
            </Link>
            <button className="hover:text-primary transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="hidden sm:inline text-sm">$0.00</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
