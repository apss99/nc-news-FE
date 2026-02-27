import Dropdown from "./Dropdown";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

function Header(props) {
  const fetchArticlesData = props.fetchArticlesData;
  const setFetchArticlesData = props.setFetchArticlesData;
  return (
    <nav>
      {" "}
      <h1> Better News </h1>
      <h6>Default Password: 'password'</h6>
      <LoginButton />
      <SignUpButton />
      <Dropdown
        fetchArticlesData={fetchArticlesData}
        setFetchArticlesData={setFetchArticlesData}
      />
    </nav>
  );
}

export default Header;
