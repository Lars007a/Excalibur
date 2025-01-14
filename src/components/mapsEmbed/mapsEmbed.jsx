import styles from "./mapsEmbed.module.css";

export default function mapsEmbed() {
  return (
    <iframe
      className={styles.map}
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35276.85986736026!2d9.421919371472717!3d56.45391338735726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1736846887650!5m2!1sda!2sdk"
      width="600"
      height="450"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
