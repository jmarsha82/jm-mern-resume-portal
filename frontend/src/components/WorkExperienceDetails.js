import * as React from 'react';

const WorkExperienceDetails = ({ workExperience }) => {
  return (
    <div className="current-skill-details">
      <h4>{workExperience.company}</h4>
      <div className="current-skill-details-desc">{workExperience.jobtitle}</div><br />
      <div className="current-skill-details-desc">{workExperience.timerange}</div><br />
      <div className="current-skill-details-desc">{workExperience.location}</div>
      <ul className='work-experience-comment-list'>
        <li><strong>{workExperience.commentone}</strong></li>
        <li><strong>{workExperience.commenttwo}</strong></li>
        <li><strong>{workExperience.commentthree}</strong></li>
        <li><strong>{workExperience.commentfour}</strong></li>
        <li><strong>{workExperience.commentfive}</strong></li>
        <li><strong>{workExperience.commentsix}</strong></li>
        <li><strong>{workExperience.commentseven}</strong></li>
        <li><strong>{workExperience.commenteight}</strong></li>
        <li><strong>{workExperience.commentnine}</strong></li>
        <li><strong>{workExperience.commentten}</strong></li>
      </ul>
    </div>
  )
}

export default WorkExperienceDetails
