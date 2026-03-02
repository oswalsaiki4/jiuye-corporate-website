"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const networkStats = [
  { value: "100+", label: "城市节点", labelEn: "City Nodes" },
  { value: "30+", label: "省份覆盖", labelEn: "Provinces" },
  { value: "10000+", label: "数据贡献者", labelEn: "Contributors" },
  { value: "7x24", label: "持续运营", labelEn: "Operation" },
];

const regions = [
  { name: "华北区", cities: ["北京", "天津", "石家庄", "太原"] },
  { name: "华东区", cities: ["上海", "杭州", "南京", "苏州"] },
  { name: "华南区", cities: ["深圳", "广州", "厦门", "福州"] },
  { name: "华中区", cities: ["武汉", "长沙", "郑州", "合肥"] },
  { name: "西南区", cities: ["成都", "重庆", "昆明", "贵阳"] },
  { name: "西北区", cities: ["西安", "兰州", "乌鲁木齐"] },
];

// City positions on a 100x80 viewBox (approximate real positions)
const cities = [
  { name: "北京", x: 68, y: 28, isHQ: true },
  { name: "上海", x: 78, y: 48 },
  { name: "广州", x: 65, y: 68 },
  { name: "深圳", x: 67, y: 70 },
  { name: "成都", x: 42, y: 52 },
  { name: "武汉", x: 62, y: 50 },
  { name: "西安", x: 50, y: 42 },
  { name: "天津", x: 70, y: 30 },
  { name: "重庆", x: 48, y: 54 },
  { name: "沈阳", x: 76, y: 20 },
  { name: "哈尔滨", x: 80, y: 12 },
  { name: "南京", x: 74, y: 46 },
  { name: "杭州", x: 76, y: 50 },
  { name: "昆明", x: 38, y: 64 },
  { name: "兰州", x: 40, y: 38 },
  { name: "乌鲁木齐", x: 15, y: 22 },
];

export function NetworkSection() {
  return (
    <section className="section-padding bg-zinc-900/30">
      <div className="container-wide">
        <SectionHeader
          label="全国网络"
          title="分布式数据采集网络"
          titleEn="Nationwide Data Collection Network"
          description="九烨在全国范围内建立统一管理的城市级数据节点，形成规模化、标准化的数据采集网络，确保数据的多样性与真实性。"
          align="center"
        />

        {/* Network Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10">
          {networkStats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-900/50 border border-zinc-800/50 text-center"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.value}</p>
              <p className="text-xs sm:text-sm text-zinc-400">{stat.label}</p>
              <p className="text-[10px] sm:text-xs text-zinc-600">{stat.labelEn}</p>
            </div>
          ))}
        </div>

        {/* China Map */}
        <div className="relative p-3 sm:p-4 md:p-8 rounded-2xl sm:rounded-3xl bg-zinc-950 border border-zinc-800/50 overflow-hidden mb-8 sm:mb-12">
          {/* Map container */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
            <svg
              viewBox="0 0 100 80"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Connection lines from Beijing */}
              {cities.filter(c => !c.isHQ).map((city) => (
                <line
                  key={`line-${city.name}`}
                  x1="68"
                  y1="28"
                  x2={city.x}
                  y2={city.y}
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="0.3"
                  strokeDasharray="1,1"
                />
              ))}

              {/* City markers */}
              {cities.map((city) => (
                <g key={city.name}>
                  {/* Outer glow for HQ */}
                  {city.isHQ && (
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r="4"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                      opacity="0.5"
                    />
                  )}
                  {/* City dot */}
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r={city.isHQ ? "2" : "1.2"}
                    fill={city.isHQ ? "#3b82f6" : "#60a5fa"}
                  />
                  {/* City label */}
                  <text
                    x={city.x}
                    y={city.y - 3}
                    textAnchor="middle"
                    fontSize={city.isHQ ? "3.5" : "2.5"}
                    fill={city.isHQ ? "#60a5fa" : "#9ca3af"}
                    fontWeight={city.isHQ ? "600" : "400"}
                  >
                    {city.name}
                  </text>
                </g>
              ))}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 flex items-center gap-4 text-xs text-zinc-500">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span>总控中心</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>采集节点</span>
              </div>
            </div>

            {/* HQ Badge */}
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] md:text-xs font-medium text-blue-400">总控中心 · 北京</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Coverage */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {regions.map((region) => (
            <div
              key={region.name}
              className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-zinc-900/50 border border-zinc-800/50 hover:border-blue-500/30 transition-colors"
            >
              <p className="text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2">{region.name}</p>
              <div className="flex flex-wrap gap-1">
                {region.cities.map((city) => (
                  <span
                    key={city}
                    className="text-[10px] sm:text-xs text-zinc-500 px-1.5 sm:px-2 py-0.5 rounded-full bg-zinc-800/50"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <Link
            href="/industries#network"
            className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors group"
          >
            了解更多网络布局
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
