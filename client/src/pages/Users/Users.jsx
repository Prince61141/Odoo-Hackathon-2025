"use client"

import "./Users.css"
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar"
import UsersList from "./UsersList"

const Users = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="users-page">
      <div className="users-background">
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
        </div>
      </div>

      <div className="home-container-1">
        <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        <div className="users-main-content">
          <div className="users-header">
            <div className="header-content">
              <h1 className="users-title">Users</h1>
              <p className="users-subtitle">Discover and connect with developers in our community</p>
            </div>
            <div className="users-stats">
              <div className="stat-card">
                <div className="stat-number">1.2K+</div>
                <div className="stat-label">Active Users</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Countries</div>
              </div>
            </div>
          </div>

          <div className="users-filters">
            <div className="search-container">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input type="text" placeholder="Search users..." className="search-input" />
            </div>
            <div className="filter-buttons">
              <button className="filter-btn active">All Users</button>
              <button className="filter-btn">New Users</button>
              <button className="filter-btn">Top Contributors</button>
            </div>
          </div>

          <UsersList />
        </div>
      </div>
    </div>
  )
}

export default Users
