import Dropdown from "./Dropdown";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

function Header(props) {
  const articleParameters = props.articleParameters;
  const setArticleParameters = props.setArticleParameters;
  return (
    <nav>
      {" "}
      <h1> Better News </h1>
      <h6>Default Password: 'password'</h6>
      <LoginButton />
      <SignUpButton />
      <Dropdown
        articleParameters={articleParameters}
        setArticleParameters={setArticleParameters}
      />
    </nav>
  );
}

export default Header;
