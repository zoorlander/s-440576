
import { Check, Zap, Shield, BarChart } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process automation that runs at incredible speeds, saving you precious time.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security measures to protect your sensitive data.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain deep insights into your operations with our powerful analytics tools.",
  },
  {
    icon: Check,
    title: "Easy Integration",
    description: "Seamlessly connects with your existing tools and workflows.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Features Built for Scale
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage and automate your business processes efficiently
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover-grow glass-card">
              <feature.icon className="h-12 w-12 mb-4 text-violet-500" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
