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

const DevBooksDetails = ({ devBook }) => {
  return (
    <Item>
    <Card>
    <CardMedia
      sx={{
        borderRadius: 3,
        backgroundSize: 200,
        margin: 5,
        width: 200,
        height: 250
      }}
      image={`${process.env.PUBLIC_URL}/img/developer/${devBook.imagepath}`} 
      title={devBook.title}
    />
    {console.log(`../img/developer/${devBook.imagepath}`)}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {devBook.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">{devBook.description}</Typography>
      <Typography variant="body2" color="text.secondary">{devBook.year}</Typography>
      <Typography variant="body2" color="text.secondary">{devBook.author}</Typography>
      <Typography variant="body2" color="text.secondary">ISBN : {devBook.isbn}</Typography>
    </CardContent>
  </Card>
  </Item>
  )
}

export default DevBooksDetails