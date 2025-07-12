import "./RightSidebar.css"

const tags = [
  "c", "css", "express", "firebase", "html", "java", "javascript", "mern",
  "mongodb", "mysql", "next.js", "node.js", "php", "python", "reactjs",
];

const Widget = ({ type }) => {
  if (type === "blog") {
    return (
      <div className="widget">
        <h4>
          <svg className="widget-icon" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
          The Overflow Blog
        </h4>
        <div className="right-sidebar-div-1">
          <div className="right-sidebar-div-2">
            <div className="meta-dot" style={{
              width: "8px", height: "8px", borderRadius: "50%", background: "#06b6d4", marginTop: "6px", flexShrink: 0
            }}></div>
            <p>Observability is key to the future of software (and your DevOps career)</p>
          </div>
          <div className="right-sidebar-div-2">
            <div className="meta-dot" style={{
              width: "8px", height: "8px", borderRadius: "50%", background: "#06b6d4", marginTop: "6px", flexShrink: 0
            }}></div>
            <p>Podcast 374: How valuable is your screen time?</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "meta") {
    return (
      <div className="widget">
        <h4>
          <svg className="widget-icon" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
          </svg>
          Featured on Meta
        </h4>
        <div className="right-sidebar-div-1">
          <div className="right-sidebar-div-2">
            <div style={{
              width: "16px", height: "16px", background: "#374151", borderRadius: "2px", flexShrink: 0, marginTop: "2px"
            }}></div>
            <p>Review queue workflows - Final release....</p>
          </div>
          <div className="right-sidebar-div-2">
            <div style={{
              width: "16px", height: "16px", background: "#374151", borderRadius: "2px", flexShrink: 0, marginTop: "2px"
            }}></div>
            <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
          </div>
          <div className="right-sidebar-div-2">
            <div style={{
              width: "16px", height: "16px", background: "#374151", borderRadius: "2px", flexShrink: 0, marginTop: "2px"
            }}></div>
            <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "hot") {
    return (
      <div className="widget">
        <h4>
          <svg className="widget-icon" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2">
            <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"></polygon>
          </svg>
          Hot Meta Posts
        </h4>
        <div className="right-sidebar-div-1">
          <div className="right-sidebar-div-2">
            <span className="meta-number">38</span>
            <p>Why was this spam flag declined, yet the question marked as spam?</p>
          </div>
          <div className="right-sidebar-div-2">
            <span className="meta-number">20</span>
            <p>What is the best course of action when a user has high enough rep to...</p>
          </div>
          <div className="right-sidebar-div-2">
            <span className="meta-number">14</span>
            <p>Is a link to the "How to ask" help page a useful comment?</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "tags") {
    return (
      <div className="widget">
        <h4>
          <svg className="widget-icon" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
          Watched Tags
        </h4>
        <div className="widget-tags-div">
          {tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default Widget;
