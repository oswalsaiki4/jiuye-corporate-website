import { SectionHeader } from "@/components/ui/section-header";
import { MapPin, Users, Clock, TrendingUp } from "lucide-react";

const networkStats = [
  { icon: MapPin, value: "100+", label: "城市节点", description: "覆盖全国主要城市" },
  { icon: Users, value: "10,000+", label: "数据贡献者", description: "活跃的数据采集网络" },
  { icon: Clock, value: "7×24", label: "持续运营", description: "全天候数据采集能力" },
  { icon: TrendingUp, value: "20%", label: "月增长", description: "网络持续扩展中" },
];

const regions = [
  {
    name: "华北区",
    nameEn: "North China",
    cities: ["北京", "天津", "石家庄", "太原", "呼和浩特"],
    nodeCount: 18,
  },
  {
    name: "华东区",
    nameEn: "East China",
    cities: ["上海", "杭州", "南京", "苏州", "合肥", "济南", "青岛", "宁波"],
    nodeCount: 28,
  },
  {
    name: "华南区",
    nameEn: "South China",
    cities: ["深圳", "广州", "厦门", "福州", "东莞", "佛山", "珠海"],
    nodeCount: 22,
  },
  {
    name: "华中区",
    nameEn: "Central China",
    cities: ["武汉", "长沙", "郑州", "南昌"],
    nodeCount: 12,
  },
  {
    name: "西南区",
    nameEn: "Southwest",
    cities: ["成都", "重庆", "昆明", "贵阳", "南宁"],
    nodeCount: 14,
  },
  {
    name: "西北区",
    nameEn: "Northwest",
    cities: ["西安", "兰州", "乌鲁木齐", "银川"],
    nodeCount: 8,
  },
  {
    name: "东北区",
    nameEn: "Northeast",
    cities: ["沈阳", "大连", "长春", "哈尔滨"],
    nodeCount: 10,
  },
];

export function NetworkMapSection() {
  return (
    <section className="section-padding bg-zinc-950" id="network">
      <div className="container-wide">
        <SectionHeader
          label="全国网络"
          title="分布式数据采集网络"
          titleEn="Nationwide Data Collection Network"
          description="九烨在全国范围内建立统一管理的城市级数据节点，形成规模化、标准化的数据采集网络。"
          align="center"
        />

        {/* Network Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {networkStats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50"
            >
              <stat.icon className="w-6 h-6 text-blue-500 mb-3" />
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-zinc-400 mb-1">{stat.label}</p>
              <p className="text-xs text-zinc-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Network Map Visual */}
        <div className="relative p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 overflow-hidden mb-12">
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

          {/* Map visualization */}
          <div className="relative h-[350px] md:h-[450px]">
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(245,158,11,0.4)" />
                  <stop offset="100%" stopColor="rgba(245,158,11,0)" />
                </radialGradient>
              </defs>

              {/* Grid lines */}
              <line x1="20%" y1="25%" x2="80%" y2="25%" stroke="rgba(245,158,11,0.1)" strokeWidth="1" strokeDasharray="4" />
              <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="rgba(245,158,11,0.1)" strokeWidth="1" strokeDasharray="4" />
              <line x1="20%" y1="75%" x2="80%" y2="75%" stroke="rgba(245,158,11,0.1)" strokeWidth="1" strokeDasharray="4" />
              <line x1="30%" y1="15%" x2="30%" y2="85%" stroke="rgba(245,158,11,0.1)" strokeWidth="1" strokeDasharray="4" />
              <line x1="50%" y1="15%" x2="50%" y2="85%" stroke="rgba(245,158,11,0.1)" strokeWidth="1" strokeDasharray="4" />
              <line x1="70%" y1="15%" x2="70%" y2="85%" stroke="rgba(245,158,11,0.1)" strokeWidth="1" strokeDasharray="4" />
            </svg>

            {/* Node points - positioned to roughly represent China's geography */}
            {/* 华北 - 北京 */}
            <div className="absolute top-[20%] left-[60%] w-4 h-4 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/30" />
            <div className="absolute top-[22%] left-[58%] text-xs text-blue-500 font-medium">北京</div>

            {/* 华东 - 上海 */}
            <div className="absolute top-[45%] left-[72%] w-4 h-4 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/30" style={{ animationDelay: '0.3s' }} />
            <div className="absolute top-[47%] left-[70%] text-xs text-blue-500 font-medium">上海</div>

            {/* 华南 - 深圳 */}
            <div className="absolute top-[70%] left-[65%] w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/30" style={{ animationDelay: '0.6s' }} />
            <div className="absolute top-[72%] left-[63%] text-xs text-blue-500/80 font-medium">深圳</div>

            {/* 华中 - 武汉 */}
            <div className="absolute top-[50%] left-[55%] w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/30" style={{ animationDelay: '0.9s' }} />

            {/* 西南 - 成都 */}
            <div className="absolute top-[55%] left-[35%] w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/30" style={{ animationDelay: '1.2s' }} />
            <div className="absolute top-[57%] left-[33%] text-xs text-blue-500/80 font-medium">成都</div>

            {/* 西北 - 西安 */}
            <div className="absolute top-[40%] left-[42%] w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/30" style={{ animationDelay: '1.5s' }} />

            {/* 东北 - 沈阳 */}
            <div className="absolute top-[15%] left-[70%] w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/30" style={{ animationDelay: '1.8s' }} />

            {/* Additional nodes */}
            <div className="absolute top-[35%] left-[68%] w-2 h-2 rounded-full bg-blue-500/70 animate-pulse" style={{ animationDelay: '2.1s' }} />
            <div className="absolute top-[60%] left-[60%] w-2 h-2 rounded-full bg-blue-500/70 animate-pulse" style={{ animationDelay: '2.4s' }} />
            <div className="absolute top-[30%] left-[50%] w-2 h-2 rounded-full bg-blue-500/70 animate-pulse" style={{ animationDelay: '2.7s' }} />
            <div className="absolute top-[65%] left-[45%] w-2 h-2 rounded-full bg-blue-500/70 animate-pulse" style={{ animationDelay: '3s' }} />
            <div className="absolute top-[25%] left-[55%] w-2 h-2 rounded-full bg-blue-500/70 animate-pulse" style={{ animationDelay: '3.3s' }} />

            {/* Central hub indicator */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 w-24 h-24 rounded-full bg-blue-500/10 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-sm font-bold text-blue-500">总控中心</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Coverage */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {regions.slice(0, 4).map((region) => (
            <div
              key={region.name}
              className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-semibold text-white">{region.name}</p>
                  <p className="text-xs text-zinc-600">{region.nameEn}</p>
                </div>
                <span className="text-lg font-bold text-blue-500">{region.nodeCount}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {region.cities.slice(0, 5).map((city) => (
                  <span
                    key={city}
                    className="text-xs text-zinc-500 px-2 py-0.5 rounded-full bg-zinc-800/50"
                  >
                    {city}
                  </span>
                ))}
                {region.cities.length > 5 && (
                  <span className="text-xs text-zinc-600 px-2 py-0.5">
                    +{region.cities.length - 5}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {regions.slice(4).map((region) => (
            <div
              key={region.name}
              className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-semibold text-white">{region.name}</p>
                  <p className="text-xs text-zinc-600">{region.nameEn}</p>
                </div>
                <span className="text-lg font-bold text-blue-500">{region.nodeCount}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {region.cities.map((city) => (
                  <span
                    key={city}
                    className="text-xs text-zinc-500 px-2 py-0.5 rounded-full bg-zinc-800/50"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
