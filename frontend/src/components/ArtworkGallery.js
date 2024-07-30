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

const ArtworkGallery = () => {

  return (
    <div>
    <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/beauty_with_butterfly_wings.jpg`} 
        title={"Beauty with Butterfly Wings"}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {"Beauty with Butterfly Wings"}
      </Typography>
      <Typography variant="body2" color="text.secondary">{"36 X 48 inches"}</Typography>
      <Typography variant="body2" color="text.secondary">{"Oil on Canvas"}</Typography>
      <Typography variant="body2" color="text.secondary">{"SOLD"}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/diamond_rimmed_dahlia.jpg`} 
        title={"Diamond Rimmed Dahlia"}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {"Diamond Rimmed Dahlia"}
      </Typography>
      <Typography variant="body2" color="text.secondary">{"24 X 36 inches"}</Typography>
      <Typography variant="body2" color="text.secondary">{"Oil, Jewel, and Beads on Canvas"}</Typography>
      <Typography variant="body2" color="text.secondary">{"NFS"}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  <Item>
    <Card>
    {/* <Link to={`/artist/1`}> */}
      <CardMedia
        sx={{
          backgroundSize: 200,
          margin: 5,
          width: 200,
          height: 250
        }}
        image={`${process.env.PUBLIC_URL}/img/artist/`} 
        title={""}
      />
    {/* </Link> */}
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {""}
      </Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
      <Typography variant="body2" color="text.secondary">{""}</Typography>
    </CardContent>
  </Card>
  </Item>
  </div>
  )
}

export default ArtworkGallery