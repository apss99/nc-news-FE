import { useState, useEffect } from "react";
import ArticlesCard from "./ArticlesCard";
import ArticlesEndpointButton from "../Header/ArticlesEndpointButton";
import axios from "axios";

function ArticlesList(props) {
  const setFetchArticlesData = props.setFetchArticlesData;
  const fetchArticlesData = props.fetchArticlesData;
  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://better-news.onrender.com/api/articles",
      );
      const articlesObject = response.data.articles;
      console.log(articlesObject);
      setFetchArticlesData(articlesObject);
    }
    fetchArticles();
  }, []);
  return (
    <div>
      <ul>
        {fetchArticlesData.map((article) => {
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
