import { NextResponse } from 'next/server'
import { listPosts } from '@/lib/blog-posts'

export const dynamic = 'force-static'

export async function GET() {
  const posts = listPosts()
  
  const blogUrls = posts.map((p) => {
    const lastmod = p.frontmatter.date ? new Date(p.frontmatter.date).toISOString() : new Date().toISOString()
    const priority = p.frontmatter.tags?.includes('featured') ? '0.9' : '0.8'
    return `  <url>
    <loc>https://blog.dytor.app/${p.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <url>
    <loc>https://blog.dytor.app/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
${blogUrls}
</urlset>`

  return new NextResponse(xml, { 
    headers: { 
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    } 
  })
}


