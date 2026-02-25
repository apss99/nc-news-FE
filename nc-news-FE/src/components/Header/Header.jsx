import Dropdown from "./Dropdown";

function Header(props) {
  const fetchArticlesData = props.fetchArticlesData;
  const setFetchArticlesData = props.setFetchArticlesData;
  return (
    <nav>
      {" "}
      <h1> Better News </h1>
      <Dropdown
        fetchArticlesData={fetchArticlesData}
        setFetchArticlesData={setFetchArticlesData}
      />
    </nav>
  );
}

export default Header;
