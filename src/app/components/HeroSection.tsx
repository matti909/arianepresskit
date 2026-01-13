import ArianeTitle from "./TitleSvg";
import { HeroButtons } from "./HeroButtons";
import { ScrollIndicator } from "./ScrollIndicator";
import { getHomePage } from "@/lib/strapi";

export async function generateMetadata() {
  
  const strapiData = await getHomePage();
  return {
    title: strapiData?.title || "Ariane Presskit",
    description: strapiData?.description || "Welcome to Ariane Presskit",
  };
}

const HeroSection = async () => {
  const strapiData = await getHomePage();

  const heroSection = strapiData?.sections?.find(
    (section: any) => section.__component === "layout.hero"
  );

  const backgroundImage = heroSection?.picture?.url || "/ariana.webp";
  const logoUrl = heroSection?.logo?.url || "/logoari2.png";

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
