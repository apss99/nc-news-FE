import Popup from "reactjs-popup";
import { useState } from "react";
import PostComment from "./NewComment"

function CreateCommentBox() {
  return (
    <>
    <button className="submit-comment" onClick={() => 
      <PostComment />
    }
    </>
  )
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
