import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = (mode) => {
    localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')

    if (localTheme) {
      localTheme && setTheme(localTheme)
    } else {
      setMode('light')
    }

    setComponentMounted(true)
  }, [])

  return [theme, toggleTheme, componentMounted]
}

export default useDarkMode
