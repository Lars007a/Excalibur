export async function fetchArticles() {
  try {
    const response = await fetch("../../data/articles.json");
    const articles = await response.json();

    return articles;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
