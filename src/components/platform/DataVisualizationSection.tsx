"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { RadialChart } from "@/components/ui/radial-chart";
import { ProgressChart } from "@/components/ui/progress-chart";
import { BarChart } from "@/components/ui/bar-chart";

const qualityMetrics = [
  { label: "数据完整性", value: 99.5 },
  { label: "标注准确率", value: 99.2 },
  { label: "时序一致性", value: 98.8 },
  { label: "格式规范性", value: 99.9 },
];

const dataGrowth = [
  { label: "Q1", value: 65 },
  { label: "Q2", value: 78 },
  { label: "Q3", value: 92 },
  { label: "Q4", value: 100 },
];

const dataCategories = [
  { label: "视觉数据", value: 35 },
  { label: "操作数据", value: 25 },
  { label: "导航数据", value: 20 },
  { label: "交互数据", value: 12 },
  { label: "其他", value: 8 },
];

export function DataVisualizationSection() {
  return (
    <section className="section-padding bg-zinc-950" id="data-insights">
      <div className="container-wide">
        <SectionHeader
          label="数据洞察"
          title="平台数据概览"
          titleEn="Platform Data Overview"
          description="九烨平台持续积累高质量数据资产，以下数据展示了平台的运营规模与质量水平。"
          align="center"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quality Metrics */}
          <AnimatedSection delay={0}>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 h-full">
              <h3 className="text-lg font-semibold text-white mb-2">数据质量指标</h3>
              <p className="text-xs text-zinc-500 mb-6">Quality Metrics</p>

              <ProgressChart data={qualityMetrics} />
            </div>
          </AnimatedSection>

          {/* Data Growth */}
          <AnimatedSection delay={100}>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 h-full">
              <h3 className="text-lg font-semibold text-white mb-2">数据增长趋势</h3>
              <p className="text-xs text-zinc-500 mb-6">Data Growth Trend (2025)</p>

              <BarChart data={dataGrowth} height={180} />
            </div>
          </AnimatedSection>

          {/* Data Distribution */}
          <AnimatedSection delay={200}>
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 h-full">
              <h3 className="text-lg font-semibold text-white mb-2">数据类型分布</h3>
              <p className="text-xs text-zinc-500 mb-6">Data Type Distribution</p>

              <div className="flex justify-center mb-4">
                <RadialChart value={99} label="总体质量" sublabel="Overall Quality" size={140} />
              </div>

              <div className="space-y-2">
                {dataCategories.map((cat) => (
                  <div key={cat.label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-zinc-400">{cat.label}</span>
                    </div>
                    <span className="text-zinc-500">{cat.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Key Stats */}
        <AnimatedSection delay={300}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50 text-center">
              <p className="text-3xl font-bold text-blue-500 mb-1">2.5PB</p>
              <p className="text-sm text-zinc-400">累计数据量</p>
              <p className="text-xs text-zinc-600">Total Data Volume</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50 text-center">
              <p className="text-3xl font-bold text-blue-500 mb-1">1.2M</p>
              <p className="text-sm text-zinc-400">标注任务完成</p>
              <p className="text-xs text-zinc-600">Annotation Tasks</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50 text-center">
              <p className="text-3xl font-bold text-blue-500 mb-1">500K+</p>
              <p className="text-sm text-zinc-400">场景样本数</p>
              <p className="text-xs text-zinc-600">Scene Samples</p>
            </div>
            <div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800/50 text-center">
              <p className="text-3xl font-bold text-blue-500 mb-1">150+</p>
              <p className="text-sm text-zinc-400">场景类型</p>
              <p className="text-xs text-zinc-600">Scene Types</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
