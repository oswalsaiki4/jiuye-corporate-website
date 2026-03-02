import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";

// 懒加载非首屏组件
const PlatformOverview = dynamic(
  () => import("@/components/home/PlatformOverview").then((mod) => ({ default: mod.PlatformOverview })),
  { loading: () => <SectionSkeleton /> }
);

const FeaturesSection = dynamic(
  () => import("@/components/home/FeaturesSection").then((mod) => ({ default: mod.FeaturesSection })),
  { loading: () => <SectionSkeleton /> }
);

const StatsSection = dynamic(
  () => import("@/components/home/StatsSection").then((mod) => ({ default: mod.StatsSection })),
  { loading: () => <SectionSkeleton height="h-48" /> }
);

const NetworkSection = dynamic(
  () => import("@/components/home/NetworkSection").then((mod) => ({ default: mod.NetworkSection })),
  { loading: () => <SectionSkeleton /> }
);

const IndustriesSection = dynamic(
  () => import("@/components/home/IndustriesSection").then((mod) => ({ default: mod.IndustriesSection })),
  { loading: () => <SectionSkeleton /> }
);

const TestimonialsSection = dynamic(
  () => import("@/components/home/TestimonialsSection").then((mod) => ({ default: mod.TestimonialsSection })),
  { loading: () => <SectionSkeleton height="h-64" /> }
);

const MissionSection = dynamic(
  () => import("@/components/home/MissionSection").then((mod) => ({ default: mod.MissionSection })),
  { loading: () => <SectionSkeleton /> }
);

const CTASection = dynamic(
  () => import("@/components/home/CTASection").then((mod) => ({ default: mod.CTASection })),
  { loading: () => <SectionSkeleton height="h-48" /> }
);

// 加载骨架屏组件
function SectionSkeleton({ height = "h-96" }: { height?: string }) {
  return (
    <div className={`${height} bg-zinc-900/30 animate-pulse flex items-center justify-center`}>
      <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PlatformOverview />
        <FeaturesSection />
        <StatsSection />
        <IndustriesSection />
        <NetworkSection />
        <TestimonialsSection />
        <MissionSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
