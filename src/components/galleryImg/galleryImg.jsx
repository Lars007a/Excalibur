import styles from "./galleryImg.module.css";

export default function galleryImg({ img }) {
  return (
    <div className={styles.galleryImg}>
      <img src={img} alt="galleri-billed" />
    </div>
  );
}
