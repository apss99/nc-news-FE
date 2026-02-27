import { UserContext } from "../../Contexts/User";
import { useContext } from "react";

import { Link } from "react-router";

function SignUpButton() {
  return <Link to="/sign_up">Sign Up</Link>;
}

export default SignUpButton;
