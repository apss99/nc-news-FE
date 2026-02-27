import { Link, useParams } from "react-router";
import { useState } from "react";
import VotesSection from "./VotesSection";
import CommentSection from "../Comments/CommentSection";

function DisplayedArticle({
  title,
  author,
  created_at,
  body,
  topic,
  article_id,
  votes,
  comment_count,
  article_img_url,
}) {
  return (
    <div className="displayed-article">
      <Link to={`/articles/${article_id}`}>{title}</Link>
      <h3>{author}</h3>
      <p>{created_at}</p>
      <p>{topic}</p>
      <p>{body}</p>
      <p></p>
      <img src={article_img_url} alt={`image for ${title} article`}></img>
      <div>
        {comment_count !== undefined && (
          <CommentSection article_id={article_id} />
        )}
      </div>
      <div>{votes !== undefined && <VotesSection votes={votes} />}</div>
      <div className="votes"></div>
    </div>
  );
}

export default DisplayedArticle;
