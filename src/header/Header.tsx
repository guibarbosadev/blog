import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";

interface HeaderProps {
  avatarURL?: string;
}

const Header: React.FC<HeaderProps> = ({ avatarURL }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <header>
        {avatarURL && (
          <img src={avatarURL} className={styles.avatar} alt="avatar picture" />
        )}
        <h3>{t("hi")}</h3>
      </header>
    </div>
  );
};

export default Header;
