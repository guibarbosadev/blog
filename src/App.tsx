import styles from "./App.module.css";
import Header from "./header/Header";

const App: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Header />
    </div>
  </div>
);

export default App;
