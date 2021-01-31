import { useContext, useState } from 'react'
import Checkbox from './Checkbox'
import { v4 as uuid } from 'uuid'
import TaskContext from '../../context/TaskContext'

const Input = () => {
  const [text, setText] = useState('')
  const [completed, setCompleted] = useState(false)

  const { getTasks, updateTasks, tasks } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    getTasks()

    const newTask = { id: uuid(), text, completed }
    tasks.push(newTask)

    localStorage.setItem('tasks', JSON.stringify(tasks))
    updateTasks(tasks)

    setCompleted(false)
    setText('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="input-bg w-full px-7 py-4 flex items-center rounded-md"
    >
      <Checkbox completed={completed} setCompleted={setCompleted} />

      <input
        name="text"
        type="text"
        required
        autoComplete="off"
        placeholder="Create a new todo..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        className="w-full input-bg font-semibold outline-none focus:outline-none"
      />
    </form>
  )
}

export default Input
