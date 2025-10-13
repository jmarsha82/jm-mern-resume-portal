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
import { useTheme } from "../context/ThemeContext"

const ProgrammerProfile = () => {
  const { theme } = useTheme()

  return (
    <div style={{
      background: theme.background,
      minHeight: '100vh',
      transition: 'background 0.3s ease'
    }}>
      <ProgrammerNavbar/>
      <div className="pages" style={{ background: theme.background }}>
        <div className="home-one">
          <div>
            <GeneralDetails />
          </div>
          <div className="home-github" style={{
            background: theme.cardBg,
            color: theme.textColor,
            transition: 'background 0.3s ease, color 0.3s ease'
          }}>
            <h4 style={{ color: theme.accent4 }}>Github Contributions</h4>
            <img src="https://ghchart.rshah.org/1976d2/jmarsha82" alt="Github Profile" />
          </div>
        </div>
        <div className="home-two">
          <div>
            <div>
              <div className="current-skill-heading" style={{
                background: theme.cardBg,
                color: theme.textColor,
                transition: 'background 0.3s ease, color 0.3s ease'
              }}><h4 style={{ color: theme.accent4 }} onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }} title="Back to Top">Current Project(s) Tech Stack</h4></div>
              <div className="current-skill-details" style={{
                background: theme.cardBg,
                color: theme.textColor,
                transition: 'background 0.3s ease, color 0.3s ease'
              }}>
                <CurrentSkillDetails />
              </div>
            </div>
            <div id="experience-id" className="current-skill-heading" style={{
              background: theme.cardBg,
              color: theme.textColor,
              transition: 'background 0.3s ease, color 0.3s ease'
            }}><h4 style={{ color: theme.accent4 }} onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} title="Back to Top">Experience</h4></div>
            <div className="work-experience-details" style={{
              background: theme.cardBg,
              color: theme.textColor,
              transition: 'background 0.3s ease, color 0.3s ease'
            }}>
              <WorkExperienceDetails />
            </div>
          </div>
        </div>
        <div className="home-three">
          <div>
            <div id="education-id" className="current-skill-heading" style={{
              background: theme.cardBg,
              color: theme.textColor,
              transition: 'background 0.3s ease, color 0.3s ease'
            }}>
              <h4 style={{ color: theme.accent4 }} onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              }} title="Back to Top">Education</h4>
            </div>
            <div className="education-details" style={{
              background: theme.cardBg,
              color: theme.textColor,
              transition: 'background 0.3s ease, color 0.3s ease'
            }}>
              <EducationDetails />
            </div>
          </div>
        </div>
        <div className="home-three">
          <div>
            <div id="extended-skills-id" className="current-skill-heading" style={{
              background: theme.cardBg,
              color: theme.textColor,
              transition: 'background 0.3s ease, color 0.3s ease'
            }}><h4 style={{ color: theme.accent4 }} onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} title="Back to Top">Extended Tech Stack</h4></div>
            <div className="current-skill-details" style={{
              background: theme.cardBg,
              color: theme.textColor,
              transition: 'background 0.3s ease, color 0.3s ease'
            }}>
              <FullSkillDetails />
            </div>
          </div>
        </div>
        <div className="home-three">
          <div>
            <div id="dev-books-id" className="current-skill-heading" style={{
              background: theme.cardBg,
              color: theme.textColor,
              transition: 'background 0.3s ease, color 0.3s ease'
            }}><h4 style={{ color: theme.accent4 }} onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} title="Back to Top">Dev Books</h4></div>
            <div className="current-skill-details" style={{
              background: theme.cardBg,
              color: theme.textColor,
              transition: 'background 0.3s ease, color 0.3s ease'
            }}>
              <DevBooksDetails />
            </div>
          </div>
        </div>
        <div className="home-three">
          <div>
            <div id="dev-links-id" className="current-skill-heading" style={{
              background: theme.cardBg,
              color: theme.textColor,
              transition: 'background 0.3s ease, color 0.3s ease'
            }}><h4 style={{ color: theme.accent4 }} onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} title="Back to Top">Dev Links</h4></div>
            <DevLinkDetails />
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProgrammerProfile