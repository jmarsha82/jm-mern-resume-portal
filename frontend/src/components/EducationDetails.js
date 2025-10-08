import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import { useTheme } from '../context/ThemeContext';

const EducationDetails = () => {
  const { theme } = useTheme();

  return (
    <List component="nav" aria-label="mailbox folders" style={{ 
      background: theme.cardBg, 
      color: theme.textColor,
      transition: 'background 0.3s ease, color 0.3s ease'
    }}>
      <Divider style={{ backgroundColor: theme.border }} />
      <ListItem button component={Link} to={"https://wustl.edu/"} target="_blank" style={{ color: theme.textColor }}>
        <ListItemText>
          <h4 style={{ color: theme.accent3 }}>{"Masters in Computer Engineering"}</h4>
          <title>{"St.Louis MO"}</title>
          <div className="education-title">{"Washington University of St. Louis"}</div>
        </ListItemText>
      </ListItem>
      <Divider style={{ backgroundColor: theme.border }} />
      <ListItem button component={Link} to={"https://www.siue.edu/"} target="_blank" style={{ color: theme.textColor }}>
        <ListItemText>
          <h4 style={{ color: theme.accent3 }}>{"Masters in Business Administration with a Specialization in Management Information Systems"}</h4>
          <title>{"Edwardsville IL"}</title>
          <div className="education-title">{"Southern Illinois University at Edwardsville"}</div>
        </ListItemText>
      </ListItem>
      <Divider style={{ backgroundColor: theme.border }} />
      <ListItem button component={Link} to={"https://www.siue.edu/"} target="_blank" style={{ color: theme.textColor }}>
        <ListItemText>
          <h4 style={{ color: theme.accent3 }}>{"Bachelor of Liberal Studies with an Emphasis in Art"}</h4>
          <title>{"Edwardsville IL"}</title>
          <div className="education-title">{"Southern Illinois University at Edwardsville"}</div>
        </ListItemText>
      </ListItem>
    </List>
  )
}

export default EducationDetails
