import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="section-container py-20 max-w-3xl">
        <Link to="/" className="text-sm text-primary hover:underline mb-8 inline-block">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-10">Terms &amp; Conditions</h1>

        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Agreement to Terms</h2>
            <p>By accessing or using the Vonkam Technologies website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Services Description</h2>
            <p>Vonkam Technologies provides a data monitoring platform that tracks public foreclosure and property case filings. Our services are intended to help homeowners stay informed about legal activity affecting their property. Vonkam Technologies does not provide legal advice.</p>
          </section>

          <section className="bg-card border border-primary/20 rounded-2xl p-6 glow-border">
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">SMS Messaging Terms</h2>
            <p className="mb-3">By submitting your phone number through the Vonkam Technologies website, you agree to receive SMS messages related to your property inquiry or case updates.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Message frequency varies</strong> based on case activity and updates.</li>
              <li><strong className="text-foreground">Message and data rates may apply.</strong> Contact your wireless carrier for details.</li>
              <li><strong className="text-foreground">Reply STOP</strong> to any message to unsubscribe at any time.</li>
              <li><strong className="text-foreground">Reply HELP</strong> to any message for assistance.</li>
            </ul>
            <p className="mt-3">Consent to receive SMS messages is not a condition of purchasing any goods or services.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">User Responsibilities</h2>
            <p>You agree to provide accurate and complete information when submitting inquiries. You are responsible for maintaining the confidentiality of any account information.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Disclaimer</h2>
            <p>Vonkam Technologies does not provide legal, financial, or professional advice. The information provided through our services is for informational purposes only. We encourage homeowners to consult with qualified professionals regarding legal matters.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Limitation of Liability</h2>
            <p>Vonkam Technologies shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or related to the use of our services.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Contact</h2>
            <p>For questions about these Terms, contact us through our website or email legal@vonkam.com.</p>
          </section>

          <p className="text-xs italic text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
