import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/config'
import type { Metadata } from 'next'

// Enable static generation for blog posts to avoid serverless file system issues
export async function generateStaticParams() {
  try {
    let posts = getBlogPosts()
    if (!posts || posts.length === 0) {
      console.warn('No blog posts found for static generation')
      return []
    }
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    // Return empty array to allow dynamic rendering as fallback
    return []
  }
}

// Use dynamic rendering to avoid React version conflicts during static generation
// Blog posts will be rendered on-demand at request time
export const dynamic = 'force-dynamic'
export const dynamicParams = true

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  try {
    const resolvedParams = await params
    const posts = getBlogPosts()
    let post = posts.find((post) => post && post.slug === resolvedParams.slug)
    
    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      }
    }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`
  
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
  } catch (error) {
    console.error('Error generating metadata:', error)
    // Return minimal metadata to prevent 5xx errors
    return {
      title: 'Blog Post',
      description: 'Blog post page',
      alternates: {
        canonical: `${baseUrl}/blog`,
      },
    }
  }
}

export default async function Blog({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  try {
    const resolvedParams = await params
    
    // Get all posts and find the matching one
    const posts = getBlogPosts()
    
    if (!posts || posts.length === 0) {
      console.error('No blog posts found')
      notFound()
    }
    
    let post = posts.find((post) => post && post.slug === resolvedParams.slug)

    if (!post) {
      console.error(`Blog post not found: ${resolvedParams.slug}`)
      notFound()
    }

    return (
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'Dr. Jan Duffy',
              },
            }),
          }}
        />
        <h1 className="title font-semibold text-2xl tracking-tighter">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </section>
    )
  } catch (error) {
    console.error('Error rendering blog post:', error)
    notFound()
  }
}
