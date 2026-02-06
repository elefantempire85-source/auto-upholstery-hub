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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
