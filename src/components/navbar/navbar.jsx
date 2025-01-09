import Logo from "../../assets/logo.png";
import styles from "./navbar.module.css";

export default function navar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>
          <img src={Logo} alt="logo excalibur" />
        </div>

        <div className="nav-hamburger"></div>

        <div className="nav-content"></div>
      </nav>
    </>
  );
}
