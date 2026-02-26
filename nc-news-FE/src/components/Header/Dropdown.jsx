import { useState } from "react";
import GetArticlesButton from "./ArticlesEndpointButton";
import { Link } from "react-router";

function Dropdown(props) {
  const fetchArticlesData = props.fetchArticlesData;
  const setFetchArticlesData = props.setFetchArticlesData;
  const [open, setOpen] = useState(false);
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
          <li className="menu-option">
            <Link to="/articles">
              <button className="articles-endpoint-button">Articles</button>
            </Link>
          </li>
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div> Is Closed </div>}
    </div>
  );
}

export default Dropdown;

/*

import axios from "axios";

function ArticlesEndpointButton(props) {
  const setFetchData = props.setFetchData;
  const fetchData = props.fetchData;
  useState(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://better-news.onrender.com/api/articles",
      );
      console.log(response.request.response);
    }
    setFetchData(() => {
      response.request.response;
    });
    fetchArticles();
  }, []);
  return (
    <div>
      <p></p>
    </div>
  );
}

export default { ArticlesEndpointButton }; */
