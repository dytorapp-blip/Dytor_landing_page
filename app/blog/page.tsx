import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — DYTOR',
  description: 'Articles on timing, show control, and production workflows.',
  alternates: { canonical: 'https://dytor.app/blog' },
}

export const dynamic = 'force-static'

export default function BlogIndex() {
  const posts = getAllPosts()
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Blog</h1>
      <p className="text-muted-foreground mb-10">Insights on timing, show control, and production workflows.</p>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-xl border bg-background/50 backdrop-blur p-6">
            <h2 className="text-xl md:text-2xl font-semibold">
              <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
            </h2>
            {post.frontmatter.description && (
              <p className="text-sm text-muted-foreground mt-2">{post.frontmatter.description}</p>
            )}
            <div className="text-xs text-gray-500 mt-3">
              <span>{new Date(post.frontmatter.date).toLocaleDateString()}</span>
              {post.frontmatter.readTime && <span className="ml-2">• {post.frontmatter.readTime}</span>}
            </div>
          </article>
        ))}
        {posts.length === 0 && (
          <div className="text-sm text-muted-foreground">No posts yet. Coming soon.</div>
        )}
      </div>
    </main>
  )
}


