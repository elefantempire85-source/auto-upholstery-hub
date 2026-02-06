import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <CategoryBar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-brand-dark py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-6xl text-primary-foreground mb-6">
                Premium <span className="text-primary">Upholstery</span> Parts
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your vehicle's interior with our high-quality upholstery solutions.
                From seat covers to complete interior kits, we have everything you need.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/shop" className="btn-submit bg-primary text-primary-foreground border-primary hover:bg-primary/90">
                  Shop Now
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-submit text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-brand-dark">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs tracking-widest text-muted-foreground uppercase mb-2">
                Our Products
              </p>
              <h2 className="font-display text-3xl md:text-4xl">Featured Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/shop" className="btn-submit inline-block">
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs tracking-widest text-muted-foreground uppercase mb-2">
                  About Us
                </p>
                <h2 className="font-display text-3xl md:text-4xl mb-6">
                  Welcome to <span className="text-primary">UPTOWN UPHOLSTERY</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We are your premier destination for high-quality automotive interior and
                  upholstery parts. With years of experience in the industry, we take pride
                  in providing top-notch products that meet the highest standards of craftsmanship.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you're restoring a classic vehicle or upgrading your current ride,
                  our extensive collection has something for everyone.
                </p>
                <Link to="/about" className="btn-submit inline-block">
                  Learn More About Us
                </Link>
              </div>
              <div className="bg-card p-8 border border-border">
                <h3 className="font-display text-2xl mb-6">Why Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <div>
                      <h4 className="font-medium">Premium Quality</h4>
                      <p className="text-sm text-muted-foreground">
                        Only the finest materials and craftsmanship
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <div>
                      <h4 className="font-medium">Expert Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Knowledgeable team ready to help
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <div>
                      <h4 className="font-medium">Fast Shipping</h4>
                      <p className="text-sm text-muted-foreground">
                        Quick delivery across the US
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <div>
                      <h4 className="font-medium">Satisfaction Guaranteed</h4>
                      <p className="text-sm text-muted-foreground">
                        100% satisfaction or your money back
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs tracking-widest text-muted-foreground uppercase mb-2">
                Find Us
              </p>
              <h2 className="font-display text-3xl md:text-4xl">Our Location</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map */}
              <div className="aspect-video lg:aspect-auto lg:h-96 border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92584.93417412089!2d-123.16837927656249!3d44.05230310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54c11dd24c7fe7e3%3A0xf89f5e9b64de5d3a!2sEugene%2C%20OR!5e0!3m2!1sen!2sus!4v1707000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Uptown Upholstery Location"
                />
              </div>

              {/* Contact Info */}
              <div className="bg-card p-8 border border-border">
                <h3 className="font-display text-2xl mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-muted-foreground">Eugene WA, US</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a href="tel:+15715637724" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (571) 563-7724
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a href="mailto:info@uptownupholstery.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@uptownupholstery.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/contact" className="btn-submit inline-block">
                    Send Us a Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
