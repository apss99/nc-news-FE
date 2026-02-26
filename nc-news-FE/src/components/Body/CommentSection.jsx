import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewComment from "./NewComment";
import CommentCard from "./CommentCard";
import ViewComments from "./ViewComments";

function CommentSection({ comment_count }) {
  const [showComments, setShowComments] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const handleShowComments = () => {
    setShowComments((open) => !open);
  };
  const handleNewComment = () => {
    setShowCommentBox((open) => !open);
  };
  return (
    <>
      <p>Total comments: {comment_count}</p>
      <button className="new-comment-button" onClick={handleNewComment}>
        {showCommentBox ? "Discard Comment" : "New Comment"}
      </button>
      {showCommentBox && <CreateCommentBox />}
      <button className="see-comments-button" onClick={handleShowComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <ViewComments />}
    </>
  );
}

export default CommentSection;
