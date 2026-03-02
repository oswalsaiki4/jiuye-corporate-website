import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-zinc-900/30">
      <div className="container-wide">
        <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800/50 overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                开启合作，共建数据基础设施
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed mb-6 sm:mb-8">
                无论您是科研机构、AI企业还是机器人厂商，九烨都能为您提供专业的数据解决方案。
                欢迎与我们联系，探讨合作机会。
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/about#contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-all group active:scale-95"
                >
                  商务咨询
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-all active:scale-95"
                >
                  了解平台能力
                </Link>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-800/30 border border-zinc-700/50">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-zinc-500">商务邮箱</p>
                    <p className="text-sm sm:text-lg font-medium text-white truncate">business@jiuye.ai</p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-800/30 border border-zinc-700/50">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-zinc-500">咨询热线</p>
                    <p className="text-sm sm:text-lg font-medium text-white">400-888-9988</p>
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
