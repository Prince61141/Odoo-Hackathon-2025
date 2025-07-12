"use client"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import "./HomeMainbar.css"
import QuestionList from "./QuestionList"

const HomeMainbar = () => {
  const location = useLocation()
  const user = 1
  const navigate = useNavigate()
  const questionsList = useSelector((state) => state.questionsReducer)

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question")
      navigate("/Auth")
    } else {
      navigate("/AskQuestion")
    }
  }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1 className="main-title">Top Questions</h1>
        ) : (
          <h1 className="main-title">All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          <svg
            className="plus-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Ask Question
        </button>
      </div>
      <div className="questions-section">
        {questionsList.data === null ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <h2>Loading...</h2>
          </div>
        ) : (
          <>
            <div className="questions-count">
              <span className="count-badge">{questionsList.data.length} questions</span>
            </div>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  )
}

export default HomeMainbar
