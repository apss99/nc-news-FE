import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function VotesSection({ votes }) {
  const [newVotes, setNewVotes] = useState(votes);
  const { article_id } = useParams();
  const [hasUpVoted, setHasUpVoted] = useState(false);
  const [hasDownVoted, setHasDownVoted] = useState(false);
  const handleUpVote = async () => {
    let changedVote = hasUpVoted ? -1 : 1;
    if (hasDownVoted) {
      changedVote += 1;
      setHasDownVoted(false);
    }
    setNewVotes((vote) => vote + changedVote);
    setHasUpVoted(!hasUpVoted);
    await axios.patch(
      `https://better-news.onrender.com/api/articles/${article_id}`,
      { inc_votes: changedVote },
    );
  };
  const handleDownVote = async () => {
    let changedVote = hasDownVoted ? 1 : -1;
    if (hasUpVoted) {
      changedVote += -1;
      setHasUpVoted(false);
    }
    setNewVotes((vote) => vote + changedVote);
    setHasDownVoted(!hasDownVoted);
    await axios.patch(
      `https://better-news.onrender.com/api/articles/${article_id}`,
      { inc_votes: changedVote },
    );
  };

  return (
    <div>
      <p>Votes: {newVotes}</p>
      <UpVote onClick={handleUpVote} />
      <DownVote onClick={handleDownVote} />
    </div>
  );
}

function UpVote({ onClick }) {
  return (
    <button className="upvote-button" onClick={onClick}>
      Like
    </button>
  );
}

function DownVote({ onClick }) {
  return (
    <button className="downvote-button" onClick={onClick}>
      Dislike
    </button>
  );
}

export default VotesSection;
