import styles from "./homePathRiver.module.css";
import HomeBoatCharacter from "../../components/HomeBoatCharacter/HomeBoatCharacter";
import HomeNavRiver from "../homeNavRiver/HomeNavRiver";

const HomePathRiver = () => {
  return (
    <>
      <section className={styles.homePatchRiver}></section>
      <HomeNavRiver />
      <HomeBoatCharacter />
    </>
  );
};

export default HomePathRiver;
