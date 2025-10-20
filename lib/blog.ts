import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogFrontmatter = {
  title: string
  description?: string
  date: string
  tags?: string[]
  author?: string
  featured?: boolean
  readTime?: string
}

export type BlogPost = {
  slug: string
  content: string
  frontmatter: BlogFrontmatter
}

const CONTENT_DIR = path.join(process.cwd(), 'blog', 'content')

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx?$/, ''))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const mdxPath = path.join(CONTENT_DIR, `${slug}.mdx`)
  const mdPath = path.join(CONTENT_DIR, `${slug}.md`)
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null
  if (!filePath) return null
  const source = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(source)
  return {
    slug,
    content,
    frontmatter: data as BlogFrontmatter,
  }
}

export function getAllPosts(): BlogPost[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p))
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}


