
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";

const features = [
  "Automated Tax Calculations",
  "Direct Bank Transfers",
  "Compliance Documentation",
  "24/7 Support",
];

export const PricingSection = () => {
  const [currency, setCurrency] = useState<"USD" | "EUR">("USD");

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Per-Person Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            One transparent price per employee. No hidden fees.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={currency === "USD" ? "default" : "outline"}
              onClick={() => setCurrency("USD")}
              className="min-w-[100px]"
            >
              USD
            </Button>
            <Button
              variant={currency === "EUR" ? "default" : "outline"}
              onClick={() => setCurrency("EUR")}
              className="min-w-[100px]"
            >
              EUR
            </Button>
          </div>
        </div>
        
        <Card className="max-w-lg mx-auto p-8 hover-grow glass-card">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">
              {currency === "USD" ? "$20" : "€12"}
            </div>
            <div className="text-gray-600 mb-6">per person, per month</div>
            <Button className="w-full mb-8" size="lg">
              Get Started
            </Button>
            <ul className="space-y-4 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <Check className="h-5 w-5 text-emerald-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
};
