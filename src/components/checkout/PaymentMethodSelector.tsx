import { useState } from "react";

export type PaymentMethod = "paypal" | "cashapp" | "zelle" | "venmo";

interface PaymentMethodSelectorProps {
  selectedMethod: PaymentMethod;
  onMethodChange: (method: PaymentMethod) => void;
}

const paymentMethods = [
  {
    id: "paypal" as PaymentMethod,
    name: "PayPal",
    icon: "💳",
    color: "bg-[#003087]",
    instructions: "Send payment to: uptownupholstery@paypal.com",
  },
  {
    id: "cashapp" as PaymentMethod,
    name: "Cash App",
    icon: "💵",
    color: "bg-[#00D632]",
    instructions: "Send payment to: $UptownUpholstery",
  },
  {
    id: "zelle" as PaymentMethod,
    name: "Zelle",
    icon: "🏦",
    color: "bg-[#6D1ED4]",
    instructions: "Send payment to: uptownupholstery@zelle.com",
  },
  {
    id: "venmo" as PaymentMethod,
    name: "Venmo",
    icon: "📱",
    color: "bg-[#3D95CE]",
    instructions: "Send payment to: @UptownUpholstery",
  },
];

const PaymentMethodSelector = ({
  selectedMethod,
  onMethodChange,
}: PaymentMethodSelectorProps) => {
  const selectedPayment = paymentMethods.find((m) => m.id === selectedMethod);

  return (
    <div className="space-y-4">
      <h3 className="font-display text-lg mb-3">Select Payment Method</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            type="button"
            onClick={() => onMethodChange(method.id)}
            className={`p-4 border-2 transition-all text-center ${
              selectedMethod === method.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <span className="text-2xl block mb-2">{method.icon}</span>
            <span className="text-sm font-medium">{method.name}</span>
          </button>
        ))}
      </div>

      {selectedPayment && (
        <div className="mt-4 p-4 bg-secondary border border-border">
          <p className="text-sm font-medium mb-2">Payment Instructions:</p>
          <p className="text-sm text-muted-foreground">
            {selectedPayment.instructions}
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            After placing your order, please send the payment using the details above. 
            Include your order number in the payment notes. Your order will be processed 
            once payment is confirmed.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethodSelector;
