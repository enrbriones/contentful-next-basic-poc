import { PostList } from "@/components/posts/PostList";

import { fetchAllPosts } from "@/lib/contentful";

export default async function Posts() {
  const posts = await fetchAllPosts();
  // console.log("posts", posts);

  return (
    <div className="mb-8">
      <h1 className="text-2xl mb-3">Publicaciones</h1>
      <PostList posts={posts} />
    </div>
  );
}
