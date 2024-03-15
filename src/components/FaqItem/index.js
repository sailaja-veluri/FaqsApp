// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, openAnswer, selectedQuestionsList} = props
  const {id, questionText, answerText} = faqDetails
  const imgUrl = selectedQuestionsList.includes(id)
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altValue = selectedQuestionsList.includes(id) ? 'minus' : 'plus'
  const toKnowAnswer = () => {
    openAnswer(id)
  }
  return (
    <li className="li-container">
      <div className="question-button-container">
        <h1 className="question">{questionText}</h1>
        <button className="button-style" type="button" onClick={toKnowAnswer}>
          <img src={imgUrl} className="image" alt={altValue} />
        </button>
      </div>
      {selectedQuestionsList.includes(id) && (
        <p className="answer-details">{answerText}</p>
      )}
    </li>
  )
}

export default FaqItem
