import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl mb-2">
          Get in touch with <span className="text-primary">CHEVY UPHOLSTER GUY</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We'd love to hear from you! Whether you have questions about our products, need expert advice, or want to place an order, we're here to help.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <span>Tempe AZ, US</span>
        </div>
        
        <a href="tel:+14803596386" className="flex items-center gap-3 info-link">
          <Phone className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <span>+1 (480) 359-6386</span>
        </a>
        
        <a href="mailto:info@chevyupholsteryguy.com" className="flex items-center gap-3 info-link">
          <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <span>info@chevyupholsteryguy.com</span>
        </a>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
          <span className="font-semibold">Business Hours:</span>
        </div>
        <div className="ml-8 space-y-1 text-sm">
          <p>Monday – Friday: 9 AM – 6 PM</p>
          <p>Saturday: 10 AM – 4 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <p className="text-muted-foreground italic">
        Let's keep your Chevy looking its best—reach out today!
      </p>
    </div>
  );
};

export default ContactInfo;
