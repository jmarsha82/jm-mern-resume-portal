import { useEffect } from "react"
import { useGeneralsContext } from "../hooks/useGeneralsContext"
import { useCurrentSkillsContext } from "../hooks/useCurrentSkillsContext"
import { useWorkExperiencesContext } from "../hooks/useWorkExperienceContext"
import { useEducationsContext } from "../hooks/useEducationContext"
import { useFullSkillsContext } from "../hooks/useFullSkillsContext"
import GeneralDetails from "../components/GeneralDetails"
import CurrentSkillDetails from "../components/CurrentSkillDetails"
import WorkExperienceDetails from "../components/WorkExperienceDetails"
import EducationDetails from "../components/EducationDetails"
import FullSkillDetails from "../components/FullSkillDetails"

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

  const { workExperiences, dispatchExperience } = useWorkExperiencesContext()

  useEffect(() => {
    const fetchWorkExperiences = async () => {
      const response = await fetch('/api/workExperience')
      const json = await response.json()

      if (response.ok) {
        dispatchExperience({type: 'SET_WORK_EXPERIENCE', payload: json})
      }
    }

    fetchWorkExperiences()
  }, [dispatchExperience])

  const { educations, dispatchEducation } = useEducationsContext()

  useEffect(() => {
    const fetchEducation = async () => {
      const response = await fetch('/api/education')
      const json = await response.json()

      if (response.ok) {
        dispatchEducation({type: 'SET_EDUCATIONS', payload: json})
      }
    }

    fetchEducation()
  }, [dispatchEducation])

  const { fullSkills, dispatchFullSkills } = useFullSkillsContext()

  useEffect(() => {
    const fetchFullSkills = async () => {
      const response = await fetch('/api/fullSkill')
      const json = await response.json()

      if (response.ok) {
        dispatchFullSkills({type: 'SET_FULL_SKILLS', payload: json})
      }
    }

    fetchFullSkills()
  }, [dispatchFullSkills])

  return (
    <div>
      <div className="home-one">
        <div>
          {generals && generals.map(general => (
            <GeneralDetails general={general} key={general._id} />
          ))}
        </div>
        <div>
          <div className="current-skill-heading"><h4>Current Project(s) Tech Stack</h4></div>
          <div className="current-skill-details">
          {currentSkills && currentSkills.map(currentSkill => (
            <CurrentSkillDetails currentSkill={currentSkill} key={currentSkill._id} />
          ))}
          </div>
        </div>
      </div>
      <div className="home-two">
        <div>
          <div className="current-skill-heading"><h4>Experience</h4></div>
          <div className="work-experience-details">
          {workExperiences && workExperiences.map(workExperience => (
            <WorkExperienceDetails workExperience={workExperience} key={workExperience._id} />
          ))}
          </div>
        </div>
      </div>
      <div className="home-three">
        <div>
          <div className="current-skill-heading"><h4>Education</h4></div>
          <div className="education-details">
          {educations && educations.map(education => (
            <EducationDetails education={education} key={education._id} />
          ))}
          </div>
        </div>
      </div>
      <div className="home-three">
        <div>
          <div className="current-skill-heading"><h4>Extended Tech Stack</h4></div>
          <div className="current-skill-details">
          {fullSkills && fullSkills.map(fullSkill => (
            <FullSkillDetails fullSkill={fullSkill} key={fullSkill._id} />
          ))}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home