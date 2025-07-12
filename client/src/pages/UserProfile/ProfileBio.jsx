"use client"

const ProfileBio = ({ currentProfile }) => {
  return (
    <div className="profile-bio">
      <div className="bio-grid">
        <div className="bio-section">
          <div className="section-header">
            <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            <h4 className="section-title">Watched Tags</h4>
          </div>

          <div className="tags-container">
            {currentProfile?.tags?.length !== 0 ? (
              <div className="tags-list">
                {currentProfile?.tags?.map((tag) => (
                  <span key={tag} className="bio-tag">
                    {tag}
                  </span>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <svg className="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
                <p className="empty-text">No tags watched yet</p>
                <p className="empty-description">Start following tags to customize your feed</p>
              </div>
            )}
          </div>
        </div>

        <div className="bio-section">
          <div className="section-header">
            <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <h4 className="section-title">About</h4>
          </div>

          <div className="about-container">
            {currentProfile?.about ? (
              <div className="about-content">
                <p className="about-text">{currentProfile.about}</p>
              </div>
            ) : (
              <div className="empty-state">
                <svg className="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <p className="empty-text">No bio available</p>
                <p className="empty-description">This user hasn't written a bio yet</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="achievements-section">
        <div className="section-header">
          <svg className="section-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
          </svg>
          <h4 className="section-title">Achievements</h4>
        </div>

        <div className="badges-grid">
          <div className="badge-item">
            <div className="badge-icon gold">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
              </svg>
            </div>
            <div className="badge-info">
              <div className="badge-name">Gold Badge</div>
              <div className="badge-count">3</div>
            </div>
          </div>

          <div className="badge-item">
            <div className="badge-icon silver">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
              </svg>
            </div>
            <div className="badge-info">
              <div className="badge-name">Silver Badge</div>
              <div className="badge-count">12</div>
            </div>
          </div>

          <div className="badge-item">
            <div className="badge-icon bronze">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
              </svg>
            </div>
            <div className="badge-info">
              <div className="badge-name">Bronze Badge</div>
              <div className="badge-count">28</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileBio
