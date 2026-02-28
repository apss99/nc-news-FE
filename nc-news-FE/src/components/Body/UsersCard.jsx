import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import axios from "axios";

function UsersCard({ username, name, avatar_url, password }) {
  const [deletionMessage, setDeletionMessage] = useState("");
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [userToDelete, setUserToDelete] = useState({
    username: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  async function deleteUser(event) {
    event.preventDefault();
    if (loggedInUser.username === username) {
      const response = await axios.post(
        `https://better-news.onrender.com/api/users/${userToDelete.username}`,
        {
          username: userToDelete.username,
          password: userToDelete.password,
        },
      );

      setDeletionMessage(`status:${response.status} user deleted`);
    } else {
      setDeletionMessage(`Invalid Request`);
    }
    console.log("logged in", loggedInUser);
    console.log("Card Username", username);
  }

  const openDeleteUser = () => {
    setOpen(!open);
  };
  return (
    <div className="users-card">
      <h2>{username}</h2>
      <p>{name}</p>
      <img src={avatar_url}></img>
      <button onClick={openDeleteUser}></button>
      {open ? (
        <form className="delete-user-form" onSubmit={deleteUser}>
          <label htmlFor="delete-user-username-textbox">Enter Username</label>
          <input
            placeholder="username"
            className="delete-user-username-textbox"
            value={userToDelete.username}
            onChange={(event) =>
              setUserToDelete({ ...userToDelete, username: event.target.value })
            }
          />
          <label htmlFor="delete-user-password-textbox">Enter Password</label>
          <input
            placeholder="password"
            className="delete-user-password-textbox"
            value={userToDelete.password}
            onChange={(event) =>
              setUserToDelete({ ...userToDelete, password: event.target.value })
            }
          />
          <button> Cancel </button>
          <button type="submit">Delete User</button>
          <p>{deletionMessage}</p>
        </form>
      ) : null}
    </div>
  );
}

export default UsersCard;
