import { createContext, useReducer } from 'react'

export const GeneralsContext = createContext()

export const generalsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GENERALS':
      return { 
        generals: action.payload 
      }
    case 'CREATE_GENERAL':
      return { 
        generals: [action.payload, ...state.generals] 
      }
    default:
      return state
  }
}

export const GeneralsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(generalsReducer, { 
    generals: null
  })
  
  return (
    <GeneralsContext.Provider value={{ ...state, dispatch }}>
      { children }
    </GeneralsContext.Provider>
  )
}