import ArianeTitle from "./TitleSvg";
import { HeroButtons } from "./HeroButtons";
import { ScrollIndicator } from "./ScrollIndicator";

interface HeroSectionProps {
  data?: {
    picture?: { url: string };
    logo?: { url: string };
  };
}

const HeroSection = ({ data }: HeroSectionProps) => {
  const backgroundImage = data?.picture?.url || "/ariana.webp";
  const logoUrl = data?.logo?.url || "/logoari2.png";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden">
      {/* Fondo */}1
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      {/* Contenido */}
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <ArianeTitle logoUrl={logoUrl} />
        <HeroButtons />
      </div>
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
