import * as React from 'react';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';

const CurrentSkillDetails = ({ currentSkill }) => {
  return (
    <div>
    <div className="current-skill-details">
      {/* <span>
        <Tooltip title={"Used Daily"} placement="top">
          <Button variant="contained" href={"https://azure.microsoft.com/en-us/products/devops/"} target="_blank">{"Azure Dev Ops"}</Button>
        </Tooltip>
        </span>
      <div className="current-skill-details-desc">{"Used for Source Control, Work Tracking, Testing, CI/CD setup and monitoring, VM creation, etc."}</div> */}
      <span>
        <Tooltip title={"Used Daily"} placement="top">
          <Button variant="contained" href={"https://react.dev/"} target="_blank">{"ReactJS"}</Button>
        </Tooltip>
        </span>
      <div className="current-skill-details-desc">{"Assorted personal projects including uses in the MERN Stack and implementation using java Spring Framework"}</div>

      {/* <span>
        <Tooltip title={"Used " + currentSkill.frequency} placement="top">
          <Button variant="contained" href={currentSkill.languagelink} target="_blank">{currentSkill.skillset}</Button>
        </Tooltip>
        </span>
      <div className="current-skill-details-desc">{currentSkill.description}</div> */}
    </div>
        <div className="current-skill-details">
        {/* <span>
          <Tooltip title={"Used Daily"} placement="top">
            <Button variant="contained" href={"https://azure.microsoft.com/en-us/products/devops/"} target="_blank">{"Azure Dev Ops"}</Button>
          </Tooltip>
          </span>
        <div className="current-skill-details-desc">{"Used for Source Control, Work Tracking, Testing, CI/CD setup and monitoring, VM creation, etc."}</div> */}
        <span>
          <Tooltip title={"Used Daily"} placement="top">
            <Button variant="contained" href={"https://react.dev/"} target="_blank">{"ReactJS"}</Button>
          </Tooltip>
          </span>
        <div className="current-skill-details-desc">{"Assorted personal projects including uses in the MERN Stack and implementation using java Spring Framework"}</div>
  
        {/* <span>
          <Tooltip title={"Used " + currentSkill.frequency} placement="top">
            <Button variant="contained" href={currentSkill.languagelink} target="_blank">{currentSkill.skillset}</Button>
          </Tooltip>
          </span>
        <div className="current-skill-details-desc">{currentSkill.description}</div> */}
      </div>
      </div>
    
  )
}

export default CurrentSkillDetails
