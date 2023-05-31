import { createContext, useReducer } from 'react'

export const DevLinksContext = createContext()

export const devLinksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DEVLINKS':
      return { 
        devLinks: action.payload 
      }
    case 'CREATE_DEVLINK':
      return { 
        devLinks: [action.payload, ...state.devLinks] 
      }
    case 'DELETE_DEVLINK':
      return { 
        devLinks: state.devLinks.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const DevLinksContextProvider = ({ children }) => {
  const [state, dispatchDevLink] = useReducer(devLinksReducer, { 
    devLinks: null
  })
  
  return (
    <DevLinksContext.Provider value={{ ...state, dispatchDevLink }}>
      { children }
    </DevLinksContext.Provider>
  )
}