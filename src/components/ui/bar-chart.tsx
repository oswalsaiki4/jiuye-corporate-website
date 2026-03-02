"use client";

import { useEffect, useRef, useState } from "react";

interface BarChartProps {
  data: {
    label: string;
    value: number;
  }[];
  maxValue?: number;
  height?: number;
  className?: string;
}

export function BarChart({ data, maxValue, height = 200, className = "" }: BarChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const max = maxValue || Math.max(...data.map((d) => d.value));

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
    <div ref={ref} className={`${className}`}>
      <div className="flex items-end justify-between gap-2" style={{ height }}>
        {data.map((item, index) => {
          const barHeight = (item.value / max) * 100;

          return (
            <div key={item.label} className="flex-1 flex flex-col items-center">
              <div className="w-full relative" style={{ height: `${height - 30}px` }}>
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 md:w-12 bg-gradient-to-t from-blue-600 to-blue-500 rounded-t-md transition-all duration-1000 ease-out"
                  style={{
                    height: isVisible ? `${barHeight}%` : "0%",
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              </div>
              <span className="text-xs text-zinc-500 mt-2 text-center">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
