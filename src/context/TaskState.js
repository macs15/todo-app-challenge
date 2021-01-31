import { useReducer } from 'react'
import TaskContext from './TaskContext'
import { TaskReducer } from './TaskReducer'
import { ADD_TASK, GET_TASKS, SET_ACTIVE_TASKS, UPDATE_TASK } from './types'

const TaskState = (props) => {
  const initialState = {
    tasks: null,
    active: 'all'
  }

  const [state, dispatch] = useReducer(TaskReducer, initialState)

  const getTasks = () => {
    const tasksFromLS = localStorage.getItem('tasks')
    const tasks = tasksFromLS ? JSON.parse(tasksFromLS) : []

    dispatch({
      type: GET_TASKS,
      payload: tasks || []
    })
  }

  const updateTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))

    dispatch({
      type: UPDATE_TASK,
      payload: tasks
    })
  }

  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }

  const setActiveTasks = (current) => {
    dispatch({
      type: SET_ACTIVE_TASKS,
      payload: current
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        active: state.active,
        updateTasks,
        addTask,
        getTasks,
        setActiveTasks
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState
