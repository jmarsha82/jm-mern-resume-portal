import { useGeneralsContext } from '../hooks/useGeneralsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';


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
      <p><PhoneAndroidIcon className='icon-text-alignment'/><strong>     {general.phone}</strong></p>
      <p><EmailIcon className='icon-text-alignment'/><strong>       {general.email}</strong></p>
      <p><strong>Last updated : </strong>{formatDistanceToNow(new Date(general.createdAt), { addSuffix: true})}</p>
      <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default GeneralDetails