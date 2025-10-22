/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://dytor.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      { 
        userAgent: '*', 
        allow: '/',
        disallow: ['/beams-demo', '/api/']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/beams-demo', '/api/']
      }
    ],
    additionalSitemaps: [
      'https://dytor.app/sitemap.xml',
    ],
  },
  exclude: ['/beams-demo', '/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/features'),
    await config.transform(config, '/pricing'),
    await config.transform(config, '/about'),
    await config.transform(config, '/docs'),
    await config.transform(config, '/use-cases'),
    await config.transform(config, '/blog'),
  ],
  transform: async (config, path) => {
    // Custom priority and changefreq based on page importance
    const priorityMap = {
      '/': 1.0,
      '/features': 0.9,
      '/pricing': 0.9,
      '/about': 0.7,
      '/docs': 0.8,
      '/use-cases': 0.8,
      '/blog': 0.6,
    };

    const changefreqMap = {
      '/': 'weekly',
      '/features': 'monthly',
      '/pricing': 'monthly',
      '/about': 'monthly',
      '/docs': 'weekly',
      '/use-cases': 'monthly',
      '/blog': 'weekly',
    };

    return {
      loc: path,
      changefreq: changefreqMap[path] || 'weekly',
      priority: priorityMap[path] || 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://dytor.app${path}`,
          hreflang: 'en',
        },
      ],
    }
  },
}


