import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserContext";
import axios from "axios";

const SignUpPage = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    name: "",
    avatar_url: "",
  });
  async function SignUp(event) {
    event.preventDefault();
    const response = await axios.post(
      "https://better-news.onrender.com/api/users",
      {
        username: newUser.username,
        name: newUser.name,
        password: newUser.password,
        ...(newUser.avatar_url ? { avatar_url: newUser.avatar_url } : {}),
      },
    );
    setLoggedInUser(response.data.user);
    console.log(response.data.user);
    setNewUser({
      username: "",
      name: "",
      avatar_url: "",
      password: "",
    });
  }
  return (
    <form onSubmit={SignUp}>
      <label htmlFor="new-username-textbox">Username</label>
      <input
        placeholder="It doesn't have to be witty"
        className="new-username-textbox"
        value={newUser.username}
        onChange={(event) =>
          setNewUser({ ...newUser, username: event.target.value })
        }
      />
      <label htmlFor="new-name-textbox">Your Real Name</label>
      <input
        placeholder="Or a convincing fake"
        className="new-name-textbox"
        value={newUser.name}
        onChange={(event) =>
          setNewUser({ ...newUser, name: event.target.value })
        }
      />
      <label htmlFor="new-avatar_url-textbox">Your Avatar URL</label>
      <input
        placeholder="Grace us with your presence"
        className="new-avatar_url-textbox"
        value={newUser.avatar_url}
        onChange={(event) =>
          setNewUser({ ...newUser, avatar_url: event.target.value })
        }
      />
      <label htmlFor="new-password-textbox">Set Password</label>
      <input
        placeholder="Pop it in an email to me"
        className="new-password-textbox"
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
