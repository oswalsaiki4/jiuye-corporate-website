import { SectionHeader } from "@/components/ui/section-header";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

const useCases = [
  {
    type: "科研案例",
    typeEn: "Research Case",
    title: "具身智能基础研究数据支撑",
    institution: "某顶尖高校AI实验室",
    challenge: "具身智能研究需要大规模、多样化的真实世界数据，但数据采集成本高、周期长，制约了研究进展。",
    solution: "九烨提供覆盖室内外多场景的标准化数据集，包含导航、操作、交互等多种任务类型的真实数据。",
    results: [
      "缩短数据准备周期80%",
      "数据覆盖场景提升5倍",
      "支撑3篇顶会论文发表",
    ],
    quote: "九烨的数据让我们能够专注于算法研究，而不是数据采集。数据的质量和多样性超出预期。",
  },
  {
    type: "企业案例",
    typeEn: "Enterprise Case",
    title: "服务机器人场景理解能力提升",
    institution: "某头部机器人企业",
    challenge: "服务机器人需要理解复杂的家庭和商业环境，但获取真实场景数据存在隐私和规模化挑战。",
    solution: "九烨通过分布式采集网络，提供脱敏处理后的真实场景数据，覆盖数百种典型室内环境。",
    results: [
      "场景识别准确率提升35%",
      "边缘情况覆盖率提升60%",
      "产品落地周期缩短40%",
    ],
    quote: "真实场景数据的多样性是我们产品能力提升的关键。九烨的数据帮助我们覆盖了此前难以获取的长尾场景。",
  },
];

export function UseCasesSection() {
  return (
    <section className="section-padding bg-zinc-900/30" id="cases">
      <div className="container-wide">
        <SectionHeader
          label="合作案例"
          title="客户成功案例"
          titleEn="Customer Success Stories"
          description="九烨已与多家科研机构和企业建立合作，帮助客户加速具身智能研发与产品落地。"
          align="center"
        />

        {/* Use Cases */}
        <div className="space-y-8 mb-12">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="p-8 md:p-12 rounded-3xl bg-zinc-950 border border-zinc-800/50"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-500 font-medium mb-4">
                    {useCase.type} | {useCase.typeEn}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mb-6">{useCase.institution}</p>

                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-2">
                        挑战
                      </p>
                      <p className="text-sm text-zinc-400">{useCase.challenge}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-2">
                        解决方案
                      </p>
                      <p className="text-sm text-zinc-400">{useCase.solution}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50 mb-6">
                    <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-4">
                      成果
                    </p>
                    <div className="space-y-3">
                      {useCase.results.map((result) => (
                        <div key={result} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="text-sm text-white font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-zinc-800/30 border border-zinc-700/50">
                    <Quote className="w-6 h-6 text-blue-500/30 mb-3" />
                    <p className="text-sm text-zinc-300 italic leading-relaxed mb-3">
                      "{useCase.quote}"
                    </p>
                    <p className="text-xs text-zinc-500">— {useCase.institution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/about#contact"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-all group"
          >
            探讨合作机会
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
