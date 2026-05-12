import { HashLink } from 'react-router-hash-link';
import HomeIcon from '@mui/icons-material/Home';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
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
import { useTheme as useMuiTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';


const ArtistNavbar = () => {
    const { theme } = useTheme();
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'), { noSsr: true });
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { label: 'Home', to: '/' },
        { label: 'Portraits', to: '/artist/#portraits-id' },
        { label: 'Flowers', to: '/artist/#flowers-id' },
        { label: 'Landscapes/Still Life', to: '/artist/#landscapes-id' },
        { label: 'Abstract', to: '/artist/#abstract-id' }
    ];

    if (isMobile) {
        return (
            <header style={{ background: theme.accent4 }}>
                <div className="container navbar-mobile-container">
                    <div className="navbar-mobile-left">
                        <IconButton
                            aria-label="open artist navigation menu"
                            onClick={() => setMenuOpen(true)}
                            className="navbar-mobile-menu-btn"
                        >
                            <MenuIcon style={{ color: theme.accent5 }} />
                        </IconButton>
                    </div>
                    <div className="navbar-mobile-right">
                        <span>
                            <Link to="https://www.instagram.com/marshajus/" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon style={{ color: theme.accent5 }} fontSize="large" />
                            </Link>
                        </span>
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
                    <span><HashLink className="navbar-site-buttons" to='/artist/#portraits-id'><Button variant="text" style={{ color: theme.accent5 }} className='navbar-button-color'>Portraits</Button></HashLink></span>
                    <span><HashLink className="navbar-site-buttons" to='/artist/#flowers-id'><Button variant="text" style={{ color: theme.accent5 }} className='navbar-button-color'>Flowers</Button></HashLink></span>
                    <span><HashLink className="navbar-site-buttons" to='/artist/#landscapes-id'><Button variant="text" style={{ color: theme.accent5 }} className='navbar-button-color'>Landscapes/Still Life</Button></HashLink></span>
                    <span><HashLink className="navbar-site-buttons" to='/artist/#abstract-id'><Button variant="text" style={{ color: theme.accent5 }} className='navbar-button-color'>Abstract</Button></HashLink></span>
                </div>
                <div>
                    <span><Link to="https://www.instagram.com/marshajus/" target="_blank" rel="noopener noreferrer"><InstagramIcon style={{ color: theme.accent5 }} fontSize="large" /></Link></span>
                </div>
            </div>
        </header>
    )
}

export default ArtistNavbar;
