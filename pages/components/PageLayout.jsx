import React from "react";
import Head from "next/head";
import Link from "next/link";

function PageLayout({ children, title = "NewsApp" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="newsapp - the best app to read news"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div>
          <Link href="/">📰 newsapi</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
      </header>
      <main>{children}</main>
      <style jsx>
        {`
          header {
            display: flex;
            justify-content: space-between;
            padding: 20px;
          }
        `}
      </style>
    </>
  );
}

export default PageLayout;
