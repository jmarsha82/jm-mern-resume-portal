import { useEffect } from "react"
import { useGeneralsContext } from "../hooks/useGeneralsContext"
import GeneralDetails from "../components/GeneralDetails"
import GeneralForm from "../components/GeneralForm"

const Home = () => {
  const { generals, dispatch } = useGeneralsContext()

  useEffect(() => {
    const fetchGenerals = async () => {
      const response = await fetch('/api/generals')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_GENERALS', payphone: json})
      }
    }

    fetchGenerals()
  }, [dispatch])

  return (
    <div className="home">
      <div className="generals">
        {generals && generals.map(general => (
          <GeneralDetails general={general} key={general._id} />
        ))}
      </div>
      <GeneralForm />
    </div>
  )
}

export default Home