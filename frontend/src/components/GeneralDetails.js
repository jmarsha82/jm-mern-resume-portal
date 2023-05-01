import { useGeneralsContext } from '../hooks/useGeneralsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const GeneralDetails = ({ general }) => {
  const { dispatch } = useGeneralsContext()

  const handleClick = async () => {
    const response = await fetch('/api/generals/' + general._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_GENERAL', payphone: json})
    }
  }

  return (
    <div className="general-details">
      <h4>{general.position}</h4>
      <p><strong>Phone (kg): </strong>{general.phone}</p>
      <p><strong>Number of email: </strong>{general.email}</p>
      <p>{formatDistanceToNow(new Date(general.createdAt), { addSuffix: true})}</p>
      <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default GeneralDetails