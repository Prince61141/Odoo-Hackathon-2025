import { Link } from "react-router-dom"
import moment from "moment"
import "./Questions.css"

const Questions = ({ question }) => {
  return (
    <div className="display-question-container">
      <div className="question-stats">
        <div className="stat-item">
          <div className="vote-section">
            <button className="vote-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="18,15 12,9 6,15"></polyline>
              </svg>
            </button>
            <span className="vote-count">{question.upVote.length - question.downVote.length}</span>
            <button className="vote-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            <span className="vote-label">votes</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="answer-count">
            <span className="answer-number">{question.noOfAnswers}</span>
            <span className="answer-label">answers</span>
          </div>
        </div>
      </div>

      <div className="question-content">
        <Link to={`/Questions/${question._id}`} className="question-title-link">
          {question.questionTitle.length > (window.innerWidth <= 400 ? 70 : 90)
            ? question.questionTitle.substring(0, window.innerWidth <= 400 ? 70 : 90) + "..."
            : question.questionTitle}
        </Link>

        <div className="question-meta">
          <div className="question-tags">
            {question.questionTags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="question-time">
            <svg
              className="clock-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
            <span>asked {moment(question.askedOn).fromNow()}</span>
            <div className="user-avatar">
              <span>{question.userPosted.charAt(0).toUpperCase()}</span>
            </div>
            <span className="username">{question.userPosted}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
