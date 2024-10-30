import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ictawards.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8090",
        pathname: "/api/files/**",
      },
    ],
  },
} satisfies NextConfig;

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(config);
