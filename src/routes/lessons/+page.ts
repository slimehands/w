export const load= () =>{
      // Do stuff here
  return {
    props: {
      // The stuff to return
      posts: fetchMarkdownPosts()
    }
  }
}
const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/lessons/lesson-md/*')
    const iterablePostFiles = Object.entries(allPostFiles)
    
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata }:any = await resolver()
        const postPath = path.slice(11, -3)
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )
  
    return allPosts
  }