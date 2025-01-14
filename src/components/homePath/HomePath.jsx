import styles from "./homePath.module.css";
import { Link } from "react-router-dom";
import Character from "../../components/homeCharacter/HomeCharacter";
import HomeNav from "../../components/homeNav/HomeNav";

const HomePath = () => {
  return (
    <>
      <section className={styles.homePath}></section>
      <HomeNav />
      <Character />
    </>
  );
};

export default HomePath;
