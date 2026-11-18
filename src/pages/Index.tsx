import SiteNavbar from "@/components/SiteNavbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import HeroSectionNew from "@/components/HeroSectionNew";
import StatsBar from "@/components/StatsBar";
import SituationTriage from "@/components/SituationTriage";
import HowItWorksNew from "@/components/HowItWorksNew";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import CtaStrip from "@/components/CtaStrip";
import SiteFooter from "@/components/SiteFooter";
import FloatingHelpButton from "@/components/FloatingHelpButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteNavbar />
      <EmergencyBanner />
      <HeroSectionNew />
      <StatsBar />
      <SituationTriage />
      <HowItWorksNew />
      <ServicesSection />
      <FAQSection />
      <ContactFormSection />
      <CtaStrip />
      <SiteFooter />
      <FloatingHelpButton />
    </div>
  );
};

export default Index;
