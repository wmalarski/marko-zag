import marko from "@marko/run/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [marko(), tsconfigPaths(), tailwindcss()],
});
