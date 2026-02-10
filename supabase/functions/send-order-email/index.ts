import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const paymentInstructions: Record<string, { handle: string; method: string }> = {
  paypal: { handle: "uptownupholstery@paypal.com", method: "PayPal" },
  cashapp: { handle: "$UptownUpholstery", method: "Cash App" },
  zelle: { handle: "uptownupholstery@zelle.com", method: "Zelle" },
  venmo: { handle: "@UptownUpholstery", method: "Venmo" },
};

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderRequest {
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  paymentMethod: string;
  customerEmail: string;
  customerName: string;
  shippingAddress: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const order: OrderRequest = await req.json();
    const payment = paymentInstructions[order.paymentMethod] || paymentInstructions.paypal;

    const itemsHtml = order.items
      .map(
        (item) => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.name}</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
          <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">$${(item.price * item.quantity).toFixed(2)}</td>
        </tr>`
      )
      .join("");

    // Email to customer with payment instructions
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #1a1a1a; padding: 20px; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 24px;">UPTOWN UPHOLSTERY</h1>
          <p style="color: #4ade80; margin: 5px 0 0;">Order Confirmation</p>
        </div>
        
        <div style="padding: 30px 20px;">
          <p>Hi ${order.customerName},</p>
          <p>Thank you for your order! Here are your order details and payment instructions.</p>
          
          <div style="background: #f9f9f9; padding: 15px; margin: 20px 0; border-left: 4px solid #4ade80;">
            <p style="margin: 0;"><strong>Order Number:</strong> ${order.orderNumber}</p>
            <p style="margin: 5px 0 0;"><strong>Total:</strong> $${order.total.toFixed(2)}</p>
          </div>

          <h3>Order Items</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f0f0f0;">
                <th style="padding: 8px; text-align: left;">Item</th>
                <th style="padding: 8px; text-align: center;">Qty</th>
                <th style="padding: 8px; text-align: right;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
          
          <div style="margin-top: 15px; text-align: right;">
            <p style="margin: 3px 0;">Subtotal: $${order.subtotal.toFixed(2)}</p>
            <p style="margin: 3px 0;">Shipping: ${order.shipping === 0 ? "FREE" : `$${order.shipping.toFixed(2)}`}</p>
            <p style="margin: 3px 0;">Tax (8%): $${order.tax.toFixed(2)}</p>
            <p style="margin: 3px 0; font-size: 18px;"><strong>Total: $${order.total.toFixed(2)}</strong></p>
          </div>

          <div style="background: #f0fdf4; border: 2px solid #4ade80; padding: 20px; margin: 25px 0; border-radius: 8px;">
            <h3 style="color: #16a34a; margin-top: 0;">💳 Payment Instructions</h3>
            <p>Please send <strong>$${order.total.toFixed(2)}</strong> via <strong>${payment.method}</strong> to:</p>
            <div style="background: #fff; padding: 12px; border: 1px solid #ddd; border-radius: 4px; text-align: center; font-size: 20px; font-weight: bold;">
              ${payment.handle}
            </div>
            <p style="margin-top: 15px; font-size: 14px; color: #666;">
              <strong>Important:</strong> Include your order number <strong>${order.orderNumber}</strong> in the payment notes.
            </p>
          </div>

          <h3>Shipping Address</h3>
          <p>${order.shippingAddress}</p>

          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            If you have questions, contact us at <a href="mailto:uphosteryuptown@gmail.com">uphosteryuptown@gmail.com</a> or call +1 (571) 563-7724.
          </p>
        </div>
        
        <div style="background: #1a1a1a; padding: 15px; text-align: center; color: #999; font-size: 12px;">
          <p style="margin: 0;">UPTOWN UPHOLSTERY • Eugene, WA, US</p>
        </div>
      </div>
    `;

    // Email to business with order notification
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #1a1a1a; padding: 20px; text-align: center;">
          <h1 style="color: #fff; margin: 0;">🛒 NEW ORDER</h1>
          <p style="color: #4ade80; margin: 5px 0 0; font-size: 20px;">${order.orderNumber}</p>
        </div>
        
        <div style="padding: 20px;">
          <div style="background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 18px;"><strong>Total: $${order.total.toFixed(2)}</strong></p>
            <p style="margin: 5px 0 0;">Payment: ${payment.method} → ${payment.handle}</p>
            <p style="margin: 5px 0 0; color: #b45309;"><strong>Status: Awaiting Payment</strong></p>
          </div>

          <h3>Customer</h3>
          <p>Name: ${order.customerName}<br>Email: <a href="mailto:${order.customerEmail}">${order.customerEmail}</a></p>

          <h3>Shipping Address</h3>
          <p>${order.shippingAddress}</p>

          <h3>Items</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f0f0f0;">
                <th style="padding: 8px; text-align: left;">Item</th>
                <th style="padding: 8px; text-align: center;">Qty</th>
                <th style="padding: 8px; text-align: right;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
              <tr style="font-weight: bold;">
                <td colspan="2" style="padding: 8px; text-align: right;">Total:</td>
                <td style="padding: 8px; text-align: right;">$${order.total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;

    // Send both emails in parallel
    const [customerResult, businessResult] = await Promise.all([
      resend.emails.send({
        from: "Uptown Upholstery <onboarding@resend.dev>",
        to: [order.customerEmail],
        subject: `Order Confirmation - ${order.orderNumber}`,
        html: customerEmailHtml,
      }),
      resend.emails.send({
        from: "Uptown Upholstery <onboarding@resend.dev>",
        to: ["uphosteryuptown@gmail.com"],
        subject: `New Order: ${order.orderNumber} - $${order.total.toFixed(2)} - ${order.customerName}`,
        html: businessEmailHtml,
      }),
    ]);

    console.log("Customer email:", customerResult);
    console.log("Business email:", businessResult);

    return new Response(
      JSON.stringify({ success: true, customerEmail: customerResult, businessEmail: businessResult }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error sending order emails:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
