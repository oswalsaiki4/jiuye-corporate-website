import { SectionHeader } from "@/components/ui/section-header";
import { Eye, Hand, Footprints, Brain, Compass, MessageSquare } from "lucide-react";

const dataTypes = [
  {
    icon: Eye,
    title: "视觉感知数据",
    titleEn: "Visual Perception",
    description: "多视角、多光照条件下的真实环境视觉数据，包含深度信息与语义标注",
    specs: ["RGB-D图像", "全景视频", "3D点云"],
  },
  {
    icon: Hand,
    title: "操作交互数据",
    titleEn: "Manipulation Data",
    description: "人机交互过程中的操作行为数据，记录精细动作与力反馈信息",
    specs: ["抓取轨迹", "力觉反馈", "触觉感知"],
  },
  {
    icon: Footprints,
    title: "导航运动数据",
    titleEn: "Navigation Data",
    description: "室内外多场景的导航与运动数据，支撑路径规划与避障决策",
    specs: ["路径轨迹", "里程计", "IMU数据"],
  },
  {
    icon: Brain,
    title: "认知决策数据",
    titleEn: "Cognitive Data",
    description: "任务理解与执行过程中的决策数据，建立行为-意图映射",
    specs: ["任务标注", "意图标签", "状态转移"],
  },
  {
    icon: Compass,
    title: "空间理解数据",
    titleEn: "Spatial Understanding",
    description: "环境空间结构与语义理解数据，构建场景知识图谱",
    specs: ["场景分割", "物体检测", "空间关系"],
  },
  {
    icon: MessageSquare,
    title: "多模态交互数据",
    titleEn: "Multimodal Interaction",
    description: "语音、手势、表情等多模态人机交互数据的同步采集与标注",
    specs: ["语音指令", "手势识别", "表情分析"],
  },
];

export function EmbodiedDataSection() {
  return (
    <section className="section-padding bg-zinc-900/30" id="embodied-data">
      <div className="container-wide">
        <SectionHeader
          label="数据类型"
          title="具身智能数据体系"
          titleEn="Embodied Intelligence Data System"
          description="具身智能的发展需要机器人在真实物理世界中感知、理解、决策与行动。九烨平台提供覆盖感知、认知、操作全链路的多维度数据类型。"
          align="center"
        />

        {/* Data Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataTypes.map((type) => (
            <div
              key={type.title}
              className="group p-6 rounded-2xl bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                  <type.icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">
                {type.title}
              </h3>
              <p className="text-xs text-zinc-600 mb-3">{type.titleEn}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {type.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {type.specs.map((spec) => (
                  <span
                    key={spec}
                    className="text-xs text-zinc-500 px-2.5 py-1 rounded-full bg-zinc-800/50"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Data Value Statement */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/50">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
              数据价值
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              真实世界数据的不可替代性
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              与合成数据相比，来自真实物理世界的数据蕴含真实的物理规律、环境噪声、边缘情况与人类行为模式。
              这些特性对于训练能够在真实环境中可靠运行的具身智能系统至关重要。
              九烨平台通过规模化的真实场景数据采集，为AI模型提供不可替代的训练基础。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
