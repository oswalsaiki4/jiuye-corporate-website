import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "九烨数据 - 具身智能数据平台 | 真实世界AI数据基础设施",
    template: "%s | 九烨数据 - 具身智能数据平台",
  },
  description: "深圳九烨数据智能科技有限公司是中国领先的具身智能数据平台，提供标准化、规模化的真实世界数据采集、处理、标注与治理服务。覆盖100+城市节点，PB级数据资产，服务50+科研机构与AI企业，构建AI数据基础设施。",
  keywords: [
    // 核心关键词
    "具身智能",
    "具身智能数据",
    "AI数据平台",
    "机器人数据",
    "真实世界数据",
    // 服务相关
    "数据采集",
    "数据标注",
    "数据治理",
    "AI训练数据",
    "机器学习数据",
    // 技术相关
    "多模态数据",
    "3D点云数据",
    "传感器数据",
    "动作捕捉数据",
    // 行业相关
    "人形机器人",
    "工业机器人",
    "自动驾驶数据",
    "智能制造",
    // 品牌相关
    "九烨数据",
    "九烨科技",
    "Jiuye Data",
    // 地域相关
    "深圳AI企业",
    "中国AI数据",
    // 英文关键词
    "Embodied Intelligence",
    "Embodied AI Data",
    "Robotics Training Data",
    "Real World Data",
    "AI Data Infrastructure",
  ],
  authors: [
    { name: "深圳九烨数据智能科技有限公司", url: "https://jiuye.ai" },
  ],
  creator: "深圳九烨数据智能科技有限公司",
  publisher: "深圳九烨数据智能科技有限公司",
  metadataBase: new URL("https://jiuye.ai"),
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      "en-US": "/en",
    },
  },
  category: "technology",
  classification: "AI Data Platform",
  openGraph: {
    title: "九烨数据 - 具身智能数据平台",
    description: "中国领先的具身智能数据平台，提供真实世界数据采集、处理、标注与治理服务。覆盖100+城市，服务50+科研机构，构建AI数据基础设施。",
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    siteName: "九烨数据",
    url: "https://jiuye.ai",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "九烨数据 - 具身智能数据平台",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "九烨数据 - 具身智能数据平台",
    description: "中国领先的具身智能数据平台，构建真实世界AI数据基础设施",
    images: ["/images/og-image.png"],
    creator: "@jiuyedata",
    site: "@jiuyedata",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // 可以添加其他搜索引擎验证
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  // 应用相关
  applicationName: "九烨数据",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // 其他元数据
  other: {
    "baidu-site-verification": "your-baidu-verification-code",
    "360-site-verification": "your-360-verification-code",
    "sogou_site_verification": "your-sogou-verification-code",
    "bytedance-verification-code": "your-bytedance-verification-code",
  },
};

// JSON-LD 结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "深圳九烨数据智能科技有限公司",
  alternateName: ["九烨数据", "Jiuye Data", "九烨科技"],
  url: "https://jiuye.ai",
  logo: "https://jiuye.ai/images/logo.png",
  description: "中国领先的具身智能数据平台，提供真实世界数据采集、处理、标注与治理服务",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "深圳",
    addressRegion: "广东省",
    addressCountry: "CN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "400-888-9988",
    email: "business@jiuye.ai",
    contactType: "customer service",
    availableLanguage: ["Chinese", "English"],
  },
  sameAs: [
    // 社交媒体链接
  ],
  areaServed: {
    "@type": "Country",
    name: "China",
  },
  serviceType: [
    "AI数据采集",
    "数据标注服务",
    "数据治理",
    "具身智能数据平台",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* JSON-LD 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* 预连接优化 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS预解析 */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {/* 图标 */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased font-sans">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
