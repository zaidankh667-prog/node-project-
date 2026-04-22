const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/test-og'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/test-og'],
      },
    ],
  },
  outDir: 'public',
} 
