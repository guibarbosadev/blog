import type { Post } from "../../types/post";
import styles from "./PostTile.module.css";

interface PostTileProps {
  post: Post;
}

const PostTile: React.FC<PostTileProps> = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <a className={styles.titleLink} href={post.url}>
          <h3 className={styles.title}>{post.title}</h3>
        </a>
        <div className={styles.badge}>{post.category}</div>
      </div>
      <div className={styles.date}>{post.date}</div>
      <p className={styles.description}>{post.description}</p>
    </div>
  );
};

export default PostTile;
