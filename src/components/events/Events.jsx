import styles from "./events.module.css";
const EventsHero = () => {
  return (
    <header
      className={styles.eventsHero}
      style={{ backgroundImage: `url(${eventsHeroImg})` }}
    ></header>
  );
};

export default EventsHero;
