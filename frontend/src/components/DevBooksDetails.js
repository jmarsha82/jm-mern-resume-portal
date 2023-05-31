import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const DevBooksDetails = ({ devBook }) => {
  return (
    // <div className="devbooks-details">
    //   <h4>{devBook.title}</h4>
    //   <img src={bookImage} width="100" height="100"/>
    //   {console.log(bookImage)}
    // </div>
    <Card>
    <CardMedia
      sx={{ height: 140 }}
      src={""}
      title={devBook.title}
    />
    {console.log(`../img/${devBook.imagepath}`)}
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {devBook.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {devBook.description}
      </Typography>
      <div>{devBook.year}</div>
      <div>{devBook.author}</div>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  )
}

export default DevBooksDetails