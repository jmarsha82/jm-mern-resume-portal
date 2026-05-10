import MenuIcon from '@mui/icons-material/Menu';
import {
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box
} from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import GetAppIcon from '@mui/icons-material/GetApp';
import { useTheme } from '../context/ThemeContext';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';

const ProgrammerNavbar = () => {
    const { theme } = useTheme();
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'), { noSsr: true });
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', to: '/' },
        { label: 'Education', to: '/programmer/#education-id' },
        { label: 'Extended Tech Stack', to: '/programmer/#extended-skills-id' },
        { label: 'Dev Books', to: '/programmer/#dev-books-id' },
        { label: 'Dev Links', to: '/programmer/#dev-links-id' }
    ];

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/img/developer/JustinMarshallResume.pdf';
        link.download = 'JustinMarshallResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (isMobile) {
        return (
            <header style={{ background: theme.accent4 }}>
                <div className="container navbar-mobile-container">
                    <div className="navbar-mobile-left">
                        <IconButton
                            aria-label="open programmer navigation menu"
                            onClick={() => setMenuOpen(true)}
                            className="navbar-mobile-menu-btn"
                        >
                            <MenuIcon style={{ color: theme.accent5 }} />
                        </IconButton>
                    </div>
                    <div className="navbar-mobile-center">
                        <Button
                            variant="contained"
                            startIcon={<GetAppIcon />}
                            className="navbar-download-resume-btn navbar-download-resume-btn-mobile"
                            size="small"
                            onClick={handleResumeDownload}
                        >
                            Resume
                        </Button>
                    </div>
                    <div className="navbar-mobile-right">
                        <span><Link to="https://www.linkedin.com/in/justin-marshall-3733065b" target="_blank"><LinkedInIcon style={{ color: theme.accent5 }} fontSize="large" /></Link></span>
                        <span><Link to="https://github.com/jmarsha82" target="_blank"><GitHubIcon style={{ color: theme.accent5 }} fontSize="large" /></Link></span>
                    </div>
                    <Drawer
                        anchor="left"
                        open={menuOpen}
                        onClose={() => setMenuOpen(false)}
                        PaperProps={{
                            sx: {
                                width: 280,
                                background: theme.cardBg,
                                color: theme.textColor
                            }
                        }}
                    >
                        <Box role="presentation" onClick={() => setMenuOpen(false)} onKeyDown={() => setMenuOpen(false)}>
                            <List>
                                {navItems.map((item) => (
                                    <ListItem key={item.label} disablePadding>
                                        <ListItemButton component={HashLink} to={item.to}>
                                            <ListItemText
                                                primary={item.label}
                                                primaryTypographyProps={{ style: { color: theme.textColor, fontWeight: 600 } }}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </div>
            </header>
        );
    }

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
                        onClick={handleResumeDownload}
                    >
                        Download Resume
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default ProgrammerNavbar;
