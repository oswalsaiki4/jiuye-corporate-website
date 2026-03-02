import { SectionHeader } from "@/components/ui/section-header";
import {
  Shield,
  FileCheck,
  Eye,
  AlertTriangle,
  RefreshCw,
  Lock,
  ChevronRight
} from "lucide-react";

const governancePillars = [
  {
    icon: FileCheck,
    title: "标准规范",
    titleEn: "Standards",
    description: "建立覆盖全流程的数据标准与操作规范，确保数据生产的一致性与可追溯性",
    items: ["采集标准", "格式规范", "标注指南", "质量基准"],
  },
  {
    icon: Eye,
    title: "过程监控",
    titleEn: "Monitoring",
    description: "实时监控数据生产各环节的状态与质量指标，及时发现并处理异常",
    items: ["实时监控", "指标告警", "异常检测", "状态追踪"],
  },
  {
    icon: AlertTriangle,
    title: "风险控制",
    titleEn: "Risk Control",
    description: "识别与管控数据生产过程中的潜在风险，保障数据安全与合规",
    items: ["隐私保护", "合规审查", "权限管理", "安全审计"],
  },
  {
    icon: RefreshCw,
    title: "持续改进",
    titleEn: "Improvement",
    description: "基于质量反馈与客户需求，持续优化数据治理体系与生产流程",
    items: ["问题复盘", "流程优化", "工具升级", "能力提升"],
  },
];

const qualityLayers = [
  { level: "L1", name: "自动化检测", description: "AI模型自动检测数据质量问题", rate: "100%" },
  { level: "L2", name: "标注员自检", description: "标注人员完成后的自我检查", rate: "100%" },
  { level: "L3", name: "质检员审核", description: "专职质检人员的全量审核", rate: "100%" },
  { level: "L4", name: "抽样复检", description: "随机抽样的独立复核检验", rate: "20%" },
  { level: "L5", name: "客户验收", description: "客户交付前的最终验收", rate: "100%" },
];

export function QualityGovernanceSection() {
  return (
    <section className="section-padding bg-zinc-950" id="quality">
      <div className="container-wide">
        <SectionHeader
          label="质量治理"
          title="数据质量管控体系"
          titleEn="Data Quality Governance System"
          description="九烨建立了企业级的数据治理框架，从标准规范、过程监控、风险控制到持续改进，全方位保障数据资产的质量与价值。"
        />

        {/* Governance Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {governancePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-blue-500/10 transition-colors">
                <pillar.icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">
                {pillar.title}
              </h3>
              <p className="text-xs text-zinc-600 mb-3">{pillar.titleEn}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {pillar.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {pillar.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-zinc-500 px-2.5 py-1 rounded-full bg-zinc-800/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Layers */}
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800/50">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">多层质量检验</h3>
                  <p className="text-sm text-zinc-500">Multi-Layer Quality Inspection</p>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-8">
                九烨采用五层质量检验机制，从自动化检测到客户验收，层层把关，
                确保交付的每一份数据都满足客户的质量要求。
              </p>

              <div className="space-y-4">
                {qualityLayers.map((layer, index) => (
                  <div
                    key={layer.level}
                    className="flex items-center p-4 rounded-xl bg-zinc-950 border border-zinc-800/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mr-4">
                      <span className="text-sm font-bold text-blue-500">{layer.level}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{layer.name}</p>
                      <p className="text-xs text-zinc-500">{layer.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-zinc-400">{layer.rate}</span>
                    </div>
                    {index < qualityLayers.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-zinc-600 ml-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Security & Compliance */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">安全与合规</h3>
                  <p className="text-sm text-zinc-500">Security & Compliance</p>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-8">
                数据安全是平台运营的基础。九烨严格遵循数据保护法规，
                建立完善的安全管理体系，保障用户数据的隐私与安全。
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/50">
                  <p className="text-2xl font-bold text-white mb-1">ISO 27001</p>
                  <p className="text-xs text-zinc-500">信息安全管理体系认证</p>
                </div>
                <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/50">
                  <p className="text-2xl font-bold text-white mb-1">等保三级</p>
                  <p className="text-xs text-zinc-500">网络安全等级保护</p>
                </div>
                <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/50">
                  <p className="text-2xl font-bold text-white mb-1">GDPR</p>
                  <p className="text-xs text-zinc-500">通用数据保护条例合规</p>
                </div>
                <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800/50">
                  <p className="text-2xl font-bold text-white mb-1">SOC 2</p>
                  <p className="text-xs text-zinc-500">服务组织控制报告</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
