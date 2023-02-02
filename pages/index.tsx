import React from "react";
import Head from "next/head";
import Landing from "./components/Landing";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Stefan Cooper: Portfolio</title>
        <meta
          name="description"
          content="A small portfolio to display and document some of my experiences and projects that I have worked on"
        />
        <meta property="og:title" content={"Newsletter"} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={
            "A newsletter related to front-end development, leadership, career development, my journey into content creation, and lots more behind the scenes that I don't share anywhere else"
          }
        />
        <meta property="og:image" content={"/logo_full.png"} />
        <meta property="og:url" content={"https://stefancooper.com"} />
      </Head>
      <Landing />
    </div>
  );
};

export default Index;
