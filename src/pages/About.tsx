import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <CategoryBar />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl text-center mb-12">
            About Us
          </h1>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Hero Section */}
            <section className="text-center space-y-4">
              <h2 className="font-display text-3xl">
                Welcome to <span className="text-primary">UPTOWN UPHOLSTERY</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Your premier destination for high-quality automotive interior and upholstery parts.
                We specialize in classic vehicle restoration with an emphasis on craftsmanship and authenticity.
              </p>
            </section>

            {/* Our Story */}
            <section className="bg-card p-8 border border-border">
              <h3 className="font-display text-2xl mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                UPTOWN UPHOLSTERY was founded with a passion for preserving the beauty and heritage of
                classic vehicles. What started as a small workshop has grown into a trusted name in
                automotive upholstery, serving enthusiasts and restoration professionals across the nation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of skilled craftsmen brings decades of combined experience to every project,
                ensuring that each piece meets the highest standards of quality and authenticity.
              </p>
            </section>

            {/* What We Offer */}
            <section>
              <h3 className="font-display text-2xl mb-6 text-center">What We Offer</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card p-6 border border-border text-center">
                  <h4 className="font-display text-lg mb-2">Seat Covers</h4>
                  <p className="text-sm text-muted-foreground">
                    Premium leather and fabric seat covers custom-made for your vehicle.
                  </p>
                </div>
                <div className="bg-card p-6 border border-border text-center">
                  <h4 className="font-display text-lg mb-2">Interior Kits</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete interior restoration packages for a cohesive look.
                  </p>
                </div>
                <div className="bg-card p-6 border border-border text-center">
                  <h4 className="font-display text-lg mb-2">Custom Work</h4>
                  <p className="text-sm text-muted-foreground">
                    Tailored solutions for unique restoration projects.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-secondary p-8">
              <h3 className="font-display text-2xl mb-6 text-center">Why Choose Us</h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Premium quality materials sourced from trusted suppliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Expert craftsmanship with attention to detail</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Competitive pricing without compromising quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Fast and reliable shipping across the US</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Dedicated customer support team</span>
                </li>
              </ul>
            </section>

            {/* Contact CTA */}
            <section className="text-center space-y-4">
              <h3 className="font-display text-2xl">Ready to Get Started?</h3>
              <p className="text-muted-foreground">
                Contact us today to discuss your upholstery needs or browse our shop for ready-to-ship products.
              </p>
              <div className="flex gap-4 justify-center">
                <a href="/contact" className="btn-submit">
                  Contact Us
                </a>
                <a href="/shop" className="btn-submit">
                  Shop Now
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
