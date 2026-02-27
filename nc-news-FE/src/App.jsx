import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router";
import ArticlesList from "./components/Body/Articles/ArticlesList";
import TopicsList from "./components/Body/TopicsList";
import UsersList from "./components/Body/UsersList";
import SingleArticle from "./components/Body//Articles/SingleArticle";
import { UserProvider } from "./Contexts/User";
import SignUpPage from "./components/Body/SignUpPage";

function App() {
  const [fetchArticlesData, setFetchArticlesData] = useState([]);
  const [fetchTopicsData, setFetchTopicsData] = useState([]);
  const [fetchUsersData, setFetchUsersData] = useState([]);
  const [singleArticleData, setSingleArticleData] = useState([]);
  return (
    <UserProvider>
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
          <Route
            path="/articles/:article_id"
            element={
              <SingleArticle
                singleArticleData={singleArticleData}
                setSingleArticleData={setSingleArticleData}
              />
            }
          />
          <Route
            path="/topics"
            element={
              <TopicsList
                fetchTopicsData={fetchTopicsData}
                setFetchTopicsData={setFetchTopicsData}
              />
            }
          />
          <Route
            path="/users"
            element={
              <UsersList
                fetchUsersData={fetchUsersData}
                setFetchUsersData={setFetchUsersData}
              />
            }
          />
          <Route path="sign_up" element={<SignUpPage />} />
        </Routes>
      </>
    </UserProvider>
  );
}

export default App;

/*<Route
          path={["/articles", "/topics", "/users"]}
          element={<Header fetchData={fetchData} setFetchData={setFetchData} />}
        /*/
