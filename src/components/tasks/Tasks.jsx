import { useContext, useEffect, useState } from 'react'
import TaskContext from '../../context/TaskContext'
import DesktopFooter from '../UI/DesktopFooter'
import MobileFooter from '../UI/MobileFooter'
import Task from './Task'

const Tasks = () => {
  const [filteredTasks, setFiltered] = useState([])
  const { getTasks, tasks, updateTasks, active } = useContext(TaskContext)

  useEffect(() => {
    if (!tasks) {
      getTasks()
    }

    // eslint-disable-next-line
  }, [tasks])

  useEffect(() => {
    if (tasks) {
      const filterTasksByCurrent = (current) => {
        if (current === 'active') return tasks.filter((item) => !item.completed)
        if (current === 'completed') return tasks.filter((item) => item.completed)

        return tasks
      }

      setFiltered(filterTasksByCurrent(active))
    }
  }, [active, tasks])

  if (!tasks) return <div />

  const totalTasks = filteredTasks.length

  const clearCompletedTasks = () => {
    const hasCompletedTasks = filteredTasks.some((item) => item.completed)

    if (hasCompletedTasks) {
      const updatedTasks = filteredTasks.filter((item) => !item.completed)

      updateTasks(updatedTasks)
    }
  }

  return (
    <div className="grid md:grid-cols-6 xl:grid-cols-4 w-full px-6">
      <div
        className={`md:col-span-4 md:col-start-2 row-start-1 xl:col-span-2 xl:col-start-2 input-bg -mt-8 rounded-md md:rounded-b-none`}
      >
        {totalTasks > 0 ? (
          <ul data-testid="tasks-list">
            {filteredTasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </ul>
        ) : (
          <div className="text-center py-4">
            <h2 className="">First add some tasks</h2>
          </div>
        )}

        <MobileFooter tasks={filteredTasks} clearCompleted={clearCompletedTasks} />
      </div>

      <DesktopFooter tasks={filteredTasks} clearCompleted={clearCompletedTasks} />
    </div>
  )
}

export default Tasks
