import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All Products") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <CategoryBar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl text-center mb-8">
            {searchQuery ? `Search: "${searchQuery}"` : "Shop"}
          </h1>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-border px-4 py-2 text-sm bg-background"
            >
              <option value="default">Default Sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
