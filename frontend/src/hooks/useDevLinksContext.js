import { DevLinksContext } from "../context/DevLinkContext"
import { useContext } from "react"

export const useDevLinksContext = () => {
  const context = useContext(DevLinksContext)

  if(!context) {
    throw Error('useDevLinksContext must be used inside an DevLinksContextProvider')
  }

  return context
}