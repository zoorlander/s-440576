
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/30 to-white pointer-events-none" />
      <div className="animate-fade-up space-y-8 relative">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
          Simple Global Payroll for Modern Businesses
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Run your global payroll with ease. Pay your team in their preferred currency,
          stay compliant, and save money with our competitive rates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 hover-grow">
            Start Saving Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 hover-grow">
            Calculate Savings
          </Button>
        </div>
      </div>
    </section>
  );
};
