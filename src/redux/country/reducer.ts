import * as types from './types'
import { CountryState } from '../../interface/countryState.interface'

const INITIAL_STATE: CountryState = {
  country: [],
  generateCountryInformation: [],
  counter: 1,
  currentQuestion: {
    name: '',
    flag: '',
    capital: '',
    numericCode: '',
    allAnswers: []
  }
}

const countryReducer = (state = INITIAL_STATE, action): CountryState => {
  switch (action.type) {
    case types.countryActionTypes.GET_COUNTRY:
      return {
        ...state,
        country: action.payload
      }
    case types.countryActionTypes.SET_GENERATE_COUNTRY_INFORMATION:
      return {
        ...state,
        generateCountryInformation: action.payload
      }
    case types.countryActionTypes.SET_COUNTER:
      return {
        ...state,
        counter: action.payload
      }
    case types.countryActionTypes.GET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload
      }
    case types.countryActionTypes.GENERATE_ANSWERS:
      return {
        ...state,
        currentQuestion: {
          ...state.currentQuestion,
          allAnswers: action.payload
        }
      }
    case types.countryActionTypes.DELETE_DATA:
      return {
        ...state,
        country: [],
        generateCountryInformation: [],
        counter: 1,
        currentQuestion: {
          name: '',
          flag: '',
          capital: '',
          numericCode: '',
          allAnswers: []
        }
      }
    default:
      return state
  }
}

export default countryReducer