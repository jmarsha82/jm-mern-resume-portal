import { Button } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProgrammerNavbar = () => {
    return (
        <header>
            <div className="container">
            <span><HashLink to='/'><HomeIcon sx={{ color: 'black' }} fontSize="large" /></HashLink></span>
            <div>
                <span><HashLink className="navbar-site-buttons" to='/programmer/#education-id'><Button variant="text" className='navbar-button-color'>Education</Button></HashLink></span>
                <span><HashLink className="navbar-site-buttons" to='/programmer/#extended-skills-id'><Button variant="text" className='navbar-button-color'>Extended Tech Stack</Button></HashLink></span>
                <span><HashLink className="navbar-site-buttons" to='/programmer/#dev-books-id'><Button variant="text" className='navbar-button-color'>Dev Books</Button></HashLink></span>
                <span><HashLink className="navbar-site-buttons" to='/programmer/#dev-links-id'><Button variant="text" className='navbar-button-color'>Dev Links</Button></HashLink></span>
            </div>
                <div>
                    <span><Link  to="https://www.linkedin.com/in/justin-marshall-3733065b" target="_blank"><LinkedInIcon sx={{ color: 'black' }} fontSize="large" /></Link></span>
                    <span><Link to="https://github.com/jmarsha82" target="_blank"><GitHubIcon sx={{ color: 'black' }} fontSize="large" /></Link></span>
                </div>
            </div>
        </header>
    )
}

export default ProgrammerNavbar;