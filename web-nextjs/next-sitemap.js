module.exports = {
  siteUrl: 'https://vulpis.dev',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
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