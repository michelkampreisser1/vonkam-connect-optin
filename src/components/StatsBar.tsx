const stats = [
  { value: "24/7", label: "Automated Monitoring" },
  { value: "48h", label: "Typical Response Goal" },
  { value: "Free", label: "Initial Property Check" },
];

const StatsBar = () => (
  <section className="bg-white py-12 border-y border-border">
    <div className="section-container">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl md:text-4xl font-heading font-bold text-primary">{s.value}</p>
            <p className="text-sm text-muted-foreground font-body mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
