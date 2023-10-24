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
  const { getByRole } = render(<Task task={MOCK_TASK} />, {
    initialState: {
      task: [MOCK_TASK]
    }
  })
  const checkbox = getByRole('checkbox')
  await userEvent.click(checkbox)
  expect(checkbox.checked).toBeTruthy()
})
