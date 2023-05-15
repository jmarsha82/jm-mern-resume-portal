
const CurrentSkillDetails = ({ currentSkill }) => {
  return (
    <div className="current-skill-details">
      <h4>{currentSkill.skillset}</h4>
      <p>Used {currentSkill.frequency}</p>
      <p><strong>{currentSkill.description}</strong></p>
    </div>
  )
}

export default CurrentSkillDetails