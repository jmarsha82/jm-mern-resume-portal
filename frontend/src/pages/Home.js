import { Button } from "@mui/material"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Router, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <span className="choice-screen">
        <Button className="choice-button" variant="contained"  href="/artist">Artist</Button>&nbsp;&nbsp;&nbsp;
        <Button className="choice-button" variant="contained"  href="/programmer">Programmer</Button>
      </span>
    </div>
    
  )
}

export default Home