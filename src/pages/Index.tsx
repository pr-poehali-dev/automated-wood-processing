import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import SpecsSection from "@/components/SpecsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesGrid />
      <SpecsSection />
      <CTASection />
    </div>
  );
};

export default Index;
