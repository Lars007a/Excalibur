import Sectionheader from "../../components/sectionHeader/SectionHeader.jsx";
import GalleryGrid from "../../components/galleryGrid/galleryGrid.jsx";

const Gallery = () => {
  const imgArray = [
    "../../../src/assets/galleryImgs/DSC06914.JPG",
    "../../../src/assets/galleryImgs/DSC06957.JPG",
    "../../../src/assets/galleryImgs/DSC06958.JPG",
    "../../../src/assets/galleryImgs/DSC06960.JPG",
    "../../../src/assets/galleryImgs/DSC06961.JPG",
    "../../../src/assets/galleryImgs/DSC06967.JPG",
    "../../../src/assets/galleryImgs/DSC06968.JPG",
    "../../../src/assets/galleryImgs/DSC06969.JPG",
    "../../../src/assets/galleryImgs/DSC06970.JPG",
    "../../../src/assets/galleryImgs/DSC06971.JPG",
    "../../../src/assets/galleryImgs/DSC06972.JPG",
    "../../../src/assets/galleryImgs/DSC06973.JPG",
    "../../../src/assets/galleryImgs/DSC06974.JPG",
    "../../../src/assets/galleryImgs/DSC06975.JPG",
    "../../../src/assets/galleryImgs/DSC06976.JPG",
    "../../../src/assets/galleryImgs/DSC06977.JPG",
    "../../../src/assets/galleryImgs/DSC06978.JPG",
    "../../../src/assets/galleryImgs/DSC06982.JPG",
    "../../../src/assets/galleryImgs/DSC06914.JPG",
    "../../../src/assets/galleryImgs/DSC07023.JPG",
    "../../../src/assets/galleryImgs/samlet.jpg",
  ];

  return (
    <>
      <Sectionheader title={"Galleri"} subtitle={"Se vores billeder!"} />
      <GalleryGrid imgArray={imgArray} />
    </>
  );
};

export default Gallery;
