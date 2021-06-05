module.exports = {
  siteUrl: 'https://vulpis.dev',
  changefreq: 'monthly',
  priority: 0.8,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/privacy', '/disclosure'],
  alternateRefs: [
    {
      href: 'https://vulpis.dev/de',
      hreflang: 'de',
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