import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/User";
import axios from "axios";

const LogInPage = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [loginAttempt, setLoginAttempt] = useState({
    username: "",
    password: "",
  });
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post(
      "https://better-news.onrender.com/api/login",
      {
        username: loginAttempt.username || "",
        password: loginAttempt.password || "",
      },
    );
    console.dir(response);
    setLoggedInUser(response.data);
    console.log(response.data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="username"
        className="login-username-textbox"
        value={loginAttempt.username}
        onChange={(event) =>
          setLoginAttempt({ ...loginAttempt, username: event.target.value })
        }
      />
      <input
        placeholder="password (for default users this is 'password')"
        className="login-password-textbox"
        value={loginAttempt.password}
        onChange={(event) =>
          setLoginAttempt({ ...loginAttempt, password: event.target.value })
        }
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogInPage;
