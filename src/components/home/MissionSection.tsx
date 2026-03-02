import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MissionSection() {
  return (
    <section className="section-padding bg-zinc-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote mark */}
          <div className="mb-8">
            <span className="text-6xl text-blue-500/20 font-serif">"</span>
          </div>

          {/* Mission statement */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            让真实世界的数据
            <br />
            <span className="text-gradient-gold">成为智能时代的基石</span>
          </h2>

          <p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-2xl mx-auto">
            九烨致力于成为具身智能时代不可或缺的数据基础设施，
            通过平台化、标准化的运营模式，持续积累高价值数据资产，
            为AI产业的长期发展提供坚实支撑。
          </p>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">平台化</p>
              <p className="text-sm text-zinc-500">Platform-Oriented</p>
              <p className="mt-4 text-sm text-zinc-400">
                构建可持续扩展的平台架构，支撑长期业务发展
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">标准化</p>
              <p className="text-sm text-zinc-500">Standardization</p>
              <p className="mt-4 text-sm text-zinc-400">
                建立统一的数据标准与流程，确保数据资产质量
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white mb-2">长期主义</p>
              <p className="text-sm text-zinc-500">Long-term Vision</p>
              <p className="mt-4 text-sm text-zinc-400">
                坚持价值积累与能力建设，追求可持续增长
              </p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-all group"
          >
            了解更多关于九烨
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
