import styles from "./Posts.module.css";
import { useTranslation } from "react-i18next";
import PostTile from "../post-tile/PostTile";
import { Post } from "../../types/post";

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("posts")}</h2>
      <hr className={styles.divider} />
      {posts.map((post) => (
        <PostTile key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
