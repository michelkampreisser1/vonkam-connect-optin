import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import PlatformFeatures from "@/components/PlatformFeatures";
import AboutSection from "@/components/AboutSection";
import PropertyCheckForm from "@/components/PropertyCheckForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <PlatformFeatures />
      <AboutSection />
      <PropertyCheckForm />
      <Footer />
    </div>
  );
};

export default Index;
