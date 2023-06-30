import { Layout } from "@/components/Layout";
import { getAllPostsId, getPostData } from "@/lib/posts";

interface PostProps {
  postData: {
    title: string;
    id: string;
    date: string;
  };
}

export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
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
  // Fetch necessary data for the blog post using params.id
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
