import { Card } from "./ui/card";

const products = [
  {
    title: "Brand DNA AI",
    description: "Automated brand identity creation from simple briefs using mathematical design principles and golden ratio aesthetics.",
    customIcon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
        <path d="M19 15L19.78 17.39L22 18L19.78 18.61L19 21L18.22 18.61L16 18L18.22 17.39L19 15Z" />
        <circle cx="7" cy="19" r="2" />
      </svg>
    ),
  },
  {
    title: "Design Critique Bot",
    description: "AI feedback system providing professional design improvements and suggestions based on proven design principles.",
    customIcon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
  },
  {
    title: "AI Design Assistant",
    description: "Intelligent companion for layout creation and design decisions based on golden ratio principles and natural aesthetics.",
    customIcon: (
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        <circle cx="12" cy="6.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-amber-50/30 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-12 grid-rows-8 w-full h-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-amber-200/20" />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Our AI Products
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Cutting-edge artificial intelligence tools designed with mathematical precision 
            to enhance creativity and streamline the design process
          </p>
        </div>

        {/* 3 Products in a Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group p-8 hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-amber-200/50 hover:border-amber-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {product.customIcon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent group-hover:from-amber-800 group-hover:to-orange-700 transition-all">
                {product.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Key Benefits Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-amber-200/50">
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
            Why Choose Fibo AI?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">70% Faster</h4>
              <p className="text-gray-600 text-sm">
                Save time on repetitive design tasks with intelligent automation
              </p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">Professional Quality</h4>
              <p className="text-gray-600 text-sm">
                Mathematical precision ensures consistently excellent results
              </p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">Intuitive Interface</h4>
              <p className="text-gray-600 text-sm">
                No AI expertise required - simple tools for complex results
              </p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,18.5C16.14,18.5 19.5,15.14 19.5,11C19.5,6.86 16.14,3.5 12,3.5C7.86,3.5 4.5,6.86 4.5,11C4.5,15.14 7.86,18.5 12,18.5M12,2A9,9 0 0,1 21,11C21,16.04 16.94,20.06 12,20.06C7.06,20.06 3,16.04 3,11A9,9 0 0,1 12,2M12,6A5,5 0 0,1 17,11A5,5 0 0,1 12,16A5,5 0 0,1 7,11A5,5 0 0,1 12,6M12,8A3,3 0 0,0 9,11A3,3 0 0,0 12,14A3,3 0 0,0 15,11A3,3 0 0,0 12,8Z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">Always Learning</h4>
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
