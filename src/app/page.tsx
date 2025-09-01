import { AboutSection } from "./components/AboutSection";
import { Complementary } from "./components/Complementary";
import { ContactSection } from "./components/ContactSection";
import { ExperienciasSection } from "./components/ExperienceSection";
import { GridBackground } from "./components/GridBackground";
import { HeroSection } from "./components/HeroSection";
import { KillSyncSection } from "./components/KillsyncSection";
import { MusicSection } from "./components/MusicSection";
import { Navbar } from "./components/Navbar";
import SocialSideBar from "./components/SideBar";
import { EstiloSonidoSection } from "./components/SonidoSection";

export default function ArianesPressKit() {
  return (
    <main className="relative">
      <GridBackground />
      <Navbar />
      <SocialSideBar />
      <HeroSection />
      <Complementary />
      <AboutSection />
      <EstiloSonidoSection />
      <KillSyncSection />
      <MusicSection />
      <ContactSection />
    </main>
  );
}
