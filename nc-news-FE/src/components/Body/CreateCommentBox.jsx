import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewComment from "./NewComment";
import CommentCard from "./CommentCard";

function CreateCommentBox(props) {
  const [commentsData, setCommentsData] = useState([]);
  const { article_id } = useParams();
  const showCommentBox = props.showCommentBox;
  const setShowCommentBox = props.setShowCommentBox;
  useEffect(() => {
    async function postComment() {
      const response = await axios.post(
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
