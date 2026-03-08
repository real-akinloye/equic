import HeroSection from "@/components/HeroSection";
import CapTableSection from "@/components/CapTableSection";
import PainPointsSection from "@/components/PainPointsSection";
import EquicalStandardSection from "@/components/EquicalStandardSection";
import TokenizationSection from "@/components/TokenizationSection";
import DealDeskSection from "@/components/DealDeskSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="bg-background">
      <HeroSection />
      <CapTableSection />
      <PainPointsSection />
      <EquicalStandardSection />
      <TokenizationSection />
      <DealDeskSection />
      <HowItWorksSection />
      <PricingSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
