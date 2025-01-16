import styles from "./homeHero.module.css";
import { Link } from "react-router-dom";
import baggroundImg from "../../assets/notSortedImgs/bagground_img.jpg";

const HomeHero = () => {
  return (
    <section className={styles.homeHero}>
      <img
        className={styles.backgroundImg}
        src={baggroundImg}
        alt="Picture of dirt background"
      />
      <Link to="/Login" className={styles.loginBtn}>
        Login
      </Link>
      <img
        className={styles.HomeHeroLogo}
        src="/logo.png"
        alt="Picture of logo"
      />
    </section>
  );
};

export default HomeHero;
