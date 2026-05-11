import type { NextConfig } from "next";

import "./src/env/server";
import "./src/env/client";

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
  },

  turbopack: {},
};

export default nextConfig;
