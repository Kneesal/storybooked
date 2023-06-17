import Head from "next/head";
import { siteTitle, Layout } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>passionate about software engineering</p>
      </section>
    </Layout>
  );
}
