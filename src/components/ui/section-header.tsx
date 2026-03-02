"use client";

import { AnimatedSection } from "./animated-section";

interface SectionHeaderProps {
  label?: string;
  title: string;
  titleEn?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  animated?: boolean;
}

export function SectionHeader({
  label,
  title,
  titleEn,
  description,
  align = "left",
  className = "",
  animated = true,
}: SectionHeaderProps) {
  const content = (
    <div
      className={`mb-6 sm:mb-8 md:mb-10 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : ""
      } ${className}`}
    >
      {label && (
        <div className="inline-flex items-center mb-3 sm:mb-4">
          <span className="w-6 sm:w-8 h-px bg-blue-500/50 mr-2 sm:mr-3" />
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-blue-500">
            {label}
          </p>
        </div>
      )}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-3 sm:mb-4">
        {title}
        {titleEn && (
          <span className="block text-sm sm:text-base md:text-lg lg:text-xl font-normal text-zinc-500 mt-1.5 sm:mt-2">
            {titleEn}
          </span>
        )}
      </h2>
      {description && (
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );

  if (animated) {
    return <AnimatedSection>{content}</AnimatedSection>;
  }

  return content;
}
