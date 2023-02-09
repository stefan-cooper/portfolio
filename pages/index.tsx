import React from "react";
import Head from "next/head";
import { Landing } from "Components";
import { Navbar } from "components/Navbar";

const description =
  "A small React-based portfolio to exhibit some of my work experiences and miscellaneous projects that I have worked on.";
const title = "Stefan Cooper: Portfolio";

const Index = () => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={"/favicon.ico"}></link>
        <meta name="author" content="Stefan Cooper" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={"/logo_full.png"} />
        <meta property="og:url" content={"https://stefancooper.com"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Stefan Cooper, stefan cooper portfolio" />
        <meta name="robots" content="all" />
      </Head>
      <Navbar />
      <Landing />
    </div>
  );
};

export default Index;
