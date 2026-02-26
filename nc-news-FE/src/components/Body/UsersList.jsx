import { useState, useEffect } from "react";
import UsersCard from "./UsersCard";
import ArticlesEndpointButton from "../Header/ArticlesEndpointButton";
import axios from "axios";

function UsersList(props) {
  const setFetchUsersData = props.setFetchUsersData;
  const fetchUsersData = props.fetchUsersData;
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(
        "https://better-news.onrender.com/api/users",
      );
      const usersObject = response.data.users;
      console.log(usersObject);
      setFetchUsersData(usersObject);
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <ul>
        {fetchUsersData.map((user) => {
          return (
            <li key={user.username}>
              <UsersCard key={user.username} {...user} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UsersList;
