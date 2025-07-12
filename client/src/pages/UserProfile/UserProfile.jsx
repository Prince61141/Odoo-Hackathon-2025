"use client"

import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import moment from "moment"
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar"
import Avatar from "../../components/Avatar/Avatar"
import EditProfileForm from "./EditProfileForm"
import ProfileBio from "./ProfileBio"
import "./UsersProfile.css"

const UserProfile = ({ slideIn, handleSlideIn }) => {
  const { id } = useParams()
  const users = useSelector((state) => state.usersReducer)
  const questions = useSelector((state) => state.questionsReducer.data)
  const currentProfile = users.find((user) => user._id === id)
  const currentUser = useSelector((state) => state.currentUserReducer)
  const [Switch, setSwitch] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const userQuestions = questions?.filter((q) => q.userId === id)
  const userAnswers = questions
    ?.filter((q) => q.answers?.some((a) => a.userId === id))
    .map((q) => ({
      ...q,
      userAnswers: q.answers.filter((a) => a.userId === id),
    }))

  return (
    <div className="profile-page">
      <div className="profile-background">
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
        </div>
      </div>

      <div className="home-container-1">
        <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        <div className="profile-main-content">
          <section className="profile-section">
            <div className="profile-header">
              <div className="profile-cover">
                <div className="cover-gradient"></div>
              </div>

              <div className="user-details-container">
                <div className="user-details">
                  <div className="avatar-container">
                    <Avatar
                      color="white"
                      fontSize="50px"
                      px="40px"
                      py="30px"
                      className="profile-avatar"
                    >
                      {currentProfile?.name.charAt(0).toUpperCase()}
                    </Avatar>
                    <div className="avatar-ring"></div>
                  </div>

                  <div className="user-info">
                    <h1 className="user-name">{currentProfile?.name}</h1>
                    <div className="user-meta">
                      <div className="meta-item">
                        <svg
                          className="meta-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>Joined {moment(currentProfile?.joinedOn).fromNow()}</span>
                      </div>
                    </div>

                    <div className="user-stats">
                      <div className="stat-item">
                        <div className="stat-number">1.2k</div>
                        <div className="stat-label">Reputation</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">{userQuestions?.length || 0}</div>
                        <div className="stat-label">Questions</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">{userAnswers?.length || 0}</div>
                        <div className="stat-label">Answers</div>
                      </div>
                      <div className="stat-item">
                        <div className="stat-number">89</div>
                        <div className="stat-label">Votes</div>
                      </div>
                    </div>
                  </div>
                </div>

                {currentUser?.result._id === id && (
                  <button
                    type="button"
                    onClick={() => setSwitch(true)}
                    className="edit-profile-btn"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    Edit Profile
                  </button>
                )}
              </div>
            </div>

            <div className="profile-content">
              {Switch ? (
                <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
              ) : (
                <div className="profile-tabs">
                  <div className="tabs-header">
                    <button
                      className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                      onClick={() => setActiveTab("overview")}
                    >
                      Overview
                    </button>
                    <button
                      className={`tab-btn ${activeTab === "questions" ? "active" : ""}`}
                      onClick={() => setActiveTab("questions")}
                    >
                      Questions
                    </button>
                    <button
                      className={`tab-btn ${activeTab === "answers" ? "active" : ""}`}
                      onClick={() => setActiveTab("answers")}
                    >
                      Answers
                    </button>
                  </div>

                  <div className="tabs-content">
                    {activeTab === "overview" && (
                      <ProfileBio currentProfile={currentProfile} />
                    )}

                    {activeTab === "questions" && (
                      <div className="user-questions-list">
                        {userQuestions?.length > 0 ? (
                          userQuestions.map((q) => (
                            <div key={q._id} className="user-question-item">
                              <Link
                                to={`/questions/${q._id}`}
                                className="question-title-link"
                              >
                                {q.questionTitle}
                              </Link>
                              <p className="question-time">
                                Asked {moment(q.askedOn).fromNow()}
                              </p>
                            </div>
                          ))
                        ) : (
                          <p>This user hasn't posted any questions yet.</p>
                        )}
                      </div>
                    )}

                    {activeTab === "answers" && (
                      <div className="user-answers-list">
                        {userAnswers?.length > 0 ? (
                          userAnswers.map((q) => (
                            <div key={q._id} className="user-answer-item">
                              <Link
                                to={`/questions/${q._id}`}
                                className="question-title-link"
                              >
                                {q.questionTitle}
                              </Link>
                              {q.userAnswers.map((a, i) => (
                                <div key={i} className="answer-body">
                                  <p>{a.answerBody}</p>
                                  <p className="question-time">
                                    Answered {moment(a.answeredOn).fromNow()}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ))
                        ) : (
                          <p>This user hasn't posted any answers yet.</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
