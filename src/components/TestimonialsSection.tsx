
import { Card } from "./ui/card";

const testimonials = [
  {
    quote: "This platform has completely transformed how we handle our business processes. The automation capabilities are incredible.",
    author: "Sarah Johnson",
    role: "CEO at TechFlow",
  },
  {
    quote: "The ease of use and powerful features make this a game-changer for our team. Customer support is exceptional.",
    author: "Michael Chen",
    role: "CTO at InnovateX",
  },
  {
    quote: "We've seen a 40% increase in productivity since implementing this solution. It's been a fantastic investment.",
    author: "Emma Davis",
    role: "Operations Director at Scale Co",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Teams</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover-grow glass-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <blockquote className="text-lg mb-6">{testimonial.quote}</blockquote>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
