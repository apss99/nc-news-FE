import axios from "axios";
import { useState, useEffect } from "react";

function goToArticles() {
  return <Link to="/articles">Articles</Link>;
}

export default goToArticles;

/*function GetArticlesButton(props) {
  const setFetchArticlesData = props.setFetchArticlesData;
  const fetchArticlesData = props.fetchArticlesData;
  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://better-news.onrender.com/api/articles",
      );
      setFetchArticlesData(response.request.response);
      console.log(response.request.response);
    }
    fetchArticles();
  }, [fetchArticlesData]);
  return (
    <div>
      <p> {fetchArticlesData} </p>
    </div>
  );
}

export default GetArticlesButton;
*/
