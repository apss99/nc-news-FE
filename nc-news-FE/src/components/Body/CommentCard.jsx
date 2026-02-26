import { Link } from "react-router";

function CommentCard({
  comment_id,
  article_title,
  body,
  votes,
  author,
  created_at,
}) {
  return (
    <div className="comment-card">
      <h4>{author}</h4>
      <p>{created_at}</p>
      <p>{body}</p>
      <p>{votes}</p>
    </div>
  );
}

export default CommentCard;
