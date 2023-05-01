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
      dispatch({type: 'DELETE_GENERAL', payload: json})
    }
  }

  return (
    <div className="general-details">
      <h4>{general.title}</h4>
      <p><strong>Load (kg): </strong>{general.load}</p>
      <p><strong>Number of reps: </strong>{general.reps}</p>
      <p>{formatDistanceToNow(new Date(general.createdAt), { addSuffix: true})}</p>
      <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default GeneralDetails