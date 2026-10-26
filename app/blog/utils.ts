import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

type BlogPost = {
  metadata: Metadata
  slug: string
  content: string
}

/** Theme demo posts — keep files for dev reference but exclude from index/sitemap. */
export const NOINDEX_BLOG_SLUGS = new Set([
  'vim',
  'spaces-vs-tabs',
  'static-typing',
])

// Cache blog posts to avoid repeated file system reads
let blogPostsCache: BlogPost[] | null = null

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  if (!match || !match[1]) {
    throw new Error('Invalid frontmatter format')
  }
  let frontMatterBlock = match[1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string): string[] {
  try {
    if (!fs.existsSync(dir)) {
      return []
    }
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
  } catch (error) {
    return []
  }
}

function readMDXFile(filePath: string) {
  try {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`)
    }
    let rawContent = fs.readFileSync(filePath, 'utf-8')
    return parseFrontmatter(rawContent)
  } catch (error) {
    throw error
  }
}

function getMDXData(dir: string): BlogPost[] {
  try {
    let mdxFiles = getMDXFiles(dir)
    return mdxFiles.map((file) => {
      try {
        let { metadata, content } = readMDXFile(path.join(dir, file))
        let slug = path.basename(file, path.extname(file))

        return {
          metadata,
          slug,
          content,
        }
      } catch (error) {
        console.error(`Error processing file ${file}:`, error)
        return null
      }
    }).filter((post): post is BlogPost => post !== null)
  } catch (error) {
    console.error(`Error getting MDX data from ${dir}:`, error)
    return []
  }
}

export function getIndexableBlogPosts(): BlogPost[] {
  return getBlogPosts().filter((post) => !NOINDEX_BLOG_SLUGS.has(post.slug))
}

export function getBlogPosts(): BlogPost[] {
  // Return cached posts if available (for serverless environments)
  if (blogPostsCache !== null) {
    return blogPostsCache
  }

  try {
    // Use process.cwd() which should work in both build-time and runtime
    // During build, this will be the project root
    // In serverless, if static generation worked, this should never be called
    const postsDir = path.join(process.cwd(), 'app', 'blog', 'posts')
    
    // Check if directory exists
    if (!fs.existsSync(postsDir)) {
      console.warn(`Blog posts directory not found: ${postsDir}`)
      // Cache empty array to prevent repeated attempts
      blogPostsCache = []
      return []
    }
    
    const posts = getMDXData(postsDir)
    
    // Only cache if we got valid posts
    if (posts && posts.length > 0) {
      blogPostsCache = posts
    } else {
      // Cache empty array to prevent repeated file system access attempts
      blogPostsCache = []
    }
    
    return posts
  } catch (error) {
    // In serverless environments, fs might not be available at runtime
    // This should only happen if static generation failed
    console.error('Error loading blog posts:', error)
    // Cache empty array to prevent repeated error attempts
    blogPostsCache = []
    return []
  }
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
