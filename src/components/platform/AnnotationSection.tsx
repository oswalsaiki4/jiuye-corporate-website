import { SectionHeader } from "@/components/ui/section-header";
import {
  Tag,
  Box,
  Move3d,
  Type,
  Scan,
  GitBranch,
  CheckCircle2
} from "lucide-react";

const annotationTypes = [
  {
    icon: Box,
    title: "2D标注",
    description: "边界框、多边形、关键点等二维图像标注",
    items: ["目标检测框", "实例分割", "语义分割", "关键点标注"],
  },
  {
    icon: Move3d,
    title: "3D标注",
    description: "点云、深度图的三维空间标注与重建",
    items: ["3D边界框", "点云分割", "三维重建", "空间关系"],
  },
  {
    icon: GitBranch,
    title: "序列标注",
    description: "视频与时序数据的连续性标注与跟踪",
    items: ["目标跟踪", "动作分段", "轨迹标注", "时序对齐"],
  },
  {
    icon: Type,
    title: "语义标注",
    description: "场景、物体、行为的语义理解与描述",
    items: ["场景分类", "属性标签", "关系描述", "自然语言"],
  },
  {
    icon: Scan,
    title: "多模态标注",
    description: "跨模态数据的对齐与联合标注",
    items: ["视觉-语言对齐", "动作-指令映射", "多传感器融合"],
  },
  {
    icon: Tag,
    title: "任务标注",
    description: "面向具体任务的专业化标注方案",
    items: ["抓取标注", "导航标注", "操作标注", "交互标注"],
  },
];

const qualityFeatures = [
  { title: "多级审核", description: "标注员→质检员→抽检的三级审核机制" },
  { title: "一致性校验", description: "同一数据多人标注的交叉验证" },
  { title: "标准规范", description: "详尽的标注指南与案例库" },
  { title: "持续优化", description: "基于反馈的标注质量迭代提升" },
];

export function AnnotationSection() {
  return (
    <section className="section-padding bg-zinc-900/30" id="annotation">
      <div className="container-wide">
        <SectionHeader
          label="数据标注"
          title="专业数据标注服务"
          titleEn="Professional Data Annotation Services"
          description="九烨提供覆盖2D、3D、序列、语义等多维度的数据标注能力，通过专业团队与质量管控体系，确保标注数据的准确性与一致性。"
        />

        {/* Annotation Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {annotationTypes.map((type) => (
            <div
              key={type.title}
              className="group p-6 rounded-2xl bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-blue-500/10 transition-colors">
                <type.icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {type.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {type.description}
              </p>

              <div className="space-y-2">
                {type.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center text-xs text-zinc-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/30 mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance */}
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-950 border border-zinc-800/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
                质量保障
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                标注质量管控体系
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                高质量的标注数据是AI模型训练的基础。九烨建立了完善的标注质量管控体系，
                从标注规范、人员培训到多级审核，全流程确保标注结果的准确性与一致性。
              </p>

              <div className="grid grid-cols-2 gap-4">
                {qualityFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">{feature.title}</p>
                      <p className="text-xs text-zinc-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality metrics visualization */}
            <div className="relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">标注准确率</span>
                    <span className="text-white font-medium">99.2%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[99.2%] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">一致性评分</span>
                    <span className="text-white font-medium">98.5%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[98.5%] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">审核通过率</span>
                    <span className="text-white font-medium">97.8%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[97.8%] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">客户满意度</span>
                    <span className="text-white font-medium">99.5%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[99.5%] bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
