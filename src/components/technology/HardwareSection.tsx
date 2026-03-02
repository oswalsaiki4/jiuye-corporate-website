import { SectionHeader } from "@/components/ui/section-header";
import {
  Camera,
  Radio,
  Cpu,
  Battery,
  Thermometer,
  HardDrive
} from "lucide-react";

const hardwareFeatures = [
  {
    icon: Camera,
    title: "多模态传感器",
    description: "集成RGB、深度、红外等多种传感器，实现全方位环境感知",
    specs: ["4K RGB", "ToF深度", "红外热成像", "激光雷达"],
  },
  {
    icon: Radio,
    title: "无线通信模块",
    description: "支持多种无线协议，确保数据实时传输与设备互联",
    specs: ["5G/4G", "WiFi 6", "蓝牙5.0", "LoRa"],
  },
  {
    icon: Cpu,
    title: "边缘计算单元",
    description: "内置AI加速芯片，支持端侧实时处理与智能决策",
    specs: ["NPU加速", "低功耗", "实时推理", "本地缓存"],
  },
  {
    icon: Battery,
    title: "能源管理系统",
    description: "智能电源管理，支持长时间连续采集与快速充电",
    specs: ["8小时续航", "快充支持", "智能调度", "低功耗模式"],
  },
  {
    icon: Thermometer,
    title: "环境适应性",
    description: "工业级设计，适应各种复杂环境条件下的稳定运行",
    specs: ["-20°C~60°C", "IP65防护", "防震设计", "抗干扰"],
  },
  {
    icon: HardDrive,
    title: "本地存储系统",
    description: "大容量本地存储，支持离线采集与数据缓存",
    specs: ["256GB存储", "高速读写", "数据加密", "断电保护"],
  },
];

export function HardwareSection() {
  return (
    <section className="section-padding bg-zinc-950" id="hardware">
      <div className="container-wide">
        <SectionHeader
          label="采集硬件"
          title="自研采集设备"
          titleEn="Proprietary Collection Hardware"
          description="九烨自主研发的专业数据采集设备，集成多模态传感器与边缘计算能力，为真实世界数据采集提供可靠的硬件基础。"
        />

        {/* Hardware Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {hardwareFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-blue-500/10 transition-colors">
                <feature.icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {feature.specs.map((spec) => (
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

        {/* Hardware Excellence */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
                设计理念
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                为真实世界数据采集而生
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                九烨采集设备从具身智能数据需求出发，专注于真实场景下的多维度数据采集。
                通过软硬件深度整合，实现采集、处理、传输的无缝协同，确保数据的完整性与时效性。
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm text-zinc-300">全自研设计，核心技术自主可控</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm text-zinc-300">模块化架构，灵活适配不同场景</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm text-zinc-300">工业级品质，稳定可靠长期运行</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/50 text-center">
                <p className="text-4xl font-bold text-white mb-2">10+</p>
                <p className="text-sm text-zinc-500">传感器类型</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/50 text-center">
                <p className="text-4xl font-bold text-white mb-2">3</p>
                <p className="text-sm text-zinc-500">产品系列</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/50 text-center">
                <p className="text-4xl font-bold text-white mb-2">50+</p>
                <p className="text-sm text-zinc-500">专利技术</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/50 text-center">
                <p className="text-4xl font-bold text-white mb-2">99.9%</p>
                <p className="text-sm text-zinc-500">设备可用率</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
