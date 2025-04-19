import { defineConfig } from "vite";
import reactSWC from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "self-introduction",
  plugins: [reactSWC()],
});
