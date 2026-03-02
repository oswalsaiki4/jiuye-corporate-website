import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import type { Metadata } from "next";

// 懒加载非首屏组件
const CompanyOverviewSection = dynamic(
  () => import("@/components/about/CompanyOverviewSection").then((mod) => ({ default: mod.CompanyOverviewSection })),
  { loading: () => <SectionSkeleton /> }
);

const TeamSection = dynamic(
  () => import("@/components/about/TeamSection").then((mod) => ({ default: mod.TeamSection })),
  { loading: () => <SectionSkeleton /> }
);

const ContactSection = dynamic(
  () => import("@/components/about/ContactSection").then((mod) => ({ default: mod.ContactSection })),
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
  title: "关于九烨 - 具身智能数据平台企业",
  description: "深圳九烨数据智能科技有限公司是面向具身智能的平台级数据企业，致力于构建真实世界数据基础设施，为AI产业发展提供高质量数据支撑。了解我们的使命、愿景与团队。",
  keywords: [
    "九烨科技",
    "九烨数据",
    "深圳AI企业",
    "具身智能公司",
    "AI数据公司",
    "数据服务企业",
    "人工智能数据",
    "机器人数据公司",
    "数据基础设施",
    "Jiuye Data",
  ],
  openGraph: {
    title: "关于九烨 - 具身智能数据平台企业",
    description: "深圳九烨数据智能科技有限公司 - 致力于构建真实世界AI数据基础设施",
    url: "https://jiuye.ai/about",
    images: [
      {
        url: "/images/og-about.png",
        width: 1200,
        height: 630,
        alt: "关于九烨数据",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "关于九烨 - 具身智能数据平台企业",
    description: "深圳九烨数据智能科技有限公司 - 构建真实世界AI数据基础设施",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <CompanyOverviewSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
