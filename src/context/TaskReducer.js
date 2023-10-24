import { ADD_TASK, GET_TASKS, SET_ACTIVE_TASKS, UPDATE_TASK } from './types'

// jsdoc state: { tasks: [], active: 'all' }
// jsdoc action: { type: string, payload: any }
// jsdoc return: { tasks: [], active: 'all' }

/**
 * @param {Object} state
 * @param {Array} state.tasks
 * @param {string} state.active
 * @param {Object} action
 * @param {string} action.type
 * @param {any} action.payload
 * @returns {Object} state
 */
export const TaskReducer = (state, action) => {
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
