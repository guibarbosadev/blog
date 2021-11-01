import styles from "./Header.module.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Header: React.FC = ({}) => {
  const { t } = useTranslation("common");

  return (
    <header className={styles.container}>
      <div className={styles.leftContent}>
        <Image
          src="/me.jpeg"
          width={100}
          height={100}
          className={styles.avatar}
          alt={t("avatarPicture")}
        />
        <div>
          <div className={styles.about}>
            <h1 className={styles.hi}>{t("hi")}</h1>
            <div className={styles.icons}>
              <a href="https://twitter.com/guibarbosadev">
                <Image
                  className={styles.socialIcon}
                  src="/twitter.svg"
                  width={32}
                  height={32}
                  alt={t("myTwitter")}
                />
              </a>
              <a href="https://github.com/guibarbosadev">
                <Image
                  className={styles.socialIcon}
                  src="/github.png"
                  width={32}
                  height={32}
                  alt={t("myGithub")}
                />
              </a>
            </div>
          </div>
          <p className={styles.aboutText}>{t("aboutBlog")}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
