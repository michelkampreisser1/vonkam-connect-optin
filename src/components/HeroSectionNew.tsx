const timelineSteps = [
  { title: "Missed Payment", time: "Month 1-3", badge: "Options Wide Open", color: "bg-green-500" },
  { title: "Notice of Default", time: "90-120 Days", badge: "Act This Week", color: "bg-accent" },
  { title: "Foreclosure Lawsuit Filed", time: "Court Filing", badge: "Short Sale Window", color: "bg-accent" },
  { title: "Auction / Sale Date Set", time: "20+ Days Notice", badge: "Critical - Act Now", color: "bg-destructive" },
];

const HeroSectionNew = () => (
  <section className="bg-navy text-white py-20 lg:py-28">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <span className="inline-block bg-destructive/20 text-red-400 text-xs font-semibold font-body px-3 py-1 rounded-full mb-6 border border-red-500/30">
            Urgent Homeowner Advisory
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold leading-tight mb-6">
            You Have More Options Than You Think.{" "}
            <span className="text-primary">We'll Help You See Them.</span>
          </h1>
          <p className="text-lg text-gray-300 font-body leading-relaxed mb-8 max-w-xl">
            Vonkam monitors public property records and foreclosure filings across South Florida. When we detect a case tied to your property, we reach out — not to sell you something, but to show you what options you may still have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#get-help"
              className="inline-flex items-center justify-center bg-destructive text-destructive-foreground font-semibold px-7 py-3.5 rounded-lg hover:bg-destructive/90 transition-all text-base"
            >
              Check My Property Status Now
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center border border-gray-500 text-gray-300 font-medium px-7 py-3.5 rounded-lg hover:bg-white/5 transition-all text-base"
            >
              See How It Works
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 font-body">
            <span className="flex items-center gap-2">✅ Free property check</span>
            <span className="flex items-center gap-2">✅ No legal fees to start</span>
            <span className="flex items-center gap-2">✅ Miami-Dade &amp; Broward</span>
          </div>
        </div>

        {/* Right - Timeline Card */}
        <div className="bg-navy-light border border-gray-700 rounded-2xl p-6 lg:p-8">
          <h3 className="font-heading text-xl font-bold mb-6 text-white">
            Florida Foreclosure Timeline
          </h3>
          <div className="space-y-5">
            {timelineSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-3.5 h-3.5 rounded-full ${step.color} shrink-0 mt-1`} />
                  {i < timelineSteps.length - 1 && <div className="w-px h-10 bg-gray-600 mt-1" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-semibold text-white font-body text-sm">{step.title}</p>
                      <p className="text-xs text-gray-400 font-body">{step.time}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${step.color} text-white`}>
                      {step.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSectionNew;
