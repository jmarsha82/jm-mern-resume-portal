import { IconButton } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ style = {} }) => {
  const { isDarkTheme, toggleTheme, theme } = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      style={{
        position: 'absolute',
        top: 7,
        left: 20,
        zIndex: 10,
        background: theme.containerBg,
        backdropFilter: 'blur(10px)',
        border: theme.border,
        color: theme.textColor,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        ...style
      }}
    >
      {isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
