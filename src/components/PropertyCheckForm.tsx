import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const PropertyCheckForm = () => {
  const [form, setForm] = useState({ fullName: "", propertyAddress: "", email: "", phone: "" });
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from("property_inquiries")
        .insert({
          full_name: form.fullName,
          property_address: form.propertyAddress,
          email: form.email,
          phone: form.phone,
          sms_consent: consent,
        });

      if (dbError) {
        console.error("Database error:", dbError);
        toast.error("There was an error submitting your request. Please try again.");
        setSubmitting(false);
        return;
      }

      // Trigger double opt-in SMS
      const { error: smsError } = await supabase.functions.invoke("send-sms", {
        body: { to: form.phone, fullName: form.fullName },
      });

      if (smsError) {
        console.error("SMS error:", smsError);
        // Still show success since the inquiry was saved
      }

      toast.success("Your request has been submitted. You'll receive a confirmation SMS shortly.");
      setForm({ fullName: "", propertyAddress: "", email: "", phone: "" });
      setConsent(false);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("There was an error submitting your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses = "w-full rounded-xl border border-input bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-all";

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-primary font-semibold tracking-widest uppercase mb-3 block">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
              Check Your Property Status
            </h2>
            <p className="text-muted-foreground">
              Submit your information below to request a property case check from our monitoring system.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-sm glow-border space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
              <input id="fullName" name="fullName" type="text" required value={form.fullName} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
            </div>

            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-medium text-foreground mb-1.5">Property Address *</label>
              <input id="propertyAddress" name="propertyAddress" type="text" required value={form.propertyAddress} onChange={handleChange} className={inputClasses} placeholder="123 Main St, Miami, FL 33101" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClasses} placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClasses} placeholder="(305) 555-0123" />
              </div>
            </div>

            {/* SMS Consent — Required for Twilio A2P 10DLC compliance */}
            <div className="flex items-start gap-3 bg-muted rounded-xl p-4 border border-border">
              <input
                id="smsConsent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-ring shrink-0"
              />
              <label htmlFor="smsConsent" className="text-xs text-muted-foreground leading-relaxed">
                I agree to receive SMS notifications from <strong className="text-foreground">Vonkam Technologies LLC</strong> regarding updates about my property inquiry or case activity. Message frequency varies. Message and data rates may apply. Reply <strong className="text-foreground">STOP</strong> to unsubscribe at any time. Reply <strong className="text-foreground">HELP</strong> for assistance. Consent is not a condition of purchase. View our{" "}
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Privacy Policy</a>{" "}and{" "}
                <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Terms &amp; Conditions</a>.
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-primary text-primary-foreground font-semibold py-4 px-6 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 text-base"
            >
              {submitting ? "Submitting…" : "Submit Your Information"}
            </button>

            <div className="space-y-2 pt-2">
              <p className="text-[11px] text-muted-foreground leading-relaxed text-center">
                By submitting this form and providing your phone number, you agree to receive SMS notifications from Vonkam Technologies LLC regarding your request or property case updates. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase.
              </p>
              <p className="text-[11px] text-muted-foreground leading-relaxed text-center font-semibold">
                No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PropertyCheckForm;
