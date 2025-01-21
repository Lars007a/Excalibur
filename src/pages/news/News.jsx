import ArticleTeaser from "../../components/articleTeaser/ArticleTeaser";
import Newsletter from "../../components/newsletter/Newsletter";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

const News = () => {
  return (
    <>
      <SectionHeader title={"Nyheder"} />
      <ArticleTeaser />
      <Newsletter />
    </>
  );
};

export default News;
