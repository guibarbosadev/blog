import styles from "../styles/Home.module.css";
import Posts from "../components/posts/Posts";
import Header from "../components/header/Header";

const App: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Header />
      <Posts />
    </div>
  </div>
);

export default App;
