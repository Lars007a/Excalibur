import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./articlePage.module.css";
import { fetchArticles } from "../fetchArticleData/FetchArticleData.jsx";
import { articlesTmpl } from "../articleTemplates/ArticleTemplates.jsx";

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const articles = await fetchArticles();
        const foundArticle = articles.find((a) => a.id === id);
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError("Article not found");
        }
      } catch (err) {
        setError("Error fetching article");
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);

  if (loading) {
    return <p>Loader artikel...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>{article ? articlesTmpl(article) : <p>Ingen artikel fundet.</p>}</div>
  );
};

export default ArticlePage;
