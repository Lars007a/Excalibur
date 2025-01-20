import { RxCross1 } from "react-icons/rx";
import styles from "./galleryPopup.module.css";
import { useEffect } from "react";

export default function galleryPopup({ closeFunc, img }) {
  useEffect(() => {
    //Funktion til eventlisteneren ved escape, der lukker popupen.
    const handlePress = (event) => {
      if (event.key == "Escape") {
        closeFunc();
      }
      console.log("tryk");
      return;
    };

    //Tilføj escape event listener, der lukker ved tryk på escape.
    document.addEventListener("keydown", handlePress);

    //cleanup. Fjern eventlisteneren.
    return () => {
      console.log("removal");
      document.removeEventListener("keydown", handlePress);
    };
  }, []);

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
