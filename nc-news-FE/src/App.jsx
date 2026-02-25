import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router";
import ArticlesList from "./components/Body/ArticlesList";
import TopicsList from "./components/Body/TopicsList";
import UsersList from "./components/Body/UsersList";

function App() {
  const [endpoint, setEndpoint] = useState("");
  const [fetchArticlesData, setFetchArticlesData] = useState("");
  return (
    <>
      <Header
        fetchArticlesData={fetchArticlesData}
        setFetchArticlesData={setFetchArticlesData}
      />
      <Routes>
        <Route
          path="/articles"
          element={
            <ArticlesList
              fetchArticlesData={fetchArticlesData}
              setFetchArticlesData={setFetchArticlesData}
            />
          }
        />
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </>
  );
}

export default App;

/*<Route
          path={["/articles", "/topics", "/users"]}
          element={<Header fetchData={fetchData} setFetchData={setFetchData} />}
        /*/
