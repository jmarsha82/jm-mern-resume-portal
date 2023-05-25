import { FullSkillsContext } from "../context/FullSkillsContext"
import { useContext } from "react"

export const useFullSkillsContext = () => {
  const context = useContext(FullSkillsContext)

  if(!context) {
    throw Error('useFullSkillsContext must be used inside an FullSkillsContextProvider')
  }

  return context
}