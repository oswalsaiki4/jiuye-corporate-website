import { SectionHeader } from "@/components/ui/section-header";
import {
  Smartphone,
  Cloud,
  Database,
  CheckCircle,
  Package,
  ArrowRight,
  Users,
  MapPin,
  Clock,
  Layers
} from "lucide-react";

const productionStages = [
  {
    stage: "01",
    icon: Smartphone,
    title: "终端采集",
    titleEn: "Terminal Collection",
    description: "通过自研采集设备与标准化采集流程，在真实场景中进行多维度数据采集",
    details: [
      "自研专业采集硬件",
      "多传感器同步采集",
      "实时质量校验",
      "元数据自动记录",
    ],
  },
  {
    stage: "02",
    icon: Cloud,
    title: "云端汇聚",
    titleEn: "Cloud Aggregation",
    description: "采集数据通过安全通道实时上传至云端平台，进行初步处理与分类",
    details: [
      "端到端加密传输",
      "自动格式转换",
      "数据预处理",
      "冗余备份机制",
    ],
  },
  {
    stage: "03",
    icon: Database,
    title: "结构化处理",
    titleEn: "Structured Processing",
    description: "对原始数据进行清洗、对齐、分割等处理，形成标准化数据资产",
    details: [
      "多模态对齐",
      "噪声过滤",
      "序列分割",
      "标准化封装",
    ],
  },
  {
    stage: "04",
    icon: CheckCircle,
    title: "质量审核",
    titleEn: "Quality Review",
    description: "多层级质量检验体系，确保数据满足AI训练需求的质量标准",
    details: [
      "自动化检测",
      "人工抽检",
      "质量评分",
      "问题追溯",
    ],
  },
  {
    stage: "05",
    icon: Package,
    title: "资产入库",
    titleEn: "Asset Storage",
    description: "通过审核的数据进入资产库，完成标签化管理与版本控制",
    details: [
      "语义标签",
      "版本管理",
      "检索索引",
      "访问控制",
    ],
  },
];

const productionStats = [
  { icon: Users, value: "10,000+", label: "数据贡献者" },
  { icon: MapPin, value: "100+", label: "采集城市" },
  { icon: Clock, value: "7×24", label: "持续运营" },
  { icon: Layers, value: "PB级", label: "数据规模" },
];

export function DataProductionSection() {
  return (
    <section className="section-padding bg-zinc-950" id="production">
      <div className="container-wide">
        <SectionHeader
          label="数据生产"
          title="全链路数据生产体系"
          titleEn="End-to-End Data Production System"
          description="九烨建立了从终端采集到资产入库的完整数据生产链路，通过标准化流程与自动化工具，实现规模化、高质量的数据生产能力。"
        />

        {/* Production Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {productionStats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50 flex items-center space-x-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-zinc-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Production Pipeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

          <div className="grid lg:grid-cols-5 gap-6">
            {productionStages.map((stage, index) => (
              <div key={stage.stage} className="relative">
                {/* Stage card */}
                <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all h-full">
                  {/* Stage number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-blue-500">
                      STAGE {stage.stage}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                      <stage.icon className="w-5 h-5 text-zinc-400" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-zinc-600 mb-3">{stage.titleEn}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {stage.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {stage.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center text-xs text-zinc-500"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-500/50 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow for desktop */}
                {index < productionStages.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-24 w-6 h-6 items-center justify-center z-10">
                    <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-zinc-500" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
