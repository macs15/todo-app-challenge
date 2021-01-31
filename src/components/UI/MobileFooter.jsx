import PropTypes from 'prop-types'

const MobileFooter = ({ tasks, clearCompleted }) => {
  const totalTasks = tasks.length

  return (
    <div className="task-footer md:col-span-4 md:col-start-2 row-start-1 xl:col-span-2 xl:col-start-2 input-bg rounded-md flex justify-between px-6 py-4">
      <p>{totalTasks} items left</p>
      <button
        onClick={clearCompleted}
        type="button"
        className="clear-task outline-none focus:outline-none"
      >
        Clear completed
      </button>
    </div>
  )
}

MobileFooter.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  clearCompleted: PropTypes.func.isRequired
}

export default MobileFooter
