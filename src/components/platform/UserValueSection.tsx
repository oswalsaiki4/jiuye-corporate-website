import { SectionHeader } from "@/components/ui/section-header";
import {
  Users,
  Coins,
  Shield,
  TrendingUp,
  Heart,
  CheckCircle
} from "lucide-react";

const userBenefits = [
  {
    icon: Coins,
    title: "数据价值变现",
    description: "用户贡献的日常行为数据被赋予价值，通过平台实现数据资产的合理变现",
  },
  {
    icon: Shield,
    title: "隐私安全保障",
    description: "严格的隐私保护机制与匿名化处理，确保用户个人信息的安全与合规",
  },
  {
    icon: TrendingUp,
    title: "持续价值增长",
    description: "随着数据贡献的积累，用户可获得持续的价值回报与专属权益",
  },
  {
    icon: Heart,
    title: "共建智能未来",
    description: "参与具身智能数据建设，为推动AI技术进步贡献力量",
  },
];

const privacyCommitments = [
  "所有数据经过严格的匿名化与脱敏处理",
  "用户拥有数据的完全知情权与控制权",
  "符合GDPR等国际数据保护标准",
  "透明的数据使用方式与收益分配机制",
  "专业的数据安全团队与技术保障",
  "定期的安全审计与合规检查",
];

export function UserValueSection() {
  return (
    <section className="section-padding bg-zinc-950" id="user-value">
      <div className="container-wide">
        <SectionHeader
          label="用户价值"
          title="数据贡献者价值体系"
          titleEn="Data Contributor Value System"
          description="九烨重视每一位数据贡献者的价值。我们建立了公平、透明的价值分配机制，让用户在保障隐私的前提下，共享数据经济的发展红利。"
          align="center"
        />

        {/* User Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {userBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/10 transition-colors">
                <benefit.icon className="w-7 h-7 text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Privacy & Trust Section */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">隐私保护承诺</h3>
                  <p className="text-sm text-zinc-500">Privacy Protection Commitment</p>
                </div>
              </div>

              <p className="text-zinc-400 leading-relaxed mb-8">
                用户数据的隐私与安全是九烨运营的基础原则。我们承诺以最高标准保护用户隐私，
                建立透明、可信的数据处理机制，让每一位数据贡献者安心参与。
              </p>

              <div className="space-y-3">
                {privacyCommitments.map((commitment) => (
                  <div
                    key={commitment}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-zinc-300">{commitment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Value flow visualization */}
            <div className="relative">
              <div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800/50">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
                    <Users className="w-10 h-10 text-blue-500" />
                  </div>
                  <p className="text-lg font-semibold text-white">数据贡献者</p>
                  <p className="text-sm text-zinc-500">Data Contributors</p>
                </div>

                <div className="flex justify-center mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <div className="w-px h-8 bg-gradient-to-b from-zinc-700 to-blue-500" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                    <p className="text-2xl font-bold text-white mb-1">贡献</p>
                    <p className="text-xs text-zinc-500">数据采集</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                    <p className="text-2xl font-bold text-white mb-1">保护</p>
                    <p className="text-xs text-zinc-500">隐私安全</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                    <p className="text-2xl font-bold text-white mb-1">回报</p>
                    <p className="text-xs text-zinc-500">价值分享</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
