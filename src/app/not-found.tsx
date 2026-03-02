"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-[150px] md:text-[200px] font-bold leading-none text-gradient-gold opacity-20">
            404
          </span>
        </div>

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          页面未找到
        </h1>
        <p className="text-zinc-400 mb-8">
          抱歉，您访问的页面不存在或已被移动。请检查URL是否正确，或返回首页继续浏览。
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-all group"
          >
            <Home className="w-4 h-4 mr-2" />
            返回首页
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回上页
          </button>
        </div>

        {/* Help Links */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-600 mb-4">或者访问以下页面：</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/platform" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">
              核心平台
            </Link>
            <Link href="/technology" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">
              技术能力
            </Link>
            <Link href="/industries" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">
              行业与网络
            </Link>
            <Link href="/about" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">
              关于九烨
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
