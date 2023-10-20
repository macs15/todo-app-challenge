import { render } from '../../utils/test-utils'
import Task from './Task'
import { expect } from '@jest/globals';

// Demo test to check if the test suite is working
it('should render successfully', () => {
  // ARRANGE
  const MOCK_TASK = {
    completed: false,
    text: 'test',
    id: 1
  }
  const { baseElement } = render(<Task task={MOCK_TASK} />);

  // ASSERT
  expect(baseElement).toBeTruthy();
});
