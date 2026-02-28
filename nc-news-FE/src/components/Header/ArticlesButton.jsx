import { useState } from "react";
import ArticlesList from "../Body/Articles/ArticlesList";
import { useNavigate } from "react-router-dom";

function ArticlesButton(props) {
  const [open, setOpen] = useState(false);
  const articleParameters = props.articleParameters;
  const setArticleParameters = props.setArticleParameters;
  const navigateToPage = useNavigate();
  const handleOpen = () => {
    setOpen(!open);
  };
  function goToPage(event) {
    event.preventDefault();
    navigateToPage("/articles");
  }

  return (
    <div className="slideout">
      <button onClick={handleOpen}>Articles</button>
      {open ? (
        <form onSubmit={goToPage}>
          <label htmlFor="sort-by-column">Sort By:</label>
          <select
            className="sort-by-column"
            onChange={(event) =>
              setArticleParameters({
                ...articleParameters,
                sort_by: event.target.value,
              })
            }
          >
            <option value="created_at">created_at</option>
            <option value="votes">votes</option>
          </select>
          <label htmlFor="order-column">Order</label>
          <select
            className="order-column"
            onChange={(event) =>
              setArticleParameters({
                ...articleParameters,
                order: event.target.value,
              })
            }
          >
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>
          <label htmlFor="topic">Topics:</label>
          <select
            className="topic"
            onChange={(event) =>
              setArticleParameters({
                ...articleParameters,
                topic: event.target.value,
              })
            }
          >
            <option value="all">all</option>
            <option value="coding">coding</option>
            <option value="football">football</option>
            <option value="cooking">cooking</option>
          </select>
          <button type="submit">Search Articles</button>
        </form>
      ) : null}
    </div>
  );
}

export default ArticlesButton;
