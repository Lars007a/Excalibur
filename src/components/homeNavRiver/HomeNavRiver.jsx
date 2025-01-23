import styles from "./homeNavRiver.module.css";
import { Link } from "react-router-dom";

const HomeNavRiver = () => {
  return (
    <nav className={styles.pathNav}>
      <div className={styles.navLeftRow}>
        <Link to="/Member">Bliv medlem</Link>
      </div>

      <div className={styles.navRightRow}>
        <Link to="/Contact">Kontakt</Link>
      </div>
    </nav>
  );
};

export default HomeNavRiver;
