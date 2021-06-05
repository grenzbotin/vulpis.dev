module.exports = {
  siteUrl: 'https://www.vulpis.dev',
  changefreq: 'monthly',
  priority: 0.8,
  generateRobotsTxt: true,
  exclude: ['/privacy', '/disclosure'],
  alternateRefs: [
    {
      href: 'https://www.vulpis.dev/de',
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