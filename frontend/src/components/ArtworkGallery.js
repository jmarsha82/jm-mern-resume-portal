import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

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
      <Grid container spacing={2} wrap="nowrap">
        <Grid size={4} item xs="auto">
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
        </Grid>
        <Grid size={4} item xs="auto">
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
        </Grid>
        <Grid size={4} item xs="auto">
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
                image={`${process.env.PUBLIC_URL}/img/artist/gaze_through_me.jpg`}
                title={"Gaze Through Me"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Gaze Through Me"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"36 X 48 inches"}</Typography>
                <Typography variant="body2" color="text.secondary">{"Pen on Canvas"}</Typography>
                <Typography variant="body2" color="text.secondary">{"NFS"}</Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2} wrap="nowrap">
        <Grid size={4} item xs="auto">
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
                image={`${process.env.PUBLIC_URL}/img/artist/overglammed.jpg`}
                title={"Overglammed"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Overglammed"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"36 X 36 inches"}</Typography>
                <Typography variant="body2" color="text.secondary">{"Oil, Jewel, and Beads on Canvas"}</Typography>
                <Typography variant="body2" color="text.secondary">{"SOLD"}</Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
          <Grid size={4} item xs="auto">
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
                  image={`${process.env.PUBLIC_URL}/img/artist/twiggy_glasses.jpg`}
                  title={"Twiggy Glasses"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Twiggy Glasses"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"16 X 20 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil on Canvas"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"NFS"}</Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid size={4} item xs="auto">
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
                  image={`${process.env.PUBLIC_URL}/img/artist/anthro_lilac.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"24 X 36 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Jewels on Canvas"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"NFS"}</Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
      </Grid>
      <br />
      <Grid container spacing={2} wrap="nowrap">
        <Grid size={4} item xs="auto">
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
                image={`${process.env.PUBLIC_URL}/img/artist/king_of_new_york.jpg`}
                title={"King of New York"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"King of New York"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"16 X 20 inches"}</Typography>
                <Typography variant="body2" color="text.secondary">{"Oil, Jewel, and Beads on Canvas"}</Typography>
                <Typography variant="body2" color="text.secondary">{"NFS"}</Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
          <Grid size={4} item xs="auto">
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
                  image={`${process.env.PUBLIC_URL}/img/artist/finishing_touch.jpg`}
                  title={"Finishing Touch"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Finishing Touch"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"18 X 20 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Pen on Canvas"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"NFS"}</Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid size={4} item xs="auto">
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
                  image={`${process.env.PUBLIC_URL}/img/artist/karl.jpg`}
                  title={"Karl at McDonalds"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Karl at McDonalds"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"24 X 30 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil on Canvas"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"NFS"}</Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
      </Grid>
      <br />
      <Grid container spacing={2} wrap="nowrap">
        <Grid size={4} item xs="auto">
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
                image={`${process.env.PUBLIC_URL}/img/artist/ready_set_glam.jpg`}
                title={"Ready Set Glam"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Ready Set Glam"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"36 X 48 inches"}</Typography>
                <Typography variant="body2" color="text.secondary">{"Oil and Beads on Canvas"}</Typography>
                <Typography variant="body2" color="text.secondary">{"SOLD"}</Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
          <Grid size={4} item xs="auto">
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
                  image={`${process.env.PUBLIC_URL}/img/artist/nose_ring.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"18 X 20 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Pen on Canvas"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"NFS"}</Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid size={4} item xs="auto">
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
                  image={`${process.env.PUBLIC_URL}/img/artist/longshore.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"48 X 48 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Jewels on Canvas"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"NFS"}</Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>
      </Grid>
    </div>
  )
}

export default ArtworkGallery