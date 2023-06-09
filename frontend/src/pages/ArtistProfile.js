import { useEffect } from "react"
import ArtistNavbar from "../components/ArtistNavbar"
import { useArtworksContext } from "../hooks/useArtworksContext"
import ArtworkGallery from "../components/ArtworkGallery"
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
      <div className = "home-three">
        <div className="">
          <Grid container spacing={0}>              
          {artworks && artworks.map(artwork => (
          <Grid item xs={2}>
          <ArtworkGallery artwork={artwork} key={artwork._id} />
          </Grid>
          ))}
          </Grid>
        </div>
        </div>
    </div>
    
  )
}

export default ArtistProfile