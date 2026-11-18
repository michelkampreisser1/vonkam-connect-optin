const HeroSection = () => {
  return (
    <section className="relative bg-hero tech-grid overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-glow/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative section-container py-24 lg:py-36">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-hero-foreground/5 border border-hero-foreground/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-mono text-hero-muted tracking-wide">PROPERTY MONITORING PLATFORM</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-hero-foreground leading-[1.1] mb-6">
            Technology That Helps Homeowners Stay{" "}
            <span className="gradient-text">Informed</span> About Their Property Cases
          </h1>

          <p className="text-lg md:text-xl text-hero-muted leading-relaxed mb-10 max-w-2xl">
            Vonkam Technologies LLC uses automated data monitoring systems to track public foreclosure and property records and notify homeowners when important case activity occurs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
            >
              Check Your Property Status
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center border border-hero-foreground/20 text-hero-foreground font-medium px-8 py-4 rounded-xl hover:bg-hero-foreground/5 transition-colors text-base"
            >
              Learn How Our System Works
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-hero-foreground/10 pt-10">
          {[
            { value: "24/7", label: "Automated Monitoring" },
            { value: "Real-time", label: "Case Detection" },
            { value: "Instant", label: "Notifications" },
            { value: "Public", label: "Record Sources" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-hero-foreground font-mono">{s.value}</div>
              <div className="text-sm text-hero-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
