import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";

const EducationDetails = () => {
  return (
    <List component="nav" aria-label="mailbox folders">
      <Divider />
      <ListItem button component={Link} to={"https://wustl.edu/"} target="_blank">
        <ListItemText>
          <h4>{"Masters in Computer Engineering"}</h4>
          <title>{"St.Louis MO"}</title>
          <div className="education-title">{"Washington University of St. Louis"}</div>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem button component={Link} to={"https://www.siue.edu/"} target="_blank">
        <ListItemText>
          <h4>{"Masters in Business Administration with a Specialization in Management Information Systems"}</h4>
          <title>{"Edwardsville IL"}</title>
          <div className="education-title">{"Southern Illinois University at Edwardsville"}</div>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem button component={Link} to={"https://www.siue.edu/"} target="_blank">
        <ListItemText>
          <h4>{"Bachelor of Liberal Studies with an Emphasis in Art"}</h4>
          <title>{"Edwardsville IL"}</title>
          <div className="education-title">{"Southern Illinois University at Edwardsville"}</div>
        </ListItemText>
      </ListItem>
    </List>
  )
}

export default EducationDetails
