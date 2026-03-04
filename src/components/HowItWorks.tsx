import { Search, Bell, FileText, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Monitor",
    description: "Our system monitors public foreclosure and property case filings.",
  },
  {
    icon: Bell,
    title: "Detect",
    description: "When activity related to your property appears, our system detects it.",
  },
  {
    icon: FileText,
    title: "Notify",
    description: "Homeowners can receive notifications and updates regarding their case.",
  },
  {
    icon: Lightbulb,
    title: "Inform",
    description: "We help explain potential options available to homeowners.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="section-container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            How Our System Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A simple, transparent process to help you stay on top of your property case.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-background rounded-xl p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 block">
                Step {i + 1}
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
