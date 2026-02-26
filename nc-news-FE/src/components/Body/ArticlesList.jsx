import { useEffect } from "react";
import ArticlesCard from "./ArticlesCard";
import axios from "axios";

function ArticlesList(props) {
  const setArticlesData = props.setFetchArticlesData;
  const articlesData = props.fetchArticlesData;
  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://better-news.onrender.com/api/articles",
      );
      const articlesObject = response.data.articles;
      setArticlesData(articlesObject);
    }
    fetchArticles();
  }, []);
  return (
    <div>
      <ul>
        {articlesData.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticlesCard key={article.article_id} {...article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticlesList;
