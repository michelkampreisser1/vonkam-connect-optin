import { Radar, BellRing, FileSearch2, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: Radar,
    num: "01",
    title: "Continuous Scanning",
    description: "Our system continuously scans public property records and foreclosure filings across jurisdictions.",
  },
  {
    icon: FileSearch2,
    num: "02",
    title: "Activity Detection",
    description: "When a filing or update appears related to a property, our platform detects the activity automatically.",
  },
  {
    icon: BellRing,
    num: "03",
    title: "Smart Notifications",
    description: "Homeowners who request updates can receive notifications so they stay aware of changes in their case.",
  },
  {
    icon: Lightbulb,
    num: "04",
    title: "Informed Decisions",
    description: "Our platform helps homeowners understand what the activity may mean and what options may exist.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary font-semibold tracking-widest uppercase mb-3 block">
            Technology
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
            How Our Monitoring Technology Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A transparent, automated system that keeps homeowners aware of property case activity in real time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-card rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground tracking-wider">{step.num}</span>
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
