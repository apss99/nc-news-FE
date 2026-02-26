import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewComment from "./NewComment";
import CommentCard from "./CommentCard";

function ViewComments() {
  const [commentsData, setCommentsData] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    async function getComments() {
      const response = await axios.get(
        `https://better-news.onrender.com/api/articles/${article_id}/comments`,
      );
      console.log(response);
      const commentsObject = response.data.comments;
      setCommentsData(commentsObject);
    }
    getComments();
  }, []);
  return (
    <div>
      <ul>
        {commentsData.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard key={comment.comment_id} {...comment} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ViewComments;
