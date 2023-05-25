import * as React from 'react';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';

const FullSkillDetails = ({ fullSkill }) => {
  return (
    <div className="current-skill-details">
        <Tooltip title={"Used " + fullSkill.frequency} placement="top">
          <Button variant="contained" href={fullSkill.languagelink} target="_blank">{fullSkill.skillset}</Button>
        </Tooltip>
      <div className="current-skill-details-desc">{fullSkill.description}</div>
    </div>
  )
}

export default FullSkillDetails
