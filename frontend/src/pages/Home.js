import { Button } from "@mui/material";
import GeneralNavbar from "../components/GeneralNavbar";

const Home = () => {
  return (
    <div>
      {/* <GeneralNavbar className="navbar-background" /> */}
      <div className="home-origin">
        <div className="choice-box">
          <Button className="choice-button-artist" variant="contained"  href="/artist">Artist</Button>
          <Button className="choice-button-dev" variant="contained"  href="/programmer">Developer</Button>
        </div>
      </div>
    </div>
    
  )
}

export default Home