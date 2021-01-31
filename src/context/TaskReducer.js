import { ADD_TASK, GET_TASKS, SET_ACTIVE_TASKS, UPDATE_TASK } from './types'

const initialState = {
  tasks: null,
  active: 'all'
}

export const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      }

    case UPDATE_TASK:
      return {
        ...state,
        tasks: action.payload
      }

    case ADD_TASK:
      return {
        ...state,
        task: action.payload
      }

    case SET_ACTIVE_TASKS:
      return {
        ...state,
        active: action.payload
      }

    default:
      return state
  }
}
