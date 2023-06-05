import { HashLink } from 'react-router-hash-link';
import { Button, Typography } from '@mui/material';

const ArtistNavbar = () => {
    return (
        <header>
            <div className="container">
            <span className="navbar-nav-site-buttons"><HashLink className="navbar-site-buttons" to='/'><Button variant="contained">Home</Button></HashLink></span>
            <Typography variant="h3" align="center">Artist</Typography>
                <div>
                    <span className="navbar-site-buttons"><Button variant="contained" href="https://www.instagram.com/marshajus/" target="_blank">Instagram</Button></span>
                </div>
            </div>
        </header>
    )
}

export default ArtistNavbar;