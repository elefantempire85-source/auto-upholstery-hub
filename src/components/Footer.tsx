import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { name: "Contact Us", path: "/contact" },
    { name: "Shop", path: "/shop" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <footer className="bg-brand-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 text-primary-foreground">
          {footerLinks.map((link, index) => (
            <div key={link.name} className="flex items-center gap-4">
              <Link
                to={link.path}
                className="text-sm hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
              {index < footerLinks.length - 1 && (
                <span className="text-muted-foreground">|</span>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-muted-foreground/20 mt-6 pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Uptown Upholstery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
