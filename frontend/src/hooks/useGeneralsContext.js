import { GeneralsContext } from "../context/GeneralContext"
import { useContext } from "react"

export const useGeneralsContext = () => {
  const context = useContext(GeneralsContext)

  if(!context) {
    throw Error('useGeneralsContext must be used inside an GeneralsContextProvider')
  }

  return context
}