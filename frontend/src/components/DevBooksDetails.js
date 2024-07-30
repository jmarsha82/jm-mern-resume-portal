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

const DevBooksDetails = () => {
  return (
    <div>
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
      image={`${process.env.PUBLIC_URL}/img/developer/deep_c_secrets.jpg`} 
      title={""}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {"Expert C Programming: Deep C Secrets"}
      </Typography>
      <Typography variant="body2" color="text.secondary">{"Peter van der Linden"}</Typography>
      <Typography variant="body2" color="text.secondary">{"1994"}</Typography>
      <Typography variant="body2" color="text.secondary">{"Explains some of the hardest concepts of C programming."}</Typography>
      <Typography variant="body2" color="text.secondary">ISBN : {"9780131774292"}</Typography>
    </CardContent>
  </Card>
  </Item>
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
      image={`${process.env.PUBLIC_URL}/img/developer/growing_OO_tests.jpg`} 
      title={""}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {"Growing Object-Oriented Software, Guided by Tests."}
      </Typography>
      <Typography variant="body2" color="text.secondary">{"Steve Freeman, Nat Pryce"}</Typography>
      <Typography variant="body2" color="text.secondary">{"2009"}</Typography>
      <Typography variant="body2" color="text.secondary">{"Complete walkthrough of TDD."}</Typography>
      <Typography variant="body2" color="text.secondary">ISBN : {"9780321503626"}</Typography>
    </CardContent>
  </Card>
  </Item>
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
      image={`${process.env.PUBLIC_URL}/img/developer/computer_sec_hands_on.jpg`} 
      title={""}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {"Computer Security:  A Hands-On Approach"}
      </Typography>
      <Typography variant="body2" color="text.secondary">{"Wenliang Du"}</Typography>
      <Typography variant="body2" color="text.secondary">{"2017"}</Typography>
      <Typography variant="body2" color="text.secondary">{"Great walkthrough.  Learn a lot of C in the process.  Get the newest edition."}</Typography>
      <Typography variant="body2" color="text.secondary">ISBN : {"9781548367947"}</Typography>
    </CardContent>
  </Card>
  </Item>
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
      image={`${process.env.PUBLIC_URL}/img/developer/code_book.jpg`} 
      title={""}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {"Code: The Hidden Language of Computer Hardware and Software"}
      </Typography>
      <Typography variant="body2" color="text.secondary">{"Charles Petzold"}</Typography>
      <Typography variant="body2" color="text.secondary">{"2022"}</Typography>
      <Typography variant="body2" color="text.secondary">{"Great explanation of how computers work at their most basic.  Get the newest edition."}</Typography>
      <Typography variant="body2" color="text.secondary">ISBN : {"9780735611313"}</Typography>
    </CardContent>
  </Card>
  </Item>
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
      image={`${process.env.PUBLIC_URL}/img/developer/linux_prog.jpg`} 
      title={""}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {"The Linux Programming Interface: A Linux and UNIX System Programming Handbook"}
      </Typography>
      <Typography variant="body2" color="text.secondary">{"Michael Kerrisk"}</Typography>
      <Typography variant="body2" color="text.secondary">{"2010"}</Typography>
      <Typography variant="body2" color="text.secondary">{"Complete guide to Linux OS with lots of C examples."}</Typography>
      <Typography variant="body2" color="text.secondary">ISBN : {"9781593272203"}</Typography>
    </CardContent>
  </Card>
  </Item>
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
      image={`${process.env.PUBLIC_URL}/img/developer/discrete_math.jpg`} 
      title={""}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {"Discrete Mathematics and its Applications"}
      </Typography>
      <Typography variant="body2" color="text.secondary">{"Kenneth H. Rosen"}</Typography>
      <Typography variant="body2" color="text.secondary">{"2002"}</Typography>
      <Typography variant="body2" color="text.secondary">{"Good basis for digital logic and machine learning.  Get the newest edition."}</Typography>
      <Typography variant="body2" color="text.secondary">ISBN : {"9780072424346"}</Typography>
    </CardContent>
  </Card>
  </Item>
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
      image={`${process.env.PUBLIC_URL}/img/developer/clean_architecture.jpg`} 
      title={""}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {"Clean Architecture: A Craftsman's Guide to Software Structure and Design"}
      </Typography>
      <Typography variant="body2" color="text.secondary">{"Robert Martin"}</Typography>
      <Typography variant="body2" color="text.secondary">{"2017"}</Typography>
      <Typography variant="body2" color="text.secondary">{"Understanding of how applications should be designed."}</Typography>
      <Typography variant="body2" color="text.secondary">ISBN : {"9780134494164"}</Typography>
    </CardContent>
  </Card>
  </Item>
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
      image={`${process.env.PUBLIC_URL}/img/developer/extreme_program.jpg`} 
      title={""}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {"Extreme Programming Explained: Embrace Change"}
      </Typography>
      <Typography variant="body2" color="text.secondary">{"Kent Beck, Cynthia Andres"}</Typography>
      <Typography variant="body2" color="text.secondary">{"2004"}</Typography>
      <Typography variant="body2" color="text.secondary">{"Overview of agile and how dev teams should interact."}</Typography>
      <Typography variant="body2" color="text.secondary">ISBN : {"9780321278654"}</Typography>
    </CardContent>
  </Card>
  </Item>
  </div>
  )
}

export default DevBooksDetails