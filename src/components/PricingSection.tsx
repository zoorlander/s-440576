
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams",
    features: ["5 Team Members", "Basic Automation", "1,000 Tasks/month", "Email Support"],
  },
  {
    name: "Professional",
    price: "$99",
    description: "For growing businesses",
    features: ["Unlimited Team Members", "Advanced Automation", "10,000 Tasks/month", "Priority Support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: ["Unlimited Everything", "Custom Integrations", "Dedicated Support", "SLA Guarantee"],
  },
];

export const PricingSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 hover-grow ${
                plan.popular
                  ? "border-2 border-violet-500 shadow-lg relative"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <div className="text-2xl font-bold mb-2">{plan.name}</div>
              <div className="text-4xl font-bold mb-4">{plan.price}</div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <Button
                className="w-full mb-8"
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
