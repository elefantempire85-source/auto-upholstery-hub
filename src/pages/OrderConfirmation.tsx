import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import CategoryBar from "@/components/CategoryBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface OrderData {
  orderNumber: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  customerEmail: string;
  customerName: string;
  shippingAddress: string;
}

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const data = location.state as OrderData | undefined;
    if (!data) {
      navigate("/");
      return;
    }
    setOrderData(data);
  }, [location.state, navigate]);

  if (!orderData) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Header />
      <CategoryBar />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <CheckCircle className="w-20 h-20 text-brand-green mx-auto mb-6" />
            <h1 className="font-display text-4xl md:text-5xl mb-4">Order Placed!</h1>
            <p className="text-muted-foreground text-lg">
              Your order has been successfully placed and you will receive further instructions through email.
            </p>
          </div>

          <div className="bg-card border border-border p-6 mb-8">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-border">
              <div>
                <p className="text-sm text-muted-foreground">Order Number</p>
                <p className="font-display text-2xl">{orderData.orderNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="font-display text-2xl text-brand-green">${orderData.total.toFixed(2)}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <h3 className="font-display text-lg">Order Items</h3>
              {orderData.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t border-border pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${orderData.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{orderData.shipping === 0 ? "FREE" : `$${orderData.shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (8%)</span>
                  <span>${orderData.tax.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" onClick={() => navigate("/shop")} className="mr-4">
              Continue Shopping
            </Button>
            <Button onClick={() => navigate("/")}>Return Home</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
