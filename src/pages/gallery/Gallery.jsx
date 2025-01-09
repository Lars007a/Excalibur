import Sectionheader from "../../components/sectionHeader/SectionHeader.jsx";
import GalleryGrid from "../../components/galleryGrid/galleryGrid.jsx";

const Gallery = () => {
  return (
    <>
      <Sectionheader title={"Galleri"} subtitle={"Se vores billeder!"} />

      <GalleryGrid imgArray={imgs} />
    </>
  );
};

export default Gallery;
