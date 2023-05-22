import { createContext, useReducer } from 'react'

export const WorkExperiencesContext = createContext()

export const workExperiencesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORK_EXPERIENCE':
      return { 
        workExperiences: action.payload 
      }
    case 'CREATE_WORK_EXPERIENCE':
      return { 
        workExperiences: [action.payload, ...state.workExperiences] 
      }
    case 'DELETE_WORK_EXPERIENCE':
      return { 
        workExperiences: state.workExperiences.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const WorkExperiencesContextProvider = ({ children }) => {
  const [state, dispatchExperience] = useReducer(workExperiencesReducer, { 
    workExperiences: null
  })
  
  return (
    <WorkExperiencesContext.Provider value={{ ...state, dispatchExperience }}>
      { children }
    </WorkExperiencesContext.Provider>
  )
}