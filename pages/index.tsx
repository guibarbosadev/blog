import type { NextPage } from "next";
import React from "react";
import Posts from "../components/posts/Posts";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";

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

export default Home;
