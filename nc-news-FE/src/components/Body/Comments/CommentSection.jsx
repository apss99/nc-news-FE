import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import ViewComments from "./ViewComments";
import CreateCommentBox from "./CreateCommentBox";
import { UserContext } from "../../../Contexts/User";
import { useContext } from "react";

function CommentSection({ comment_count, article_id }) {
  const [showComments, setShowComments] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [loginMessage, setLoginMessage] = useState("");
  const handleShowComments = () => {
    setShowComments((open) => !open);
  };
  const handleNewComment = () => {
    if (
      loggedInUser.username === "" ||
      loggedInUser.username === null ||
      loggedInUser.username === undefined
    ) {
      setShowCommentBox(false);
      setLoginMessage("login or sign up to comment");
    } else {
      setShowCommentBox((open) => !open);
      setLoginMessage("");
    }
  };
  return (
    <>
      <p>Total comments: {comment_count}</p>
      <button className="new-comment-button" onClick={handleNewComment}>
        {showCommentBox ? "Discard Comment" : "New Comment"}
      </button>
      {showCommentBox && <CreateCommentBox article_id={article_id} />}
      <button className="see-comments-button" onClick={handleShowComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      <p>{loginMessage}</p>
      {showComments && <ViewComments />}
    </>
  );
}

export default CommentSection;
