import { render } from '../../utils/test-utils'
import { expect } from '@jest/globals'
import Tasks from './Tasks'

const MOCK_TASK = {
  completed: false,
  text: 'test task',
  id: 'abc123'
}

afterEach(() => {
  // Clear localStorage after each test
  localStorage.clear()
})

// Demo test to check if the test suite is working
it('should render successfully', () => {
  // ARRANGE
  const { baseElement } = render(<Tasks />)

  // ASSERT
  expect(baseElement).toBeTruthy()
})

it('should render the task list from localStorage', () => {
  // ARRANGE
  localStorage.setItem('tasks', JSON.stringify([MOCK_TASK]))
  const { getByText, getByTestId } = render(<Tasks />)
  const task = getByText(MOCK_TASK.text)
  const taskList = getByTestId('tasks-list')

  // ASSERT
  expect(task).toBeTruthy()
  expect(taskList.childNodes.length).toBe(1)
})

it('should not render the task list due to empty localStorage', () => {
  // ARRANGE
  const { getByText } = render(<Tasks />)
  const emptyState = getByText('First add some tasks')

  // ASSERT
  expect(emptyState).toBeTruthy()
})
