import { useState } from "react";
import { toast } from "sonner";

const PropertyCheckForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    propertyAddress: "",
    email: "",
    phone: "",
  });
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast.error("You must agree to receive SMS notifications before submitting.");
      return;
    }
    if (!form.fullName || !form.propertyAddress || !form.email || !form.phone) {
      toast.error("Please fill out all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Your request has been submitted. We will be in touch soon.");
      setForm({ fullName: "", propertyAddress: "", email: "", phone: "" });
      setConsent(false);
      setSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Check Your Property Status
            </h2>
            <p className="text-muted-foreground">
              Submit your information below and we'll help you stay informed about your property case.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-2xl p-8 shadow-sm space-y-5"
          >
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={form.fullName}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-medium text-foreground mb-1">Property Address *</label>
              <input
                id="propertyAddress"
                name="propertyAddress"
                type="text"
                required
                value={form.propertyAddress}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="123 Main St, Miami, FL 33101"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="(305) 555-0123"
              />
            </div>

            {/* SMS Consent Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                id="smsConsent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-ring shrink-0"
              />
              <label htmlFor="smsConsent" className="text-xs text-muted-foreground leading-relaxed">
                I consent to receive SMS notifications from Vonkam Technologies regarding updates about my property case or request for information. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for assistance.
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {submitting ? "Submitting…" : "Submit Your Information"}
            </button>

            {/* Disclosure */}
            <p className="text-[11px] text-muted-foreground leading-relaxed text-center pt-2">
              By submitting this form and providing your phone number, you consent to receive text messages from Vonkam Technologies at the number provided, including messages sent by autodialer. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. Reply HELP for help or STOP to cancel.
            </p>

            <p className="text-[11px] text-muted-foreground leading-relaxed text-center font-medium">
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PropertyCheckForm;
