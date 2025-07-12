const AboutAuth = () => {
  return (
    <div className="about-auth">
      <div className="about-content">
        <h1 className="about-title">Join the StackFlow community</h1>

        <div className="benefits-list">
          <div className="benefit-item">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
              </svg>
            </div>
            <div className="benefit-text">
              <h3>Get unstuck</h3>
              <p>Ask questions and get answers from experienced developers</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
              </svg>
            </div>
            <div className="benefit-text">
              <h3>Unlock privileges</h3>
              <p>Vote, comment, and participate in the community</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"></path>
              </svg>
            </div>
            <div className="benefit-text">
              <h3>Save favorites</h3>
              <p>Bookmark tags, filters, and job opportunities</p>
            </div>
          </div>

          <div className="benefit-item">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
              </svg>
            </div>
            <div className="benefit-text">
              <h3>Earn reputation</h3>
              <p>Build your profile with reputation points and badges</p>
            </div>
          </div>
        </div>

        <div className="teams-promo">
          <div className="teams-content">
            <p className="teams-text">Collaborate and share knowledge with a private group</p>
            <p className="teams-cta">Get StackFlow for Teams free for up to 50 users</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutAuth
