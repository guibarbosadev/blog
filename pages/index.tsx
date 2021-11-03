import type { NextPage, GetStaticProps } from "next";
import React from "react";
import Posts from "../lib/components/posts/Posts";
import Header from "../lib/components/header/Header";
import styles from "../lib/styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <Posts />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  let props = {};

  if (locale) {
    props = await serverSideTranslations(locale, ["common"]);
  }

  return { props };
};

export default Home;
