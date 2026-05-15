/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静态导出到 out 目录
  trailingSlash: true, // 添加尾部斜杠
  allowedDevOrigins: ["*.preview.same-app.com"],
  eslint: {
    ignoreDuringBuilds: true, // 跳过 lint 检查加速部署
  },
  typescript: {
    ignoreBuildErrors: true, // 跳过 TypeScript 检查加速部署
  },
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
    ],
  },
  compress: true,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
