import styles from "./page.module.css";
import Home from './pages/Home/Home';


export default function Page() {
  return (
    <div className={styles.page}>
      <Home />
    </div>
  );
}
