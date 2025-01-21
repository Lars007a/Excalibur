import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./articleTeaser.module.css";
import { fetchArticles } from "../fetchArticleData/FetchArticleData.jsx";
import { articlesTeaserTmpl } from "../articleTemplates/ArticleTemplates.jsx";

export function ArticleTeaser() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
      } catch (err) {
        setError("Error fetching articles");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className={styles.news}>
      <h2>Seneste artikler</h2>
      {articles.length > 0 ? (
        articles.map((article) => (
          <Link to={`/article/${article.id}`} key={article.id}>
            {articlesTeaserTmpl(article)}
          </Link>
        ))
      ) : (
        <p>No articles available</p>
      )}
    </section>
  );
}

export default ArticleTeaser;
