import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle, Mail, Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";
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
  paymentMethod: string;
  customerEmail: string;
  customerName: string;
  shippingAddress: string;
}

const paymentInstructions: Record<string, { handle: string; method: string }> = {
  paypal: { handle: "uptownupholstery@paypal.com", method: "PayPal" },
  cashapp: { handle: "$UptownUpholstery", method: "Cash App" },
  zelle: { handle: "uptownupholstery@zelle.com", method: "Zelle" },
  venmo: { handle: "@UptownUpholstery", method: "Venmo" },
};

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

  const payment = paymentInstructions[orderData.paymentMethod] || paymentInstructions.paypal;

  const generateEmailBody = () => {
    const itemsList = orderData.items
      .map((item) => `- ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join("\n");

    return `
NEW ORDER - ${orderData.orderNumber}

Customer Information:
Name: ${orderData.customerName}
Email: ${orderData.customerEmail}

Shipping Address:
${orderData.shippingAddress}

Order Details:
${itemsList}

Subtotal: $${orderData.subtotal.toFixed(2)}
Shipping: ${orderData.shipping === 0 ? "FREE" : `$${orderData.shipping.toFixed(2)}`}
Tax (8%): $${orderData.tax.toFixed(2)}
Total: $${orderData.total.toFixed(2)}

Payment Method: ${payment.method}
Payment Handle: ${payment.handle}

Status: Awaiting Payment

---
UPTOWN UPHOLSTERY
Eugene, WA, US
+1 (571) 563-7724
    `.trim();
  };

  const emailSubject = `New Order: ${orderData.orderNumber} - $${orderData.total.toFixed(2)}`;
  const emailBody = generateEmailBody();
  const mailtoLink = `mailto:uphosteryuptown@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const copyOrderDetails = () => {
    navigator.clipboard.writeText(emailBody);
    toast.success("Order details copied to clipboard!");
  };

  const openEmailClient = () => {
    window.location.href = mailtoLink;
    toast.info("Opening your email client...");
  };

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
              Thank you for your order. Please complete payment to process your order.
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

          {/* Payment Instructions */}
          <div className="bg-brand-green/10 border-2 border-brand-green p-6 mb-8">
            <h2 className="font-display text-2xl mb-4 text-brand-green">Complete Your Payment</h2>
            <p className="mb-4">
              Your order will be processed once we receive your payment. Please send{" "}
              <strong className="text-brand-green">${orderData.total.toFixed(2)}</strong> using{" "}
              <strong>{payment.method}</strong>:
            </p>
            <div className="bg-card border border-border p-4 mb-4">
              <p className="text-sm text-muted-foreground mb-1">Send payment to:</p>
              <p className="font-display text-xl">{payment.handle}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> Include your order number <strong>{orderData.orderNumber}</strong> in the
              payment notes/description.
            </p>
          </div>

          {/* Send Order Email */}
          <div className="bg-card border border-border p-6 mb-8">
            <h3 className="font-display text-xl mb-4">Send Order to Business</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Click below to send your order details to our business email. This ensures we have all the information to
              process your order quickly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={openEmailClient} className="flex-1 gap-2">
                <Mail className="w-4 h-4" />
                Send Order Email
                <ExternalLink className="w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={copyOrderDetails} className="flex-1 gap-2">
                <Copy className="w-4 h-4" />
                Copy Order Details
              </Button>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-secondary p-6 mb-8">
            <h3 className="font-display text-xl mb-4">What Happens Next?</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Send the payment amount using your selected payment method</li>
              <li>Include your order number in the payment notes</li>
              <li>Click "Send Order Email" above to notify us of your order</li>
              <li>We'll confirm your payment and begin processing your order</li>
              <li>You'll receive shipping confirmation with tracking details</li>
            </ol>
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
