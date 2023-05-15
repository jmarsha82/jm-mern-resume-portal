import { createContext, useReducer } from 'react'

export const CurrentSkillsContext = createContext()

export const currentSkillsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SKILLS':
      return { 
        currentSkills: action.payload 
      }
    case 'CREATE_CURRENT_SKILL':
      return { 
        currentSkills: [action.payload, ...state.currentSkills] 
      }
    case 'DELETE_CURRENT_SKILL':
      return { 
        currentSkills: state.currentSkills.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const CurrentSkillsContextProvider = ({ children }) => {
  const [state, dispatchSkills] = useReducer(currentSkillsReducer, { 
    currentSkills: null
  })
  
  return (
    <CurrentSkillsContext.Provider value={{ ...state, dispatchSkills }}>
      { children }
    </CurrentSkillsContext.Provider>
  )
}