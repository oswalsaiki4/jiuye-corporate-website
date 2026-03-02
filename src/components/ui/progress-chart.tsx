"use client";

import { useEffect, useRef, useState } from "react";

interface ProgressChartProps {
  data: {
    label: string;
    value: number;
    maxValue?: number;
    color?: string;
  }[];
  className?: string;
}

export function ProgressChart({ data, className = "" }: ProgressChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`space-y-4 ${className}`}>
      {data.map((item, index) => {
        const maxVal = item.maxValue || 100;
        const percentage = (item.value / maxVal) * 100;

        return (
          <div key={item.label} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-zinc-400">{item.label}</span>
              <span className="text-white font-medium">{item.value}%</span>
            </div>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                  item.color || "bg-gradient-to-r from-blue-500 to-blue-600"
                }`}
                style={{
                  width: isVisible ? `${percentage}%` : "0%",
                  transitionDelay: `${index * 150}ms`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
