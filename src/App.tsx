import styles from "./App.module.css";
import Posts from "./posts/Posts";
import Header from "./header/Header";

const App: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Header />
      <Posts />
    </div>
  </div>
);

export default App;
