import { ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              About Vonkam Technologies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vonkam Technologies uses automated data systems to track public property records and foreclosure filings. When relevant activity is detected, homeowners can receive notifications so they can stay informed and better understand their situation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our goal is to help homeowners stay aware of important case activity related to their property.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vonkam Technologies is a data monitoring platform that connects homeowners with timely information. Businesses and individuals can submit their information to receive case updates, property alerts, and relevant notifications via SMS.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="bg-primary/5 rounded-2xl p-12 text-center border border-primary/10">
              <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">Trusted Monitoring</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                We use public data sources to keep you informed — no legal advice, just reliable information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
