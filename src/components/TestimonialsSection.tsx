const testimonials = [
  {
    name: "Maria R.",
    location: "Hialeah, FL",
    type: "Short Sale",
    text: "I got a letter saying my home would be sold in 30 days. I thought it was over. Vonkam reached out, explained what the letter actually meant, and we closed a short sale before the auction.",
  },
  {
    name: "David M.",
    location: "Miami Gardens, FL",
    type: "Probate",
    text: "My father passed and left a home I didn't know was in foreclosure. Vonkam's system found the case before the sale date and connected me with the right people to stop it.",
  },
  {
    name: "Carlos P.",
    location: "Miramar, FL",
    type: "Loan Mod",
    text: "I was three months behind and terrified to open mail. The monitoring alert told me exactly where things stood. Once I saw the timeline clearly, I stopped panicking and we put together a plan.",
  },
];

const TestimonialsSection = () => (
  <section id="about" className="py-20 bg-navy">
    <div className="section-container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          Real Stories From Homeowners We've Helped
        </h2>
        <p className="text-gray-400 font-body max-w-2xl mx-auto">
          These are real situations from South Florida homeowners who found options they didn't know they had.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-navy-light border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-300 font-body text-sm leading-relaxed mb-6 italic">
              "{t.text}"
            </p>
            <div>
              <p className="text-white font-semibold font-body text-sm">{t.name}</p>
              <p className="text-gray-500 font-body text-xs">{t.location} · {t.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
