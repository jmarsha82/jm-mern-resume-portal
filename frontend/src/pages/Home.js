import { Button } from "@mui/material"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Router, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home-origin">
        <div className="choice-box">
          <Button className="choice-button" variant="contained"  href="/artist">Artist</Button>
        </div>
        <div className="choice-box">
          <Button className="choice-button" variant="contained"  href="/programmer">Developer</Button>
        </div>
      </div>
    </div>
    
  )
}

export default Home