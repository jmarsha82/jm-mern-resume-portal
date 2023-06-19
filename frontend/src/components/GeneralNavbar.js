import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';


const GeneralNavbar = () => {
    return (
        <header>
            <div className="container">
                <div>
                    <span><Link href="https://www.instagram.com/marshajus/" target="_blank"><InstagramIcon sx={{ color: 'black' }} fontSize="large" /></Link></span>
                    <span><Link href="https://www.linkedin.com/in/justin-marshall-3733065b" target="_blank"><LinkedInIcon sx={{ color: 'black' }} fontSize="large" /></Link></span>
                    <span><Link href="https://github.com/jmarsha82" target="_blank"><GitHubIcon sx={{ color: 'black' }} fontSize="large" /></Link></span>
                </div>
            </div>
        </header>
    )
}

export default GeneralNavbar;