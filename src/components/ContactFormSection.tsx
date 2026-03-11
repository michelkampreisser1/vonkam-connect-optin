import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Check } from "lucide-react";

const urgencyOptions = [
  { emoji: "🚨", label: "Auction Date Set" },
  { emoji: "⚠️", label: "Lawsuit Filed" },
  { emoji: "📋", label: "Got a Notice" },
  { emoji: "💸", label: "Behind on Payments" },
  { emoji: "⚖️", label: "Probate/Inherited" },
  { emoji: "❓", label: "Not Sure" },
];

const promises = [
  { emoji: "🔒", text: "Your information stays private" },
  { emoji: "💬", text: "Real person contacts you" },
  { emoji: "⚡", text: "24-48 hour turnaround" },
  { emoji: "🚫", text: "No commitment, no legal fees" },
  { emoji: "📍", text: "Miami-Dade & Broward County only" },
];

const ContactFormSection = () => {
  const [form, setForm] = useState({
    fullName: "",
    propertyAddress: "",
    email: "",
    phone: "",
    bestTime: "",
  });
  const [urgency, setUrgency] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

      const { error: smsError } = await supabase.functions.invoke("send-sms", {
        body: { to: form.phone, fullName: form.fullName },
      });

      if (smsError) {
        console.error("SMS error:", smsError);
      }

      setSubmitted(true);
      toast.success("Your request has been submitted. You'll receive a confirmation SMS shortly.");
      setForm({ fullName: "", propertyAddress: "", email: "", phone: "", bestTime: "" });
      setConsent(false);
      setUrgency("");

      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("There was an error submitting your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-input bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-primary transition-all font-body";

  return (
    <section id="get-help" className="py-20 bg-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Check Your Property Status — It's Free
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Submit your property address and we'll scan public records to determine if there are any active foreclosure filings, lis pendens, or auction dates tied to your property. You'll hear back within 24–48 hours.
            </p>
            <ul className="space-y-4">
              {promises.map((p) => (
                <li key={p.text} className="flex items-center gap-3 text-foreground font-body">
                  <span className="text-xl">{p.emoji}</span>
                  {p.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Form */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">
              Check My Property Status
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Urgency Selector */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 font-body">
                  What best describes your situation?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {urgencyOptions.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setUrgency(opt.label)}
                      className={`text-xs font-body font-medium px-3 py-2.5 rounded-lg border transition-all text-left ${
                        urgency === opt.label
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-white text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {opt.emoji} {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1.5 font-body">Full Name *</label>
                <input id="fullName" name="fullName" type="text" required value={form.fullName} onChange={handleChange} className={inputClasses} placeholder="John Doe" />
              </div>

              <div>
                <label htmlFor="propertyAddress" className="block text-sm font-medium text-foreground mb-1.5 font-body">Property Address *</label>
                <input id="propertyAddress" name="propertyAddress" type="text" required value={form.propertyAddress} onChange={handleChange} className={inputClasses} placeholder="123 Main St, Miami, FL 33101" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5 font-body">Email Address *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClasses} placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5 font-body">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClasses} placeholder="(305) 555-0123" />
                </div>
              </div>

              <div>
                <label htmlFor="bestTime" className="block text-sm font-medium text-foreground mb-1.5 font-body">Best Time to Reach You</label>
                <select
                  id="bestTime"
                  name="bestTime"
                  value={form.bestTime}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select a time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Anytime">Anytime</option>
                </select>
              </div>

              {/* SMS Consent */}
              <div className="flex items-start gap-3 bg-blue-50 rounded-xl p-4 border border-primary/20">
                <input
                  id="smsConsent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-input text-primary focus:ring-ring shrink-0"
                />
                <label htmlFor="smsConsent" className="text-xs text-muted-foreground font-body leading-relaxed">
                  I agree to receive SMS text messages from <strong className="text-foreground">Vonkam Technologies</strong> regarding updates about my property inquiry and case activity. Message frequency varies based on your case activity. Message and data rates may apply. Reply <strong className="text-foreground">STOP</strong> to unsubscribe at any time. Reply <strong className="text-foreground">HELP</strong> for assistance.
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full font-semibold py-4 px-6 rounded-xl transition-all text-base text-white flex items-center justify-center gap-2 ${
                  submitted
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-destructive hover:bg-destructive/90"
                } disabled:opacity-50`}
              >
                {submitted ? (
                  <>
                    <Check className="h-5 w-5" />
                    Submitted Successfully!
                  </>
                ) : submitting ? (
                  "Submitting…"
                ) : (
                  "Check My Property Status Now"
                )}
              </button>

              <div className="space-y-2 pt-2">
                <p className="text-[11px] text-muted-foreground font-body leading-relaxed text-center">
                  By submitting this form, you confirm that you are the property owner or authorized representative. By checking the SMS box above, you consent to receive text messages from Vonkam Technologies at the number provided. Consent is not a condition of receiving services. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. View our{" "}
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Privacy Policy</a>{" "}and{" "}
                  <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Terms &amp; Conditions</a>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
