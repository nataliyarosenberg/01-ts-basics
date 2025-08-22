import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>("/api/posts");
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
console.log(fetchPosts());
