
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "../../components/Avatar/Avatar";
import { deleteAnswer } from "../../actions/question";
import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const DisplayAnswer = ({ question, handleShare }) => {
  const User = useSelector((state) => state.currentUserReducer)
  const { id } = useParams()
  const dispatch = useDispatch()

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
  }

  useEffect(() => {
    document.querySelectorAll('.answer-body pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  }, [question.answer]);

  return (
    <div className="answers-list">
      {question.answer.map((ans) => (
        <div className="answer-card" key={ans._id}>
          <div className="answer-content">
            <div className="answer-body" dangerouslySetInnerHTML={{ __html: ans.answerBody }} />

            <div className="answer-actions">
              <div className="action-buttons">
                <button type="button" className="action-btn" onClick={handleShare}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16,6 12,2 8,6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                  Share
                </button>
                {User?.result?._id === ans?.userId && (
                  <button
                    type="button"
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3,6 5,6 21,6"></polyline>
                      <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6m3,0V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>
                    </svg>
                    Delete
                  </button>
                )}
              </div>

              <div className="answer-user-info">
                <Link to={`/Users/${ans.userId}`} className="user-link">
                  <Avatar backgroundColor="lightgreen" px="8px" py="5px" borderRadius="4px">
                    {ans.userAnswered.charAt(0).toUpperCase()}
                  </Avatar>
                  <div className="user-detail">
                    <div className="username">{ans.userAnswered}</div>
                    <div className="user-meta">answered {moment(ans.answeredOn).fromNow()}</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default DisplayAnswer
