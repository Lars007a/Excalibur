import { RxCross1 } from "react-icons/rx";
import styles from "./galleryPopup.module.css";

export default function galleryPopup({ closeFunc, img }) {
  return (
    <div className={`${styles.popup}`}>
      <RxCross1
        color={"white"}
        size={30}
        onClick={() => closeFunc()}
        className={styles.closeBtn}
      />
      <img src={img} alt="galleri-billed" />
    </div>
  );
}
