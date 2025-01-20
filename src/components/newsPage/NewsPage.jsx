import styles from "./newsPage.module.css";
import { fetchArticles } from "../../components/fetchArticleData/FetchArticleData.jsx";
import { ArticlesTmpl } from "../../components/articleTemplates/ArticleTemplates.jsx";

let articles = await fetchArticles();

const articlePageContainer = document.querySelector(".articleContainer");

if (articlePageContainer) {
  let search = location.search;

  let articleID = new URLSearchParams(search).get("id");
  let article = articles.find((a) => a.id == articleID);

  articlePageContainer.insertAdjacentHTML("beforeend", ArticlesTmpl(article));
}

const NewsPage = () => {
  return (
    <>
      <figure></figure>
    </>
  );
};

export default NewsPage;
