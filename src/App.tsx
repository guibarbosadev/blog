import styles from "./App.module.css";
import Header from "./header/Header";

const App: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.content}>
      <Header avatarURL="https://avatars.githubusercontent.com/u/27873851?v=4"></Header>
    </div>
  </div>
);

export default App;
