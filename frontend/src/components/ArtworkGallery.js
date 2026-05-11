import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, useMediaQuery } from '@mui/material';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import ImageModal from './ImageModal';
import { useTheme } from '../context/ThemeContext';

const ArtworkGallery = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const { theme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const galleryRowProps = isMobile
    ? {
        wrap: 'nowrap',
        sx: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
          width: '100%',
          maxWidth: '100%'
        }
      }
    : {
        wrap: 'nowrap',
        sx: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'stretch',
          width: '100%',
          maxWidth: '100%'
        }
      };
  const galleryItemProps = isMobile
    ? {
        item: true,
        sx: {
          width: '100%',
          maxWidth: '100%',
          flexBasis: '100%'
        }
      }
    : {
        item: true,
        sx: {
          width: '100%',
          maxWidth: '100%',
          flexBasis: 0,
          flexGrow: 1,
          flexShrink: 1
        }
      };

  const handleImageClick = (event, imageUrl) => {
    const card = event.currentTarget.closest('.MuiCard-root');
    const typographyNodes = card?.querySelectorAll('.MuiCardContent-root .MuiTypography-root') ?? [];
    const textValues = Array.from(typographyNodes)
      .map((node) => node.textContent?.trim())
      .filter(Boolean);
    const [title, ...details] = textValues;

    setSelectedImage({
      imageUrl,
      title: title || event.currentTarget.getAttribute('title') || '',
      details
    });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  // Styled Item component that responds to theme
  const StyledItem = styled(Paper)(({ theme: muiTheme }) => ({
    backgroundColor: theme.cardBg,
    padding: muiTheme.spacing(2),
    textAlign: 'left',
    color: theme.textColor,
    transition: 'background-color 0.3s ease, color 0.3s ease',
  }));

  // Styled Card component that responds to theme
  const StyledCard = styled(Card)(() => ({
    backgroundColor: theme.cardBg,
    color: theme.textColor,
    transition: 'background-color 0.3s ease, color 0.3s ease',
  }));

  return (
    <div className="artwork-gallery" style={{
      background: theme.background,
      transition: 'background 0.3s ease',
      padding: '20px 0',
      maxWidth: '100%',
      overflowX: 'hidden'
    }}>
      <div id="portraits-id" className="artwork-heading" style={{
        background: theme.cardBg,
        color: theme.textColor,
        transition: 'background 0.3s ease, color 0.3s ease'
      }}><h4 style={{ color: theme.accent4 }} onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }} title="Back to Top">Portraits</h4></div>
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/beauty_with_butterfly_wings.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Beauty with Butterfly Wings"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"36 X 48 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/diamond_rimmed_dahlia.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Diamond Rimmed Dahlia"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 36 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil, Jewel, and Beads on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/gaze_through_me.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Gaze Through Me"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"36 X 48 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/overglammed.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Overglammed"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"36 X 36 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil, Jewel, and Beads on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/twiggy_glasses.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Twiggy Glasses"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/anthro_lilac.JPG`}
                title={"Untitled 1"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/anthro_lilac.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 1"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 36 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Jewels on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/king_of_new_york.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"King of New York"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil, Jewel, and Beads on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/finishing_touch.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Finishing Touch"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"18 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/karl.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Karl at McDonalds"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 30 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/ready_set_glam.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Ready Set Glam"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"36 X 48 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Beads on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                title={"Untitled 2"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/nose_ring.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 2"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"18 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                title={"Untitled 3"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/longshore.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 3"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"48 X 48 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Jewels on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/pill_mouth.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Pill Mouth"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"36 X 36 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/keen_and_sheen.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Keen and Sheen"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"36 X 48 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/germanotta_doll.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Germanotta Doll"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"36 X 48 inchess"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/stevie.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Stevie"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"54 X 72 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                title={"Untitled 4"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/jewel_lips.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 4"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 30 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Jewels on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/audrey.JPG`}
                title={"Audrey"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/audrey.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Audrey"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"48 X 72 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/big_twiggy.JPG`}
                title={"Untitled 5"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/big_twiggy.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 5"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"54 X 72 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/jewel_glasses.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Retrovision"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 24 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Jewels on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                title={"Eyelashes"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/fake_eyelashes.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Eyelashes"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"12 X 18 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/evelyn_clown.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Evelyn Clown"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"30 X 36 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                title={"Untitled 7"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/rose_glasses.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 7"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/blue_brittany.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Blue Brittany"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"36 X 48 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/hindu_shocker.JPG`}
                title={"Hindu Shocker"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/hindu_shocker.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Hindu Shocker"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 36 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                title={"Untitled 8"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/gold_glasses.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 8"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"12 X 16 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Jewel on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                title={"Untitled 10"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/pink_head.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 10"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 24 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                title={"Untitled 12"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/bored_with_pen.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 12"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"8 X 11 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Pen on Paper"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                title={"Untitled 13"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/eye_tattoo.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 13"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"12 X 16 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/for_alex.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"For Alex"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 30 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/joe.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Brother"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/laroux.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"LaRoux"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"8 X 11 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Pen on paper"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/wheres_eric.JPG`}
                title={"Where's Eric"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/wheres_eric.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Where's Eric"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                title={"Untitled 15"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/worker_unite.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 15"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"18 X 24 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                title={"Untitled 16"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/dianes_daughter.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 16"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 30 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/alice.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Alice"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"8 X 11 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Pen on paper"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/cara_dots.jpg`}
                title={"Untitled 18"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/cara_dots.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 18"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"48 X 48 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on paper"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/shadow_girl.jpg`}
                title={"Untitled 19"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/shadow_girl.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 19"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"12 X 16 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/cara_dots_two.jpg`}
                title={"Cara Primer"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/cara_dots_two.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Cara Primer"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"30 X 40 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/imp_bedpost.jpg`}
                title={"Spring Rises"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/imp_bedpost.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Spring Rises"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 30 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/heart_glasses.jpg`}
                title={"Heart Vision"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/heart_glasses.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Heart Vision"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/colby_mirror.jpg`}
                title={"Seeing Through Colby"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/colby_mirror.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Seeing Through Colby"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 36 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/wife.jpg`}
                title={"Untitled 20"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/wife.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 20"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 30 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/smokey_eyes.jpg`}
                title={"Smokey Eyes"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/smokey_eyes.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Smokey Eyes"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/gaga_two.jpg`}
                title={"Untitled 27"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/gaga_two.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 27"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 36 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/man_lips.jpg`}
                title={"His Majesty the Queen"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/man_lips.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"His Majesty the Queen"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"36 X 48 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Jewels on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/jewel_nails.jpg`}
                title={"Pretty Posh"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/jewel_nails.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Pretty Posh"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 24 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Jewels on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/bill.jpg`}
                title={"Untitled 21"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/bill.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 21"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 36 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/blue_eye.jpg`}
                title={"Lana"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/blue_eye.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Lana"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"30 X 40 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/twisted_girl.jpg`}
                title={"Doomed"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/twisted_girl.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Doomed"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 24 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/gaga_one.jpg`}
                title={"Untitled 22"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/gaga_one.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 22"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"22 X 28 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/imp_garden.jpg`}
                title={"Untitled 23"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/imp_garden.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 23"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/imp_kite.jpg`}
                title={"Untitled 24"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/imp_kite.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 24"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/brittany_one.jpg`}
                title={"Brittany in Light"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/brittany_one.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Brittany in Light"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/yunis.jpg`}
                title={"Yunis"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/yunis.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Yunis"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"48 X 78 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/brittany_two.jpg`}
                title={"Hidden Brittany"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/brittany_two.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Hidden Brittany"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/nude_one.jpg`}
                title={"For Tourian"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/nude_one.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"For Tourian"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"36 X 48 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Donated"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/brittany_daniels.JPG`}
                title={"Untitled 17"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/brittany_daniels.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 17"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 30 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/seether.jpg`}
                title={"Seether"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/seether.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Seether"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"36 X 60 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/candlelight_portrait.jpg`}
                title={"Candlelight Portrait"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/candlelight_portrait.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Candlelight Portrait"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"22 X 28 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/mark.jpg`}
                title={"Mark"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/mark.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Mark"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"12 X 18 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/lindsey.jpg`}
                title={"Lindsey"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/lindsey.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Lindsey"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"12 X 18 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <div id="flowers-id" className="artwork-heading" style={{
        background: theme.cardBg,
        color: theme.textColor,
        transition: 'background 0.3s ease, color 0.3s ease'
      }}><h4 style={{ color: theme.accent4 }} onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }} title="Back to Top">Flowers</h4></div>
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/flower4.JPG`}
                title={"Untitled 6"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/flower4.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 6"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/aeris.JPG`}
                title={"Aeris"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/aeris.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Aeris"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/crawford.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Crawford"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"12 X 16 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/layla.JPG`}
                title={"Layla"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/layla.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Layla"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/flower2.JPG`}
                title={"Untitled 9"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/flower2.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 9"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"12 X 16 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/flower3.JPG`}
                title={"Untitled 11"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/flower3.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 11"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/knowles.JPG`}
                title={"Knowles"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/knowles.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Knowles"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"20 X 30 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
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
                title={"Untitled 14"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/flower1.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 14"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/lydia.JPG`}
                title={"Lydia"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/lydia.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Lydia"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"36 X 60 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/laekyn.JPG`}
                title={"Laekyn"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/laekyn.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Laekyn"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/yingers.jpg`}
                title={"Yingers"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/yingers.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Yingers"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/kowalik.jpg`}
                title={"Kowalik"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/kowalik.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Kowalik"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/hadia.jpg`}
                title={"Hadia"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/hadia.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Hadia"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/gidget.jpg`}
                title={"Gidget"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/gidget.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Gidget"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"11 X 14 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/jewel.jpg`}
                title={"Untitled 25"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/jewel.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 25"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"11 X 14 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/birkner.jpg`}
                title={"Birkner"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/birkner.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Birkner"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"22 X 28 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/darlington.jpg`}
                title={"Darlington"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/darlington.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Darlington"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil and Pen on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <div id="landscapes-id" className="artwork-heading" style={{
        background: theme.cardBg,
        color: theme.textColor,
        transition: 'background 0.3s ease, color 0.3s ease'
      }}><h4 style={{ color: theme.accent4 }} onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }} title="Back to Top">Landscapes/Still Life</h4></div>
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/highland_trucks.JPG`}
                title={"Highland Trucks"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/highland_trucks.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Highland Trucks"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 30 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/liquor_bottles.jpg`}
                title={"Liquor Bottles and Flowers"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/liquor_bottles.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Liquor Bottles and Flowers"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 36 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <div id="abstract-id" className="artwork-heading" style={{
        background: theme.cardBg,
        color: theme.textColor,
        transition: 'background 0.3s ease, color 0.3s ease'
      }}><h4 style={{ color: theme.accent4 }} onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }} title="Back to Top">Abstract</h4></div>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/stephs_tree.JPG`}
                title={"Steph's Tree"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/stephs_tree.JPG`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Steph's Tree"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/iris.jpg`}
                title={"Iris"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/iris.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Iris"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Donated"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/clown_contractors.jpg`}
                title={"Clown Contractors"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/clown_contractors.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Clown Contractors"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"11 X 14 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Donated"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/bolero.jpg`}
                title={"Bolero"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/bolero.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Bolero"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"16 X 20 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Donated"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>

        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/koris_eyesoar.jpg`}
                title={"Kori's Eyesoar"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/koris_eyesoar.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Kori's Eyesoar"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 36 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/butterfly_eye.jpg`}
                title={"Untitled 26"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/butterfly_eye.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Untitled 26"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"24 X 24 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Private Collection"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid className="artwork-gallery-row" container spacing={2} {...galleryRowProps}>
        <Grid {...galleryItemProps}>
          <StyledItem>
            <StyledCard>
              {/* <Link to={`/artist/1`}> */}
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250,
                  cursor: 'pointer'
                }}
                image={`${process.env.PUBLIC_URL}/img/artist/mindy.jpg`}
                title={"Mindy"}
                onClick={(event) => handleImageClick(event, 
                  `${process.env.PUBLIC_URL}/img/artist/mindy.jpg`
                )}
              />
              {/* </Link> */}
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Mindy"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"48 X 60 inches"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Oil on Canvas"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"SOLD"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <ImageModal
        open={modalOpen}
        onClose={handleCloseModal}
        imageUrl={selectedImage?.imageUrl}
        title={selectedImage?.title}
        details={selectedImage?.details}
      />
    </div>
  )
}

export default ArtworkGallery



