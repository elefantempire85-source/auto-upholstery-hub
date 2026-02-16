/// <reference path="./deno.d.ts" />
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
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
  customerEmail: string;
  customerName: string;
  shippingAddress: string;
  paymentMethod?: string;
  paymentMethodLabel?: string;
  paymentInstructions?: string;
}

function jsonResponse(body: object, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const apiKey = Deno.env.get("RESEND_API_KEY");
  if (!apiKey?.trim()) {
    return jsonResponse(
      { error: "RESEND_API_KEY is not set. Add it in Supabase Edge Function secrets." },
      500
    );
  }

  const resend = new Resend(apiKey);

  const fromEmail = Deno.env.get("RESEND_FROM_EMAIL")?.trim() || "onboarding@resend.dev";
  const fromName = Deno.env.get("RESEND_FROM_NAME")?.trim() || "Uptown Upholstery";
  const from = `${fromName} <${fromEmail}>`;
  const businessTo = Deno.env.get("ORDER_NOTIFICATION_EMAIL")?.trim() || "upholsteryuptown@gmail.com";

  try {
    const order: OrderRequest = await req.json();

    if (!order.orderNumber || !order.customerEmail || !order.items?.length || order.total == null) {
      return jsonResponse(
        { error: "Invalid order: missing orderNumber, customerEmail, items, or total." },
        400
      );
    }

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

    const paymentLabel = order.paymentMethodLabel || "Payment";
    const paymentInstructions = order.paymentInstructions || "";
    const hasPaymentDetails = !!paymentInstructions.trim();

    // Send order details only to business (upholsteryuptown@gmail.com); no customer email
    const orderDetailsHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: #1a1a1a; padding: 20px; text-align: center;">
          <h1 style="color: #fff; margin: 0;">🛒 NEW ORDER</h1>
          <p style="color: #4ade80; margin: 5px 0 0; font-size: 20px;">${order.orderNumber}</p>
        </div>
        
        <div style="padding: 20px;">
          <div style="background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin-bottom: 20px;">
            <p style="margin: 0; font-size: 18px;"><strong>Total: $${order.total.toFixed(2)}</strong></p>
            <p style="margin: 5px 0 0; color: #b45309;"><strong>Payment method: ${paymentLabel}</strong></p>
            ${hasPaymentDetails ? `<p style="margin: 5px 0 0; font-size: 14px;">${paymentInstructions}</p>` : ""}
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

    const result = await resend.emails.send({
      from,
      to: [businessTo],
      subject: `New Order: ${order.orderNumber} - $${order.total.toFixed(2)} - ${order.customerName}`,
      html: orderDetailsHtml,
    });

    console.log("Order details email:", result);

    return jsonResponse({
      success: true,
      email: result,
    }, 200);
  } catch (error: any) {
    console.error("Error sending order emails:", error);
    return jsonResponse({ error: error.message }, 500);
  }
};

serve(handler);
