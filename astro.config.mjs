import { defineConfig } from "astro/config";
import compress from "astro-compress";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://www.vulpis.dev",
  integrations: [astroI18next(), compress()],
});
