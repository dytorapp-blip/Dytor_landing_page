import Link from 'next/link'
import { listPosts } from '@/lib/blog-posts'

export const dynamic = 'force-static'

export default function BlogIndex() {
  const posts = listPosts()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'DYTOR Blog',
    description: 'Expert insights on professional show control, timing, and live production.',
    url: 'https://blog.dytor.app',
    publisher: {
      '@type': 'Organization',
      name: 'DYTOR',
      url: 'https://dytor.app'
    },
    blogPost: posts.slice(0, 10).map(post => ({
      '@type': 'BlogPosting',
      headline: post.frontmatter.title || post.slug,
      url: `https://blog.dytor.app/${post.slug}`,
      datePublished: post.frontmatter.date,
      description: post.frontmatter.description,
      author: {
        '@type': 'Person',
        name: post.frontmatter.author || 'DYTOR Team'
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            DYTOR <span className="text-blue-400">Blog</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Expert insights on professional show control, timing, and live production. 
            Learn best practices, case studies, and industry trends from the DYTOR team.
          </p>
          
          {/* Simple static display for now */}
          <div className="text-center mb-8">
            <p className="text-slate-400">Professional insights on show control and live production</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{posts.length}</div>
            <div className="text-slate-300">Articles Published</div>
          </div>
          <div className="bg-slate-800/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {posts.reduce((acc, post) => acc + post.readingTimeMinutes, 0)}
            </div>
            <div className="text-slate-300">Minutes of Content</div>
          </div>
          <div className="bg-slate-800/30 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              {new Set(posts.flatMap(p => p.frontmatter.tags || [])).size}
            </div>
            <div className="text-slate-300">Categories</div>
          </div>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-slate-800/30 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300 group">
                <div className="mb-4">
                  {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.frontmatter.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.frontmatter.title || post.slug}
                    </Link>
                  </h2>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {post.frontmatter.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center space-x-4">
                    <span>{post.frontmatter.date ? new Date(post.frontmatter.date).toLocaleDateString() : '—'}</span>
                    <span>•</span>
                    <span>{post.readingTimeMinutes} min read</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold text-white mb-2">Coming Soon</h3>
            <p className="text-slate-400">More articles are being prepared.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Get the latest insights on show control and live production delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors" disabled>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


