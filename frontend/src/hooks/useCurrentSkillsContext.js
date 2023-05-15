import { CurrentSkillsContext } from "../context/CurrentSkillsContext"
import { useContext } from "react"

export const useCurrentSkillsContext = () => {
  const context = useContext(CurrentSkillsContext)

  if(!context) {
    throw Error('useCurrentSkillsContext must be used inside an CurrentSkillsContextProvider')
  }

  return context
}