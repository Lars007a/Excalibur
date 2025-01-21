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
              imgArray.map((element, index) => {
                return (
                  <GalleryImg
                    imgToShow={element}
                    imgArray={imgArray}
                    key={index}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
