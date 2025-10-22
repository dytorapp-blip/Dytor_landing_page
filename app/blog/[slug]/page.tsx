import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Image from 'next/image'
import Link from 'next/link'
import { generateAutoDescription, generateAutoTags, getAllPostSlugs, readPostBySlug, listPosts } from '@/lib/blog-posts'

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = readPostBySlug(params.slug)
  if (!post) return {}
  const description = post.frontmatter.description || generateAutoDescription(post.content)
  const title = post.frontmatter.title || params.slug
  const url = `https://blog.dytor.app/${params.slug}`
  const image = post.frontmatter.image || 'https://blog.dytor.app/og-image.jpg'
  const author = post.frontmatter.author || 'DYTOR Team'
  const publishedTime = post.frontmatter.date
  const modifiedTime = post.frontmatter.date
  
  return {
    title: `${title} | DYTOR Blog`,
    description,
    keywords: post.frontmatter.tags || ['show control', 'live production', 'timing', 'professional audio'],
    authors: [{ name: author }],
    creator: author,
    publisher: 'DYTOR',
    alternates: { canonical: url },
    openGraph: { 
      title, 
      description, 
      url, 
      images: [{ url: image, width: 1200, height: 630, alt: title }], 
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [author],
      siteName: 'DYTOR Blog'
    },
    twitter: { 
      card: 'summary_large_image', 
      title, 
      description, 
      images: [image],
      creator: '@dytorapp',
      site: '@dytorapp'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  }
}

const components = {
  img: (props: any) => {
    const { src = '', alt = '', width = 1200, height = 630 } = props
    return <Image src={src} alt={alt} width={Number(width)} height={Number(height)} loading="lazy" />
  },
  a: (props: any) => <Link {...props} />,
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = readPostBySlug(params.slug)
  if (!post) return notFound()
  const description = post.frontmatter.description || generateAutoDescription(post.content)
  const tags = post.frontmatter.tags || generateAutoTags(post.content)
  const allPosts = listPosts()
  const currentIndex = allPosts.findIndex(p => p.slug === params.slug)
  const relatedPosts = allPosts
    .filter((p, index) => index !== currentIndex)
    .slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.frontmatter.title || params.slug,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      '@type': 'Person',
      name: post.frontmatter.author || 'DYTOR Team',
      url: 'https://dytor.app'
    },
    image: post.frontmatter.image ? [post.frontmatter.image] : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://blog.dytor.app/${params.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'DYTOR',
      url: 'https://dytor.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dytor.app/logo.png'
      }
    },
    description,
    wordCount: post.content.split(' ').length,
    timeRequired: `PT${post.readingTimeMinutes}M`,
    articleSection: tags[0] || 'Technology',
    keywords: tags.join(', ')
  }

  const shareUrl = `https://blog.dytor.app/${params.slug}`
  const shareTitle = encodeURIComponent(post.frontmatter.title || params.slug)
  const shareText = encodeURIComponent(description)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-slate-400">
        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-white">{post.frontmatter.title || params.slug}</span>
      </nav>

      <article className="max-w-4xl mx-auto">
        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.frontmatter.title || params.slug}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-slate-400 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.frontmatter.author || 'DYTOR Team'}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.frontmatter.date ? new Date(post.frontmatter.date).toLocaleDateString() : '—'}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readingTimeMinutes} min read</span>
            </div>
          </div>

          {post.frontmatter.description && (
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              {post.frontmatter.description}
            </p>
          )}

          {/* Tags */}
      {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                  {tag}
                </span>
          ))}
        </div>
      )}

          {/* Social Share */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-slate-400 text-sm">Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <MDXRemote 
            source={post.content} 
            components={components as any} 
            options={{ 
              mdxOptions: { 
                remarkPlugins: [remarkGfm], 
                rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings] 
              } 
            }} 
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-700/50">
          {/* Author Bio */}
          <div className="bg-slate-800/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                {(post.frontmatter.author || 'DYTOR Team').charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {post.frontmatter.author || 'DYTOR Team'}
                </h3>
                <p className="text-slate-400 text-sm">
                  Expert in professional show control and live production. 
                  Passionate about helping teams deliver exceptional live events.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-slate-800/30 rounded-lg p-4 hover:bg-slate-800/50 transition-colors group"
                  >
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {relatedPost.frontmatter.title || relatedPost.slug}
                    </h4>
                    <p className="text-slate-400 text-sm line-clamp-2">
                      {relatedPost.frontmatter.description}
                    </p>
                    <div className="text-xs text-slate-500 mt-2">
                      {relatedPost.readingTimeMinutes} min read
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Level Up Your Show Control?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Experience the power of professional show control with DYTOR. 
              Try it free and see why top production teams trust us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://dytor.app"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Try DYTOR Free
              </a>
              <a
                href="https://dytor.app/docs"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </footer>
    </article>
    </>
  )
}


