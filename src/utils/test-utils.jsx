import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
// import TaskState from './context/TaskState'
import TaskState from '../context/TaskState'
import { GlobalStyles } from '../global'
import { lightTheme } from '../theme'

const AllTheProviders = ({ children, initialState }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <TaskState initialState={initialState}>
        <GlobalStyles />
        <div className="main-container">{children}</div>
      </TaskState>
    </ThemeProvider>
  )
}

const customRender = (ui, { initialState, ...renderOptions } = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders initialState={initialState}>{children}</AllTheProviders>
    ),
    ...renderOptions
  })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
