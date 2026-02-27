import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/User";
import axios from "axios";

const SignUpPage = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    name: "",
    avatar_url: "",
  });
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post(
      "https://better-news.onrender.com/api/users",
      {
        username: newUser.username || "",
        name: newUser.name || "",
        password: newUser.password || "",
        ...(newUser.avatar_url ? { avatar_url: newUser.avatar_url } : {}),
      },
    );
    console.dir(response);
    setNewUser({
      username: "",
      name: "",
      avatar_url: "",
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="It doesn't have to be witty"
        className="new-username-textbox"
        value={newUser.username}
        onChange={(event) =>
          setNewUser({ ...newUser, username: event.target.value })
        }
      />
      <input
        placeholder="Or a convincing fake"
        className="new-name-textbox"
        value={newUser.name}
        onChange={(event) =>
          setNewUser({ ...newUser, name: event.target.value })
        }
      />
      <input
        placeholder="Grace us with your presence"
        className="new-name-textbox"
        value={newUser.avatar_url}
        onChange={(event) =>
          setNewUser({ ...newUser, avatar_url: event.target.value })
        }
      />
      <input
        placeholder="pick a strong one"
        className="new-name-textbox"
        value={newUser.password}
        onChange={(event) =>
          setNewUser({ ...newUser, password: event.target.value })
        }
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};
export default SignUpPage;
