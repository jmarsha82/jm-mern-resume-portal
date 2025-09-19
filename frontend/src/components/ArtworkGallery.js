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
                image={`${process.env.PUBLIC_URL}/img/artist/pill_mouth.jpg`}
                title={"Pill Mouth"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Pill Mouth"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"36 X 36 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/keen_and_sheen.jpg`}
                  title={"Keen and Sheen"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Keen and Sheen"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"36 X 48 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/germanotta_doll.jpg`}
                  title={"Germanotta Doll"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Germanotta Doll"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"36 X 48 inchess"}</Typography>
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
                image={`${process.env.PUBLIC_URL}/img/artist/stevie.jpg`}
                title={"Stevie"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Stevie"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"54 X 72 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/jewel_lips.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"24 X 30 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Jewels on Canvas"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/audrey.jpg`}
                  title={"Audrey"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Audrey"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"48 X 72 inches"}</Typography>
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
                image={`${process.env.PUBLIC_URL}/img/artist/big_twiggy.jpg`}
                title={"Untitled"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Untitled"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"54 X 72 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/jewel_glasses.jpg`}
                  title={"Retrovision"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Retrovision"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"24 X 24 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Jewels on Canvas"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/fake_eyelashes.jpg`}
                  title={"Audrey"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Audrey"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"12 X 18 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Pen on Canvas"}</Typography>
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
                image={`${process.env.PUBLIC_URL}/img/artist/evelyn_clown.jpg`}
                title={"Evelyn Clown"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Evelyn Clown"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"30 X 36 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/flower4.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"16 X 20 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Pen on Canvas"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/rose_glasses.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"16 X 20 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil on Canvas"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"SOLD"}</Typography>
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
                image={`${process.env.PUBLIC_URL}/img/artist/aeris.jpg`}
                title={"Aeris"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Aeris"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"16 X 20 inches"}</Typography>
                <Typography variant="body2" color="text.secondary">{"Oil and Pen on Canvas"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/blue_brittany.jpg`}
                  title={"Blue Brittany"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Blue Brittany"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"36 X 48 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/crawford.jpg`}
                  title={"Crawford"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Crawford"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"12 X 16 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Pen on Canvas"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"SOLD"}</Typography>
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
                image={`${process.env.PUBLIC_URL}/img/artist/hindu_shocker.jpg`}
                title={"Hindu Shocker"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Hindu Shocker"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"24 X 36 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/layla.jpg`}
                  title={"Layla"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Layla"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"16 X 20 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Pen on Canvas"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/gold_glasses.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"12 X 16 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Jewel on Canvas"}</Typography>
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
                image={`${process.env.PUBLIC_URL}/img/artist/flower2.jpg`}
                title={"Untitled"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Untitled"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"12 X 16 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/pink_head.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"24 X 24 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/flower3.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"16 X 20 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Pen on Canvas"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"SOLD"}</Typography>
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
                image={`${process.env.PUBLIC_URL}/img/artist/bored_with_pen.jpg`}
                title={"Untitled"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Untitled"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"8 X 11 inches"}</Typography>
                <Typography variant="body2" color="text.secondary">{"Pen on Paper"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/knowles.jpg`}
                  title={"Knowles"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Knowles"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"20 X 30 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/eye_tattoo.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"12 X 16 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Pen on Canvas"}</Typography>
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
                image={`${process.env.PUBLIC_URL}/img/artist/for_alex.jpg`}
                title={"For Alex"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"For Alex"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"24 X 30 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/joe.jpg`}
                  title={"Brother"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Brother"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"16 X 20 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/laroux.jpg`}
                  title={"LaRoux"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"LaRoux"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"8 X 11 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Pen on paper"}</Typography>
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
                image={`${process.env.PUBLIC_URL}/img/artist/flower1.jpg`}
                title={"Untitled"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Untitled"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"16 X 20 inches"}</Typography>
                <Typography variant="body2" color="text.secondary">{"Oil and Pen on Canvas"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/highland_trucks.jpg`}
                  title={"Highland Trucks"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Highland Trucks"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"24 X 30 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/wheres_eric.jpg`}
                  title={"Where's Eric"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Where's Eric"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"16 X 20 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil on Canvas"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"SOLD"}</Typography>
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
                image={`${process.env.PUBLIC_URL}/img/artist/stephs_tree.jpg`}
                title={"Steph's Tree"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Steph's Tree"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"16 X 20 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/worker_unite.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"18 X 24 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/dianes_daughter.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"24 X 30 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil on Canvas"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"SOLD"}</Typography>
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
                image={`${process.env.PUBLIC_URL}/img/artist/lydia.jpg`}
                title={"Lydia"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Lydia"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"36 X 60 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/brittany_daniels.jpg`}
                  title={"Untitled"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Untitled"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"24 X 30 inches"}</Typography>
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
                  image={`${process.env.PUBLIC_URL}/img/artist/laekyn.jpg`}
                  title={"Laekyn"}
                />
                {/* </Link> */}
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {"Laekyn"}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">{"16 X 20 inches"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"Oil and Pen on Canvas"}</Typography>
                  <Typography variant="body2" color="text.secondary">{"SOLD"}</Typography>
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
                image={`${process.env.PUBLIC_URL}/img/artist/alice.jpg`}
                title={"Alice"}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Alice"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"Pen on paper"}</Typography>
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