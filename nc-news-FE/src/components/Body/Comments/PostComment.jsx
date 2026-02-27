/*import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import newComment from "./newComment";
import CommentCard from "./CommentCard";

function PostComment(props) {
  const [commentsData, setCommentsData] = useState([]);
  const { article_id } = useParams();
  const showCommentBox = props.showCommentBox;
  const setShowCommentBox = props.setShowCommentBox;
  useEffect(() => {
    async function makeComment() {
      const response = await axios.post(
        `https://better-news.onrender.com/api/articles/${article_id}/comments`,
      );
      console.log(response);
      const commentsObject = response.data.comments;
      setCommentsData(commentsObject);
    }
    makeComment();
  }, []);
  return (
    <div key={commentsObject.comment_id}>
      <NewComment key={commentsObject.comment_id} {...comment} />
    </div>
  );
}

export default PostComment;*/
