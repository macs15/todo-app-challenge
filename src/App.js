import React from 'react'
import './styles.css'
import { ThemeProvider } from 'styled-components'
import useDarkMode from './hooks/useDarkMode'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global'
import Header from './components/UI/Header'
import TaskState from './context/TaskState'
import Tasks from './components/tasks/Tasks'

export default function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!componentMounted) return <div />

  return (
    <ThemeProvider theme={themeMode}>
      <TaskState>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />

        <div className="main-container">
          <Tasks />
        </div>
      </TaskState>
    </ThemeProvider>
  )
}
