import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TechnologyHero } from "@/components/technology/TechnologyHero";
import type { Metadata } from "next";

// 懒加载非首屏组件
const ArchitectureSection = dynamic(
  () => import("@/components/technology/ArchitectureSection").then((mod) => ({ default: mod.ArchitectureSection })),
  { loading: () => <SectionSkeleton /> }
);

const HardwareSection = dynamic(
  () => import("@/components/technology/HardwareSection").then((mod) => ({ default: mod.HardwareSection })),
  { loading: () => <SectionSkeleton /> }
);

const CloudProcessingSection = dynamic(
  () => import("@/components/technology/CloudProcessingSection").then((mod) => ({ default: mod.CloudProcessingSection })),
  { loading: () => <SectionSkeleton /> }
);

const SystemCapabilitiesSection = dynamic(
  () => import("@/components/technology/SystemCapabilitiesSection").then((mod) => ({ default: mod.SystemCapabilitiesSection })),
  { loading: () => <SectionSkeleton /> }
);

function SectionSkeleton({ height = "h-96" }: { height?: string }) {
  return (
    <div className={`${height} bg-zinc-900/30 animate-pulse flex items-center justify-center`}>
      <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "技术能力 - 全栈数据采集与处理技术",
  description: "九烨构建了从终端采集到云端处理的完整技术栈，自研多模态数据采集硬件、分布式处理平台与智能算法引擎，实现真实世界数据的高效采集、处理与标注。",
  keywords: [
    "数据采集技术",
    "多模态采集",
    "3D点云处理",
    "传感器融合",
    "云端数据处理",
    "智能标注算法",
    "分布式平台",
    "数据处理引擎",
    "自研硬件",
    "边缘计算",
  ],
  openGraph: {
    title: "技术能力 - 九烨全栈数据技术",
    description: "自研硬件与云端处理系统，从终端采集到云端处理的完整技术栈",
    url: "https://jiuye.ai/technology",
    images: [
      {
        url: "/images/og-technology.png",
        width: 1200,
        height: 630,
        alt: "九烨数据技术能力",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "技术能力 - 九烨全栈数据技术",
    description: "自研硬件与云端处理系统，从终端采集到云端处理的完整技术栈",
  },
  alternates: {
    canonical: "/technology",
  },
};

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main>
        <TechnologyHero />
        <ArchitectureSection />
        <HardwareSection />
        <CloudProcessingSection />
        <SystemCapabilitiesSection />
      </main>
      <Footer />
    </>
  );
}
