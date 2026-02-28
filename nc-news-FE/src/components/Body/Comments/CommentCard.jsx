import { useContext, useState } from "react";
import { Link } from "react-router";
import { UserContext } from "../../../Contexts/User";
import axios from "axios";

function CommentCard({
  comment_id,
  article_title,
  body,
  votes,
  author,
  created_at,
}) {
  const [deletionMessage, setDeletionMessage] = useState("");
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  async function handleDeleteComment() {
    if (loggedInUser.username === author) {
      const response = await axios.delete(
        `https://better-news.onrender.com/api/comments/${comment_id}`,
      );
      setDeletionMessage(`status:${response.status} comment deleted`);
    }
    if (loggedInUser.username !== author) {
      setDeletionMessage(
        "HEY! Only delete your own comments please. Or find out their password first...",
      );
    }
  }
  return (
    <div className="comment-card">
      <h4>{author}</h4>
      <p>{created_at}</p>
      <p>{body}</p>
      <p>{votes}</p>
      <button onClick={handleDeleteComment}>delete</button>
      <p>{deletionMessage}</p>
    </div>
  );
}

export default CommentCard;
