import * as React from 'react';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';
import { useTheme } from '../context/ThemeContext';

const CurrentSkillDetails = () => {
  const { theme } = useTheme();

  return (
    <div>
    <div className="current-skill-details" style={{ 
      background: theme.cardBg, 
      color: theme.textColor,
      transition: 'background 0.3s ease, color 0.3s ease'
    }}>
      <span>
        <Tooltip title={"Used Daily"} placement="top">
          <Button style={{ background: theme.accent4, color: theme.accent5 }} variant="contained" href={"https://react.dev/"} target="_blank">{"ReactJS"}</Button>
        </Tooltip>
        </span>
      <div className="current-skill-details-desc">{"Assorted personal projects including uses in the MERN Stack and implementation using java Spring Framework"}</div>
    </div>
    <div className="current-skill-details" style={{ 
      background: theme.cardBg, 
      color: theme.textColor,
      transition: 'background 0.3s ease, color 0.3s ease'
    }}>
        <span>
          <Tooltip title={"Used Daily"} placement="top">
            <Button style={{ background: theme.accent4, color: theme.accent5 }} variant="contained" href={"https://www.python.org/"} target="_blank">{"Python"}</Button>
          </Tooltip>
          </span>
        <div className="current-skill-details-desc">{"Machine learning projects and neural network research"}</div>
    </div>
    <div className="current-skill-details" style={{ 
      background: theme.cardBg, 
      color: theme.textColor,
      transition: 'background 0.3s ease, color 0.3s ease'
    }}>
        <span>
          <Tooltip title={"Used Daily"} placement="top">
            <Button style={{ background: theme.accent4, color: theme.accent5 }} variant="contained" href={"https://isocpp.org/std/the-standard"} target="_blank">{"C++"}</Button>
          </Tooltip>
          </span>
        <div className="current-skill-details-desc">{"Executable and Webassembly projects using a SimConnect API and Flight Simulation Software"}</div>
    </div>
    <div className="current-skill-details" style={{ 
      background: theme.cardBg, 
      color: theme.textColor,
      transition: 'background 0.3s ease, color 0.3s ease'
    }}>
        <span>
          <Tooltip title={"Used Daily"} placement="top">
            <Button style={{ background: theme.accent4, color: theme.accent5 }} variant="contained" href={"https://jestjs.io/"} target="_blank">{"Jest"}</Button>
          </Tooltip>
          </span>
        <div className="current-skill-details-desc">{"Used to test javascript code in both work and personal projects"}</div>
    </div>
    </div>
    
  )
}

export default CurrentSkillDetails
