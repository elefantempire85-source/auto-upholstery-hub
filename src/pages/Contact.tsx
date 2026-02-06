import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import CategoryBar from "@/components/CategoryBar";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <CategoryBar />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl text-center mb-16">
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="font-display text-2xl text-center mb-8">Find Us</h2>
            <div className="aspect-video max-w-4xl mx-auto border border-border overflow-hidden">
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
