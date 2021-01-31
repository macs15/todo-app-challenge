import PropTypes from 'prop-types'

const Checkbox = ({ completed, setCompleted }) => {
  return (
    <div className="checkbox-container rounded-full relative">
      <input
        name="complete"
        type="checkbox"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />
      <label
        htmlFor="complete"
        className={`${completed && 'checked'} checkbox-input`}
      ></label>
    </div>
  )
}

Checkbox.propTypes = {
  completed: PropTypes.bool.isRequired,
  setCompleted: PropTypes.func.isRequired
}

export default Checkbox
