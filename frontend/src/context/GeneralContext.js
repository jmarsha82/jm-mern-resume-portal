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
    case 'DELETE_GENERAL':
      return { 
        generals: state.generals.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const GeneralsContextProvider = ({ children }) => {
  const [state, dispatchGeneral] = useReducer(generalsReducer, { 
    generals: null
  })
  
  return (
    <GeneralsContext.Provider value={{ ...state, dispatchGeneral }}>
      { children }
    </GeneralsContext.Provider>
  )
}