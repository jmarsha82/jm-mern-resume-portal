import { DevBooksContext } from "../context/DevBookContext"
import { useContext } from "react"

export const useDevBooksContext = () => {
  const context = useContext(DevBooksContext)

  if(!context) {
    throw Error('useDevBooksContext must be used inside an DevBooksContextProvider')
  }

  return context
}