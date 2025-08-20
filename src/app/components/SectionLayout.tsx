import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "default" | "muted" | "accent";
  padding?: "sm" | "md" | "lg" | "xl";
  id?: string;
}

export const SectionLayout = ({
  children,
  className,
  containerClassName,
  background = "default",
  padding = "lg",
  id,
}: SectionLayoutProps) => {
  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    accent: "bg-accent/10",
  };

  const paddingClasses = {
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-20",
    xl: "py-20 md:py-24",
  };

  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className,
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
};
