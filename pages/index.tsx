import type { NextPage, GetStaticProps } from "next";
import React from "react";
import Posts from "../lib/components/posts/Posts";
import Header from "../lib/components/header/Header";
import styles from "../lib/styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getPosts } from "../lib/api/posts";
import { Locale } from "../lib/types/locale";
import { Post } from "../lib/types/post";

interface HomePageProps {
  posts: Post[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <Posts posts={posts} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let props = {};

  if (locale) {
    const posts = getPosts(locale as Locale);
    const translations = await serverSideTranslations(locale, ["common"]);

    props = {
      posts,
      ...translations,
    };
  }

  return { props };
};

export default Home;
