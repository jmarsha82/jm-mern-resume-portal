import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useTheme } from '../context/ThemeContext';

const DevBooksDetails = () => {
  const { theme } = useTheme();

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
    <div>
      <Grid container spacing={2} wrap="nowrap">
        <Grid size={4} item xs={12}>
          <StyledItem>
            <StyledCard>
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250
                }}
                image={`${process.env.PUBLIC_URL}/img/developer/deep_c_secrets.jpg`}
                title={""}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Expert C Programming: Deep C Secrets"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Peter van der Linden"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"1994"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Explains some of the hardest concepts of C programming."}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>ISBN : {"9780131774292"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid size={4} item xs={12}>
          <StyledItem>
            <StyledCard>
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250
                }}
                image={`${process.env.PUBLIC_URL}/img/developer/growing_OO_tests.jpg`}
                title={""}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Growing Object-Oriented Software, Guided by Tests."}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Steve Freeman, Nat Pryce"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"2009"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Complete walkthrough of TDD."}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>ISBN : {"9780321503626"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid size={4} item xs={12}>
          <StyledItem>
            <StyledCard>
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250
                }}
                image={`${process.env.PUBLIC_URL}/img/developer/computer_sec_hands_on.jpg`}
                title={""}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Computer Security:  A Hands-On Approach"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Wenliang Du"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"2017"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Great walkthrough.  Learn a lot of C in the process.  Get the newest edition."}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>ISBN : {"9781548367947"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2} wrap="nowrap">
        <Grid size={4} item xs={12}>
          <StyledItem>
            <StyledCard>
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250
                }}
                image={`${process.env.PUBLIC_URL}/img/developer/code_book.jpg`}
                title={""}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Code: The Hidden Language of Computer Hardware and Software"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Charles Petzold"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"2022"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Great explanation of how computers work at their most basic.  Get the newest edition."}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>ISBN : {"9780735611313"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid size={4} item xs={12}>
          <StyledItem>
            <StyledCard>
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250
                }}
                image={`${process.env.PUBLIC_URL}/img/developer/linux_prog.jpg`}
                title={""}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"The Linux Programming Interface: A Linux and UNIX System Programming Handbook"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Michael Kerrisk"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"2010"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Complete guide to Linux OS with lots of C examples."}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>ISBN : {"9781593272203"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid size={4} item xs={12}>
          <StyledItem>
            <StyledCard>
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250
                }}
                image={`${process.env.PUBLIC_URL}/img/developer/discrete_math.jpg`}
                title={""}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Discrete Mathematics and its Applications"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Kenneth H. Rosen"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"2002"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Good basis for digital logic and machine learning.  Get the newest edition."}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>ISBN : {"9780072424346"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2} wrap="nowrap">
        <Grid size={4} item xs={12}>
          <StyledItem>
            <StyledCard>
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250
                }}
                image={`${process.env.PUBLIC_URL}/img/developer/clean_architecture.jpg`}
                title={""}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Clean Architecture: A Craftsman's Guide to Software Structure and Design"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Robert Martin"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"2017"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Understanding of how applications should be designed."}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>ISBN : {"9780134494164"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
        <Grid size={4} item xs={12}>
          <StyledItem>
            <StyledCard>
              <CardMedia
                sx={{
                  backgroundSize: 200,
                  margin: 5,
                  width: 200,
                  height: 250
                }}
                image={`${process.env.PUBLIC_URL}/img/developer/extreme_program.jpg`}
                title={""}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ color: theme.textColor }}>
                  {"Extreme Programming Explained: Embrace Change"}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Kent Beck, Cynthia Andres"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"2004"}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>{"Overview of agile and how dev teams should interact."}</Typography>
                <Typography variant="body2" sx={{ color: theme.textColor, opacity: 0.7 }}>ISBN : {"9780321278654"}</Typography>
              </CardContent>
            </StyledCard>
          </StyledItem>
        </Grid>
      </Grid>
    </div>
  )
}

export default DevBooksDetails