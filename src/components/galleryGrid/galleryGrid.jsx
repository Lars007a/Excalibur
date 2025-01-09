import styles from "./galleryGrid.module.css";
import GalleryImg from "../galleryImg/galleryImg.jsx";

//Modtager en array af billeder, og viser dem i en galleri-grid.
export default function galleryGrid({ imgArray }) {
  return (
    <>
      <section className={styles.galleryBox}>
        <div className={styles.gridContainer}>
          {/* For at holde galleriet på plads. */}
          <div className={styles.grid}>
            {imgArray.length <= 0 ? (
              <p className={styles.errorTxt}>
                Ingen billeder. Kom tilbage senere.
              </p>
            ) : (
              imgArray.forEach((element, index) => {
                <GalleryImg img={element} key={index} />;
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
