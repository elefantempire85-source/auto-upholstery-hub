import { ChevronDown } from "lucide-react";

const CategoryBar = () => {
  return (
    <div className="bg-brand-dark py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <button className="flex items-center gap-2 text-primary-foreground hover:text-primary transition-colors">
            <span className="text-sm font-medium tracking-wide uppercase">Chevy Parts</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
