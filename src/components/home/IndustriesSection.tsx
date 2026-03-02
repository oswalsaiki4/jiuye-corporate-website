import Link from "next/link";
import { ArrowRight, GraduationCap, Bot, Building2, Microscope } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const industries = [
  {
    icon: GraduationCap,
    title: "科研机构",
    titleEn: "Research Institutions",
    description: "为高校与科研院所提供大规模、高质量的真实世界数据集，支撑前沿研究",
    applications: ["具身智能研究", "机器人学习", "多模态感知"],
  },
  {
    icon: Bot,
    title: "机器人企业",
    titleEn: "Robotics Companies",
    description: "为机器人与智能设备厂商提供多场景训练数据，加速产品落地",
    applications: ["服务机器人", "工业机器人", "自动驾驶"],
  },
  {
    icon: Building2,
    title: "AI企业",
    titleEn: "AI Enterprises",
    description: "为AI模型开发企业提供专业的数据采集与标注服务，优化模型效果",
    applications: ["大模型训练", "多模态融合", "场景理解"],
  },
  {
    icon: Microscope,
    title: "产业研究",
    titleEn: "Industrial Research",
    description: "为产业研究与政策制定提供真实的数据支持与洞察",
    applications: ["产业分析", "趋势研究", "政策支持"],
  },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-zinc-950">
      <div className="container-wide">
        <SectionHeader
          label="行业应用"
          title="服务多元行业需求"
          titleEn="Serving Diverse Industry Needs"
          description="九烨平台的数据能力已服务于科研机构、机器人企业、AI企业等多个领域，为具身智能生态提供数据基础支撑。"
        />

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                  <industry.icon className="w-7 h-7 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">
                {industry.title}
              </h3>
              <p className="text-sm text-zinc-600 mb-4">{industry.titleEn}</p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {industry.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {industry.applications.map((app) => (
                  <span
                    key={app}
                    className="text-xs text-zinc-500 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/industries"
            className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors group"
          >
            查看全部行业应用
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
