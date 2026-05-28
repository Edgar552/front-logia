import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import MasonSection from "@/components/home/MasonSection";
import ObjectiveSection from "@/components/home/ObjectiveSection";
import ContactWelcomeModal from "@/components/ContactModal";
// import FooterSection from "@/components/home/FooterSection";

export default function HomePage() {
  return (
      <>
      <ContactWelcomeModal/>
        <HeroSection />
        <WelcomeSection />
        <MasonSection />
        <ObjectiveSection />
        {/*<FooterSection />*/}
      </>
  );
}