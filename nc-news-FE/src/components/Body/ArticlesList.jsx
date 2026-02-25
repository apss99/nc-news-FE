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
      console.log(response.request.response);
      setFetchArticlesData(response.request.response);
    }
    fetchArticles();
  }, [fetchArticlesData]);
  return (
    <div>
      <p> {fetchArticlesData} </p>
    </div>
  );
}

export default ArticlesList;
