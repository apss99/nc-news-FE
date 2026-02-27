import { Link } from "react-router";

function ArticlesCard({
  title,
  author,
  created_at,
  body,
  topic,
  article_id,
  votes,
  comment_count,
}) {
  return (
    <div className="articles-card">
      <Link to={`/articles/${article_id}`}>{title}</Link>
      <h3>{author}</h3>
      <p>{created_at}</p>
      <p>{topic}</p>
      <p>{body}</p>
      <p>votes: {votes}</p>
      <p>comments: {comment_count}</p>
    </div>
  );
}

export default ArticlesCard;
