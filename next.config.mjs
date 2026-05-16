import { createMDX } from "fumadocs-mdx/next";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withMDX = createMDX();

export default withSentryConfig(
  withMDX(nextConfig),
  {
    org: "dytor",
    project: "landing-page",
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: !process.env.CI,
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
  }
);
