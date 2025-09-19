import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import ImageModal from './ImageModal';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const ArtworkGallery = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (imageUrl, title, description) => {
    setSelectedImage({ imageUrl, title, description });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/beauty_with_butterfly_wings.jpg`}
                title={"Beauty with Butterfly Wings"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/beauty_with_butterfly_wings.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/diamond_rimmed_dahlia.jpg`}
                title={"Diamond Rimmed Dahlia"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/diamond_rimmed_dahlia.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/gaze_through_me.jpg`}
                title={"Gaze Through Me"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/gaze_through_me.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/overglammed.jpg`}
                title={"Overglammed"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/overglammed.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/twiggy_glasses.jpg`}
                title={"Twiggy Glasses"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/twiggy_glasses.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/anthro_lilac.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/anthro_lilac.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/king_of_new_york.jpg`}
                title={"King of New York"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/king_of_new_york.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/finishing_touch.jpg`}
                title={"Finishing Touch"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/finishing_touch.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/karl.jpg`}
                title={"Karl at McDonalds"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/karl.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/ready_set_glam.jpg`}
                title={"Ready Set Glam"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/ready_set_glam.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/nose_ring.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/nose_ring.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/longshore.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/longshore.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/pill_mouth.jpg`}
                title={"Pill Mouth"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/pill_mouth.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/keen_and_sheen.jpg`}
                title={"Keen and Sheen"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/keen_and_sheen.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/germanotta_doll.jpg`}
                title={"Germanotta Doll"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/germanotta_doll.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/stevie.jpg`}
                title={"Stevie"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/stevie.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/jewel_lips.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/jewel_lips.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/audrey.jpg`}
                title={"Audrey"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/audrey.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/big_twiggy.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/big_twiggy.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/jewel_glasses.jpg`}
                title={"Retrovision"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/jewel_glasses.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/fake_eyelashes.jpg`}
                title={"Audrey"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/fake_eyelashes.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/evelyn_clown.jpg`}
                title={"Evelyn Clown"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/evelyn_clown.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/flower4.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/flower4.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/rose_glasses.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/rose_glasses.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/aeris.jpg`}
                title={"Aeris"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/aeris.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/blue_brittany.jpg`}
                title={"Blue Brittany"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/blue_brittany.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/crawford.jpg`}
                title={"Crawford"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/crawford.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/hindu_shocker.jpg`}
                title={"Hindu Shocker"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/hindu_shocker.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/layla.jpg`}
                title={"Layla"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/layla.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/gold_glasses.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/gold_glasses.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/flower2.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/flower2.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/pink_head.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/pink_head.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/flower3.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/flower3.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/bored_with_pen.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/bored_with_pen.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/knowles.jpg`}
                title={"Knowles"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/knowles.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/eye_tattoo.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/eye_tattoo.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/for_alex.jpg`}
                title={"For Alex"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/for_alex.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/joe.jpg`}
                title={"Brother"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/joe.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/laroux.jpg`}
                title={"LaRoux"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/laroux.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/flower1.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/flower1.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/highland_trucks.jpg`}
                title={"Highland Trucks"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/highland_trucks.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/wheres_eric.jpg`}
                title={"Where's Eric"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/wheres_eric.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/stephs_tree.jpg`}
                title={"Steph's Tree"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/stephs_tree.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/worker_unite.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/worker_unite.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/dianes_daughter.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/dianes_daughter.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/lydia.jpg`}
                title={"Lydia"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/lydia.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/brittany_daniels.jpg`}
                title={"Untitled"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/brittany_daniels.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/laekyn.jpg`}
                title={"Laekyn"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/laekyn.jpg`
                )}
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
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/alice.jpg`}
                title={"Alice"}
                onClick={() => handleImageClick(
                  `${process.env.PUBLIC_URL}/img/artist/alice.jpg`
                )}
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

      <ImageModal
        open={modalOpen}
        onClose={handleCloseModal}
        imageUrl={selectedImage?.imageUrl}
        title={selectedImage?.title}
        description={selectedImage?.description}
      />
    </div>
  )
}

export default ArtworkGallery