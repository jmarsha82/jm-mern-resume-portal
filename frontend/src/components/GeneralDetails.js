import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';


const GeneralDetails = ({ general }) => {
  return (
    <div className="general-details">
      <h4>{general.position}</h4>
      <p><PhoneAndroidIcon className='icon-text-alignment'/><strong>     {general.phone}</strong></p>
      <p><EmailIcon className='icon-text-alignment'/><strong>       {general.email}</strong></p>
      <p><strong>Last updated : </strong>{formatDistanceToNow(new Date(general.createdAt), { addSuffix: true})}</p>
    </div>
  )
}

export default GeneralDetails