import NewsInfo from "../../components/newsInfo/NewsInfo";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const News = () => {
  /* const newsImg = [
    "../../../src/assets/galleryImgs/DSC06973.JPG",
    "../../../src/assets/galleryImgs/DSC06961.JPG",
    "../../../src/assets/galleryImgs/DSC06960.JPG",
    "../../../src/assets/galleryImgs/DSC06975.JPG",
    "../../../src/assets/galleryImgs/DSC06978.JPG",
    "../../../src/assets/galleryImgs/DSC06969.JPG",
  ]; */
  return (
    <>
      <SectionHeader title={"Nyheder"} />
      <NewsInfo />
      <SectionHeader />
    </>
  );
};

export default News;
