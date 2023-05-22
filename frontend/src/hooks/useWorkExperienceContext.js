import { WorkExperiencesContext } from "../context/WorkExperienceContext"
import { useContext } from "react"

export const useWorkExperiencesContext = () => {
  const context = useContext(WorkExperiencesContext)

  if(!context) {
    throw Error('useWorkExperiencesContext must be used inside an WorkExperiencesContextProvider')
  }

  return context
}