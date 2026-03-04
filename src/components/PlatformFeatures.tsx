import { Database, Bell, BarChart3, Shield, Monitor } from "lucide-react";

const features = [
  { icon: Database, title: "Automated Record Monitoring", desc: "Continuously scans public foreclosure and property records from official sources." },
  { icon: BarChart3, title: "Case Activity Tracking", desc: "Tracks filings, updates, and activity related to individual property cases." },
  { icon: Monitor, title: "Property Record Updates", desc: "Detects new entries and changes in public property record databases." },
  { icon: Bell, title: "Notification System", desc: "Sends timely alerts to homeowners when relevant case activity is detected." },
  { icon: Shield, title: "Data-Driven Insights", desc: "Provides information to help homeowners stay informed about their situation." },
];

const PlatformFeatures = () => {
  return (
    <section id="platform" className="py-24 bg-hero tech-grid relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-glow/5 rounded-full blur-[100px]" />

      <div className="relative section-container">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary font-semibold tracking-widest uppercase mb-3 block">
            Platform
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-hero-foreground mb-4">
            Platform Capabilities
          </h2>
          <p className="text-hero-muted max-w-xl mx-auto">
            Technology-powered tools designed to keep homeowners informed and aware.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-hero-foreground/5 border border-hero-foreground/10 rounded-2xl p-7 hover:bg-hero-foreground/[0.07] hover:border-primary/30 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-base font-bold text-hero-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-hero-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
