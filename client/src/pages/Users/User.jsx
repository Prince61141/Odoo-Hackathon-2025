"use client"

import { Link } from "react-router-dom"
import "./Users.css"

const User = ({ user }) => {
  return (
    <Link to={`/Users/${user._id}`} className="user-card">
      <div className="user-avatar">
        <span className="avatar-text">{user.name.charAt(0).toUpperCase()}</span>
        <div className="avatar-ring"></div>
      </div>
      <div className="user-info">
        <h3 className="user-name">{user.name}</h3>
        <div className="user-stats">
          <div className="user-stat">
            <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
            </svg>
            <span>1.2k</span>
          </div>
          <div className="user-stat">
            <svg className="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4"></path>
              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
            </svg>
            <span>45</span>
          </div>
        </div>
        <div className="user-badges">
          <span className="badge gold">Gold</span>
          <span className="badge silver">Silver</span>
        </div>
      </div>
      <div className="user-hover-effect"></div>
    </Link>
  )
}

export default User
