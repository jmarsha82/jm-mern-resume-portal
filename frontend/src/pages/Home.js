import { Button } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div className="home-origin">
        <div className="choice-box">
          <img className="choice-image" src={`${process.env.PUBLIC_URL}/img/art_background.jpg`} />
          <Button className="choice-button" variant="contained"  href="/artist">Artist</Button>
        </div>
        <div className="choice-box">
          <img className="choice-image" src={`${process.env.PUBLIC_URL}/img/code_background.jpg`} />
          <Button className="choice-button" variant="contained"  href="/programmer">Developer</Button>
        </div>
      </div>
    </div>
    
  )
}

export default Home