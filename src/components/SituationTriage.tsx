const cards = [
  {
    emoji: "🔴",
    title: "Auction Date Is Set",
    desc: "You may have days — not weeks. A short sale or deed-in-lieu may still be possible if you act right now.",
    badge: "Urgent — Days Left",
    badgeColor: "bg-destructive text-destructive-foreground",
    borderColor: "border-destructive/30",
    bgColor: "bg-red-50",
  },
  {
    emoji: "🟡",
    title: "Lawsuit Filed, No Sale Date",
    desc: "The clock is ticking, but you still have meaningful options. This is the best window for a short sale.",
    badge: "Weeks to Months",
    badgeColor: "bg-accent text-accent-foreground",
    borderColor: "border-accent/30",
    bgColor: "bg-amber-50",
  },
  {
    emoji: "🔵",
    title: "Behind on Payments, No Filing Yet",
    desc: "You have the most options available right now. Early action can prevent a filing entirely.",
    badge: "Most Options Available",
    badgeColor: "bg-primary text-primary-foreground",
    borderColor: "border-primary/30",
    bgColor: "bg-blue-50",
  },
  {
    emoji: "⚖️",
    title: "Inherited Property / Probate",
    desc: "Inherited a home with an outstanding mortgage? Probate timelines can complicate foreclosure. We help navigate both.",
    badge: "Time-Sensitive",
    badgeColor: "bg-destructive text-destructive-foreground",
    borderColor: "border-destructive/30",
    bgColor: "bg-red-50",
  },
  {
    emoji: "🏠",
    title: "Underwater Mortgage",
    desc: "Owe more than your home is worth? A short sale may let you walk away clean — before default hits your credit.",
    badge: "Act Before Default",
    badgeColor: "bg-accent text-accent-foreground",
    borderColor: "border-accent/30",
    bgColor: "bg-amber-50",
  },
  {
    emoji: "📋",
    title: "Just Received a Notice / Letter",
    desc: "Not every letter means foreclosure. We'll help you understand what it says, what stage you're actually in, and what to do next.",
    badge: "Know Before You Panic",
    badgeColor: "bg-primary text-primary-foreground",
    borderColor: "border-primary/30",
    bgColor: "bg-blue-50",
  },
];

const SituationTriage = () => (
  <section className="py-20 bg-background">
    <div className="section-container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          What's Your Situation?
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto">
          Every foreclosure case is different. Find your situation below and see what options may still be available to you.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div
            key={c.title}
            className={`${c.bgColor} border ${c.borderColor} rounded-2xl p-6 hover:shadow-lg transition-shadow`}
          >
            <div className="text-3xl mb-3">{c.emoji}</div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">{c.desc}</p>
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${c.badgeColor} mb-4`}>
              {c.badge}
            </span>
            <div>
              <a href="#get-help" className="text-sm font-semibold text-primary hover:underline font-body">
                Get help →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SituationTriage;
