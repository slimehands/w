<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
    
     export let data
    </script>
    
    <h1>Blog</h1>
      
    <ul>
      {#each posts as post}
        <li>
          <h2>
            <a href={post.path}>
              {post.meta.title}
            </a>
          </h2>
          Published {post.meta.date}
        </li>
      {/each}
    </ul>

this