import { useEffect } from "react"
import ArtistNavbar from "../components/ArtistNavbar"
import { useArtworksContext } from "../hooks/useArtworksContext"
import ArtworkGallery from "../components/ArtworkGallery"
import { Grid } from "@mui/material"
import { useTheme } from "../context/ThemeContext"

const ArtistProfile = () => {
  const {dispatchArtwork } = useArtworksContext()
  const { isDarkTheme, theme } = useTheme()

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await fetch('/api/artwork')
      const json = await response.json()

      if (response.ok) {
        dispatchArtwork({type: 'SET_ARTWORKS', payload: json})
      }
    }

    fetchArtworks()
  }, [dispatchArtwork])

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