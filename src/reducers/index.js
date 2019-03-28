import { combineReducers } from 'redux';

export const companies = (state = [], action) => {
    switch (action.type) {
      case 'ADD_COMPANY':
        return [
          ...state,
          {
            id: action.id,
            companyName: action.companyName,
          }
        ]
      case 'REMOVE_COMPANY':
        return state.filter(el => el.id !== action.id)
      default:
        return state
    }
  }

export default combineReducers({
  companies,
})