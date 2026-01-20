import { AboutSection } from "./components/AboutSection";
import { Formulario } from "./components/Formulario";
import HeroSection from "./components/HeroSection";
import { KillSyncSection } from "./components/KillsyncSection";
import { MusicSection } from "./components/MusicSection";
import { EstiloSonidoSection } from "./components/SonidoSection";
import { PresentationsSection } from "./components/PresentationsSection";
import { RiderTecnicoSection } from "./components/RiderTecnicoSection";
import { getHomePage } from "@/lib/strapi";

export default async function ArianesPressKit() {
  const strapiData = await getHomePage();
  const sections = strapiData?.sections || [];

  const heroData = sections.find((s: any) => s.__component === "layout.hero");
  const aboutData = sections.find((s: any) => s.__component === "layout.aboutme");
  const styleData = sections.find((s: any) => s.__component === "layout.stylesound");
  const killsyncData = sections.find((s: any) => s.__component === "layout.killsync");
  const musicData = sections.find((s: any) => s.__component === "layout.music");
  const showsData = sections.find((s: any) => s.__component === "layout.shows");
  const technicalData = sections.find((s: any) => s.__component === "layout.technical");

  return (
    <div className="relative">
      <HeroSection data={heroData} />
      <AboutSection data={aboutData} />
      <EstiloSonidoSection data={styleData} />
      <KillSyncSection data={killsyncData} />
      <MusicSection data={musicData} />
      <PresentationsSection data={showsData} />
      <RiderTecnicoSection data={technicalData} />
      <Formulario />
    </div>
  );
}
