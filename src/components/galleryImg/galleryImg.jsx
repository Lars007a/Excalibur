import styles from "./galleryImg.module.css";
import { useState } from "react";
import GalleryPopup from "../galleryPopup/galleryPopup.jsx";

export default function galleryImg({ imgToShow, imgArray }) {
  //Til popupen, når man klikker på biledet, og får det vist i stort.
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    if (!popup) {
      setPopup(true);
    } else {
      setPopup(false);
    }
  };

  return (
    <div className={`${styles.galleryImg}`}>
      <img src={imgToShow} onClick={togglePopup} alt="galleri-billed" />
      {popup ? (
        <GalleryPopup
          imgToShow={imgToShow}
          imgArray={imgArray}
          closeFunc={togglePopup}
        />
      ) : (
        ""
      )}
    </div>
  );
}
