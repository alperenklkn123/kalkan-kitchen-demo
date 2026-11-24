import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? "/kalkan-kitchen-demo" : "";

const config: NextConfig = {
  // Public asset URLs must include the deployment base path on GitHub Pages.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  reactStrictMode: true,
  devIndicators: false,
  turbopack: { root: process.cwd() },

  ...(isGitHubPages
    ? {
        output: "export",
        basePath,
        images: {
          unoptimized: true,
        },
        trailingSlash: true,
      }
    : {}),
};

export default config;
