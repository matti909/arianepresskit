import BioSection from "./components/BioSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import KillSyncSection from "./components/KillSyncSection";
import RoadSection from "./components/RoadSection";

export default function ArianesPressKit() {
  return (
    <div className="min-h-screen noise-background particles">
      <HeroSection />
      <BioSection />
      <RoadSection />
      <KillSyncSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
