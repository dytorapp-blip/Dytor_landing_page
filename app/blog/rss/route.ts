import { NextResponse } from 'next/server'
import RSS from 'rss'
import { listPosts } from '@/lib/blog-posts'

export const dynamic = 'force-static'

export async function GET() {
  const feed = new RSS({
    title: 'DYTOR Blog - Professional Show Control & Production Insights',
    site_url: 'https://blog.dytor.app',
    feed_url: 'https://blog.dytor.app/rss',
    description: 'Expert insights on professional show control, timing, and live production. Learn best practices, case studies, and industry trends from the DYTOR team.',
    language: 'en',
    copyright: '2024 DYTOR. All rights reserved.',
    managingEditor: 'team@dytor.app (DYTOR Team)',
    webMaster: 'team@dytor.app (DYTOR Team)',
    generator: 'Next.js RSS Generator',
    categories: ['Technology', 'Show Control', 'Live Production', 'Broadcasting'],
    ttl: 60,
    custom_namespaces: {
      'atom': 'http://www.w3.org/2005/Atom'
    }
  })

  const posts = listPosts()
  posts.forEach((p) => {
    const item: any = {
      title: p.frontmatter.title || p.slug,
      url: `https://blog.dytor.app/${p.slug}`,
      description: p.frontmatter.description || '',
      guid: `https://blog.dytor.app/${p.slug}`,
      categories: p.frontmatter.tags || [],
      author: p.frontmatter.author || 'DYTOR Team',
      custom_elements: [
        {
          'content:encoded': {
            _cdata: p.content
          }
        }
      ]
    }
    if (p.frontmatter.date) item.date = new Date(p.frontmatter.date)
    if (p.frontmatter.image) item.enclosure = {
      url: p.frontmatter.image,
      type: 'image/jpeg'
    }
    feed.item(item)
  })

  const xml = feed.xml({ indent: true })
  return new NextResponse(xml, { 
    headers: { 
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    } 
  })
}


