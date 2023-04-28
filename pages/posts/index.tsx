import { loadAllPosts } from "@/api/postsAPI";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import Post from "@/types/Post";
import { NextPageContext } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  posts: Post[]
}
export default function Posts({ posts }: Props) {
  // const [posts, setPosts] = useState(serverPosts);

  // useEffect(() => {
  //   loadAllPosts().then(setPosts)
  // }, [])

  // if (!posts) {
  //   return <MainLayout title="Posts page">
  //     <h1>Posts Page</h1>
  //     <p>Loading...</p>
  //   </MainLayout >
  // }

  return (
    <MainLayout title="Posts page">
      <h1>Posts Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout >
  )
}

export const getServerSideProps = async () => {
  const responce = await fetch('http://localhost:4200/posts');
  const loadedPosts = await responce.json();

  return { props: { posts: loadedPosts } }
}
