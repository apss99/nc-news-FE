import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/User";

function UsersCard({ username, name, avatar_url, password }) {
  const [deletionMessage, setDeletionMessage] = useState("");
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  async function handleDeleteUser() {
    if (loggedInUser.username === username) {
      const response = await axios.delete(
        `https://better-news.onrender.com/api/users/${username}`,
      );
    }
  }
  return (
    <div className="users-card">
      <h2>{username}</h2>
      <p>{name}</p>
      <img src={avatar_url}></img>
    </div>
  );
}

export default UsersCard;
