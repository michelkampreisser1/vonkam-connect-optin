import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="section-container py-16 max-w-3xl">
        <Link to="/" className="text-sm text-primary hover:underline mb-6 inline-block">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">Terms &amp; Conditions</h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Agreement to Terms</h2>
            <p>By accessing or using the Vonkam Technologies website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Services Description</h2>
            <p>Vonkam Technologies provides a data monitoring platform that tracks public foreclosure and property case filings. Our services are intended to help homeowners stay informed about legal activity affecting their property. Vonkam Technologies does not provide legal advice.</p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">SMS Messaging Terms</h2>
            <p className="mb-3">By submitting your phone number through our website, you agree to receive SMS messages from Vonkam Technologies regarding your property inquiry or case updates.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Message frequency varies</strong> based on case activity and updates related to your property.</li>
              <li><strong>Message and data rates may apply.</strong> Please contact your wireless carrier for details about your messaging plan.</li>
              <li><strong>Reply STOP</strong> to any message to unsubscribe from SMS notifications at any time.</li>
              <li><strong>Reply HELP</strong> to any message for assistance or contact information.</li>
            </ul>
            <p className="mt-3">Consent to receive SMS messages is not a condition of purchasing any goods or services. You may opt out at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">User Responsibilities</h2>
            <p>You agree to provide accurate and complete information when submitting inquiries through our website. You are responsible for maintaining the confidentiality of any account information associated with our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Disclaimer</h2>
            <p>Vonkam Technologies does not provide legal, financial, or professional advice. The information provided through our services is for informational purposes only. We encourage homeowners to consult with qualified professionals regarding legal matters affecting their property.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Limitation of Liability</h2>
            <p>Vonkam Technologies shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or related to the use of our services or the information provided.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Changes to Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective when posted on this page. Your continued use of our services constitutes acceptance of updated terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Contact</h2>
            <p>For questions about these Terms and Conditions, please contact us through our website or email us at legal@vonkam.com.</p>
          </section>

          <p className="text-xs italic">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
