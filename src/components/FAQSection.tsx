import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is it too late if I already have an auction date?",
    a: "Not always — but you must act immediately. In Florida, a short sale or deed-in-lieu can potentially delay or cancel a sale if the lender agrees before the auction occurs.",
  },
  {
    q: "What does a short sale mean for my credit?",
    a: "A short sale typically damages credit less than a full foreclosure. Most homeowners see a 50–150 point drop versus a 200–300 point drop from foreclosure. You may be eligible to purchase a new home within 2 years after a short sale, versus 7 years after foreclosure.",
  },
  {
    q: "Will I owe money after a short sale?",
    a: "Florida law prohibits deficiency judgments on owner-occupied primary residences in most short sales. Whether a deficiency is waived depends on your lender and situation; consult a licensed Florida attorney for advice on your case.",
  },
  {
    q: "Who is Vonkam, and how do you get paid?",
    a: "Vonkam Technologies LLC is a Miami company at 90 SW 3rd Street. If you sell your property to us, we pay you and you pay us nothing. If we introduce you to a licensed attorney, counselor or lender, any fee is set by that professional and shown to you in writing before you agree. If Vonkam would receive compensation for an introduction, we tell you first. We never ask for money up front.",
  },
  {
    q: "How is Vonkam different from a regular real estate agent?",
    a: "Traditional agents focus on listings and commissions. Vonkam specializes exclusively in distressed property situations. We focus on monitoring public records and helping you understand court timelines and possible options.",
  },
  {
    q: "Do I need to hire an attorney to use your service?",
    a: "No. Vonkam provides advisory and monitoring services free to homeowners in many situations. We have trusted attorney partners in Miami-Dade and Broward for cases that genuinely require legal action.",
  },
  {
    q: "What is probate and does it affect my property?",
    a: "Probate is the legal process for handling a deceased person's estate. If a homeowner passes with a property still in their name with an unpaid mortgage, the property must go through probate before it can be sold or transferred.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 bg-background">
    <div className="section-container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto">
          Get answers to the most common questions about foreclosure, short sales, and how Vonkam can help.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
