import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import type { Metadata } from "next";

// 懒加载非首屏组件
const IndustryApplicationsSection = dynamic(
  () => import("@/components/industries/IndustryApplicationsSection").then((mod) => ({ default: mod.IndustryApplicationsSection })),
  { loading: () => <SectionSkeleton /> }
);

const NetworkMapSection = dynamic(
  () => import("@/components/industries/NetworkMapSection").then((mod) => ({ default: mod.NetworkMapSection })),
  { loading: () => <SectionSkeleton /> }
);

const UseCasesSection = dynamic(
  () => import("@/components/industries/UseCasesSection").then((mod) => ({ default: mod.UseCasesSection })),
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
  title: "行业应用与全国网络 - 数据采集网络覆盖",
  description: "九烨平台服务于科研机构、AI企业、机器人厂商等多个领域，通过遍布全国100+城市的数据采集网络，提供多场景、多维度的真实世界数据支撑。",
  keywords: [
    "数据采集网络",
    "全国数据网络",
    "科研数据服务",
    "AI企业数据",
    "机器人数据服务",
    "行业数据解决方案",
    "场景数据",
    "城市数据采集",
    "分布式采集",
    "数据服务商",
  ],
  openGraph: {
    title: "行业应用与全国网络 - 九烨数据",
    description: "覆盖100+城市的数据采集网络，服务科研机构、AI企业与机器人厂商",
    url: "https://jiuye.ai/industries",
    images: [
      {
        url: "/images/og-industries.png",
        width: 1200,
        height: 630,
        alt: "九烨数据行业应用与全国网络",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "行业应用与全国网络 - 九烨数据",
    description: "覆盖100+城市的数据采集网络，服务科研机构与AI企业",
  },
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <IndustriesHero />
        <IndustryApplicationsSection />
        <NetworkMapSection />
        <UseCasesSection />
      </main>
      <Footer />
    </>
  );
}
