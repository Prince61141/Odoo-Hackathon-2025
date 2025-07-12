"use client"

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar"
import TagsList from "./TagsList"
import "./Tags.css"
import { tagsList } from "./tagList"

const Tags = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="tags-page">
      <div className="tags-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="home-container-1">
        <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        <div className="tags-main-content">
          <div className="tags-header">
            <div className="header-content">
              <h1 className="tags-title">Tags</h1>
              <div className="tags-description">
                <p className="tags-subtitle">
                  A tag is a keyword or label that categorizes your question with other, similar questions.
                </p>
                <p className="tags-subtitle">
                  Using the right tags makes it easier for others to find and answer your question.
                </p>
              </div>
            </div>

            <div className="tags-stats">
              <div className="stat-card">
                <div className="stat-number">{tagsList.length}</div>
                <div className="stat-label">Total Tags</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15K+</div>
                <div className="stat-label">Questions</div>
              </div>
            </div>
          </div>

          <div className="tags-filters">
            <div className="search-container">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input type="text" placeholder="Search tags..." className="search-input" />
            </div>

            <div className="filter-buttons">
              <button className="filter-btn active">Popular</button>
              <button className="filter-btn">Name</button>
              <button className="filter-btn">New</button>
            </div>
          </div>

          <div className="tags-list-container">
            {tagsList.map((tag, index) => (
              <TagsList tag={tag} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tags
