// Static blog posts configuration for client-side rendering
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

// Static blog posts - add new posts here
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'hello-dytor',
    content: `# Why DYTOR Wins: Precision Show Control for Real Productions

Welcome to the DYTOR blog. In this post, we explore how DYTOR achieves millisecond-accurate timing, role-based remote dashboards, and multi-display orchestration for professional productions.

## Precision Timing

DYTOR uses a hybrid timing architecture to deliver drift-free coordination across devices. This ensures your countdowns, count-ups, and schedule automation are always correct — especially when it matters.

## Role-Based Dashboards

From Admin to Queue Manager to Speaker and Viewer, each role sees exactly what they need. This improves speed, clarity, and safety in live environments.

## Multi-Display Control

Choose solid colors, imagery, or video backgrounds with adjustable opacity for your secondary display.

![DYTOR Interface](/assets/Dytor_logo_name.png)

Ready to experience DYTOR? [Explore features](https://dytor.app/features) or [view pricing](https://dytor.app/pricing).`,
    frontmatter: {
      title: "Why DYTOR Wins: Precision Show Control for Real Productions",
      description: "A deep dive into DYTOR's timing engine, role-based dashboards, and multi-display control for live events.",
      date: "2025-10-01T00:00:00.000Z",
      author: "DYTOR Team",
      image: "/assets/Dytor_logo_name.png",
      tags: ["timing", "production", "events", "stage-management"]
    },
    readingTimeMinutes: 3
  }
]

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS.map(post => post.slug)
}

export function readPostBySlug(slug: string): BlogPost | null {
  return BLOG_POSTS.find(post => post.slug === slug) || null
}

export function listPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => {
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
