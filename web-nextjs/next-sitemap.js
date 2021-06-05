module.exports = {
  siteUrl: 'https://vulpis.dev',
  changefreq: 'monthly',
  priority: 0.7,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/privacy', '/disclosure', '/de/privacy', '/en/privacy', '/de/disclosure', '/en/disclosure'],
  alternateRefs: [
    {
      href: 'https://vulpis.dev/de',
      hreflang: 'de',
    },
    {
      href: 'https://vulpis.dev',
      hreflang: 'en',
    }
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/disclosure', '/privacy'],
      }
    ],
  },
};