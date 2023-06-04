import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const ArtistNavbar = () => {
    return (
        <header>
            <div className="container">
                <Link to ='/'>
                    <h1>Home</h1>
                </Link>
                <div>
                    <span className="navbar-site-buttons"><Button variant="contained" href="https://www.instagram.com/marshajus/" target="_blank">Instagram</Button></span>
                </div>
            </div>
        </header>
    )
}

export default ArtistNavbar;