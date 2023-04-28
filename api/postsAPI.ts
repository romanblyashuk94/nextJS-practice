export async function loadAllPosts() {
  const responce = await fetch("http://localhost:4200/posts");
  const loadedPosts = await responce.json();

  return loadedPosts;
}

export async function loadPostById(id: string) {
  const responce = await fetch(`http://localhost:4200/posts/${id}`);
  const loadedPost = await responce.json();

  return loadedPost;
}
