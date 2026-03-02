import { GraduationCap, Building2, Bot, MapPin } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "科研机构", value: "50+" },
  { icon: Building2, label: "企业客户", value: "30+" },
  { icon: Bot, label: "行业覆盖", value: "10+" },
  { icon: MapPin, label: "城市节点", value: "100+" },
];

export function IndustriesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-wide relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-zinc-500 mb-8">
          <span>首页</span>
          <span>/</span>
          <span className="text-zinc-300">行业与网络</span>
        </div>

        <div className="max-w-4xl">
          {/* Label */}
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-500 mb-4">
            INDUSTRIES & NETWORK
          </p>

          {/* Title */}
          <h1 className="heading-display text-white mb-6">
            行业应用与全国网络
            <span className="block text-zinc-500 text-2xl md:text-3xl font-normal mt-3">
              Industry Applications & Nationwide Network
            </span>
          </h1>

          {/* Description */}
          <p className="body-large max-w-3xl mb-12">
            九烨平台服务于科研机构、AI企业、机器人厂商等多个领域，通过遍布全国的数据采集网络，
            为具身智能产业提供规模化、多样化的真实世界数据支撑。
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
