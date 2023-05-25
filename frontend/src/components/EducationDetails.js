import * as React from 'react';

const EducationDetails = ({ education }) => {
  return (
    <div className="education-skill-details">
      <h4>{education.college}</h4>
      <title>{education.location}</title>
      <div className="education-title">{education.degree}</div>
    </div>
  )
}

export default EducationDetails
