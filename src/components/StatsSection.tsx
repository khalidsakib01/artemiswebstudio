const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "5+", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

const StatsSection = () => (
  <section className="py-20 border-y border-border/50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold gradient-text">{stat.value}</div>
            <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
