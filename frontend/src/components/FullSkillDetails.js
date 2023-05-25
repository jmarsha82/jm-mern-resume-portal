import * as React from 'react';
import Button from '@mui/material/Button';

const FullSkillDetails = ({ fullSkill }) => {
  return (
    <div className="current-skill-details">
      <span><Button variant="contained" href={fullSkill.languagelink} target="_blank">{fullSkill.skillset}</Button></span>
      <div className="current-skill-details-desc">{fullSkill.description}</div>
    </div>
  )
}

export default FullSkillDetails
