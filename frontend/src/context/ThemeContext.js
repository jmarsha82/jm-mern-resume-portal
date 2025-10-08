import { createContext, useReducer, useContext, useEffect } from 'react'

export const ThemeContext = createContext()

export const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { 
        ...state,
        isDarkTheme: !state.isDarkTheme 
      }
    case 'SET_THEME':
      return { 
        ...state,
        isDarkTheme: action.payload 
      }
    default:
      return state
  }
}

const lightTheme = {
  background: '#f5f5f5',
  containerBg: 'rgba(255, 255, 255, 0.85)',
  textColor: '#333',
  textSecondary: '#666',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  cardBg: '#fff',
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  accent1: '#1976d2',
  accent2: '#2196f3',
  accent3: '#42a5f5',
}

const darkTheme = {
  background: '#1a1a1a',
  containerBg: 'rgba(30, 30, 30, 0.85)',
  textColor: '#e0e0e0',
  textSecondary: '#b0b0b0',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  cardBg: '#2a2a2a',
  shadowColor: 'rgba(0, 0, 0, 0.3)',
  accent1: '#64b5f6',
  accent2: '#90caf9',
  accent3: '#bbdefb',
}

// Initialize theme from localStorage or default to dark theme
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('isDarkTheme')
  if (savedTheme !== null) {
    return JSON.parse(savedTheme)
  }
  return true // Default to dark theme to match original behavior
}

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { 
    isDarkTheme: getInitialTheme()
  })

  // Save theme preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(state.isDarkTheme))
  }, [state.isDarkTheme])

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' })
  }

  const theme = state.isDarkTheme ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ ...state, dispatch, toggleTheme, theme }}>
      { children }
    </ThemeContext.Provider>
  )
}

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext)
  
  if (!context) {
    throw Error('useTheme must be used inside a ThemeContextProvider')
  }
  
  return context
}

