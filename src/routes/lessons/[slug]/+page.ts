// src/routes/blog/[slug]/+page.js
export async function load({ params  }: any){
    const post = await import(`../lesson-md/${params.slug}.md`)
    const { title, date } = post.metadata
    const content = post.default
  
    return {
      content,
      title,
      date,
    }
  }