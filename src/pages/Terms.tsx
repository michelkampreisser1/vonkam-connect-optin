import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <main className="section-container py-24 max-w-3xl">
        <Link to="/" className="text-sm text-primary hover:underline mb-8 inline-block font-body">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-muted-foreground font-body mb-10">Last Updated: March 2025</p>

        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed font-body">
          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Acceptance of Terms</h2>
            <p>By accessing or using the Vonkam Technologies website and services, you agree to be bound by these Terms &amp; Conditions.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Services Description</h2>
            <p>Vonkam Technologies provides property case monitoring and advisory services for homeowners in Miami-Dade and Broward County, Florida. We monitor public foreclosure and property records and provide informational advisory services.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Not Legal Advice</h2>
            <p>Vonkam Technologies is not a law firm. Nothing on this website or in our communications constitutes legal advice. We strongly recommend consulting a licensed Florida attorney for advice specific to your legal situation.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Not a Real Estate Brokerage</h2>
            <p>Vonkam Technologies is not a licensed real estate brokerage. Our advisory services are informational in nature.</p>
          </section>

          <section className="bg-card border border-primary/20 rounded-2xl p-6">
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">SMS Terms</h2>
            <p>
              By consenting to SMS communications, you agree to receive text messages from Vonkam Technologies regarding your property inquiry. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for assistance. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Limitation of Liability</h2>
            <p>Vonkam Technologies shall not be liable for any damages arising from your use of our services or reliance on information provided through our platform.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Florida.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Contact</h2>
            <p>Vonkam Technologies LLC<br />Miami-Dade County, Florida<br />Email: legal@vonkam.com</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Terms;
