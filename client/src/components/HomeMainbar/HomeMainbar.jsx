"use client"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import "./HomeMainbar.css"
import "./Questions.filter.css"
import { useState } from "react"
import QuestionList from "./QuestionList"

const HomeMainbar = () => {
  const location = useLocation()
  const user = 1
  const navigate = useNavigate()
  const questionsList = useSelector((state) => state.questionsReducer)
  const [selectedTag, setSelectedTag] = useState(null)

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question")
      navigate("/Auth")
    } else {
      navigate("/AskQuestion")
    }
  }

  // Filter questions by selected tag if any
  const filteredQuestions = selectedTag
    ? questionsList.data?.filter(q => q.questionTags.includes(selectedTag))
    : questionsList.data

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
      {selectedTag && (
        <div className="tag-filter-bar">
          <span>Filtering by tag: </span>
          <span className="tag tag-filter">{selectedTag}</span>
          <button className="clear-tag-filter" onClick={() => setSelectedTag(null)}>Clear</button>
        </div>
      )}
      <div className="questions-section">
        {questionsList.data === null ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <h2>Loading...</h2>
          </div>
        ) : (
          <>
            <div className="questions-count">
              <span className="count-badge">{filteredQuestions.length} questions</span>
            </div>
            <QuestionList questionsList={filteredQuestions} onTagClick={setSelectedTag} />
          </>
        )}
      </div>
    </div>
  )
}

export default HomeMainbar
