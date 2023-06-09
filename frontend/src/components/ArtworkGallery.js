import * as React from 'react';
import { Link } from 'react-router-dom';
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

const ArtworkGallery = ({ artwork }) => {

  return (
    <Item>
    <Card>
    <Link to={`/artist/${artwork._id}`}>
      {console.log("Artwork id : " + artwork._id)}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/${artwork.imagepath}`} 
        title={artwork.title}
      />
    </Link>
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {artwork.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">{artwork.size}</Typography>
      <Typography variant="body2" color="text.secondary">{artwork.media}</Typography>
      <Typography variant="body2" color="text.secondary">{artwork.price}</Typography>
    </CardContent>
  </Card>
  </Item>
  )
}

export default ArtworkGallery