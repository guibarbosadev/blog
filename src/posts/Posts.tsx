import styles from "./Posts.module.css";
import { useTranslation } from "react-i18next";

const Posts = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("posts")}</h2>
      <hr className={styles.divider} />
    </div>
  );
};

export default Posts;
