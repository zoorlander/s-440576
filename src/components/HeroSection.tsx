import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* RED Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-rose-50/30 to-pink-50/40 pointer-events-none" />
      
      {/* RED Fibonacci Spiral Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="animate-spin-slow">
          <path 
            d="M500,500 Q400,300 200,400 Q100,600 300,700 Q700,800 800,600 Q900,200 600,100 Q100,0 0,300 Q-200,900 400,1000" 
            stroke="url(#redGradient)" 
            strokeWidth="3" 
            fill="none"
            className="opacity-50"
          />
          <defs>
            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f87171" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* RED Rectangle Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-8 grid-rows-5 w-full h-full">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="border border-red-400/30" />
          ))}
        </div>
      </div>
      
      <div className="animate-fade-up space-y-8 relative z-10">
        {/* Large Company Name with RED Gradient */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-red-600 via-rose-500 to-pink-600 bg-clip-text text-transparent mb-4">
          Fibo
        </h1>
        
        {/* RED Tagline */}
        <p className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-red-700 to-rose-600 bg-clip-text text-transparent mb-8">
          Mastering creativity, delivering results
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Revolutionary AI tools that help designers create with mathematical precision 
          and creative freedom, inspired by the golden ratio
        </p>
        
        {/* RED CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button 
            size="lg" 
            className="text-lg px-8 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join Beta Testing
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 border-red-300 text-red-700 hover:bg-red-50 transform hover:scale-105 transition-all duration-300"
          >
            Get Early Access
          </Button>
        </div>
      </div>

      {/* Floating RED Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 opacity-30 animate-float">
        <div className="w-full h-full bg-gradient-to-br from-red-400 to-rose-400 transform rotate-45"></div>
      </div>
      <div className="absolute bottom-32 right-20 w-12 h-12 opacity-30 animate-float-delayed">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-red-400 rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 opacity-30 animate-pulse">
        <div className="w-full h-full bg-gradient-to-br from-rose-400 to-red-500 transform rotate-12"></div>
      </div>
    </section>
  );
};
