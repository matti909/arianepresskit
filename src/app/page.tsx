import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienciasSection } from "./components/ExperienceSection";
import { GridBackground } from "./components/GridBackground";
import { HeroSection } from "./components/HeroSection";
import { KillSyncSection } from "./components/KillsyncSection";
import { MusicSection } from "./components/MusicSection";
import { Navbar } from "./components/Navbar";
import { EstiloSonidoSection } from "./components/SonidoSection";

export default function ArianesPressKit() {
  return (
    <main className="relative">
      <GridBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EstiloSonidoSection />
      <KillSyncSection />
      <MusicSection />
      <ContactSection />
    </main>
  );
}
