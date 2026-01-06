import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PowerOfNumbers from "@/components/PowerOfNumbers";
import EcosystemSection from "@/components/EcosystemSection";
import ProjectsSection from "@/components/ProjectsSection";
import LeadershipSection from "@/components/LeadershipSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PowerOfNumbers />
        <EcosystemSection />
        <ProjectsSection />
        <LeadershipSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
