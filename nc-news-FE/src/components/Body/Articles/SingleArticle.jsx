import { useEffect } from "react";
import axios from "axios";
import DisplayedArticle from "./DisplayedArticle";
import { useParams } from "react-router-dom";

function SingleArticle(props) {
  const singleArticleData = props.singleArticleData;
  const setSingleArticleData = props.setSingleArticleData;
  const { article_id } = useParams();
  useEffect(() => {
    async function fetchSingleArticle() {
      const response = await axios.get(
        `https://better-news.onrender.com/api/articles/${article_id}`,
      );
      console.log(response);
      const articleObject = response.data.article;
      setSingleArticleData(articleObject);
    }
    fetchSingleArticle();
  }, [article_id]);
  return (
    <div>
      <DisplayedArticle key={article_id} {...singleArticleData} />
    </div>
  );
}

export default SingleArticle;
