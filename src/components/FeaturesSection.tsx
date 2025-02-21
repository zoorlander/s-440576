
import { DollarSign, Globe, Shield, Clock } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: DollarSign,
    title: "Cost-Effective",
    description: "Just $20/€12 per person - save up to 70% compared to traditional payroll services.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Pay your team in their preferred currency, anywhere in the world.",
  },
  {
    icon: Shield,
    title: "Fully Compliant",
    description: "Stay compliant with local tax laws and regulations in all jurisdictions.",
  },
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Get started in minutes, not weeks. No complex paperwork required.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Global Payroll Made Simple
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your international team's payroll efficiently
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover-grow glass-card">
              <feature.icon className="h-12 w-12 mb-4 text-emerald-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
