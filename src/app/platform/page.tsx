import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PlatformHero } from "@/components/platform/PlatformHero";
import type { Metadata } from "next";

// 懒加载非首屏组件
const EmbodiedDataSection = dynamic(
  () => import("@/components/platform/EmbodiedDataSection").then((mod) => ({ default: mod.EmbodiedDataSection })),
  { loading: () => <SectionSkeleton /> }
);

const DataProductionSection = dynamic(
  () => import("@/components/platform/DataProductionSection").then((mod) => ({ default: mod.DataProductionSection })),
  { loading: () => <SectionSkeleton /> }
);

const AnnotationSection = dynamic(
  () => import("@/components/platform/AnnotationSection").then((mod) => ({ default: mod.AnnotationSection })),
  { loading: () => <SectionSkeleton /> }
);

const QualityGovernanceSection = dynamic(
  () => import("@/components/platform/QualityGovernanceSection").then((mod) => ({ default: mod.QualityGovernanceSection })),
  { loading: () => <SectionSkeleton /> }
);

const DataAssetSection = dynamic(
  () => import("@/components/platform/DataAssetSection").then((mod) => ({ default: mod.DataAssetSection })),
  { loading: () => <SectionSkeleton /> }
);

const UserValueSection = dynamic(
  () => import("@/components/platform/UserValueSection").then((mod) => ({ default: mod.UserValueSection })),
  { loading: () => <SectionSkeleton /> }
);

const DataVisualizationSection = dynamic(
  () => import("@/components/platform/DataVisualizationSection").then((mod) => ({ default: mod.DataVisualizationSection })),
  { loading: () => <SectionSkeleton /> }
);

const PlatformCTA = dynamic(
  () => import("@/components/platform/PlatformCTA").then((mod) => ({ default: mod.PlatformCTA })),
  { loading: () => <SectionSkeleton height="h-48" /> }
);

function SectionSkeleton({ height = "h-96" }: { height?: string }) {
  return (
    <div className={`${height} bg-zinc-900/30 animate-pulse flex items-center justify-center`}>
      <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "核心平台 - 具身智能数据基础设施",
  description: "九烨核心平台是面向具身智能领域的专业数据基础设施，整合数据采集、处理、标注、治理与交付的全链路能力。支持多模态数据融合，提供标准化数据产品与定制化服务。",
  keywords: [
    "数据平台",
    "数据采集平台",
    "数据标注平台",
    "AI数据基础设施",
    "多模态数据",
    "数据生产",
    "数据治理平台",
    "数据资产管理",
  ],
  openGraph: {
    title: "核心平台 - 九烨具身智能数据基础设施",
    description: "全链路数据生产与治理能力，支持多模态数据融合，提供标准化数据产品",
    url: "https://jiuye.ai/platform",
    images: [
      {
        url: "/images/og-platform.png",
        width: 1200,
        height: 630,
        alt: "九烨数据核心平台",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "核心平台 - 九烨具身智能数据基础设施",
    description: "全链路数据生产与治理能力，支持多模态数据融合",
  },
  alternates: {
    canonical: "/platform",
  },
};

export default function PlatformPage() {
  return (
    <>
      <Header />
      <main>
        <PlatformHero />
        <EmbodiedDataSection />
        <DataProductionSection />
        <DataVisualizationSection />
        <AnnotationSection />
        <QualityGovernanceSection />
        <DataAssetSection />
        <UserValueSection />
        <PlatformCTA />
      </main>
      <Footer />
    </>
  );
}
