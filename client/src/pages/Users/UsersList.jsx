"use client"

import { useSelector } from "react-redux"
import User from "./User"
import "./Users.css"


const UsersList = ({ search }) => {
  const users = useSelector((state) => state.usersReducer);
  const filtered = search
    ? users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    : users;
  return (
    <div className="users-grid-container">
      <div className="users-grid">
        {filtered.map((user) => (
          <User user={user} key={user?._id} />
        ))}
      </div>
    </div>
  );
}

export default UsersList
