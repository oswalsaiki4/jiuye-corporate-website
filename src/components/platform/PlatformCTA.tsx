import Link from "next/link";
import { ArrowRight, FileText, MessageSquare } from "lucide-react";

export function PlatformCTA() {
  return (
    <section className="py-12 md:py-16 bg-zinc-900/30">
      <div className="container-wide">
        <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800/50 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              开启数据合作
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              无论您需要标准数据集、定制采集还是订阅服务，九烨平台都能为您提供专业的数据解决方案。
              联系我们，了解更多平台能力与合作方式。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-all group"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                商务咨询
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-all"
              >
                <FileText className="w-5 h-5 mr-2" />
                了解技术能力
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
