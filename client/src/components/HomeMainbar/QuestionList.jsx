import Questions from "./Questions"

const QuestionList = ({ questionsList, onTagClick }) => {
  return (
    <div className="question-list">
      {questionsList.map((question) => (
        <Questions question={question} key={question._id} onTagClick={onTagClick} />
      ))}
    </div>
  )
}

export default QuestionList
