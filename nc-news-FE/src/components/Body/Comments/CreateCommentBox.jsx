import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../../Contexts/UserContext";

function CreateCommentBox({ article_id }) {
  const loggedInUser = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  async function handleMakeComment(event) {
    event.preventDefault();
    const response = await axios.post(
      `https://better-news.onrender.com/api/articles/${article_id}/comments`,
      {
        article_id: article_id,
        username: loggedInUser.username,
        body: newComment,
      },
    );
    setNewComment("");
  }
  return (
    <>
      <form onSubmit={handleMakeComment}>
        <textarea
          placeholder="Inspire us with your words!"
          className="new-comment-textbox"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        />
        <button className="submit-comment" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
export default CreateCommentBox;
