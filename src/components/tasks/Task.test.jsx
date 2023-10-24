import userEvent from '@testing-library/user-event'
import { render } from '../../utils/test-utils'
import Task from './Task'
import { expect } from '@jest/globals'

const MOCK_TASK = {
  completed: false,
  text: 'test',
  id: 'abc123'
}

// Demo test to check if the test suite is working
it('should render successfully', () => {
  // ARRANGE
  const { baseElement } = render(<Task task={MOCK_TASK} />)

  // ASSERT
  expect(baseElement).toBeTruthy()
})

it('should click the checkbox button to complete the task', async () => {
  // ARRANGE
  const { getByRole } = render(<Task task={MOCK_TASK} />, {
    initialState: {
      tasks: [MOCK_TASK]
    }
  })
  const checkbox = getByRole('checkbox')

  // ACT
  await userEvent.click(checkbox)

  // ASSERT
  expect(checkbox.checked).toBeTruthy()
})
