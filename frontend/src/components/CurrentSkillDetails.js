import * as React from 'react';
import Button from '@mui/material/Button';




const CurrentSkillDetails = ({ currentSkill }) => {
  return (
    <div className="current-skill-details">
      <Button variant="contained">{currentSkill.skillset}</Button>
      <div className="current-skill-details-desc">{currentSkill.description}</div>
    </div>
  )
}

export default CurrentSkillDetails
