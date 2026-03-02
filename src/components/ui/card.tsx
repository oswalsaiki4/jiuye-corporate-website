import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "highlight" | "glass";
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  className?: string;
}

export function Card({
  children,
  variant = "default",
  hover = true,
  padding = "md",
  className = "",
}: CardProps) {
  const variants = {
    default: "bg-zinc-900/50 border-zinc-800/50",
    highlight: "bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800/50",
    glass: "bg-zinc-900/30 backdrop-blur-lg border-zinc-700/50",
  };

  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClass = hover ? "hover:border-zinc-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20" : "";

  return (
    <div className={`rounded-2xl border transition-all duration-300 ${variants[variant]} ${paddings[padding]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
