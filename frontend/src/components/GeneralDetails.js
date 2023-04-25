import { useGeneralsContext } from '../hooks/useGeneralsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const GeneralDetails = ({ general }) => {
  const { dispatch } = useGeneralsContext()

  return (
    <div className="general-details">
      <h4>{general.title}</h4>
      <p><strong>Load (kg): </strong>{general.load}</p>
      <p><strong>Number of reps: </strong>{general.reps}</p>
      <p>{formatDistanceToNow(new Date(general.createdAt), { addSuffix: true})}</p>
    </div>
  )
}

export default GeneralDetails