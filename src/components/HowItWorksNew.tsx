const steps = [
  { num: "1", title: "Submit Your Property", desc: "Enter your address and basic info through our secure form." },
  { num: "2", title: "We Scan Public Records", desc: "Our system searches court filings, lis pendens, and public databases." },
  { num: "3", title: "You Get a Case Report", desc: "We send you a clear summary of where things stand — no jargon." },
  { num: "4", title: "You Choose Your Path", desc: "Sell to us, work with a licensed professional we introduce, or do nothing. You decide, and there is no obligation." },
];

const HowItWorksNew = () => (
  <section id="how-it-works" className="py-20 bg-secondary">
    <div className="section-container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          How It Works
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto">
          From first contact to resolution — here's what happens when you reach out to Vonkam.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connecting line - desktop only */}
        <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
        {steps.map((s) => (
          <div key={s.num} className="text-center relative">
            <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-heading font-bold mx-auto mb-5 relative z-10">
              {s.num}
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksNew;
