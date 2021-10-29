import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import twitterLogo from "../images/twitter.svg";
import githubLogo from "../images/github.png";

const Header: React.FC = ({}) => {
  const { t } = useTranslation();

  return (
    <header className={styles.container}>
      <div className={styles.leftContent}>
        <img
          src="https://avatars.githubusercontent.com/u/27873851?v=4"
          className={styles.avatar}
          alt={t("avatarPicture")}
        />
        <div>
          <div className={styles.about}>
            <h3 className={styles.hi}>{t("hi")}</h3>
            <div className={styles.icons}>
              <a href="https://twitter.com/guibarbosadev">
                <img
                  className={styles.socialIcon}
                  src={twitterLogo}
                  alt={t("myTwitter")}
                />
              </a>
              <a href="https://github.com/guibarbosadev">
                <img
                  className={styles.socialIcon}
                  src={githubLogo}
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
