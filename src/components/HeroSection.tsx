import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Light Golden Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-yellow-50/70 pointer-events-none" />
      
      {/* Fibonacci Spiral Background */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="animate-spin-slow">
          <path 
            d="M500,500 Q400,300 200,400 Q100,600 300,700 Q700,800 800,600 Q900,200 600,100 Q100,0 0,300 Q-200,900 400,1000" 
            stroke="url(#goldGradient)" 
            strokeWidth="2" 
            fill="none"
            className="opacity-20"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Golden Rectangle Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-8 grid-rows-5 w-full h-full">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="border border-amber-300/20" />
          ))}
        </div>
      </div>
      
      <div className="animate-fade-up space-y-8 relative z-10">
        {/* Large Company Name with Beautiful Gradient */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent mb-4 drop-shadow-sm">
          Fibo
        </h1>
        
        {/* Tagline with gradient */}
        <p className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-700 bg-clip-text text-transparent mb-8">
          Mastering creativity, delivering results
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Revolutionary AI tools that help designers create with mathematical precision 
          and creative freedom, inspired by the golden ratio
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button 
            size="lg" 
            className="text-lg px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white"
          >
            Join Beta Testing
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 border-amber-300 text-amber-700 hover:bg-amber-50 transform hover:scale-105 transition-all duration-300"
          >
            Get Early Access
          </Button>
        </div>
      </div>

      {/* Floating Golden Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 opacity-20 animate-float">
        <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-400 transform rotate-45 rounded-lg"></div>
      </div>
      <div className="absolute bottom-32 right-20 w-12 h-12 opacity-20 animate-float-delayed">
        <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 opacity-20 animate-pulse">
        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-amber-500 transform rotate-12 rounded"></div>
      </div>
    </section>
  );
};
