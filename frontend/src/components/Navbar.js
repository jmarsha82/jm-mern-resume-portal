import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to ='/'>
                    <h1>Justin Marshall</h1>
                </Link>
                <div>
                    <span className="navbar-site-buttons"><Button variant="contained" href="https://www.linkedin.com/in/justin-marshall-3733065b" target="_blank">LinkedIN</Button></span>
                    <span className="navbar-site-buttons"><Button variant="contained" href="https://www.instagram.com/marshajus/" target="_blank">Instagram</Button></span>
                    <span className="navbar-site-buttons"><Button variant="contained" href="https://github.com/jmarsha82" target="_blank">Github</Button></span>
                </div>
            </div>
        </header>
    )
}

export default Navbar;