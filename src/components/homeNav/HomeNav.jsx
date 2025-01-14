import styles from "./homeNav.module.css";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <nav className={styles.pathNav}>
      <div className={styles.navLeftRow}>
        <Link to="/News">Nyheder</Link>
        <Link to="/Arrangements">Arrangementer</Link>
        <Link to="/Info">Info</Link>
      </div>

      <div className={styles.navRightRow}>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/Member">Bliv medlem</Link>
        <Link to="/Contact">Kontakt</Link>
      </div>
    </nav>
  );
};

export default HomeNav;
