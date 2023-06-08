import { Button } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div className="home-origin">
        <div className="choice-box">
          <Button className="choice-button" variant="contained"  href="/artist">Artist</Button>
          <Button className="choice-button" variant="contained"  href="/programmer">Developer</Button>
        </div>
      </div>
    </div>
    
  )
}

export default Home