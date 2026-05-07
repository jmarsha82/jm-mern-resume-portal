import ArtistNavbar from "../components/ArtistNavbar"
import ArtworkGallery from "../components/ArtworkGallery"
import { Grid } from "@mui/material"
import { useTheme } from "../context/ThemeContext"

const ArtistProfile = () => {
  const { theme } = useTheme()

  return (
    <div style={{ 
      background: theme.background, 
      minHeight: '100vh',
      transition: 'background 0.3s ease'
    }}>
    <ArtistNavbar className="navbar-background" />
      <div className = "home-three" style={{ background: theme.background }}>
        <div className="pages" style={{ background: theme.background }}>
          <Grid container spacing={0}>              
          <Grid item xs={3}>
          <ArtworkGallery/>
          </Grid>
          </Grid>
        </div>
        </div>
    </div>
    
  )
}

export default ArtistProfile
