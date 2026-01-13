import { AboutSection } from "./components/AboutSection";
import { Formulario } from "./components/Formulario";
import HeroSection from "./components/HeroSection";
import { KillSyncSection } from "./components/KillsyncSection";
import { MusicSection } from "./components/MusicSection";
import { EstiloSonidoSection } from "./components/SonidoSection";
import { PresentationsSection } from "./components/PresentationsSection";
import { RiderTecnicoSection } from "./components/RiderTecnicoSection";

export default function ArianesPressKit() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <EstiloSonidoSection />
      <KillSyncSection />
      <MusicSection />
      <PresentationsSection />
      <RiderTecnicoSection />
      <Formulario />
    </div>
  );
}
