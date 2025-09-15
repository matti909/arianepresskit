import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const socialLinks = [
  {
    label: "SoundCloud",
    href: "https://soundcloud.com/ariana-amelia/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/watch?v=7K8jQDhjoO0",
  },
  {
    label: "Instagram (Ariane)",
    href: "https://www.instagram.com/ariane.dj/",
  },
  {
    label: "Comp. Opposites",
    href: "https://www.instagram.com/complementary.opposites/",
  },
];

const SocialLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {socialLinks.map(({ label, href }) => (
        <Button
          asChild
          key={label}
          variant="outline"
          className="justify-start bg-transparent hover:bg-black/50"
          style={{
            borderColor: `oklch(0.44 0.16 27)`,
            color: `oklch(0.51 0.19 28)`,
          }}
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            {label}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
