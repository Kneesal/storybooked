import { Layout } from "@/components/Layout";
import { getAllPostsId, getPostData } from "@/lib/posts";
import Head from "next/head";
import Date from "../../components/Date/Date";
import utilStyles from "../../styles/utils.module.css";

interface PostProps {
  postData: {
    title: string;
    id: string;
    contentHtml: string;
    date: string;
  };
}

export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div style={{ marginTop: "30px" }}>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostsId();
  // Return a list of possible value for id
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
