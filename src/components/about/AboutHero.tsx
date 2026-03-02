import { Building2, Users, Calendar, Award } from "lucide-react";

const highlights = [
  { icon: Calendar, label: "成立时间", value: "2025.09" },
  { icon: Users, label: "团队规模", value: "核心团队" },
  { icon: Building2, label: "总部", value: "深圳" },
  { icon: Award, label: "技术积累", value: "全栈自研" },
];

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-zinc-500 mb-8">
          <span>首页</span>
          <span>/</span>
          <span className="text-zinc-300">关于九烨</span>
        </div>

        <div className="max-w-4xl">
          {/* Label */}
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
            ABOUT JIUYE
          </p>

          {/* Title */}
          <h1 className="heading-display text-white mb-6">
            关于九烨
            <span className="block text-zinc-500 text-2xl md:text-3xl font-normal mt-3">
              About Jiuye Technology
            </span>
          </h1>

          {/* Description */}
          <p className="body-large max-w-3xl mb-12">
            深圳九烨数据智能科技有限公司是面向具身智能的平台级数据企业，致力于构建真实世界数据基础设施，
            通过标准化、规模化的数据生产与治理能力，为AI产业发展提供坚实的数据支撑。
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50"
              >
                <item.icon className="w-5 h-5 text-blue-500 mb-3" />
                <p className="text-2xl font-bold text-white mb-1">{item.value}</p>
                <p className="text-sm text-zinc-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
