import * as React from 'react';
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


const DevLinkDetails = () => {
  return (
    <div>
      <Grid container spacing={2} wrap="nowrap">
        <Grid size={4} item xs="auto">
          <Item>
            <Card>
              <a href={"https://www.codingame.com/start"} target="_blank">
                <CardMedia
                  sx={{
                    backgroundSize: 200,
                    margin: 5,
                    width: 200,
                    height: 60
                  }}
                  image={`${process.env.PUBLIC_URL}/img/developer/codin_game.jpg`}
                  title={"CodinGame"}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"CodinGame"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"Great way to build your skills and a lot of fun.  Recommend creating a free account."}</Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid size={4} item xs="auto">
          <Item>
            <Card>
              <a href={"https://learning.oreilly.com/home/"} target="_blank">
                <CardMedia
                  sx={{
                    backgroundSize: 200,
                    margin: 5,
                    width: 200,
                    height: 60
                  }}
                  image={`${process.env.PUBLIC_URL}/img/developer/o_reilly.jpg`}
                  title={"O'Reilly"}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"O'Reilly"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"Great resource for training if you have an account."}</Typography>
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
              <a href={"https://www.cs.usfca.edu/~galles/visualization/"} target="_blank">
                <CardMedia
                  sx={{
                    backgroundSize: 200,
                    margin: 5,
                    width: 200,
                    height: 60
                  }}
                  image={`${process.env.PUBLIC_URL}/img/developer/data_stuct_visual.jpg`}
                  title={"Data Structure Visualizations"}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Data Structure Visualizations"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"Helpful way to understand how certain algorithms work."}</Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid size={4} item xs="auto">
          <Item>
            <Card>
              <a href={"https://jsonplaceholder.typicode.com/"} target="_blank">
                <CardMedia
                  sx={{
                    backgroundSize: 200,
                    margin: 5,
                    width: 200,
                    height: 60
                  }}
                  image={`${process.env.PUBLIC_URL}/img/developer/json_placeholder.jpg`}
                  title={"JSON Placeholder"}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"JSON Placeholder"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"Really good way to fake a backend for testing."}</Typography>
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
              <a href={"https://replit.com/"} target="_blank">
                <CardMedia
                  sx={{
                    backgroundSize: 200,
                    margin: 5,
                    width: 200,
                    height: 60
                  }}
                  image={`${process.env.PUBLIC_URL}/img/developer/replit.jpg`}
                  title={"Replit"}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Replit"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"Online taylored IDEs with built in development tools."}</Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid size={4} item xs="auto">
          <Item>
            <Card>
              <a href={"https://www.w3schools.com/default.asp"} target="_blank">
                <CardMedia
                  sx={{
                    backgroundSize: 200,
                    margin: 5,
                    width: 200,
                    height: 60
                  }}
                  image={`${process.env.PUBLIC_URL}/img/developer/w3_schools.jpg`}
                  title={"W3 Schools"}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"W3 Schools"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"All around good aid for simple web dev issues"}</Typography>
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
              <a href={"https://ninjamock.com/"} target="_blank">
                <CardMedia
                  sx={{
                    backgroundSize: 200,
                    margin: 5,
                    width: 200,
                    height: 60
                  }}
                  image={`${process.env.PUBLIC_URL}/img/developer/ninjamock.jpg`}
                  title={"NinjaMock"}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"NinjaMock"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"Great tool if you find yourself as your own UX Designer"}</Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid size={4} item xs="auto">
          <Item>
            <Card>
              <a href={"https://trello.com/en"} target="_blank">
                <CardMedia
                  sx={{
                    backgroundSize: 200,
                    margin: 5,
                    width: 200,
                    height: 60
                  }}
                  image={`${process.env.PUBLIC_URL}/img/developer/trello.jpg`}
                  title={"Trello"}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Trello"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"Free online WIP board for organizing projects"}</Typography>
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
              <a href={"https://www.hackerrank.com/dashboard"} target="_blank">
                <CardMedia
                  sx={{
                    backgroundSize: 200,
                    margin: 5,
                    width: 200,
                    height: 60
                  }}
                  image={`${process.env.PUBLIC_URL}/img/developer/hackerrank.jpg`}
                  title={"HackerRank"}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"HackerRank"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"Varitey of coding challenges for different languages"}</Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid size={4} item xs="auto">
          <Item>
            <Card>
              <a href={"https://spring.io/guides"} target="_blank">
                <CardMedia
                  sx={{
                    backgroundSize: 200,
                    margin: 5,
                    width: 200,
                    height: 60
                  }}
                  image={`${process.env.PUBLIC_URL}/img/developer/spring.jpg`}
                  title={"Spring"}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Spring"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"Starting point for implementing Spring Framework"}</Typography>
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
              <a href={"https://react.dev/"} target="_blank">
                <CardMedia
                  sx={{
                    backgroundSize: 200,
                    margin: 5,
                    width: 200,
                    height: 60
                  }}
                  image={`${process.env.PUBLIC_URL}/img/developer/react.jpg`}
                  title={"React"}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"React"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"Starting point for implementing React Framework"}</Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid size={4} item xs="auto">
          <Item>
            <Card>
              <a href={"https://angular.io/"} target="_blank">
                <CardMedia
                  sx={{
                    backgroundSize: 200,
                    margin: 5,
                    width: 200,
                    height: 60
                  }}
                  image={`${process.env.PUBLIC_URL}/img/developer/angular.jpg`}
                  title={"Angular"}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Angular"}
                </Typography>
                <Typography variant="body2" color="text.secondary">{"Starting point for implementing Angular Framework"}</Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </div>
  )
}

export default DevLinkDetails