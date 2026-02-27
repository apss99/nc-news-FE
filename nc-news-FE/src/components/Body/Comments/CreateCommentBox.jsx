import Popup from "reactjs-popup";
import { useState } from "react";
import axios from "axios";

//comment submitted as text can make NewComment just a normal function and that function should change the state of another component called SubmittedCommentMessagejsx

function CreateCommentBox({ article_id }) {
  const [newComment, setNewComment] = useState("");
  const handleInput = (event) => {
    setNewComment({ ...post, [event.target.name]: event.target.event });
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post(
      `https://better-news.onrender.com/api/articles/${article_id}/comments`,
      {
        article_id: article_id,
        username: "grumpy19",
        body: newComment,
      },
    );
    console.dir(response);
    setNewComment("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
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

/*
function CreateCommentBox() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <button className="new-comment-button" onClick={() => setOpen(true)}>
        New Comment
      </button>
      <Popup
        className="new-comment-popup"
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
        position="center-bottom"
      >
        <div>
          New Comment: <input name="newComment" />
        </div>
      </Popup>
    </>
  );
}
*/
export default CreateCommentBox;
