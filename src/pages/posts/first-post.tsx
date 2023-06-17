import React, { ReactElement, useEffect } from "react";
import BackHome from "@/components/BackHome/BackHome";
import Head from "next/head";
import Script from "next/script";
import Layout from "@/components/Layout/layout";

export default function FirstPost(): ReactElement {
  useEffect(() => {
    console.log("this will fetch all the post data");
  }, []);
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="../../../public/favicon.ico" />
      </Head>
      <h1 className="text-2xl font-bold text-center"> First Post </h1>
      <BackHome label={"Back Home"} />
    </Layout>
  );
}
