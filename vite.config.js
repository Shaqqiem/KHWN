import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Kalau deploy ke GitHub Pages, tukar base kepada nama repo kamu:
  base: "/KHWN/",
});
