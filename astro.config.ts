import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

const config: AstroUserConfig = defineConfig({
  site: "http://www.example.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "server",
  adapter: netlify(),
});

// https://astro.build/config
export default defineConfig(config);
