import { useEffect } from "react"
import { useGeneralsContext } from "../hooks/useGeneralsContext"
import { useCurrentSkillsContext } from "../hooks/useCurrentSkillsContext"
import { useWorkExperiencesContext } from "../hooks/useWorkExperienceContext"
import { useEducationsContext } from "../hooks/useEducationContext"
import { useFullSkillsContext } from "../hooks/useFullSkillsContext"
import { useDevBooksContext } from "../hooks/useDevBooksContext"
import { useDevLinksContext } from "../hooks/useDevLinksContext"
import GeneralDetails from "../components/GeneralDetails"
import CurrentSkillDetails from "../components/CurrentSkillDetails"
import WorkExperienceDetails from "../components/WorkExperienceDetails"
import EducationDetails from "../components/EducationDetails"
import FullSkillDetails from "../components/FullSkillDetails"
import DevBooksDetails from "../components/DevBooksDetails"
import DevLinkDetails from "../components/DevLinkDetails"
import { Grid } from "@mui/material"
import ProgrammerNavbar from "../components/ProgrammerNavbar"

const ProgrammerProfile = () => {
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

  const { devBooks, dispatchDevBooks } = useDevBooksContext()

  useEffect(() => {
    const fetchDevBooks = async () => {
      const response = await fetch('/api/devBook')
      const json = await response.json()

      if (response.ok) {
        dispatchDevBooks({type: 'SET_DEVBOOKS', payload: json})
      }
    }

    fetchDevBooks()
  }, [dispatchDevBooks])

  const { devLinks, dispatchDevLink } = useDevLinksContext()

  useEffect(() => {
    const fetchDevLinks = async () => {
      const response = await fetch('/api/devLink')
      const json = await response.json()

      if (response.ok) {
        dispatchDevLink({type: 'SET_DEVLINKS', payload: json})
      }
    }

    fetchDevLinks()
  }, [dispatchDevLink])

  return (
    <div>
    <ProgrammerNavbar className="navbar-background" />
    <div className = "pages">
        <div className="home-one">
            <div>
                <GeneralDetails/>
            </div>
            <div className="full-skill-heading">
            <h4>Github Contributions</h4>
            <img src="https://ghchart.rshah.org/1976d2/jmarsha82" alt="Github Profile" />
            </div>
        </div>
        <div className="home-two">
            <div>
            <div>
            <div className="current-skill-heading"><h4>Current Project(s) Tech Stack</h4></div>
            <div className="current-skill-details">
                <CurrentSkillDetails/>
            </div>
            </div>
            <div id="experience-id" className="current-skill-heading"><h4 onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }}>Experience</h4></div>
            <div className="work-experience-details">
            {workExperiences && workExperiences.map(workExperience => (
                <WorkExperienceDetails workExperience={workExperience} key={workExperience._id} />
            ))}
            </div>
            </div>
        </div>
        <div className="home-three">
            <div>
            <div id="education-id" className="current-skill-heading">
                    <h4 onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }}>Education</h4>
            </div>
            <div className="education-details">
            {educations && educations.map(education => (
                <EducationDetails education={education} key={education._id} />
            ))}
            </div>
            </div>
        </div>
        <div className="home-three">
            <div>
            <div id="extended-skills-id" className="current-skill-heading"><h4 onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }}>Extended Tech Stack</h4></div>
            <div className="current-skill-details">
            {fullSkills && fullSkills.map(fullSkill => (
                <FullSkillDetails fullSkill={fullSkill} key={fullSkill._id} />
            ))}
            </div>
            </div>
        </div>
        <div className="home-three">
            <div>
            <div id="dev-books-id" className="current-skill-heading"><h4 onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }}>Dev Books</h4></div>
            <div className="current-skill-details">
            <Grid container spacing={0}>              
            {devBooks && devBooks.map(devBook => (
                <Grid item xs={6}>
                <DevBooksDetails devBook={devBook} key={devBook._id} />
                </Grid>
            ))}
            </Grid>
            </div>
        </div>
        </div>
        <div className="home-three">
        <div>
        <div id="dev-links-id" className="current-skill-heading"><h4 onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }}>Dev Links</h4></div>
                    <Grid container spacing={0}> 
            {devLinks && devLinks.map(devLink => (
                <Grid item xs={6}>
                <DevLinkDetails devLink={devLink} key={devLink._id} />
                </Grid>
            ))}
            </Grid>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default ProgrammerProfile