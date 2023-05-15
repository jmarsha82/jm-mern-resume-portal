import { useEffect } from "react"
import { useGeneralsContext } from "../hooks/useGeneralsContext"
import { useCurrentSkillsContext } from "../hooks/useCurrentSkillsContext"
import GeneralDetails from "../components/GeneralDetails"
import CurrentSkillDetails from "../components/CurrentSkillDetails"
import { ButtonGroup } from "@mui/material"

const Home = () => {
  const { generals, dispatchGeneral } = useGeneralsContext()

  useEffect(() => {
    const fetchGenerals = async () => {
      const response = await fetch('/api/generals')
      const json = await response.json()

      if (response.ok) {
        dispatchGeneral({type: 'SET_GENERALS', payload: json})
      }
    }

    fetchGenerals()
  }, [dispatchGeneral])

  const { currentSkills, dispatchSkills } = useCurrentSkillsContext()

  useEffect(() => {
    const fetchCurrentSkills = async () => {
      const response = await fetch('/api/currentSkill')
      const json = await response.json()

      if (response.ok) {
        dispatchSkills({type: 'SET_CURRENT_SKILLS', payload: json})
      }
    }

    fetchCurrentSkills()
  }, [dispatchSkills])

  return (
    <div>
      <div className="home">
        <div>
          {generals && generals.map(general => (
            <GeneralDetails general={general} key={general._id} />
          ))}
        </div>
        <div>
          <div className="current-skill-heading"><h4>Current Project(s) Tech Stack</h4></div>
          <div className="current-skill-details">
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
          {currentSkills && currentSkills.map(currentSkill => (
            <CurrentSkillDetails currentSkill={currentSkill} key={currentSkill._id} />
          ))}
          </ButtonGroup>
          </div>
        </div>
        <div>
          <div className="current-skill-heading"><h4>Mission Statement?</h4></div>
          <div className="general-details">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home