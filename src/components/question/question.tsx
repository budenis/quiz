import { useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'

import './index.css'

const Question = () => {
  const { currentQuestion } = useSelector((state: RootState) => state.data)
  const question = {
    country: ' is the capital of',
    flag: 'Which country does this flag belong to?'
  }

  return (
    <h2 className="question">
      {currentQuestion.capital ? (
        currentQuestion.capital + question.country
      ) : (
        <>
          <img
            className="question__title-flag"
            src={currentQuestion.flag}
            alt="flag"
          />
          <p>{question.flag}</p>
        </>
      )}
    </h2>
  )
}

export default Question
