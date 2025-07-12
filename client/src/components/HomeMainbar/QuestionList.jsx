import Questions from "./Questions"

const QuestionList = ({ questionsList }) => {
  return (
    <div className="question-list">
      {questionsList.map((question) => (
        <Questions question={question} key={question._id} />
      ))}
    </div>
  )
}

export default QuestionList
