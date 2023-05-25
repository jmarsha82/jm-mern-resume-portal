import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";

const EducationDetails = ({ education }) => {
  return (
    <List component="nav" aria-label="mailbox folders">
      <Divider />
      <ListItem button component={Link} to={education.collegelink} target="_blank">
        <ListItemText>
          <h4>{education.college}</h4>
          <title>{education.location}</title>
          <div className="education-title">{education.degree}</div>
        </ListItemText>
      </ListItem>
      <Divider />
    </List>
  )
}

export default EducationDetails
