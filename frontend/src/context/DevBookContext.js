import { createContext, useReducer } from 'react'

export const DevBooksContext = createContext()

export const devBooksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DEVBOOKS':
      return { 
        devBooks: action.payload 
      }
    case 'CREATE_DEVBOOK':
      return { 
        devBooks: [action.payload, ...state.devBooks] 
      }
    case 'DELETE_DEVBOOK':
      return { 
        devBooks: state.devBooks.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const DevBooksContextProvider = ({ children }) => {
  const [state, dispatchDevBooks] = useReducer(devBooksReducer, { 
    devBooks: null
  })
  
  return (
    <DevBooksContext.Provider value={{ ...state, dispatchDevBooks }}>
      { children }
    </DevBooksContext.Provider>
  )
}