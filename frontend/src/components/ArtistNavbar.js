import { HashLink } from 'react-router-hash-link';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';


const ArtistNavbar = () => {
    return (
        <header>
            <div className="container">
            <span><HashLink to='/'><HomeIcon sx={{ color: 'black' }} fontSize="large" /></HashLink></span>
                <div>
                    <span><Link to="https://www.instagram.com/marshajus/" target="_blank"><InstagramIcon sx={{ color: 'black' }} fontSize="large" /></Link></span>
                </div>
            </div>
        </header>
    )
}

export default ArtistNavbar;