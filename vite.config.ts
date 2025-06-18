import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Remove Replit plugins for Vercel deployment
// import runtimeErrorModal from "@replit/vite-plugin-runtime-error-modal";
// import cartographer from "@replit/vite-plugin-cartographer";

export default defineConfig({
  plugins: [
    react(),
    // runtimeErrorModal(),
    // cartographer(),
  ],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
