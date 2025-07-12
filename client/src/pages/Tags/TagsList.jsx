"use client"

import "./Tags.css"

const TagsList = ({ tag }) => {
  return (
    <div className="tag-card">
      <div className="tag-header">
        <h5 className="tag-name">{tag.tagName}</h5>
        <div className="tag-stats">
          <div className="tag-stat">
            <span className="stat-number">1.2k</span>
            <span className="stat-label">questions</span>
          </div>
        </div>
      </div>
      <p className="tag-description">{tag.tagDesc}</p>
      <div className="tag-footer">
        <div className="tag-popularity">
          <div className="popularity-bar">
            <div className="popularity-fill" style={{ width: "75%" }}></div>
          </div>
          <span className="popularity-text">Popular</span>
        </div>
        <button className="follow-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"></path>
          </svg>
          Follow
        </button>
      </div>
    </div>
  )
}

export default TagsList
