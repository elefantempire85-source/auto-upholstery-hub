import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  return (
    <div className="bg-brand-dark py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <Link to="/shop" className="flex items-center gap-2 text-primary-foreground hover:text-primary transition-colors">
            <span className="text-sm font-medium tracking-wide uppercase">Upholstery Parts</span>
            <ChevronDown className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
