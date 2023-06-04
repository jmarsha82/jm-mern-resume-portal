import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { HashLink } from 'react-router-hash-link'

const ProgrammerNavbar = () => {
    return (
        <header>
            <div className="container">
                <Link to ='/'>
                    <h1>Justin Marshall</h1>
                </Link>
                <div>
                    <span className="navbar-site-buttons"><Button variant="contained" href="https://www.linkedin.com/in/justin-marshall-3733065b" target="_blank">LinkedIN</Button></span>
                    <span className="navbar-site-buttons"><Button variant="contained" href="https://github.com/jmarsha82" target="_blank">Github</Button></span>
                </div>
            </div>
            <div className="lower-container">
                <span className="navbar-nav-site-buttons"><HashLink className="navbar-site-buttons" to='/programmer/#experience-id'><Button variant="outlined">Experience</Button></HashLink></span>
                <span className="navbar-nav-site-buttons"><HashLink className="navbar-site-buttons" to='/programmer/#education-id'><Button variant="outlined">Education</Button></HashLink></span>
                <span className="navbar-nav-site-buttons"><HashLink className="navbar-site-buttons" to='/programmer/#extended-skills-id'><Button variant="outlined">Extended Tech Stack</Button></HashLink></span>
                <span className="navbar-nav-site-buttons"><HashLink className="navbar-site-buttons" to='/programmer/#dev-books-id'><Button variant="outlined">Dev Books</Button></HashLink></span>
                <span className="navbar-nav-site-buttons"><HashLink className="navbar-site-buttons" to='/programmer/#dev-links-id'><Button variant="outlined">Dev Links</Button></HashLink></span>
            </div>
        </header>
    )
}

export default ProgrammerNavbar;