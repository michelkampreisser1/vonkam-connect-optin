import { Activity, Bell, FileSearch, Info } from "lucide-react";

const services = [
  { icon: FileSearch, title: "Foreclosure Case Monitoring", description: "We track public records related to foreclosure filings that may affect your property." },
  { icon: Activity, title: "Property Case Activity Alerts", description: "Get notified when new activity is detected in public records related to your property." },
  { icon: Bell, title: "Legal Filing Notifications", description: "Stay updated about legal filings that may impact your home or property situation." },
  { icon: Info, title: "General Information & Options", description: "We help explain possible options and resources available to homeowners." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Vonkam helps homeowners stay informed through public record monitoring and timely notifications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-10 max-w-2xl mx-auto italic">
          Vonkam Technologies does not provide legal advice and encourages homeowners to consult professionals regarding legal matters.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
