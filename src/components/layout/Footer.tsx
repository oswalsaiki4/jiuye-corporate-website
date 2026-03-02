import Link from "next/link";
import { Logo } from "@/components/ui/logo";

const footerLinks = {
  platform: {
    title: "核心平台",
    titleEn: "Platform",
    links: [
      { name: "平台概述", href: "/platform#overview" },
      { name: "数据生产体系", href: "/platform#production" },
      { name: "质量管理体系", href: "/platform#quality" },
      { name: "数据资产化", href: "/platform#assets" },
    ],
  },
  technology: {
    title: "技术能力",
    titleEn: "Technology",
    links: [
      { name: "技术架构", href: "/technology#architecture" },
      { name: "采集硬件", href: "/technology#hardware" },
      { name: "云端处理", href: "/technology#cloud" },
      { name: "系统能力", href: "/technology#capabilities" },
    ],
  },
  industries: {
    title: "行业与网络",
    titleEn: "Industries",
    links: [
      { name: "行业应用", href: "/industries#applications" },
      { name: "科研机构", href: "/industries#research" },
      { name: "企业合作", href: "/industries#enterprise" },
      { name: "全国网络", href: "/industries#network" },
    ],
  },
  company: {
    title: "关于九烨",
    titleEn: "About",
    links: [
      { name: "公司概况", href: "/about#overview" },
      { name: "使命愿景", href: "/about#mission" },
      { name: "管理团队", href: "/about#team" },
      { name: "联系我们", href: "/about#contact" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50">
      <div className="container-wide">
        {/* Main Footer */}
        <div className="py-10 sm:py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="mb-4 sm:mb-6 block group">
              <Logo size={36} />
            </Link>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-2">
              深圳九烨数据智能科技有限公司
            </p>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-3 sm:mb-4">
              具身智能真实世界数据平台
              <br />
              构建AI数据基础设施
            </p>
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs text-zinc-600">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>平台运行中</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-xs sm:text-sm font-semibold text-white mb-3 sm:mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-[10px] sm:text-xs text-zinc-600 text-center md:text-left">
            © 2025 深圳九烨数据智能科技有限公司. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link
              href="/privacy"
              className="text-[10px] sm:text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              隐私政策
            </Link>
            <Link
              href="/terms"
              className="text-[10px] sm:text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
