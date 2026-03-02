import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NetworksSection from "@/components/NetworksSection";
import ServicesSection from "@/components/ServicesSection";
import B2BSection from "@/components/B2BSection";
import WhyDteamSection from "@/components/WhyDteamSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-bg relative">
      <Header />
      <main>
        <HeroSection />
        <NetworksSection />
        <ServicesSection />
        <B2BSection />
        <WhyDteamSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
