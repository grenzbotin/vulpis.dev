import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "de"],
  namespaces: ["home", "footer", "nav", "legal", "privacy"],
  routes: {
    de: {
      "legal-notice": "impressum",
      privacy: "datenschutz",
    },
  },
  i18nextServer: {
    debug: true,
  },
};

export default config;
