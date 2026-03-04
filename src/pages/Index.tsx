import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PropertyCheckForm from "@/components/PropertyCheckForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ServicesSection />
      <AboutSection />
      <PropertyCheckForm />
      <Footer />
    </div>
  );
};

export default Index;
