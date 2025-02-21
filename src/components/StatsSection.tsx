
const stats = [
  { number: "100+", label: "Countries Covered" },
  { number: "1000+", label: "Regulations Managed" },
  { number: "99.9%", label: "Compliance Rate" },
  { number: "24/7", label: "Compliance Support" },
];

export const StatsSection = () => {
  return (
    <section className="py-24 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Global Compliance Made Simple</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">
            Our automated system handles all compliance requirements, letting you focus on growing your business
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-emerald-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
