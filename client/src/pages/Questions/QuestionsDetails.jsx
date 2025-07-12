import { useState, useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";
import "./Questions.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import {
  postAnswer,
  deleteQuestion,
  voteQuestion,
} from "../../actions/question";

const QuestionsDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);
  const [Answer, setAnswer] = useState("");
  const questionBodyRef = useRef(null);
  useEffect(() => {
    if (questionBodyRef.current) {
      questionBodyRef.current.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
      });
    }
  }, [questionsList.data, id]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState("newest");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const location = useLocation();
  const url = "http://localhost:3000";

  const getSortedAnswers = (answers) => {
    if (!Array.isArray(answers)) return [];
    if (sortType === "oldest") {
      return [...answers].sort(
        (a, b) => new Date(a.answeredOn) - new Date(b.answeredOn)
      );
    } else if (sortType === "votes") {
      return [...answers].sort((a, b) => (b.votes || 0) - (a.votes || 0));
    } else {
      return [...answers].sort(
        (a, b) => new Date(b.answeredOn) - new Date(a.answeredOn)
      );
    }
  };

  const handlePostAns = async (e, answerLength) => {
    e.preventDefault();
    setIsLoading(true);
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth");
      setIsLoading(false);
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
        setIsLoading(false);
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
          })
        );
        setAnswer("");
        setTimeout(() => setIsLoading(false), 1500);
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  };

  const handleUpVote = () => {
    if (User === null) {
      alert("Login or Signup to up vote a question");
      Navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "upVote"));
    }
  };

  const handleDownVote = () => {
    if (User === null) {
      alert("Login or Signup to down vote a question");
      Navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "downVote"));
    }
  };

  return (
    <div className="question-details-page">
      <div className="question-background">
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>
      </div>

      {questionsList.data === null ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <h2>Loading question...</h2>
        </div>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id} className="question-content">
                <section className="question-details-container">
                  <div className="question-header">
                    <h1 className="question-title">{question.questionTitle}</h1>
                    <div className="question-meta">
                      <div className="meta-item">
                        <svg
                          className="meta-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                        <span>Asked {moment(question.askedOn).fromNow()}</span>
                      </div>
                      <div className="meta-item">
                        <svg
                          className="meta-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <span>Viewed 42 times</span>
                      </div>
                    </div>
                  </div>

                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <button
                        className="vote-btn vote-up"
                        onClick={handleUpVote}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="18,15 12,9 6,15"></polyline>
                        </svg>
                      </button>
                      <div className="vote-count">
                        {question.upVote.length - question.downVote.length}
                      </div>
                      <button
                        className="vote-btn vote-down"
                        onClick={handleDownVote}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                      </button>
                    </div>

                    <div className="question-content-area">
                      <div className="question-body" ref={questionBodyRef}>
                        <div dangerouslySetInnerHTML={{ __html: question.questionBody }} />
                      </div>

                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <span key={tag} className="question-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="question-actions-user">
                        <div className="action-buttons">
                          <button
                            type="button"
                            className="action-btn"
                            onClick={handleShare}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                              <polyline points="16,6 12,2 8,6"></polyline>
                              <line x1="12" y1="2" x2="12" y2="15"></line>
                            </svg>
                            Share
                          </button>
                          {User?.result?._id === question?.userId && (
                            <button
                              type="button"
                              className="action-btn delete-btn"
                              onClick={handleDelete}
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <polyline points="3,6 5,6 21,6"></polyline>
                                <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>
                              </svg>
                              Delete
                            </button>
                          )}
                        </div>

                        <div className="user-info">
                          <Link
                            to={`/Users/${question.userId}`}
                            className="user-link"
                          >
                            <Avatar
                              backgroundColor="orange"
                              px="8px"
                              py="5px"
                              borderRadius="4px"
                            >
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className="user-detail">
                              <div className="username">
                                {question.userPosted}
                              </div>
                              <div className="user-meta">
                                asked {moment(question.askedOn).fromNow()}
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {question.noOfAnswers !== 0 && (
                  <section className="answers-section">
                    <div className="answers-header">
                      <h3 className="answers-title">
                        {question.noOfAnswers}{" "}
                        {question.noOfAnswers === 1 ? "Answer" : "Answers"}
                      </h3>
                      <div className="sort-options">
                        <button
                          className={`sort-btn${
                            sortType === "newest" ? " active" : ""
                          }`}
                          onClick={() => setSortType("newest")}
                        >
                          Newest
                        </button>
                        <button
                          className={`sort-btn${
                            sortType === "oldest" ? " active" : ""
                          }`}
                          onClick={() => setSortType("oldest")}
                        >
                          Oldest
                        </button>
                        <button
                          className={`sort-btn${
                            sortType === "votes" ? " active" : ""
                          }`}
                          onClick={() => setSortType("votes")}
                        >
                          Votes
                        </button>
                      </div>
                    </div>
                    <DisplayAnswer
                      key={question._id}
                      question={{
                        ...question,
                        answer: getSortedAnswers(question.answer),
                      }}
                      handleShare={handleShare}
                    />
                  </section>
                )}

                <section className="post-ans-container">
                  <h3 className="answer-form-title">Your Answer</h3>
                  <form
                    onSubmit={(e) => {
                      handlePostAns(e, question.answer.length);
                    }}
                    className="answer-form"
                  >
                    <div className="textarea-container">
                      <ReactQuill
                      height="200px"
                        value={Answer}
                        onChange={setAnswer}
                        modules={{
                          toolbar: [
                            [{ header: [1, 2, false] }],
                            ["bold", "italic", "underline", "strike"],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["code-block", "blockquote"],
                            ["link", "image"],
                            ["clean"],
                          ],
                        }}
                        formats={[
                          "header",
                          "bold",
                          "italic",
                          "underline",
                          "strike",
                          "list",
                          "bullet",
                          "code-block",
                          "blockquote",
                          "link",
                          "image",
                        ]}
                      />
                      <div className="textarea-toolbar">
                        <span className="char-count">
                          {Answer.replace(/<[^>]+>/g, "").length} characters
                        </span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="post-ans-btn"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="loading-content">
                          <div className="loading-spinner-small"></div>
                          <span>Posting...</span>
                        </div>
                      ) : (
                        <>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M9 12l2 2 4-4"></path>
                            <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"></path>
                            <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"></path>
                          </svg>
                          Post Your Answer
                        </>
                      )}
                    </button>
                  </form>

                  <div className="related-tags">
                    <p className="related-text">
                      Browse other questions tagged
                      {question.questionTags.map((tag) => (
                        <Link to="/Tags" key={tag} className="ans-tags">
                          {tag}
                        </Link>
                      ))}
                      or
                      <Link to="/AskQuestion" className="ask-link">
                        ask your own question
                      </Link>
                    </p>
                  </div>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuestionsDetails;
