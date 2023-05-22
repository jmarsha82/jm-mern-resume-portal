import * as React from 'react';

const WorkExperienceDetails = ({ workExperience }) => {
  return (
    <div className="current-skill-details">
      <h4>{workExperience.company}</h4>
      <div className="current-skill-details-desc">{workExperience.jobtitle}</div>
      <div className="current-skill-details-desc">{workExperience.timerange}</div>
      <div className="current-skill-details-desc">{workExperience.location}</div>
      <div className="current-skill-details-desc">{workExperience.commentone}</div>
      <div className="current-skill-details-desc">{workExperience.commenttwo}</div>
      <div className="current-skill-details-desc">{workExperience.commentthree}</div>
      <div className="current-skill-details-desc">{workExperience.commentfour}</div>
      <div className="current-skill-details-desc">{workExperience.commentfive}</div>
      <div className="current-skill-details-desc">{workExperience.commentsix}</div>
      <div className="current-skill-details-desc">{workExperience.commentseven}</div>
      <div className="current-skill-details-desc">{workExperience.commenteight}</div>
      <div className="current-skill-details-desc">{workExperience.commentnine}</div>
      <div className="current-skill-details-desc">{workExperience.commentten}</div>
    </div>
  )
}

export default WorkExperienceDetails
