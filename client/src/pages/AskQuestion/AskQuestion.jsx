"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./AskQuestion.css"
import { askQuestion } from "../../actions/question"

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("")
  const [questionBody, setQuestionBody] = useState("")
  const [questionTags, setQuestionTags] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const User = useSelector((state) => state.currentUserReducer)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
            },
            navigate,
          ),
        )
      } else {
        alert("Please enter all the fields")
        setIsLoading(false)
      }
    } else {
      alert("Login to ask question")
      setIsLoading(false)
    }

    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n")
    }
  }

  return (
    <div className="ask-question">
      <div className="ask-question-background">
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>
      </div>

      <div className="ask-ques-container">
        <div className="ask-header">
          <div className="header-content">
            <h1 className="ask-title">Ask a Public Question</h1>
            <p className="ask-subtitle">Get help from millions of developers worldwide</p>
          </div>
          <div className="tips-card">
            <h3>Writing a good question</h3>
            <ul>
              <li>Summarize your problem in a one-line title</li>
              <li>Describe your problem in more detail</li>
              <li>Add relevant tags to help others find your question</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="ask-form">
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="ask-ques-title" className="form-label">
                <div className="label-header">
                  <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h16M4 12h16M4 18h7"></path>
                  </svg>
                  <h4>Title</h4>
                </div>
                <p className="label-description">Be specific and imagine you're asking a question to another person</p>
              </label>
              <div className="input-container">
                <input
                  type="text"
                  id="ask-ques-title"
                  value={questionTitle}
                  onChange={(e) => setQuestionTitle(e.target.value)}
                  placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  className="form-input"
                />
                <div className="input-border"></div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="ask-ques-body" className="form-label">
                <div className="label-header">
                  <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                  <h4>Body</h4>
                </div>
                <p className="label-description">
                  Include all the information someone would need to answer your question
                </p>
              </label>
              <div className="textarea-container">
                <textarea
                  id="ask-ques-body"
                  value={questionBody}
                  onChange={(e) => setQuestionBody(e.target.value)}
                  onKeyPress={handleEnter}
                  rows="12"
                  className="form-textarea"
                  placeholder="Describe your problem in detail..."
                ></textarea>
                <div className="textarea-border"></div>
                <div className="textarea-toolbar">
                  <div className="toolbar-buttons">
                    <button type="button" className="toolbar-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                        <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                      </svg>
                    </button>
                    <button type="button" className="toolbar-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 4h10l4 4-4 4H6z"></path>
                      </svg>
                    </button>
                    <button type="button" className="toolbar-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="4 7 4 4 20 4 20 7"></polyline>
                        <line x1="9" y1="20" x2="15" y2="20"></line>
                        <line x1="12" y1="4" x2="12" y2="20"></line>
                      </svg>
                    </button>
                  </div>
                  <span className="char-count">{questionBody.length} characters</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="ask-ques-tags" className="form-label">
                <div className="label-header">
                  <svg className="label-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                  <h4>Tags</h4>
                </div>
                <p className="label-description">Add up to 5 tags to describe what your question is about</p>
              </label>
              <div className="input-container">
                <input
                  type="text"
                  id="ask-ques-tags"
                  value={questionTags}
                  onChange={(e) => setQuestionTags(e.target.value.split(" "))}
                  placeholder="e.g. javascript react typescript"
                  className="form-input"
                />
                <div className="input-border"></div>
              </div>
              <div className="tags-preview">
                {questionTags &&
                  questionTags
                    .filter((tag) => tag.trim() !== "")
                    .slice(0, 5)
                    .map((tag, index) => (
                      <span key={index} className="tag-preview">
                        {tag.trim()}
                      </span>
                    ))}
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? (
                <div className="loading-content">
                  <div className="loading-spinner"></div>
                  <span>Publishing...</span>
                </div>
              ) : (
                <>
                  <svg className="submit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                  </svg>
                  Review Your Question
                </>
              )}
            </button>
            <button type="button" className="draft-btn">
              Save as Draft
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AskQuestion
