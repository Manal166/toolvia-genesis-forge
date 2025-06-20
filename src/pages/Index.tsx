
import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ToolsSection from "@/components/ToolsSection";
import BlogSection from "@/components/BlogSection";
import SocialAndAdSection from "@/components/SocialAndAdSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <NavigationHeader />
      <HeroSection />
      <FeaturesSection />
      <ToolsSection />
      <BlogSection />
      <SocialAndAdSection />
      <FooterSection />
    </div>
  );
};

export default Index;
