import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import PaymentMethodSelector, {
  type PaymentMethod,
  getPaymentMethodInfo,
} from "@/components/checkout/PaymentMethodSelector";

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>("paypal");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setLoading(true);

    const orderNumber = `UU-${Date.now().toString(36).toUpperCase()}`;
    
    const paymentInfo = getPaymentMethodInfo(selectedPaymentMethod);
    const orderData = {
      orderNumber,
      items: items.map((item) => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
      })),
      subtotal: getCartTotal(),
      shipping: shippingCost,
      tax,
      total,
      customerEmail: formData.email,
      customerName: `${formData.firstName} ${formData.lastName}`,
      shippingAddress: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}, ${formData.country}`,
      paymentMethod: selectedPaymentMethod,
      paymentMethodLabel: paymentInfo?.name ?? "PayPal",
      paymentInstructions: paymentInfo?.instructions ?? "",
    };

    // Send automated emails via edge function
    try {
      const { data, error } = await supabase.functions.invoke("send-order-email", {
        body: orderData,
      });
      if (error) {
        console.error("Email send error:", error);
        toast.error("Order placed but email notification failed. Please contact us directly.");
      } else {
        console.log("Order emails sent:", data);
      }
    } catch (err) {
      console.error("Email function error:", err);
    }
    
    clearCart();
    setLoading(false);
    
    navigate("/order-confirmation", { state: orderData });
  };

  const getShippingCost = () => {
    if (getCartTotal() > 500) return 0; // Free shipping over $500
    const state = formData.state.trim().toLowerCase();
    // West Coast / nearby states
    const local = ["or", "oregon", "wa", "washington", "ca", "california", "nv", "nevada", "id", "idaho"];
    // Central US
    const mid = ["az", "arizona", "ut", "utah", "mt", "montana", "co", "colorado", "wy", "wyoming", "nm", "new mexico", "tx", "texas", "nd", "north dakota", "sd", "south dakota", "ne", "nebraska", "ks", "kansas", "ok", "oklahoma", "mn", "minnesota", "ia", "iowa", "mo", "missouri", "ar", "arkansas", "la", "louisiana", "wi", "wisconsin", "il", "illinois", "in", "indiana", "mi", "michigan", "oh", "ohio"];
    if (local.includes(state)) return 75;
    if (mid.includes(state)) return 110;
    return 145; // East Coast & others
  };

  const shippingCost = getShippingCost();
  const tax = getCartTotal() * 0.08;
  const total = getCartTotal() + shippingCost + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <AnnouncementBar />
        <Header />
        <CategoryBar />
        <main className="flex-1 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl mb-8">Checkout</h1>
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <a href="/shop" className="btn-submit inline-block">
              Continue Shopping
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <CategoryBar />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl text-center mb-12">
            Checkout
          </h1>

          {!isAuthenticated && (
            <div className="bg-secondary p-4 mb-8 text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <a href="/auth" className="text-primary hover:underline">
                  Login
                </a>{" "}
                for a faster checkout
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Billing & Shipping */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Information */}
                <div className="bg-card border border-border p-6">
                  <h2 className="font-display text-2xl mb-6">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="contact-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="contact-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="contact-input"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-card border border-border p-6">
                  <h2 className="font-display text-2xl mb-6">Shipping Address</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm mb-2">Street Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="contact-input"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="contact-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="contact-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-2">ZIP Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="contact-input"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-card border border-border p-6">
                  <PaymentMethodSelector
                    selectedMethod={selectedPaymentMethod}
                    onMethodChange={setSelectedPaymentMethod}
                  />
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border p-6 sticky top-4">
                  <h2 className="font-display text-2xl mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex gap-3">
                        <div className="w-16 h-16 flex-shrink-0 overflow-hidden">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Qty: {item.quantity}
                          </p>
                          <p className="text-sm">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 border-t border-border pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>
                        {shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax (8%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between font-display text-xl">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {shippingCost === 0 && (
                    <p className="text-xs text-primary mt-2">
                      ✓ Free shipping on orders over $500
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full btn-submit mt-6"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Place Order"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
