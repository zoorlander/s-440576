
import { Card } from "./ui/card";

const testimonials = [
  {
    quote: "Managing international payroll used to be a nightmare. Now it's just a few clicks and everyone gets paid on time, every time.",
    author: "Sarah Johnson",
    role: "HR Director at GlobalTech",
  },
  {
    quote: "The cost savings are incredible. We're saving thousands every month compared to our previous payroll provider.",
    author: "Michael Chen",
    role: "CFO at ScaleUp Inc",
  },
  {
    quote: "The compliance documentation and support have made expanding to new countries so much easier.",
    author: "Emma Davis",
    role: "Operations Manager at RemoteFirst",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Global Teams</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See why companies choose us for their international payroll needs
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
