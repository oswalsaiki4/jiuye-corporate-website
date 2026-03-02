import { SectionHeader } from "@/components/ui/section-header";
import {
  GraduationCap,
  Bot,
  Building2,
  Car,
  Home,
  Factory,
  Stethoscope,
  ShoppingBag
} from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    category: "科研机构",
    categoryEn: "Research Institutions",
    description: "高校与研究机构的具身智能研究项目，提供多样化的真实世界数据集",
    applications: [
      { name: "具身智能研究", description: "机器人感知、决策、操作等基础研究" },
      { name: "多模态学习", description: "视觉-语言-动作的多模态融合研究" },
      { name: "仿真验证", description: "真实数据驱动的仿真环境构建" },
    ],
    clients: ["清华大学", "北京大学", "中科院自动化所"],
  },
  {
    icon: Bot,
    category: "机器人企业",
    categoryEn: "Robotics Companies",
    description: "服务机器人、工业机器人等产品的模型训练与场景适配",
    applications: [
      { name: "服务机器人", description: "室内导航、人机交互、物品操作" },
      { name: "工业机器人", description: "装配作业、质检分拣、物流搬运" },
      { name: "特种机器人", description: "巡检维护、应急救援、农业作业" },
    ],
    clients: ["优必选", "追觅科技", "擎朗智能"],
  },
  {
    icon: Car,
    category: "自动驾驶",
    categoryEn: "Autonomous Driving",
    description: "自动驾驶系统的感知训练与场景测试数据",
    applications: [
      { name: "感知系统", description: "多传感器融合的环境感知训练" },
      { name: "规划决策", description: "复杂交通场景的决策数据" },
      { name: "长尾场景", description: "罕见边缘场景的数据采集" },
    ],
    clients: ["小马智行", "文远知行", "元戎启行"],
  },
  {
    icon: Building2,
    category: "AI企业",
    categoryEn: "AI Enterprises",
    description: "大模型训练与多模态AI系统的数据支撑",
    applications: [
      { name: "大模型训练", description: "真实世界知识与交互数据" },
      { name: "多模态AI", description: "视觉-语言-动作的对齐数据" },
      { name: "场景理解", description: "复杂场景的结构化理解数据" },
    ],
    clients: ["百度", "阿里巴巴", "字节跳动"],
  },
];

const additionalIndustries = [
  { icon: Home, name: "智能家居", description: "家庭场景的交互与操作数据" },
  { icon: Factory, name: "智能制造", description: "工业生产环境的感知数据" },
  { icon: Stethoscope, name: "医疗健康", description: "医疗辅助机器人的操作数据" },
  { icon: ShoppingBag, name: "智慧零售", description: "零售场景的交互与服务数据" },
];

export function IndustryApplicationsSection() {
  return (
    <section className="section-padding bg-zinc-900/30" id="applications">
      <div className="container-wide">
        <SectionHeader
          label="行业应用"
          title="服务多元行业需求"
          titleEn="Serving Diverse Industry Needs"
          description="九烨平台的数据能力已覆盖具身智能产业链的多个关键环节，为科研、产业提供专业的数据支撑。"
        />

        {/* Main Industries */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {industries.map((industry) => (
            <div
              key={industry.category}
              className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/50"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <industry.icon className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {industry.category}
                  </h3>
                  <p className="text-sm text-zinc-500">{industry.categoryEn}</p>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-6">
                {industry.description}
              </p>

              <div className="space-y-4 mb-6">
                {industry.applications.map((app) => (
                  <div key={app.name} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">{app.name}</p>
                      <p className="text-xs text-zinc-500">{app.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <p className="text-xs text-zinc-600 mb-2">代表性客户</p>
                <div className="flex flex-wrap gap-2">
                  {industry.clients.map((client) => (
                    <span
                      key={client}
                      className="text-xs text-zinc-400 px-3 py-1.5 rounded-full bg-zinc-800/50"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Industries */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {additionalIndustries.map((industry) => (
            <div
              key={industry.name}
              className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/50 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mx-auto mb-3">
                <industry.icon className="w-6 h-6 text-zinc-400" />
              </div>
              <p className="text-sm font-medium text-white mb-1">{industry.name}</p>
              <p className="text-xs text-zinc-500">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
