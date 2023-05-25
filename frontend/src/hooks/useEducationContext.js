import { EducationsContext } from "../context/EducationContext"
import { useContext } from "react"

export const useEducationsContext = () => {
  const context = useContext(EducationsContext)

  if(!context) {
    throw Error('useEducationsContext must be used inside an EducationsContextProvider')
  }

  return context
}