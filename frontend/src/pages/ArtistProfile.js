import { useEffect } from "react"
import ArtistNavbar from "../components/ArtistNavbar"
import { useArtworksContext } from "../hooks/useArtworksContext"
import ArtworkDetails from "../components/ArtworkDetails"
import { Grid } from "@mui/material"

const ArtistProfile = () => {
  const { artworks, dispatchArtwork } = useArtworksContext()

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
      <div className = "App">
        <div className="general-details">
          <Grid container spacing={0}>              
          {artworks && artworks.map(artwork => (
          <Grid item xs={2}>
          <ArtworkDetails artwork={artwork} key={artwork._id} />
          </Grid>
          ))}
          </Grid>
        </div>
        </div>
    </div>
    
  )
}

export default ArtistProfile