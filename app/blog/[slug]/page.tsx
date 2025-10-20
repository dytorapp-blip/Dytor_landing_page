import { notFound } from 'next/navigation'
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'
import type { Metadata } from 'next'
import { mdxComponents } from '@/mdx-components'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  const url = `https://dytor.app/blog/${post.slug}`
  return {
    title: `${post.frontmatter.title} — DYTOR Blog`,
    description: post.frontmatter.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.frontmatter.title} — DYTOR Blog`,
      description: post.frontmatter.description,
      url,
      type: 'article',
      images: ['/assets/Dytor_logo_name.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.frontmatter.title} — DYTOR Blog`,
      description: post.frontmatter.description,
      images: ['/assets/Dytor_logo_name.png'],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <article>
        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold">{post.frontmatter.title}</h1>
          {post.frontmatter.description && (
            <p className="text-muted-foreground mt-2">{post.frontmatter.description}</p>
          )}
          <div className="text-xs text-gray-500 mt-3">
            <span>{new Date(post.frontmatter.date).toLocaleDateString()}</span>
            {post.frontmatter.readTime && <span className="ml-2">• {post.frontmatter.readTime}</span>}
          </div>
        </header>
        <div className="prose prose-invert max-w-none">
          {/* Using RSC MDXRemote to render content */}
          <MDXRemote
            source={post.content}
            components={mdxComponents as any}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append' }]],
              },
            }}
          />
        </div>
      </article>
    </main>
  )
}


