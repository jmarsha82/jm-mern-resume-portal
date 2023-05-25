import { createContext, useReducer } from 'react'

export const EducationsContext = createContext()

export const educationsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EDUCATIONS':
      return { 
        educations: action.payload 
      }
    case 'CREATE_EDUCATION':
      return { 
        educations: [action.payload, ...state.education] 
      }
    case 'DELETE_EDUCATION':
      return { 
        educations: state.education.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const EducationsContextProvider = ({ children }) => {
  const [state, dispatchEducation] = useReducer(educationsReducer, { 
    educations: null
  })
  
  return (
    <EducationsContext.Provider value={{ ...state, dispatchEducation }}>
      { children }
    </EducationsContext.Provider>
  )
}