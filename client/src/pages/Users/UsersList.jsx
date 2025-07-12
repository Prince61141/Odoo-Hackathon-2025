"use client"

import { useSelector } from "react-redux"
import User from "./User"
import "./Users.css"

const UsersList = () => {
  const users = useSelector((state) => state.usersReducer)

  return (
    <div className="users-grid-container">
      <div className="users-grid">
        {users.map((user) => (
          <User user={user} key={user?._id} />
        ))}
      </div>
    </div>
  )
}

export default UsersList
