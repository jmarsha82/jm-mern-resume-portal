import { Button, Typography, Box, Avatar } from "@mui/material";
import GeneralNavbar from "../components/GeneralNavbar";

const Home = () => {
  return (
    <div>
      {/* <GeneralNavbar className="navbar-background" /> */}

      {/* Banner Section */}
      <Box 
        className="home-banner"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/banner.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <Typography variant="h2" className="banner-title">
          Justin Marshall
        </Typography>
        <Typography variant="h5" className="banner-subtitle">
          Software Engineer and Artist
        </Typography>
      </Box>
      
      {/* Profile Picture */}
      <Box className="profile-picture-container">
        <Avatar
          src={`${process.env.PUBLIC_URL}/img/profile_picture.jpg`}
          alt="Justin Marshall"
          className="profile-picture"
        />
      </Box>
      
       <div className="choice-box">
         <Button className="choice-button-artist" variant="contained" href="/artist">Artist</Button>
         <Button className="choice-button-dev" variant="contained" href="/programmer">Software Engineer</Button>
       </div>
    </div>

  )
}

export default Home