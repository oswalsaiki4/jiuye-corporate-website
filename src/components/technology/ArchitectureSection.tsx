import { SectionHeader } from "@/components/ui/section-header";
import {
  Smartphone,
  Wifi,
  Server,
  Cloud,
  Database,
  ArrowDown
} from "lucide-react";

const architectureLayers = [
  {
    layer: "终端层",
    layerEn: "Terminal Layer",
    icon: Smartphone,
    description: "自研采集设备与传感器系统，实现多维度数据的标准化采集",
    components: ["采集终端", "传感器阵列", "边缘计算", "本地存储"],
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    layer: "传输层",
    layerEn: "Transport Layer",
    icon: Wifi,
    description: "安全高效的数据传输网络，确保数据实时上传与同步",
    components: ["加密传输", "断点续传", "流量优化", "状态监控"],
    color: "from-zinc-500/20 to-zinc-600/10",
  },
  {
    layer: "平台层",
    layerEn: "Platform Layer",
    icon: Server,
    description: "分布式平台架构，支撑海量数据的汇聚、调度与管理",
    components: ["任务调度", "节点管理", "资源分配", "状态同步"],
    color: "from-zinc-500/20 to-zinc-600/10",
  },
  {
    layer: "处理层",
    layerEn: "Processing Layer",
    icon: Cloud,
    description: "云端智能处理系统，实现数据的自动化清洗与结构化",
    components: ["数据清洗", "格式转换", "质量检测", "特征提取"],
    color: "from-zinc-500/20 to-zinc-600/10",
  },
  {
    layer: "存储层",
    layerEn: "Storage Layer",
    icon: Database,
    description: "分布式存储系统，提供高可用、高性能的数据存储能力",
    components: ["对象存储", "元数据库", "索引系统", "备份机制"],
    color: "from-blue-500/20 to-blue-600/10",
  },
];

export function ArchitectureSection() {
  return (
    <section className="section-padding bg-zinc-900/30" id="architecture">
      <div className="container-wide">
        <SectionHeader
          label="技术架构"
          title="端到端技术架构"
          titleEn="End-to-End Technology Architecture"
          description="九烨技术架构覆盖从终端采集到云端存储的完整链路，各层级之间高效协同，共同支撑平台的数据生产能力。"
          align="center"
        />

        {/* Architecture Diagram */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {architectureLayers.map((layer, index) => (
              <div key={layer.layer}>
                <div className={`p-6 rounded-2xl bg-gradient-to-r ${layer.color} border border-zinc-800/50`}>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-zinc-900/50 flex items-center justify-center flex-shrink-0">
                      <layer.icon className="w-7 h-7 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{layer.layer}</h3>
                        <span className="text-sm text-zinc-500">{layer.layerEn}</span>
                      </div>
                      <p className="text-sm text-zinc-400 mb-4">{layer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {layer.components.map((comp) => (
                          <span
                            key={comp}
                            className="text-xs text-zinc-500 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-px h-4 bg-zinc-700" />
                    <ArrowDown className="w-4 h-4 text-zinc-600 -ml-2" />
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
