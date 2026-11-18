import { Cpu, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono text-primary font-semibold tracking-widest uppercase mb-3 block">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-6">
              About Vonkam Technologies LLC
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vonkam Technologies LLC develops automated systems that monitor public property and foreclosure records. Our platform detects relevant case activity and helps notify homeowners so they can stay informed about their situation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our goal is to provide homeowners with awareness and information about their property cases through reliable, technology-driven monitoring.
            </p>
            <p className="text-xs text-muted-foreground italic border-l-2 border-primary/30 pl-4">
              Vonkam Technologies LLC does not provide legal advice and encourages homeowners to consult legal professionals regarding their situation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-2xl p-6 text-center glow-border">
              <Cpu className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading text-sm font-bold text-foreground mb-1">Automated Systems</h3>
              <p className="text-xs text-muted-foreground">AI-powered scanning of public records databases</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center glow-border">
              <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading text-sm font-bold text-foreground mb-1">Trusted Data</h3>
              <p className="text-xs text-muted-foreground">Built on official public record sources</p>
            </div>
            <div className="col-span-2 bg-card border border-border rounded-2xl p-6 text-center glow-border">
              <p className="text-sm text-muted-foreground">90 Southwest 3rd Street, Suite 4103, Miami, FL 33130<br /><a href="mailto:michelkam1@hotmail.com" className="text-primary underline">michelkam1@hotmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
