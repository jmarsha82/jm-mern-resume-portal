import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '../context/ThemeContext';


const GeneralDetails = ({ general }) => {
  const { theme } = useTheme();

  return (
    <div className="general-details" style={{ 
      background: theme.cardBg, 
      color: theme.textColor,
      transition: 'background 0.3s ease, color 0.3s ease'
    }}>
      <h4 style={{ color: theme.accent1 }}>Current Role : Programmer at Boeing</h4>
      <div><PhoneAndroidIcon className='icon-text-alignment' />&nbsp;(618)-978-1469</div>
      <div><EmailIcon className='icon-text-alignment' />   jmarsha82@yahoo.com</div>
      <div><strong>Last updated : </strong>{formatDistanceToNow(new Date("2025-09-19T16:09:38.349+00:00"), { addSuffix: true })}</div>
    </div>
  )
}

export default GeneralDetails