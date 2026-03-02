import { SectionHeader } from "@/components/ui/section-header";
import { Cpu, Database, Users, Briefcase, GraduationCap } from "lucide-react";

const teamStructure = [
  {
    icon: Cpu,
    department: "技术研发",
    departmentEn: "R&D",
    description: "负责平台核心技术研发，包括采集硬件、处理系统与标注工具",
    size: "60+",
    highlights: ["全栈工程", "算法研究", "硬件设计"],
  },
  {
    icon: Database,
    department: "数据运营",
    departmentEn: "Data Operations",
    description: "负责数据生产全流程的运营管理，确保数据质量与交付效率",
    size: "80+",
    highlights: ["采集管理", "标注运营", "质量控制"],
  },
  {
    icon: Users,
    department: "网络管理",
    departmentEn: "Network Management",
    description: "负责全国采集网络的建设与管理，维护节点运营体系",
    size: "30+",
    highlights: ["节点拓展", "网络运维", "贡献者管理"],
  },
  {
    icon: Briefcase,
    department: "商务与客户",
    departmentEn: "Business & Customer",
    description: "负责客户开拓与服务，建立长期合作关系",
    size: "20+",
    highlights: ["客户开发", "方案咨询", "客户成功"],
  },
];

const teamAdvantages = [
  {
    title: "顶尖背景",
    description: "核心团队来自Google、Meta、华为、阿里、清华、北大等顶尖机构",
  },
  {
    title: "跨领域融合",
    description: "汇聚AI、机器人、硬件、运营等多领域专业人才",
  },
  {
    title: "创业经验",
    description: "多位成员具有成功创业经验，深谙平台建设之道",
  },
  {
    title: "行业洞察",
    description: "深耕具身智能领域，对产业需求有深刻理解",
  },
];

export function TeamSection() {
  return (
    <section className="section-padding bg-zinc-950" id="team">
      <div className="container-wide">
        <SectionHeader
          label="团队"
          title="专业团队"
          titleEn="Professional Team"
          description="九烨汇聚了来自顶尖科技企业与研究机构的专业团队，在技术研发、数据运营、网络管理等领域具有深厚积累。"
        />

        {/* Team Structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {teamStructure.map((team) => (
            <div
              key={team.department}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <team.icon className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-2xl font-bold text-white">{team.size}</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">
                {team.department}
              </h3>
              <p className="text-xs text-zinc-600 mb-3">{team.departmentEn}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                {team.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {team.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-xs text-zinc-500 px-2.5 py-1 rounded-full bg-zinc-800/50"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Team Advantages */}
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">团队优势</h3>
                  <p className="text-sm text-zinc-500">Team Advantages</p>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-8">
                九烨核心团队由具有丰富经验的行业专家组成，深刻理解具身智能产业的数据需求，
                具备从0到1构建平台级产品的完整能力。
              </p>

              <div className="space-y-4">
                {teamAdvantages.map((advantage) => (
                  <div key={advantage.title} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">{advantage.title}</p>
                      <p className="text-xs text-zinc-500">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/50 text-center">
                <p className="text-4xl font-bold text-white mb-2">200+</p>
                <p className="text-sm text-zinc-500">团队成员</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/50 text-center">
                <p className="text-4xl font-bold text-white mb-2">70%</p>
                <p className="text-sm text-zinc-500">技术占比</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/50 text-center">
                <p className="text-4xl font-bold text-white mb-2">15+</p>
                <p className="text-sm text-zinc-500">博士学位</p>
              </div>
              <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800/50 text-center">
                <p className="text-4xl font-bold text-white mb-2">10+</p>
                <p className="text-sm text-zinc-500">平均经验</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
