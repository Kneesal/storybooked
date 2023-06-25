import { Layout } from "@/components/Layout";
import { getAllPostsId } from "@/lib/posts";

export default function Post() {
  return <Layout home={false}>...</Layout>;
}

export async function getStaticPaths() {
  const paths = getAllPostsId();
  // Return a list of possible value for id
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  console.log(params);
  // Fetch necessary data for the blog post using params.id
}
