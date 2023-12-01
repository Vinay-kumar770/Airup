import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [react(), nodePolyfills(),
  ],
  define: {
    "process.env": {},
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/inves/assets/css/style.scss"; @import "./src/inves/assets/css/style.scss',
      },
    },
  },
  optimizeDeps: {
    include: ["jquery"],
  },
  build: {
    rollupOptions: {
      output: {
        globals: {
          // Make sure jQuery is available as a global variable.
          jquery: "jQuery",
        },
      },
    },
  },
});
