import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PageLayout from "./components/PageLayout";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const API_KEY = "b5dbd67693af4df080df4680eb8b164b";
const URL_NEWS = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

export default function Home({ articles }) {
  return (
    <PageLayout title="NewsApp - Home">
      <div className={styles.container}>
        {articles.length === 0 && <p>No hay árticulos</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <div key={index}>
              <img
                src={article.urlToImage}
                alt={`Image for the article ${article.title}`}
              />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          ))}
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`
  );
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}
