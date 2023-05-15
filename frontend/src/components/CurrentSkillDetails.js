
const CurrentSkillDetails = ({ currentSkill }) => {
  return (
    <div className="general-details">
      <h4>{currentSkill.skillset}</h4>
      <p><strong>{currentSkill.freguency}</strong></p>
      <p><strong>{currentSkill.description}</strong></p>
    </div>
  )
}

export default CurrentSkillDetails