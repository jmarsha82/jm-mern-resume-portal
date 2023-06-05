import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));


const DevLinkDetails = ({ devLink }) => {
  return (
    <Item>
    <Card>
    <a href={devLink.link} target="_blank">
    <CardMedia
      sx={{
        backgroundSize: 200,
        margin: 5,
        width: 200,
        height: 60
      }}
      image={`${process.env.PUBLIC_URL}/img/${devLink.imagepath}`} 
      title={devLink.title}
    />
    </a>
    {console.log(`../img/${devLink.imagepath}`)}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {devLink.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">{devLink.description}</Typography>
    </CardContent>
  </Card>
  </Item>
  )
}

export default DevLinkDetails