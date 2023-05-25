import { createContext, useReducer } from 'react'

export const FullSkillsContext = createContext()

export const fullSkillsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FULL_SKILLS':
      return { 
        fullSkills: action.payload 
      }
    case 'CREATE_FULL_SKILL':
      return { 
        fullSkills: [action.payload, ...state.fullSkills] 
      }
    case 'DELETE_FULL_SKILL':
      return { 
        fullSkills: state.fullSkills.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const FullSkillsContextProvider = ({ children }) => {
  const [state, dispatchFullSkills] = useReducer(fullSkillsReducer, { 
    fullSkills: null
  })
  
  return (
    <FullSkillsContext.Provider value={{ ...state, dispatchFullSkills }}>
      { children }
    </FullSkillsContext.Provider>
  )
}