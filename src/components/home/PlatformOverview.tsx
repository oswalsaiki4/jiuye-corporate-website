import Link from "next/link";
import { ArrowRight, Database, Cpu, Shield, BarChart3, Globe, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const capabilities = [
  {
    icon: Database,
    title: "数据生产",
    titleEn: "Data Production",
    description: "标准化的真实世界数据采集与生产体系，覆盖多维度场景",
  },
  {
    icon: Cpu,
    title: "数据标注",
    titleEn: "Data Annotation",
    description: "专业的数据结构化与标注服务，确保数据可用性",
  },
  {
    icon: Shield,
    title: "质量治理",
    titleEn: "Quality Governance",
    description: "多层级质量管控机制，保障数据资产价值",
  },
  {
    icon: BarChart3,
    title: "资产交付",
    titleEn: "Asset Delivery",
    description: "灵活的数据资产化与交付模式，适配多样需求",
  },
];

export function PlatformOverview() {
  return (
    <section className="section-padding bg-zinc-950">
      <div className="container-wide">
        <SectionHeader
          label="核心平台"
          title="平台级数据基础设施"
          titleEn="Platform-Level Data Infrastructure"
          description="九烨构建面向具身智能的全链路数据平台，从真实世界数据采集到结构化处理、质量治理与资产交付，提供完整的数据生产与管理能力。"
          align="center"
        />

        {/* Capabilities Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10">
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className="group p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-zinc-800 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-blue-500/10 transition-colors">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-0.5 sm:mb-1">
                {item.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-zinc-600 mb-2 sm:mb-3">{item.titleEn}</p>
              <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed hidden sm:block">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Platform Visual */}
        <div className="relative p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/50 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                真实世界数据的价值核心
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-4 sm:mb-6">
                具身智能的发展依赖于海量、多样、真实的世界数据。九烨平台通过分布式数据采集网络，
                汇聚来自真实场景的多维度数据，为AI模型训练提供不可替代的数据基础。
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white">场景多样性</p>
                    <p className="text-[10px] sm:text-xs text-zinc-500">覆盖真实世界多维场景</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-white">数据真实性</p>
                    <p className="text-[10px] sm:text-xs text-zinc-500">来源于真实用户行为</p>
                  </div>
                </div>
              </div>
              <Link
                href="/platform"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors group"
              >
                深入了解平台能力
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Visual diagram */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                {/* Center node */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/10 border border-blue-500/30 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-lg font-bold text-white">九烨平台</p>
                      <p className="text-xs text-blue-500/80">数据核心</p>
                    </div>
                  </div>
                </div>

                {/* Orbital rings */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                </svg>

                {/* Data nodes */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700 text-xs text-zinc-400">
                  采集层
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700 text-xs text-zinc-400">
                  交付层
                </div>
                <div className="absolute left-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700 text-xs text-zinc-400">
                  治理层
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700 text-xs text-zinc-400">
                  处理层
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
