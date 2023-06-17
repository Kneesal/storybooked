import React, { ReactElement, useEffect } from "react";
import Head from "next/head";
import { Layout } from "../../components/Layout";

export default function FirstPost(): ReactElement {
  useEffect(() => {
    console.log("this will fetch all the post data");
  }, []);
  return (
    <Layout home={false}>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="../../../public/favicon.ico" />
      </Head>
      <h1 className="text-2xl font-bold text-center"> First Post </h1>
    </Layout>
  );
}
