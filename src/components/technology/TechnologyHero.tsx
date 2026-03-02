"use client";

import { Cpu, Server, Smartphone, Cloud } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const highlights = [
  { icon: Smartphone, label: "采集终端", value: "自研" },
  { icon: Server, label: "平台层", value: "分布式" },
  { icon: Cloud, label: "处理能力", value: "PB级" },
  { icon: Cpu, label: "技术栈", value: "全自研" },
];

export function TechnologyHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="container-wide relative z-10">
        {/* Breadcrumb */}
        <AnimatedSection delay={0}>
          <div className="flex items-center space-x-2 text-sm text-zinc-500 mb-8">
            <span className="hover:text-blue-400 transition-colors cursor-pointer">首页</span>
            <span>/</span>
            <span className="text-zinc-300">技术能力</span>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl">
          {/* Label */}
          <AnimatedSection delay={100}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
              TECHNOLOGY
            </p>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection delay={200}>
            <h1 className="heading-display text-white mb-6">
              全栈技术能力
              <span className="block text-zinc-500 text-xl sm:text-2xl md:text-3xl font-normal mt-3">
                Full-Stack Technology Capabilities
              </span>
            </h1>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection delay={300}>
            <p className="body-large max-w-3xl mb-12">
              九烨构建了从终端采集到云端处理的完整技术栈，通过自研硬件、分布式平台与智能算法，
              实现真实世界数据的高效采集、处理与交付能力。
            </p>
          </AnimatedSection>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.label} delay={400 + index * 100}>
                <div className="group p-4 sm:p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-blue-500/30 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1">
                  <item.icon className="w-5 h-5 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-xl sm:text-2xl font-bold text-white mb-1">{item.value}</p>
                  <p className="text-xs sm:text-sm text-zinc-500">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
