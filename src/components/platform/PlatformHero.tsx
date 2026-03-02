"use client";

import { Database, Layers, Shield, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const highlights = [
  { icon: Database, label: "数据生产", value: "全链路" },
  { icon: Layers, label: "场景覆盖", value: "100+" },
  { icon: Shield, label: "质量标准", value: "企业级" },
  { icon: Zap, label: "处理效率", value: "实时" },
];

export function PlatformHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="container-wide relative z-10">
        {/* Breadcrumb */}
        <AnimatedSection delay={0}>
          <div className="flex items-center space-x-2 text-sm text-zinc-500 mb-8">
            <span className="hover:text-blue-400 transition-colors cursor-pointer">首页</span>
            <span>/</span>
            <span className="text-zinc-300">核心平台</span>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl">
          {/* Label */}
          <AnimatedSection delay={100}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
              CORE PLATFORM
            </p>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection delay={200}>
            <h1 className="heading-display text-white mb-6">
              具身智能数据平台
              <span className="block text-zinc-500 text-2xl md:text-3xl font-normal mt-3">
                Embodied Intelligence Data Platform
              </span>
            </h1>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection delay={300}>
            <p className="body-large max-w-3xl mb-12">
              九烨核心平台是面向具身智能领域的专业数据基础设施，整合数据采集、处理、标注、治理与交付的全链路能力，
              为AI模型训练提供规模化、标准化、高质量的真实世界数据支撑。
            </p>
          </AnimatedSection>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.label} delay={400 + index * 100}>
                <div className="group p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-blue-500/30 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1">
                  <item.icon className="w-5 h-5 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
                  <p className="text-sm text-zinc-500">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
