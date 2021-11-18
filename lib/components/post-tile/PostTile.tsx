import type { Post } from "../../types/post";
import { format } from "date-fns";
import styles from "./PostTile.module.css";
import Link from "next/link";

interface PostTileProps {
  post: Post;
}

const PostTile: React.FC<PostTileProps> = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Link href={post.url}>
          <a className={styles.titleLink}>
            <h3 className={styles.title}>{post.title}</h3>
          </a>
        </Link>
        <div className={styles.badge}>{post.category}</div>
      </div>
      <div className={styles.date}>
        {format(new Date(post.date), "LLLL, d, yyyy").toLowerCase()}
      </div>
      <p className={styles.description}>{post.description}</p>
    </div>
  );
};

export default PostTile;
