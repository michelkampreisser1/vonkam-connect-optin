import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="section-container py-16 max-w-3xl">
        <Link to="/" className="text-sm text-primary hover:underline mb-6 inline-block">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">Privacy Policy</h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">What Information We Collect</h2>
            <p>We collect information you provide directly to us, including your full name, property address, email address, and phone number when you submit an inquiry through our website. We may also collect usage data automatically through cookies and similar technologies.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Monitor public property records related to your inquiry</li>
              <li>Send you notifications about case activity affecting your property</li>
              <li>Respond to your requests and provide customer support</li>
              <li>Improve our services and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Phone Number Usage</h2>
            <p>Your phone number is collected solely for the purpose of sending SMS notifications regarding your property inquiry or case updates. We will only send messages to you if you have explicitly opted in to receive SMS communications from Vonkam Technologies.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">SMS Communication</h2>
            <p>If you opt in to SMS notifications, you may receive text messages regarding updates about your property case, relevant filings, or general information related to your inquiry. Message frequency varies. Message and data rates may apply. You may opt out at any time by replying STOP. Reply HELP for assistance.</p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Data Protection</h2>
            <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Third-Party Sharing — Mobile Information</h2>
            <p className="font-medium text-foreground">
              Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. All categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-heading font-semibold text-foreground mb-3">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us through our website or email us at privacy@vonkam.com.</p>
          </section>

          <p className="text-xs italic">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
