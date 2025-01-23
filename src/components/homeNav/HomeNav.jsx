import styles from "./homeNav.module.css";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <nav className={styles.pathNav}>
      <div className={styles.navLeftRow}>
        <Link to="/News">Nyheder</Link>
        <Link to="/Arrangements">Arrangementer</Link>
      </div>

      <div className={styles.navRightRow}>
        <Link to="/Info">Info</Link>
        <Link to="/Gallery">Gallery</Link>
      </div>
    </nav>
  );
};

export default HomeNav;
