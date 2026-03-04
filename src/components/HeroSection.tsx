import heroImg from "@/assets/hero-neighborhood.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Suburban neighborhood aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero/80" />
      </div>

      <div className="relative section-container py-20 lg:py-32 text-primary-foreground">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Helping Homeowners Stay Informed About Their Property Cases
          </h1>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-8">
            Vonkam Technologies monitors public foreclosure and property records to help homeowners stay aware of case activity and understand their available options.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-foreground text-primary font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-base"
          >
            Check Your Property Status
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
