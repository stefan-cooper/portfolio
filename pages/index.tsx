import React from "react";
import Head from "next/head";
import { Landing } from "Components";

const description =
  "A small React-based portfolio to exhibit some of my work experiences and miscellaneous projects that I have worked on.";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Stefan Cooper: Portfolio</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={"Newsletter"} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={"/logo_full.png"} />
        <meta property="og:url" content={"https://stefancooper.com"} />
      </Head>
      <Landing />
    </div>
  );
};

export default Index;
