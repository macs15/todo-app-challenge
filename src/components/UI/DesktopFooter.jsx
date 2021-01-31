import { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import TaskContext from '../../context/TaskContext'

const DesktopFooter = ({ tasks, clearCompleted }) => {
  const [active, setActive] = useState('all')

  const { setActiveTasks } = useContext(TaskContext)

  const handleActiveFilter = (e) => {
    const current = e.target.name

    setActive(current)
    setActiveTasks(current)
  }

  const totalTasks = tasks.length

  return (
    <div className="md:col-span-4 md:col-start-2 row-start-2 xl:col-span-2 xl:col-start-2 input-bg px-8 mt-6 md:mt-0 rounded-md md:rounded-t-none py-4 flex justify-center text-center footer">
      <div className="footer-desktop text-left mr-auto nowrap">
        <p>{totalTasks} items left</p>
      </div>
      <div className="mx-3 md:mx-2">
        <button
          onClick={handleActiveFilter}
          name="all"
          type="button"
          className={`${
            active === 'all' && 'active'
          } footer-filter outline-none focus:outline-none`}
        >
          All
        </button>
      </div>
      <div className="mx-3 md:mx-2">
        <button
          name="active"
          type="button"
          onClick={handleActiveFilter}
          className={`${
            active === 'active' && 'active'
          } footer-filter outline-none focus:outline-none`}
        >
          Active
        </button>
      </div>
      <div className="mx-3 md:mx-2">
        <button
          name="completed"
          type="button"
          onClick={handleActiveFilter}
          className={`${
            active === 'completed' && 'active'
          } footer-filter outline-none focus:outline-none`}
        >
          Completed
        </button>
      </div>
      <div className="footer-desktop ml-auto clear-task">
        <button
          onClick={clearCompleted}
          type="button"
          className="clear-task outline-none focus:outline-none text-right nowrap"
        >
          Clear completed
        </button>
      </div>
    </div>
  )
}

DesktopFooter.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  clearCompleted: PropTypes.func.isRequired
}

export default DesktopFooter
