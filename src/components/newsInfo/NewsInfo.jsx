import styles from "./newsInfo.module.css";
import { fetchArticles } from "../fetchArticleData/FetchArticleData.jsx";
import { ArticlesTeaserTmpl } from "./templates.js";

const NewsInfo = () => {
  return (
    <>
      <section className={styles.news}>
        <h2>Seneste artikler</h2>
      </section>
    </>
  );
};

export default NewsInfo;
