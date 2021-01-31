import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import TaskContext from '../../context/TaskContext'
import Checkbox from '../UI/Checkbox'

const Task = ({ task }) => {
  const { completed: isCompleted, text, id } = task

  const [completed, setCompleted] = useState(isCompleted)

  const { tasks, updateTasks } = useContext(TaskContext)

  const handleChange = (value) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        item.completed = value
        return item
      }

      return item
    })

    updateTasks(updatedTasks)
    setCompleted(value)
  }

  const handleDeleteTask = () => {
    const updatedTasks = tasks.filter((item) => item.id !== id)

    updateTasks(updatedTasks)
  }

  return (
    <li className="flex items-center py-4 px-7 border-task task">
      <Checkbox completed={completed} setCompleted={handleChange} />

      <div className="capitalize">
        <p
          className={`${
            completed && 'line-through completed-task'
          } cursor-pointer`}
        >
          {text}
        </p>
      </div>

      <button
        onClick={handleDeleteTask}
        className="task-x outline-none focus:outline-none"
      >
        &#215;
      </button>
    </li>
  )
}

Task.propTypes = {
  task: PropTypes.shape().isRequired
}

export default Task
