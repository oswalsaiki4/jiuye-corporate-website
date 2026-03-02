"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  Cpu,
  Database,
  Shield,
  Zap,
  Globe,
  Lock,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    icon: Database,
    title: "海量数据资产",
    titleEn: "Massive Data Assets",
    description: "PB级真实世界数据积累，覆盖100+种场景类型",
    stats: "2.5PB+",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Cpu,
    title: "智能处理引擎",
    titleEn: "Intelligent Processing",
    description: "AI驱动的自动化数据处理，实时质量检测与优化",
    stats: "<100ms",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Shield,
    title: "企业级安全",
    titleEn: "Enterprise Security",
    description: "ISO27001认证，端到端加密，多重访问控制",
    stats: "99.99%",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Zap,
    title: "高效交付",
    titleEn: "Fast Delivery",
    description: "标准化数据产品，支持API实时访问与批量交付",
    stats: "7×24",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Globe,
    title: "全国网络",
    titleEn: "Nationwide Network",
    description: "100+城市采集节点，10000+数据贡献者",
    stats: "100+",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Lock,
    title: "隐私保护",
    titleEn: "Privacy Protection",
    description: "符合GDPR等国际标准，数据匿名化处理",
    stats: "100%",
    color: "from-rose-500 to-rose-600",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  return (
    <div
      className="group relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-zinc-800/50 overflow-hidden transition-all duration-300 hover:border-zinc-700"
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.02)`
          : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
        transition: "transform 0.3s ease-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Gradient background on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />

      {/* Glow effect */}
      <div
        className="absolute -inset-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{
          transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>

        {/* Stats badge */}
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
          <span className="text-[10px] sm:text-xs font-bold text-zinc-500 group-hover:text-blue-400 transition-colors">
            {feature.stats}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-base sm:text-lg font-semibold text-white mb-0.5 sm:mb-1 group-hover:text-blue-400 transition-colors">
          {feature.title}
        </h3>
        <p className="text-[10px] sm:text-xs text-zinc-600 mb-2 sm:mb-3">{feature.titleEn}</p>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="section-padding bg-zinc-900/30" id="features">
      <div className="container-wide">
        <SectionHeader
          label="核心优势"
          title="为什么选择九烨"
          titleEn="Why Choose Jiuye"
          description="我们提供业界领先的具身智能数据解决方案，助力AI创新"
          align="center"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 100}>
              <FeatureCard feature={feature} index={index} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={600}>
          <div className="text-center">
            <Link
              href="/platform"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group"
            >
              探索完整平台能力
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
