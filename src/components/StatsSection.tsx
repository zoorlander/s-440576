
const stats = [
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" },
  { number: "50k+", label: "Users" },
  { number: "100+", label: "Integrations" },
];

export const StatsSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
