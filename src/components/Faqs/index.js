// Write your code here.

import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {
    selectedQuestionsList: [],
  }

  openAnswer = id => {
    const {selectedQuestionsList} = this.state
    if (selectedQuestionsList.includes(id)) {
      const filteredSelectedList = selectedQuestionsList.filter(
        each => each !== id,
      )
      this.setState({
        selectedQuestionsList: filteredSelectedList,
      })
    } else {
      this.setState(previousState => ({
        selectedQuestionsList: [...previousState.selectedQuestionsList, id],
      }))
    }
  }

  render() {
    const {selectedQuestionsList} = this.state
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="header">FAQs</h1>
          <ul className="ul-container">
            {faqsList.map(each => (
              <FaqItem
                key={each.id}
                faqDetails={each}
                openAnswer={this.openAnswer}
                selectedQuestionsList={selectedQuestionsList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
