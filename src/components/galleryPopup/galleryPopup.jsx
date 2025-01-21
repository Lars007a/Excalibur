import { RxCross1 } from "react-icons/rx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./galleryPopup.module.css";
import { useEffect, useState } from "react";

export default function galleryPopup({ closeFunc, imgToShow, imgArray }) {
  const [img, setImg] = useState(); //Billedet der faktisk bliver vist i popupen.

  useEffect(() => {
    //Set billedet til at vise standard billedet, der er givet til denne popup.
    setImg(imgToShow);

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

  const forward = () => {
    //Find indekset af billedet der bliver vist.
    //Gå derefter en ekstra op, medmindre det er den sidste i arrayen, i sådan et tilfælde gå tilbage til starten.

    let index = imgArray.findIndex((element) => {
      if (element == img) {
        return true;
      }

      return false;
    });

    if (index >= imgArray.length - 1) {
      setImg(imgArray[0]);
      return;
    }

    setImg(imgArray[index + 1]);
  };

  const back = () => {
    //Find indekset af billedet der bliver vist.
    //Gå derefter en ekstra ned, medmindre det er den første i arrayen, i sådan et tilfælde gå hen til slutningen af arrayen.

    let index = imgArray.findIndex((element) => {
      if (element == img) {
        return true;
      }

      return false;
    });

    if (index == 0) {
      setImg(imgArray[imgArray.length - 1]);
      return;
    }

    setImg(imgArray[index - 1]);
  };

  return (
    <div className={`${styles.popup}`}>
      <RxCross1
        color={"white"}
        size={30}
        onClick={() => closeFunc()}
        className={styles.closeBtn}
      />
      <img src={img} alt="galleri-billed" />
      <div className={styles.changeImgBox}>
        <IoIosArrowBack
          color={"white"}
          size={30}
          className={styles.left}
          onClick={back}
        />
        <IoIosArrowForward
          color={"white"}
          size={30}
          className={styles.right}
          onClick={forward}
        />
      </div>
    </div>
  );
}
