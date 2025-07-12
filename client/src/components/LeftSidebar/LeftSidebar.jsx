"use client"
import "./LeftSidebar.css"
import { NavLink } from "react-router-dom"

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  }
  const slideOutStyle = {
    transform: "translateX(-100%)",
  }

  return (
    <div className="left-sidebar" style={slideIn ? slideInStyle : slideOutStyle}>
      <nav className="side-nav">
        <button onClick={() => handleSlideIn()} className="nav-btn">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <svg
              className="nav-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4"></path>
              <polyline points="16,17 21,12 16,7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <p>Home</p>
          </NavLink>
        </button>

        <div className="side-nav-div">
          <div className="section-header">
            <p>PUBLIC</p>
          </div>

          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink to="/Questions" className="side-nav-links" activeclassname="active">
              <svg
                className="nav-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <p>Questions</p>
            </NavLink>
          </button>

          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink to="/Tags" className="side-nav-links sub-link" activeclassname="active">
              <svg
                className="nav-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
              <p>Tags</p>
            </NavLink>
          </button>

          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink to="/Users" className="side-nav-links sub-link" activeclassname="active">
              <svg
                className="nav-icon"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <p>Users</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar
