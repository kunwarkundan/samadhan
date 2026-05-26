import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [counter, setCounter] = useState(0)
  const [theme, setTheme] = useState('light')

  const increment = () => setCounter(prev => prev + 1)
  const decrement = () => setCounter(prev => prev - 1)
  const resetCounter = () => setCounter(0)
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  const value = {
    counter,
    increment,
    decrement,
    resetCounter,
    theme,
    toggleTheme
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }
  return context
}
