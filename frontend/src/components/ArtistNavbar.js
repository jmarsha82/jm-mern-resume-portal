import { HashLink } from 'react-router-hash-link';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTheme } from '../context/ThemeContext';


const ArtistNavbar = () => {
    const { theme } = useTheme();
    return (
        <header style={{ background: theme.accent4 }}>
            <div className="container">
                <span><HashLink to='/'><HomeIcon HomeIcon style={{ color: theme.accent5 }} fontSize="large" /></HashLink></span>
                <div>
                    <span><HashLink className="navbar-site-buttons" to='/artist/#portraits-id'><Button variant="text" style={{ color: theme.accent5 }} className='navbar-button-color'>Portraits</Button></HashLink></span>
                    <span><HashLink className="navbar-site-buttons" to='/artist/#flowers-id'><Button variant="text" style={{ color: theme.accent5 }} className='navbar-button-color'>Flowers</Button></HashLink></span>
                    <span><HashLink className="navbar-site-buttons" to='/artist/#landscapes-id'><Button variant="text" style={{ color: theme.accent5 }} className='navbar-button-color'>Landscapes/Still Life</Button></HashLink></span>
                    <span><HashLink className="navbar-site-buttons" to='/artist/#abstract-id'><Button variant="text" style={{ color: theme.accent5 }} className='navbar-button-color'>Abstract</Button></HashLink></span>
                </div>
                <div>
                    <span><Link to="https://www.instagram.com/marshajus/" target="_blank"><InstagramIcon HomeIcon style={{ color: theme.accent5 }} fontSize="large" /></Link></span>
                </div>
            </div>
        </header>
    )
}

export default ArtistNavbar;