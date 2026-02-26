function ArticlesCard({ title, author, created_at, body, topic }) {
  return (
    <div className="articles-card">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{created_at}</p>
      <p>{topic}</p>
      <p>{body}</p>
    </div>
  );
}

export default ArticlesCard;
