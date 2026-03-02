"use client";

import Link from "next/link";
import { ArrowRight, Database, Network, Shield, Layers, Cpu, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useEffect, useState } from "react";

// Floating particle component - using delay to determine animation duration to avoid hydration mismatch
function FloatingParticle({ delay, size, x, y }: { delay: number; size: number; x: string; y: string }) {
  return (
    <div
      className="absolute rounded-full bg-blue-500/20 animate-float"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        animationDelay: `${delay}s`,
        animationDuration: `${4 + (delay % 4)}s`,
      }}
    />
  );
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Animated gradient orbs */}
        <div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] animate-pulse-slow"
          style={{
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
          }}
        />

        {/* Floating particles */}
        <FloatingParticle delay={0} size={8} x="10%" y="20%" />
        <FloatingParticle delay={1} size={6} x="80%" y="30%" />
        <FloatingParticle delay={2} size={10} x="70%" y="70%" />
        <FloatingParticle delay={3} size={5} x="20%" y="60%" />
        <FloatingParticle delay={4} size={7} x="50%" y="80%" />
        <FloatingParticle delay={5} size={4} x="90%" y="50%" />

        {/* Animated lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse-slow" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl">
          {/* Label */}
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-400 tracking-wide">
                具身智能数据平台
              </span>
            </div>
          </AnimatedSection>

          {/* Main Heading */}
          <AnimatedSection delay={100}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight mb-4 sm:mb-6">
              <span className="block">构建真实世界</span>
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                数据基础设施
              </span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection delay={200}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              九烨是面向具身智能的平台级数据企业，提供标准化、规模化的真实世界数据生产与治理服务
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
              {[
                { value: 100, suffix: "+", label: "城市节点", icon: Network },
                { value: 0, suffix: "PB级", label: "数据资产", icon: Database, isText: true },
                { value: 50, suffix: "+", label: "科研机构", icon: Cpu },
                { value: 99.9, suffix: "%", label: "数据质量", icon: Shield },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="group p-3 sm:p-4 rounded-lg sm:rounded-xl bg-zinc-900/50 border border-zinc-800/50 card-interactive hover:border-blue-500/30 hover:bg-zinc-900/80 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-600 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                    {stat.isText ? (
                      "PB级"
                    ) : (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    )}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/platform"
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-all hover:shadow-lg hover:shadow-white/10 active:scale-95 sm:hover:scale-105"
              >
                了解核心平台
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-all active:scale-95 sm:hover:scale-105"
              >
                商务咨询
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Right side decorative element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <div
            className="relative w-[400px] h-[400px]"
            style={{
              transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
            }}
          >
            {/* Central icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-700/15 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/10 animate-glow">
                <Database className="w-12 h-12 text-blue-500" />
              </div>
            </div>

            {/* Orbiting elements */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur animate-float" style={{ animationDelay: '0s' }}>
              <Network className="w-5 h-5 text-blue-500/70" />
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur animate-float" style={{ animationDelay: '1s' }}>
              <Shield className="w-5 h-5 text-blue-500/70" />
            </div>
            <div className="absolute left-8 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur animate-float" style={{ animationDelay: '2s' }}>
              <Layers className="w-5 h-5 text-blue-500/70" />
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur animate-float" style={{ animationDelay: '3s' }}>
              <Zap className="w-5 h-5 text-blue-500/70" />
            </div>

            {/* Decorative dots */}
            <div className="absolute top-16 right-16 w-2 h-2 rounded-full bg-blue-500/40 animate-pulse" />
            <div className="absolute bottom-16 left-16 w-2 h-2 rounded-full bg-blue-500/40 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-blue-400/30 animate-pulse" style={{ animationDelay: '0.5s' }} />

            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full animate-rotate" style={{ animationDuration: '60s' }} viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(59,130,246,0.05)" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-zinc-600 mb-2">滚动探索</span>
        <div className="w-5 h-8 rounded-full border border-zinc-700 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-blue-500/50" />
        </div>
      </div>
    </section>
  );
}
