import { Palette, Layout, Zap, Brain, Sparkles } from "lucide-react";
import { Card } from "./ui/card";

const products = [
  {
    icon: Brain,
    title: "AI Design Assistant",
    description: "Intelligent companion for layout creation and design decisions based on golden ratio principles.",
  },
  {
    icon: Palette,
    title: "Smart Color Harmony",
    description: "AI-powered color palette generator using psychology, trends, and mathematical color theory.",
  },
  {
    icon: Layout,
    title: "Layout Intelligence",
    description: "Machine learning-driven composition optimization following natural proportions.",
  },
  {
    icon: Sparkles,
    title: "Brand DNA AI",
    description: "Automated brand identity creation from simple briefs using mathematical design principles.",
  },
  {
    icon: Zap,
    title: "Design Critique Bot",
    description: "AI feedback system providing professional design improvements and suggestions.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-amber-50/30 to-orange-50/20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-8 w-full h-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-amber-300/30" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Our AI Products
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Cutting-edge artificial intelligence tools designed with mathematical precision 
            to enhance creativity and streamline the design process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group p-8 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border-amber-200/50 hover:border-amber-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <product.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-amber-700 transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Key Benefits Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-amber-200/50">
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
            Why Choose Fibo AI?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold mb-2 text-gray-800">70% Faster</h4>
              <p className="text-gray-600 text-sm">
                Save time on repetitive design tasks with intelligent automation
              </p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold mb-2 text-gray-800">Professional Quality</h4>
              <p className="text-gray-600 text-sm">
                Mathematical precision ensures consistently excellent results
              </p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold mb-2 text-gray-800">Intuitive Interface</h4>
              <p className="text-gray-600 text-sm">
                No AI expertise required - simple tools for complex results
              </p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Layout className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold mb-2 text-gray-800">Always Learning</h4>
              <p className="text-gray-600 text-sm">
                Algorithms continuously improve with each design interaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
