import { loadPostById } from "@/api/postsAPI";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import Post from "@/types/Post";
import { NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

interface Props {
  post: Post
}

export default function Post({ post }: Props) {
  // const { query } = useRouter();
  // const [post, setPost] = useState(serverPost)

  // useEffect(() => {
  //   if (typeof query.id === 'string') {
  //     loadPostById(query.id).then(setPost)
  //   }
  // }, [query.id])

  // if (!post) {
  //   return (
  //     <MainLayout title="Post page">
  //       <p>Loading...</p>
  //     </MainLayout>
  //   )
  // }

  return (
    <MainLayout title="Post page">
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href="/posts/">Go back</Link>
    </MainLayout>
  )
}

// Post.getInitialProps = async ({ query, req }: NextPageContext) => {
//   if (!req) {
//     return { post: null }
//   }

//   const responce = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const loadedPost = await responce.json();

//   return { post: loadedPost }
// }

export async function getServerSideProps({ query }: NextPageContext) {
  const responce = await fetch(`http://localhost:4200/posts/${query.id}`);
  const loadedPost = await responce.json();

  return { props: { post: loadedPost } }
}