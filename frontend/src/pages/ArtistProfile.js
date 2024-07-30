import { useEffect } from "react"
import ArtistNavbar from "../components/ArtistNavbar"
import { useArtworksContext } from "../hooks/useArtworksContext"
import ArtworkGallery from "../components/ArtworkGallery"
import { Grid } from "@mui/material"

const ArtistProfile = () => {
  const {dispatchArtwork } = useArtworksContext()

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
    <div>
    <ArtistNavbar className="navbar-background" />
      <div className = "home-three">
        <div className="pages">
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