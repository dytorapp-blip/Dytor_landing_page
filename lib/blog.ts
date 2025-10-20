import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogFrontmatter = {
  title?: string
  description?: string
  date?: string
  author?: string
  tags?: string[]
  image?: string
  canonical?: string
}

export type BlogPost = {
  slug: string
  content: string
  frontmatter: BlogFrontmatter
  readingTimeMinutes: number
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((f) => f.replace(/\.(md|mdx)$/i, ''))
}

export function readPostBySlug(slug: string): BlogPost | null {
  const filePathMd = path.join(BLOG_DIR, `${slug}.md`)
  const filePathMdx = path.join(BLOG_DIR, `${slug}.mdx`)
  const filePath = fs.existsSync(filePathMdx) ? filePathMdx : filePathMd
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const fm: BlogFrontmatter = {
    title: data.title,
    description: data.description,
    date: data.date ? new Date(data.date).toISOString() : undefined,
    author: data.author,
    tags: Array.isArray(data.tags) ? data.tags : data.tags ? String(data.tags).split(',').map((s: string) => s.trim()) : undefined,
    image: data.image,
    canonical: data.canonical,
  }
  const readingTimeMinutes = Math.max(1, Math.round(content.split(/\s+/).length / 220))
  return { slug, content, frontmatter: fm, readingTimeMinutes }
}

export function listPosts(): BlogPost[] {
  return getAllPostSlugs()
    .map((slug) => readPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p))
    .sort((a, b) => {
      const da = a.frontmatter.date ? Date.parse(a.frontmatter.date) : 0
      const db = b.frontmatter.date ? Date.parse(b.frontmatter.date) : 0
      return db - da
    })
}

export function generateAutoDescription(markdown: string, maxLen = 160): string {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1')
    .replace(/[#>*_~`>-]/g, ' ')
    .replace(/\s+/g, ' ') 
    .trim()
  if (text.length <= maxLen) return text
  return text.slice(0, maxLen - 1).trimEnd() + '…'
}

export function generateAutoTags(markdown: string, limit = 6): string[] {
  const words = markdown
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 3 && !STOPWORDS.has(w))
  const freq = new Map<string, number>()
  for (const w of words) freq.set(w, (freq.get(w) || 0) + 1)
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([w]) => w)
}

const STOPWORDS = new Set<string>([
  'this','that','have','with','from','your','about','there','their','would','could','should','into','while','where','when','which','also','such','been','they','them','then','than','what','will','other','more','some','only','over','under','across','because','these','those','very','much','many','most','like','just','well','even','back','down','being','after','before','again','each','same','ours','ourselves','yours','yourselves','hers','herself','him','himself','itself','it','its','ours','are','were','was','does','done','doing','can','cant','cannot','dont'
])


