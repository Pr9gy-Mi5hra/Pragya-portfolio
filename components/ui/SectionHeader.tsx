"use client";

import FadeInView from "@/components/animations/FadeInView";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <FadeInView className={cn("mb-12 text-center md:mb-16", className)}>
      <span className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
        {label}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted md:text-lg">
          {description}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </FadeInView>
  );
}
