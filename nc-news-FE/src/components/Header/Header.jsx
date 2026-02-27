import Dropdown from "./Dropdown";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

function Header() {
  return (
    <nav>
      {" "}
      <h1> Better News </h1>
      <h6>Default Password: 'password'</h6>
      <LoginButton />
      <SignUpButton />
      <Dropdown />
    </nav>
  );
}

export default Header;
