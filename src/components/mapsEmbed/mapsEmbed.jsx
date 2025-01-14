import styles from "./mapsEmbed.module.css";

export default function mapsEmbed() {
  return (
    <iframe
      className={styles.map}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11202.378377560022!2d9.35482568669054!3d56.478035253501005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464be40751a658c1%3A0x4e9187be9299fd43!2sUndallslund!5e0!3m2!1sda!2sdk!4v1736850816954!5m2!1sda!2sdk"
      width="600"
      height="450"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
