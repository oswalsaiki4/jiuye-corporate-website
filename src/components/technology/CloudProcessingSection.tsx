import { SectionHeader } from "@/components/ui/section-header";
import {
  Zap,
  GitBranch,
  Layers,
  RefreshCw,
  Shield,
  BarChart3
} from "lucide-react";

const processingCapabilities = [
  {
    icon: Zap,
    title: "实时处理",
    titleEn: "Real-time Processing",
    description: "流式数据处理架构，支持数据的实时接入、清洗与分发",
    metric: "< 100ms",
    metricLabel: "处理延迟",
  },
  {
    icon: GitBranch,
    title: "并行计算",
    titleEn: "Parallel Computing",
    description: "分布式计算框架，支持大规模数据的并行处理与分析",
    metric: "1000+",
    metricLabel: "并行任务",
  },
  {
    icon: Layers,
    title: "多级缓存",
    titleEn: "Multi-tier Caching",
    description: "智能缓存策略，优化数据访问性能与资源利用",
    metric: "10x",
    metricLabel: "访问加速",
  },
  {
    icon: RefreshCw,
    title: "自动扩缩容",
    titleEn: "Auto Scaling",
    description: "弹性资源调度，根据负载自动调整计算资源",
    metric: "秒级",
    metricLabel: "扩容响应",
  },
  {
    icon: Shield,
    title: "容错机制",
    titleEn: "Fault Tolerance",
    description: "多副本与故障恢复机制，确保服务高可用性",
    metric: "99.99%",
    metricLabel: "可用性",
  },
  {
    icon: BarChart3,
    title: "监控告警",
    titleEn: "Monitoring",
    description: "全链路监控与智能告警，实时掌握系统运行状态",
    metric: "7x24",
    metricLabel: "持续监控",
  },
];

const processingPipeline = [
  { step: "01", name: "数据接入", description: "多协议数据接入与格式解析" },
  { step: "02", name: "预处理", description: "数据清洗、去重与格式标准化" },
  { step: "03", name: "质量检测", description: "自动化质量检测与异常识别" },
  { step: "04", name: "特征提取", description: "关键特征提取与元数据生成" },
  { step: "05", name: "索引构建", description: "多维索引构建与检索优化" },
  { step: "06", name: "资产入库", description: "数据资产化与版本管理" },
];

export function CloudProcessingSection() {
  return (
    <section className="section-padding bg-zinc-900/30" id="cloud">
      <div className="container-wide">
        <SectionHeader
          label="云端处理"
          title="云端智能处理系统"
          titleEn="Cloud Intelligence Processing System"
          description="九烨云端处理系统提供强大的数据处理能力，通过分布式架构与智能算法，实现海量数据的高效处理与分析。"
        />

        {/* Processing Capabilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {processingCapabilities.map((cap) => (
            <div
              key={cap.title}
              className="group p-6 rounded-2xl bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                  <cap.icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-500">{cap.metric}</p>
                  <p className="text-xs text-zinc-500">{cap.metricLabel}</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">
                {cap.title}
              </h3>
              <p className="text-xs text-zinc-600 mb-3">{cap.titleEn}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* Processing Pipeline */}
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-950 border border-zinc-800/50">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
              处理流程
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              标准化数据处理流水线
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processingPipeline.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50 text-center h-full">
                  <span className="text-xs font-bold text-blue-500 mb-2 block">
                    {step.step}
                  </span>
                  <p className="text-sm font-medium text-white mb-1">
                    {step.name}
                  </p>
                  <p className="text-xs text-zinc-500">{step.description}</p>
                </div>

                {/* Connector */}
                {index < processingPipeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-zinc-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
