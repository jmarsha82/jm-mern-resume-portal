import { Button } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from '@mui/icons-material/GetApp';
import { useTheme } from '../context/ThemeContext';

const ProgrammerNavbar = () => {
    const { theme } = useTheme();
    return (
        <header style={{ background: theme.accent4 }}>
            <div className="container">
            <span><HashLink to='/'><HomeIcon style={{ color: theme.accent5 }} fontSize="large" /></HashLink></span>
            <div>
                <span><HashLink className="navbar-site-buttons" to='/programmer/#education-id'><Button style={{ color: theme.accent5 }} variant="text" className='navbar-button-color'>Education</Button></HashLink></span>
                <span><HashLink className="navbar-site-buttons" to='/programmer/#extended-skills-id'><Button style={{ color: theme.accent5 }} variant="text" className='navbar-button-color'>Extended Tech Stack</Button></HashLink></span>
                <span><HashLink className="navbar-site-buttons" to='/programmer/#dev-books-id'><Button style={{ color: theme.accent5 }} variant="text" className='navbar-button-color'>Dev Books</Button></HashLink></span>
                <span><HashLink className="navbar-site-buttons" to='/programmer/#dev-links-id'><Button style={{ color: theme.accent5 }} variant="text" className='navbar-button-color'>Dev Links</Button></HashLink></span>
            </div>
                <div className="navbar-right-section">
                    <span><Link  to="https://www.linkedin.com/in/justin-marshall-3733065b" target="_blank"><LinkedInIcon style={{ color: theme.accent5 }} fontSize="large" /></Link></span>
                    <span><Link to="https://github.com/jmarsha82" target="_blank"><GitHubIcon style={{ color: theme.accent5 }} fontSize="large" /></Link></span>
                    <Button
                        variant="contained"
                        startIcon={<GetAppIcon />}
                        className="navbar-download-resume-btn"
                        size="small"
                        onClick={() => {
                            // Create a link to download the resume file
                            const link = document.createElement('a');
                            link.href = '/img/developer/JustinMarshallResume.pdf';
                            link.download = 'JustinMarshallResume.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        Download Resume
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default ProgrammerNavbar;