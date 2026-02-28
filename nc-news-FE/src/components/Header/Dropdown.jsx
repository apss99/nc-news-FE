import { useState } from "react";
import { Link } from "react-router";
import ArticlesButton from "./ArticlesButton";

function Dropdown(props) {
  const [open, setOpen] = useState(false);
  const articleParameters = props.articleParameters;
  const setArticleParameters = props.setArticleParameters;
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="dropdown">
      <button onClick={handleOpen}>Dropdown</button>
      {open ? (
        <ul className="menu">
          <li className="menu-option">
            <Link to="/users">
              <button className="users-endpoint-button">Users</button>
            </Link>
          </li>
          <li className="menu-option">
            <Link to="/topics">
              <button className="topics-endpoint-button">Topics</button>
            </Link>
          </li>
          <li className="menu-option-articles-button">
            <ArticlesButton
              articleParameters={articleParameters}
              setArticleParameters={setArticleParameters}
            />
          </li>
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div> Is Closed </div>}
    </div>
  );
}

export default Dropdown;
