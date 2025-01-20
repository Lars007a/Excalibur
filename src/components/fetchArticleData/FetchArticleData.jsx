import articles from "../../data/articles.json";

export async function fetchArticles() {
  try {
    return articles;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
