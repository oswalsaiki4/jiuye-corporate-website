import { SectionHeader } from "@/components/ui/section-header";
import { Target, Eye, Compass } from "lucide-react";

const coreValues = [
  {
    icon: Target,
    title: "使命",
    titleEn: "Mission",
    description: "构建具身智能时代的数据基础设施，让真实世界的数据成为智能时代的基石。",
  },
  {
    icon: Eye,
    title: "愿景",
    titleEn: "Vision",
    description: "成为全球领先的具身智能数据平台，推动AI与物理世界的深度融合。",
  },
  {
    icon: Compass,
    title: "价值观",
    titleEn: "Values",
    description: "平台化、标准化、长期主义。坚持价值积累与能力建设，追求可持续增长。",
  },
];

const milestones = [
  { year: "2025.09", event: "九烨成立", description: "深圳九烨数据智能科技有限公司正式成立" },
  { year: "2025.Q4", event: "平台1.0发布", description: "完成核心平台研发，启动城市节点布局" },
  { year: "2026.Q1", event: "网络拓展", description: "启动全国城市节点网络建设" },
  { year: "2026.Q2", event: "规模化运营", description: "服务首批科研与企业客户" },
  { year: "2026+", event: "生态共建", description: "与头部机构建立战略合作，共建数据生态" },
];

export function CompanyOverviewSection() {
  return (
    <section className="section-padding bg-zinc-900/30" id="overview">
      <div className="container-wide">
        <SectionHeader
          label="公司概况"
          title="平台级数据企业"
          titleEn="Platform-Level Data Enterprise"
          description="九烨定位为具身智能领域的数据基础设施提供商，通过平台化的运营模式，构建可持续的数据生产与服务能力。"
        />

        {/* Company Introduction */}
        <div className="p-6 md:p-10 rounded-3xl bg-zinc-950 border border-zinc-800/50 mb-10">
          <div className="max-w-4xl">
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              深圳九烨数据智能科技有限公司成立于2025年9月，总部位于深圳。公司由来自顶尖科技企业与研究机构的核心团队创立，
              专注于具身智能领域的真实世界数据生产与服务。
            </p>
            <p className="text-zinc-400 leading-relaxed mb-6">
              作为平台级数据企业，九烨不同于传统的数据服务商。我们构建了覆盖数据采集、处理、标注、
              治理与交付的完整平台能力，通过遍布全国的分布式采集网络，持续积累高价值的真实世界数据资产。
            </p>
            <p className="text-zinc-400 leading-relaxed">
              九烨坚持"平台化、标准化、长期主义"的发展理念，致力于成为具身智能时代不可或缺的数据基础设施，
              为AI产业的长期发展提供坚实支撑。
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/50 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{value.title}</h3>
              <p className="text-sm text-zinc-500 mb-4">{value.titleEn}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="p-6 md:p-10 rounded-3xl bg-zinc-950 border border-zinc-800/50">
          <div className="text-center mb-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
              发展历程
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              稳步前行的成长之路
            </h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-zinc-800" />

            <div className="grid md:grid-cols-5 gap-6">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  {/* Year marker */}
                  <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-zinc-900 border-2 border-blue-500/50 flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-blue-500">{milestone.year}</span>
                  </div>

                  <div className="md:pt-20 text-center">
                    <p className="md:hidden text-sm font-bold text-blue-500 mb-2">{milestone.year}</p>
                    <p className="text-sm font-semibold text-white mb-2">{milestone.event}</p>
                    <p className="text-xs text-zinc-500">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
