import { useState, useEffect } from "react";
import styles from "./newsInfo.module.css";
import { fetchArticles } from "../../components/fetchArticleData/FetchArticleData.jsx";
import { articlesTeaserTmpl } from "../../components/articleTemplates/ArticleTemplates.jsx";

export function NewsInfo() {
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
          <div key={article.id}>{articlesTeaserTmpl(article)}</div>
        ))
      ) : (
        <p>No articles available</p>
      )}
    </section>
  );
}

export default NewsInfo;
