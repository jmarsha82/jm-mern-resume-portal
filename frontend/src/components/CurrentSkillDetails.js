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
          <Button style={{ background: theme.accent4, color: theme.accent5 }} variant="contained" href={"https://github.com/jmarsha82/jm-mern-resume-portal"} target="_blank" rel="noopener noreferrer">{"ReactJS"}</Button>
        </Tooltip>
        </span>
      <div className="current-skill-details-desc">{"Assorted personal projects including uses in website and implementation using java Spring Framework"}</div>
    </div>
    <div className="current-skill-details" style={{ 
      background: theme.cardBg, 
      color: theme.textColor,
      transition: 'background 0.3s ease, color 0.3s ease'
    }}>
        <span>
          <Tooltip title={"Used Daily"} placement="top">
            <Button style={{ background: theme.accent4, color: theme.accent5 }} variant="contained" href={"https://github.com/jmarsha82/cse-511a-pacman-ai"} target="_blank" rel="noopener noreferrer">{"Python"}</Button>
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
            <Button style={{ background: theme.accent4, color: theme.accent5 }} variant="contained" href={"https://github.com/jmarsha82/jm-gui-cplusplus"} target="_blank" rel="noopener noreferrer">{"C++"}</Button>
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
            <Button style={{ background: theme.accent4, color: theme.accent5 }} variant="contained" href={"https://github.com/jmarsha82/jm-mern-resume-portal/tree/master/frontend/src/test"} target="_blank" rel="noopener noreferrer">{"Jest"}</Button>
          </Tooltip>
          </span>
        <div className="current-skill-details-desc">{"Used to test javascript code in both work and personal projects"}</div>
    </div>
    <div className="current-skill-details" style={{ 
      background: theme.cardBg, 
      color: theme.textColor,
      transition: 'background 0.3s ease, color 0.3s ease'
    }}>
      <span>
        <Tooltip title={"Used Daily"} placement="top">
          <Button style={{ background: theme.accent4, color: theme.accent5 }} variant="contained" href={"https://openai.com/codex/"} target="_blank" rel="noopener noreferrer">{"Codex"}</Button>
        </Tooltip>
      </span>
      <div className="current-skill-details-desc">{"Go to CLI for coding assitance for both work and personal projects.  Use of hooks and skills daily"}</div>
    </div>
    </div>
    
  )
}

export default CurrentSkillDetails
