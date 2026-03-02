"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";

// 懒加载ScrollToTop组件
const ScrollToTop = dynamic(
  () => import("@/components/ui/scroll-to-top").then((mod) => ({ default: mod.ScrollToTop })),
  { ssr: false }
);

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 立即显示内容，不添加延迟
    setIsLoaded(true);

    // 设置body样式
    document.body.className = "antialiased";
  }, []);

  return (
    <div
      className={`antialiased transition-opacity duration-300 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
      <Suspense fallback={null}>
        <ScrollToTop />
      </Suspense>
    </div>
  );
}
