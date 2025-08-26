import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/', '/_next/static/'],
    },
    sitemap: 'https://www.vasoobambooarts.com/sitemap.xml',
  }
}
