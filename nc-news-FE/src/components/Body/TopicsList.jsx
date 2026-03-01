import { useEffect } from "react";
import TopicsCard from "./TopicsCard";
import axios from "axios";

function TopicsList(props) {
  const setFetchTopicsData = props.setFetchTopicsData;
  const fetchTopicsData = props.fetchTopicsData;
  useEffect(() => {
    async function fetchTopics() {
      const response = await axios.get(
        "https://better-news.onrender.com/api/topics",
      );
      const topicsObject = response.data.topics;
      console.log(topicsObject);
      setFetchTopicsData(topicsObject);
    }
    fetchTopics();
  }, []);
  return (
    <div>
      <ul>
        {fetchTopicsData.map((topic) => {
          return (
            <li key={topic.slug}>
              <TopicsCard key={topic.slug} {...topic} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TopicsList;
