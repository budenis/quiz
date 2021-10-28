import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteData, clearAllAnsweredQuestions } from "../../redux/country/actions";
import { RootState } from "../../redux/root-reducer";
import { COUNTRY_QUIZ_ROUT, SHOW_RESULT_QUIZ_ROUT } from "../../constants/routs.constants";
import { GENERATE_NUMBER_INDEX_QUESTION_COUNTRY } from "../../constants/general.constants";

import { imgResults } from "../../asserts/imgIcon";

import "./index.css";

const Results: FC = () => {
  const {
    questionsResult,
    countriesUserQuestions,
    counter,
  } = useSelector((state: RootState) => state.data);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickRepeat = (): void => {
    dispatch(deleteData());
    history.push(COUNTRY_QUIZ_ROUT);
  };

  const handleClickShowResult = (): void => {
    dispatch(clearAllAnsweredQuestions());
    history.push(SHOW_RESULT_QUIZ_ROUT);
  };

  const showUserCorrectAnswers = (): number | undefined => {
    if (countriesUserQuestions.length) {
      return counter === GENERATE_NUMBER_INDEX_QUESTION_COUNTRY ? counter : counter - 1;
    }
    if (questionsResult.length) {
      return questionsResult.length - 1;
    }
  };

  return (
    <>
      <h1 className="main__title">COUNTRY QUIZ</h1>
      <form className="quiz-form">
        <div className="quiz-form__result">
          <img className="quiz-form__result-icon" src={imgResults} alt="imgResults" />
        </div>
        <h2 className="quiz-form__title">Results</h2>
        <p className="quiz-form__text">
          You got
          <span className="quiz-form__text-count">
            {" "}
            {showUserCorrectAnswers()}
            {" "}
          </span>
          correct answers
        </p>
        <div className="quiz-form__try-again">
          <button type="button" className="quiz-form__try-again-button" onClick={handleClickRepeat}>
            Try again
          </button>
          <button type="button" className="quiz-form__try-again-button" onClick={handleClickShowResult}>
            Show result
          </button>
        </div>
      </form>
    </>
  );
};

export default Results;
