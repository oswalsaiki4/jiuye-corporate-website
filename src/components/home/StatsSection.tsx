"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TrendingUp, Users, MapPin, Database, Clock, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    value: 100,
    suffix: "+",
    label: "城市节点",
    labelEn: "City Nodes",
    description: "遍布全国的数据采集网络",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "数据贡献者",
    labelEn: "Contributors",
    description: "活跃的数据生产网络",
  },
  {
    icon: Database,
    value: 2.5,
    suffix: "PB",
    label: "数据资产",
    labelEn: "Data Assets",
    description: "持续积累的高价值数据",
  },
  {
    icon: CheckCircle,
    value: 99.9,
    suffix: "%",
    label: "数据质量",
    labelEn: "Quality Rate",
    description: "企业级质量标准",
  },
  {
    icon: Clock,
    value: 7,
    suffix: "×24",
    label: "持续运营",
    labelEn: "Operation",
    description: "全天候数据采集",
  },
  {
    icon: TrendingUp,
    value: 150,
    suffix: "+",
    label: "场景类型",
    labelEn: "Scene Types",
    description: "多样化场景覆盖",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
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
    <div
      ref={ref}
      className={`group relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-blue-500/30 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2 sm:mb-4 group-hover:bg-blue-500/20 transition-colors">
          <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
        </div>

        {/* Value */}
        <div className="mb-1 sm:mb-2">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {isVisible && <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} />}
          </span>
        </div>

        {/* Labels */}
        <p className="text-xs sm:text-sm font-medium text-white mb-0.5">{stat.label}</p>
        <p className="text-[10px] sm:text-xs text-zinc-600 mb-1 sm:mb-2">{stat.labelEn}</p>
        <p className="text-[10px] sm:text-xs text-zinc-500 hidden sm:block">{stat.description}</p>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-zinc-950 border-y border-zinc-800/50">
      <div className="container-wide">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
