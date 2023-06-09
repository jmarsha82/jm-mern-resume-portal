import { useParams } from "react-router-dom";
import useFetch from "../useFetch"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ArtworkDetails = () => {
    const { id } = useParams();
    const { data: artwork, error, isPending } = useFetch('http://localhost:3000/api/artwork/' + id);

    return (
        <div className="pages">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div>}
            { artwork && (
                <div>
                    <Card>
                    <CardMedia
                        sx={{

                        margin: '.5rem',
                        backgroundSize: 'contain',
                        height: '80vh'
                        }}
                        image={`${process.env.PUBLIC_URL}/img/artist/${artwork.imagepath}`} 
                        title={artwork.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    {artwork.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">{artwork.size}</Typography>
                    <Typography variant="body2" color="text.secondary">{artwork.media}</Typography>
                    <Typography variant="body2" color="text.secondary">{artwork.price}</Typography>
                    </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
 
export default ArtworkDetails;