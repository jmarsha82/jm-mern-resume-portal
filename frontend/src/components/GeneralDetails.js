import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';


const GeneralDetails = ({ general }) => {
  return (
    <div className="general-details">
      <h4>Current Role : Programmer at Boeing</h4>
      <p><PhoneAndroidIcon className='icon-text-alignment' /><strong>     (618)-978-1469</strong></p>
      <p><EmailIcon className='icon-text-alignment' /><strong>       jmarsha82@yahoo.com</strong></p>
      <p><strong>Last updated : </strong>{formatDistanceToNow(new Date("2025-09-19T16:09:38.349+00:00"), { addSuffix: true })}</p>
    </div>
  )
}

export default GeneralDetails