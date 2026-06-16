import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/Portfolio-Website",
  assetPrefix: "/Portfolio-Website",
  transpilePackages: ["three"],
  turbopack: {},
};

export default nextConfig;
