import styles from "./homeHero.module.css";
import { Link } from "react-router-dom";
import baggroundImg from "../../assets/notSortedImgs/bagground_img.jpg";
import { useLocalStorage } from "@uidotdev/usehooks";

const HomeHero = () => {
  const [savedUser, setSavedUser] = useLocalStorage("savedUser", {});

  const handleLogout = () => setSavedUser({});

  return (
    <section className={styles.homeHero}>
      <img
        className={styles.backgroundImg}
        src={baggroundImg}
        alt="Picture of dirt background"
      />

      {savedUser.loggedIn == true ? (
        <Link className={styles.loginBtn} onClick={handleLogout}>
          Logout
        </Link>
      ) : (
        <Link to="/Login" className={styles.loginBtn}>
          Login
        </Link>
      )}
      <img
        className={styles.HomeHeroLogo}
        src="/logo.png"
        alt="Picture of logo"
      />
    </section>
  );
};

export default HomeHero;
