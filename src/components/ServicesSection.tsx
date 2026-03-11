import { Check } from "lucide-react";

const checklist = [
  "Lender negotiation on your behalf",
  "Deficiency waiver pursuit",
  "Credit impact minimization",
  "Relocation assistance coordination",
  "Avg 60-90 day resolution",
];

const smallCards = [
  { emoji: "📡", title: "24/7 Case Monitoring", desc: "Automated scanning of public court records, lis pendens filings, and auction schedules across Miami-Dade and Broward County." },
  { emoji: "⚖️", title: "Probate & Inherited Property", desc: "Navigate the intersection of probate court and mortgage obligations. We help heirs understand timelines and options." },
  { emoji: "🤝", title: "Deed-in-Lieu Guidance", desc: "When a short sale isn't possible, a deed-in-lieu may let you surrender the property and avoid foreclosure on your record." },
  { emoji: "📋", title: "Foreclosure Defense Referral", desc: "For cases that require legal intervention, we connect you with trusted attorneys in Miami-Dade and Broward." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-background">
    <div className="section-container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          We Don't Just Monitor — We Help You Resolve.
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto">
          From detection to resolution, Vonkam provides end-to-end support for homeowners facing foreclosure.
        </p>
      </div>

      {/* Featured Card */}
      <div className="bg-navy text-white rounded-2xl p-8 lg:p-10 mb-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Most Requested
            </span>
            <h3 className="font-heading text-2xl font-bold mb-4">Short Sale Advisory</h3>
            <p className="text-gray-300 font-body leading-relaxed">
              A short sale lets you sell your home for less than the mortgage balance — with the lender's approval. We work directly with the loss mitigation department to negotiate terms, pursue deficiency waivers, and minimize credit damage.
            </p>
          </div>
          <div>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-200 font-body">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Smaller Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {smallCards.map((c) => (
          <div key={c.title} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">{c.emoji}</div>
            <h3 className="font-heading text-base font-bold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
