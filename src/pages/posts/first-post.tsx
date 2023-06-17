import React, { useEffect } from "react";
import BackHome from "@/components/BackHome/BackHome";
import Head from "next/head";

const FirstPost = () => {
  useEffect(() => {
    console.log("this will fetch all the post data");
  }, []);
  return (
    <div>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className="text-2xl font-bold text-center"> First Post </h1>
      <BackHome label={"Back Home"} />
    </div>
  );
};

export default FirstPost;
