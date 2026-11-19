import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNavbar />
      <main className="section-container py-24 max-w-3xl">
        <Link to="/" className="text-sm text-primary hover:underline mb-8 inline-block font-body">&larr; Back to Home</Link>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground font-body mb-10">Last Updated: March 2025</p>

        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed font-body">
          <p>
            Vonkam Technologies LLC ("Vonkam," "we," "us," or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect the information you provide through our website.
          </p>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Information We Collect</h2>
            <p>We collect information you voluntarily provide including: full name, property address, email address, phone number, and details about your property situation.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">How We Use Your Information</h2>
            <p>We use your information to: contact you regarding your property inquiry, provide property case monitoring and advisory services, send SMS notifications about your case activity (with your consent), and improve our services.</p>
          </section>

          <section className="bg-card border border-primary/20 rounded-2xl p-6">
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">SMS Communications</h2>
            <p className="mb-3">
              If you consent to SMS communications, you will receive text messages from Vonkam Technologies LLC related to your property inquiry and case activity. Message frequency varies. Message and data rates may apply. You can opt out at any time by replying STOP. Reply HELP for assistance.
            </p>
            <p className="font-semibold text-foreground">
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. This includes no sharing for marketing or promotional purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Data Sharing</h2>
            <p>We do not sell your personal information. We do not share your information with third parties for marketing purposes. We may share information with trusted service providers who assist in operating our platform, subject to confidentiality agreements.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information by contacting us at michel@vonkam.com.</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-bold text-foreground mb-3">Contact</h2>
            <p>Vonkam Technologies LLC<br />90 Southwest 3rd Street, Suite 4103, Miami, FL 33130<br />Email: michel@vonkam.com</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default PrivacyPolicy;
