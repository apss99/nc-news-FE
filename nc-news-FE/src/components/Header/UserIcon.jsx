import { UserContext } from "../../Contexts/User";
import { useContext } from "react";

const LoginInfo = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div id="login-info">
      <p> Logged in as: {loggedInUser.username}</p>
      <img src={loggedInUser.avatar_url} className="logged-in-img" />
    </div>
  );
};

export default LoginInfo;
