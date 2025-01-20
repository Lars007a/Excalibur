import styles from "./newsInfo.module.css";
import { fetchArticles } from "../fetchArticleData/FetchArticleData.jsx";
import { articlesTeaserTmpl } from "../articleTemplates/ArticleTemplates.jsx";

let articles = await fetchArticles();

export function NewsInfo() {
  let product = document.querySelector(".product");

  return (
    <>
      <section className={styles.news}>
        <h2>Seneste artikler</h2>
        if (product)
        {articles.forEach((a) => {
          product.insertAdjacentHTML("beforeend", articlesTeaserTmpl(a));
        })}
        ;
      </section>
    </>
  );
}

export default NewsInfo;
