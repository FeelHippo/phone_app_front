import { types } from './types'

const defaultState = {
  phones: [],
  isModalOpen: false,
}

const state = (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_PHONES:
      return {
        ...state,
        phones: action.payload,
      }
      case types.TOGGLE_MODAL:
        return {
          ...state,
          isModalOpen: action.payload,
        }
    default:
      return state
  }
}

export default state