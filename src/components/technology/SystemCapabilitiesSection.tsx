import { SectionHeader } from "@/components/ui/section-header";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const capabilities = [
  {
    category: "数据采集能力",
    categoryEn: "Data Collection",
    items: [
      { name: "多传感器同步采集", supported: true },
      { name: "边缘实时处理", supported: true },
      { name: "离线数据缓存", supported: true },
      { name: "自动校准与标定", supported: true },
      { name: "远程设备管理", supported: true },
    ],
  },
  {
    category: "数据处理能力",
    categoryEn: "Data Processing",
    items: [
      { name: "多格式数据解析", supported: true },
      { name: "自动质量检测", supported: true },
      { name: "多模态数据对齐", supported: true },
      { name: "智能数据清洗", supported: true },
      { name: "批量并行处理", supported: true },
    ],
  },
  {
    category: "数据标注能力",
    categoryEn: "Data Annotation",
    items: [
      { name: "2D/3D标注工具", supported: true },
      { name: "序列数据标注", supported: true },
      { name: "半自动标注辅助", supported: true },
      { name: "标注质量检验", supported: true },
      { name: "标注流程管理", supported: true },
    ],
  },
  {
    category: "数据管理能力",
    categoryEn: "Data Management",
    items: [
      { name: "元数据管理", supported: true },
      { name: "版本控制", supported: true },
      { name: "权限管理", supported: true },
      { name: "数据检索", supported: true },
      { name: "API数据访问", supported: true },
    ],
  },
];

export function SystemCapabilitiesSection() {
  return (
    <section className="section-padding bg-zinc-950" id="capabilities">
      <div className="container-wide">
        <SectionHeader
          label="系统能力"
          title="平台系统能力矩阵"
          titleEn="Platform System Capability Matrix"
          description="九烨平台覆盖数据全生命周期的各项能力，为客户提供完整、专业的数据服务支撑。"
          align="center"
        />

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {capabilities.map((cap) => (
            <div
              key={cap.category}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50"
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                {cap.category}
              </h3>
              <p className="text-xs text-zinc-600 mb-6">{cap.categoryEn}</p>

              <div className="space-y-3">
                {cap.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-500" />
                    </div>
                    <span className="text-sm text-zinc-400">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Advantages */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
                技术优势
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                自主可控的技术能力
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                九烨坚持核心技术自主研发，从采集硬件到云端平台，构建了完整的自主技术栈。
                这不仅确保了平台的可控性与安全性，也为持续的技术创新奠定了坚实基础。
              </p>

              <Link
                href="/about#contact"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-all group"
              >
                技术合作咨询
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/50">
                <p className="text-4xl font-bold text-white mb-2">100%</p>
                <p className="text-sm text-zinc-500">核心技术自研</p>
                <p className="text-xs text-zinc-600 mt-2">
                  采集硬件、处理平台、标注工具全栈自研
                </p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/50">
                <p className="text-4xl font-bold text-white mb-2">200+</p>
                <p className="text-sm text-zinc-500">技术专利</p>
                <p className="text-xs text-zinc-600 mt-2">
                  覆盖硬件设计、算法、系统架构等领域
                </p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/50">
                <p className="text-4xl font-bold text-white mb-2">50+</p>
                <p className="text-sm text-zinc-500">研发团队</p>
                <p className="text-xs text-zinc-600 mt-2">
                  来自顶尖科技企业与研究机构
                </p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/50">
                <p className="text-4xl font-bold text-white mb-2">5年+</p>
                <p className="text-sm text-zinc-500">技术积累</p>
                <p className="text-xs text-zinc-600 mt-2">
                  持续迭代优化，经过实践验证
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
