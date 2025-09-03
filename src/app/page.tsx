import { AboutSection } from "./components/AboutSection";
import { Formulario } from "./components/Formulario";
import { HeroSection } from "./components/HeroSection";
import { KillSyncSection } from "./components/KillsyncSection";
import { MusicSection } from "./components/MusicSection";
import { EstiloSonidoSection } from "./components/SonidoSection";

export default function ArianesPressKit() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <EstiloSonidoSection />
      <KillSyncSection />
      <MusicSection />
      <Formulario />
    </div>
  );
}
