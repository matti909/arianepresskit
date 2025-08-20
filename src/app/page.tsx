import { AboutSection } from "./components/AboutSection";
import BioSection from "./components/BioSection";
import { ContactSection } from "./components/ContactSection";
import { GridBackground } from "./components/GridBackground";
import { HeroSection } from "./components/HeroSection";
import { MusicSection } from "./components/MusicSection";
import { Navbar } from "./components/Navbar";

export default function ArianesPressKit() {
  return (
    <main className="relative">
      <GridBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <ContactSection />
    </main>
  );
}
