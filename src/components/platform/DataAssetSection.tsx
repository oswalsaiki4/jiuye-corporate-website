import { SectionHeader } from "@/components/ui/section-header";
import Link from "next/link";
import {
  Package,
  Layers,
  Settings,
  Clock,
  ArrowRight,
  Database,
  FileJson,
  Cloud
} from "lucide-react";

const deliveryModels = [
  {
    icon: Package,
    title: "标准数据集",
    titleEn: "Standard Datasets",
    description: "预制的标准化数据集产品，涵盖多种场景与任务类型，可快速部署使用",
    features: ["开箱即用", "文档完备", "持续更新", "技术支持"],
    suitable: "适用于标准化研究与原型开发",
  },
  {
    icon: Settings,
    title: "定制采集",
    titleEn: "Custom Collection",
    description: "根据客户特定需求进行场景定制与数据采集，提供专属数据资产",
    features: ["需求定制", "专属采集", "独家授权", "深度对接"],
    suitable: "适用于特定场景与独特需求",
  },
  {
    icon: Clock,
    title: "订阅服务",
    titleEn: "Subscription",
    description: "持续提供特定类型的增量数据，支持模型的持续训练与优化",
    features: ["持续供给", "增量更新", "优先获取", "专属通道"],
    suitable: "适用于长期训练与模型迭代",
  },
];

const assetSpecs = [
  { label: "数据格式", value: "标准化JSON/HDF5/自定义" },
  { label: "元数据", value: "完整采集与处理元数据" },
  { label: "文档", value: "使用说明/API文档/案例" },
  { label: "交付方式", value: "云存储/API/离线介质" },
];

export function DataAssetSection() {
  return (
    <section className="section-padding bg-zinc-900/30" id="assets">
      <div className="container-wide">
        <SectionHeader
          label="数据资产"
          title="数据资产化与交付"
          titleEn="Data Assetization & Delivery"
          description="九烨将高质量数据转化为可管理、可交易的数据资产，通过多元化的交付模式满足不同客户的数据需求。"
        />

        {/* Delivery Models */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {deliveryModels.map((model) => (
            <div
              key={model.title}
              className="group p-8 rounded-2xl bg-zinc-950 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                <model.icon className="w-7 h-7 text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-1">
                {model.title}
              </h3>
              <p className="text-sm text-zinc-600 mb-4">{model.titleEn}</p>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {model.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {model.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs text-blue-500/80 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <p className="text-xs text-zinc-500 border-t border-zinc-800 pt-4">
                {model.suitable}
              </p>
            </div>
          ))}
        </div>

        {/* Asset Specifications */}
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-950 border border-zinc-800/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
                资产规格
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                标准化数据资产规格
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                九烨的数据资产遵循统一的规格标准，确保数据的可用性、可追溯性与互操作性，
                为客户提供高质量、标准化的数据交付体验。
              </p>

              <div className="space-y-4">
                {assetSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50"
                  >
                    <span className="text-sm text-zinc-500">{spec.label}</span>
                    <span className="text-sm font-medium text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual representation */}
            <div className="relative p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
              <div className="space-y-6">
                {/* Data asset visualization */}
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <Database className="w-8 h-8 text-blue-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">原始数据层</p>
                    <p className="text-xs text-zinc-500">Raw Data Layer</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-6 bg-zinc-700" />
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <FileJson className="w-8 h-8 text-blue-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">结构化数据层</p>
                    <p className="text-xs text-zinc-500">Structured Data Layer</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-6 bg-zinc-700" />
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                  <Layers className="w-8 h-8 text-blue-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">标注数据层</p>
                    <p className="text-xs text-zinc-500">Annotated Data Layer</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-6 bg-zinc-700" />
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Cloud className="w-8 h-8 text-blue-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">数据资产交付</p>
                    <p className="text-xs text-zinc-500">Data Asset Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/about#contact"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-all group"
          >
            咨询数据服务
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
